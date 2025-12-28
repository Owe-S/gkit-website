import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut, User } from 'firebase/auth'
import { getFirestore, collection, getDocs, updateDoc, deleteDoc, doc, Timestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import ArrayEditor from '../components/ArrayEditor'
import IconPicker from '../components/IconPicker'
import RichTextEditor from '../components/RichTextEditor'
import CategoryDropdown from '../components/CategoryDropdown'
import '../styles/Admin.css'

interface DocData {
  id: string
  [key: string]: any
}

// Helper function to format database field names to human-readable labels
const formatFieldName = (fieldName: string): string => {
  // Map of database field names to human-readable labels
  const fieldLabelMap: { [key: string]: string } = {
    id: 'ID',
    ctaPrimary: 'CTA Primary',
    ctaSecondary: 'CTA Secondary',
    tagline: 'Tagline',
    title: 'Title',
    description: 'Description',
    details: 'Details',
    features: 'Features',
    imageUrl: 'Image URL',
    category: 'Category',
    icon: 'Icon',
    url: 'URL',
    slug: 'Slug',
    updatedAt: 'Last Updated',
    createdAt: 'Created',
    price: 'Price',
    discount: 'Discount',
    active: 'Active',
    published: 'Published',
    featured: 'Featured',
    ciaSecondary: 'CIA Secondary',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    city: 'City',
    country: 'Country',
    content: 'Content',
    body: 'Body',
    author: 'Author',
    status: 'Status',
    order: 'Order',
    position: 'Position',
    type: 'Type',
    link: 'Link',
    href: 'Link URL',
    image: 'Image',
    thumbnail: 'Thumbnail',
    logo: 'Logo',
    video: 'Video',
    duration: 'Duration',
    views: 'Views',
    likes: 'Likes',
    comments: 'Comments',
    rating: 'Rating',
    reviewed: 'Reviewed',
    verified: 'Verified',
    enabled: 'Enabled',
    disabled: 'Disabled',
    private: 'Private',
    public: 'Public',
    timestamp: 'Timestamp',
    lastModified: 'Last Modified',
    lastUpdated: 'Last Updated',
    modifiedAt: 'Modified At',
    modifiedBy: 'Modified By',
    createdBy: 'Created By',
    deletedAt: 'Deleted At',
  }

  // Return mapped label or convert camelCase to Title Case
  if (fieldLabelMap[fieldName]) {
    return fieldLabelMap[fieldName]
  }

  // Convert camelCase to Title Case: ctaPrimary -> CTA Primary
  return fieldName
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .replace(/([A-Z])\s([A-Z])/g, '$1$2') // Remove spaces in acronyms like "C T A"
    .trim()
}

// Helper function to format Firestore Timestamp
const formatTimestamp = (value: any): string => {
  try {
    // Check if it's a Firestore Timestamp object
    if (value && typeof value === 'object' && 'toDate' in value) {
      return value.toDate().toLocaleString()
    }
    // Check if it's a JavaScript Date
    if (value instanceof Date) {
      return value.toLocaleString()
    }
    // Check if it's a plain object with timestamp-like structure
    if (value && typeof value === 'object' && ('_seconds' in value || 'seconds' in value)) {
      const seconds = value._seconds || value.seconds || 0
      return new Date(seconds * 1000).toLocaleString()
    }
    // Fallback
    return 'Not set'
  } catch (e) {
    return 'Invalid timestamp'
  }
}

export default function Admin() {
  const navigate = useNavigate()
  const auth = getAuth()
  const db = getFirestore()
  const storage = getStorage()
  const [user, setUser] = useState<User | null>(null)
  const [collections, setCollections] = useState<{ [key: string]: DocData[] }>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCollection, setActiveCollection] = useState<string | null>(null)
  const [selectedDoc, setSelectedDoc] = useState<DocData | null>(null)
  const [editedDoc, setEditedDoc] = useState<DocData | null>(null)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)

  // Check authentication
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        loadCollections()
      } else {
        navigate('/admin-login')
      }
    })

    return () => unsubscribe()
  }, [auth, navigate])

  // Load all collections
  const loadCollections = async () => {
    try {
      setLoading(true)
      const collectionsToLoad = ['home', 'solutions', 'apps']
      const newCollections: { [key: string]: DocData[] } = {}

      for (const collName of collectionsToLoad) {
        const snapshot = await getDocs(collection(db, collName))
        newCollections[collName] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      }

      setCollections(newCollections)
      setActiveCollection(collectionsToLoad[0])
      setError(null)
    } catch (err) {
      console.error('Error loading collections:', err)
      setError('Failed to load collections')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  const handleSelectDoc = (doc: DocData) => {
    setSelectedDoc(doc)
    setEditedDoc(JSON.parse(JSON.stringify(doc)))
  }

  const handleInputChange = (key: string, value: any) => {
    if (editedDoc) {
      setEditedDoc({
        ...editedDoc,
        [key]: value
      })
    }
  }

  const handleImageUpload = async (file: File, fieldName: string = 'imageUrl') => {
    if (!file) return
    if (!editedDoc || !activeCollection) return

    try {
      setUploading(true)
      setUploadError(null)

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setUploadError('Please select a valid image file')
        return
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError('Image must be smaller than 5MB')
        return
      }

      // Create storage path: /uploads/[collection]/[docId]/[fieldName]-[timestamp].[ext]
      const timestamp = Date.now()
      const ext = file.name.split('.').pop()
      const storagePath = `uploads/${activeCollection}/${editedDoc.id}/${fieldName}-${timestamp}.${ext}`
      
      // Upload to Firebase Storage
      const storageRef = ref(storage, storagePath)
      await uploadBytes(storageRef, file)
      
      // Get download URL
      const downloadUrl = await getDownloadURL(storageRef)
      
      // Update the form field with the URL
      handleInputChange(fieldName, downloadUrl)
      setUploadError(null)
    } catch (err) {
      console.error('Upload error:', err)
      setUploadError(`Upload failed: ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setUploading(false)
    }
  }

  const handleSave = async () => {
    if (!editedDoc || !activeCollection) return

    try {
      setSaving(true)
      const docRef = doc(db, activeCollection, editedDoc.id)
      const { id, ...dataToSave } = editedDoc
      
      // Auto-set updatedAt timestamp
      const dataWithTimestamp = {
        ...dataToSave,
        updatedAt: new Date()
      }
      
      await updateDoc(docRef, dataWithTimestamp)
      
      // Reload collections
      await loadCollections()
      setSelectedDoc(null)
      setEditedDoc(null)
    } catch (err) {
      console.error('Error saving document:', err)
      setError('Failed to save document')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedDoc || !activeCollection) return
    if (!window.confirm('Are you sure you want to delete this document?')) return

    try {
      setSaving(true)
      const docRef = doc(db, activeCollection, selectedDoc.id)
      await deleteDoc(docRef)
      
      // Reload collections
      await loadCollections()
      setSelectedDoc(null)
      setEditedDoc(null)
    } catch (err) {
      console.error('Error deleting document:', err)
      setError('Failed to delete document')
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    setSelectedDoc(null)
    setEditedDoc(null)
  }

  if (loading) {
    return (
      <div className="admin-container">
        <div className="admin-loading">Loading admin panel...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="admin-container">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-title">
          <h1>🏌️ Admin Panel</h1>
          <p>Firestore Collections Manager</p>
        </div>
        <div className="admin-user-menu">
          <span className="admin-user-email">{user.email}</span>
          <button onClick={handleLogout} className="admin-logout-btn">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="admin-content">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            <h3>Collections</h3>
            {Object.keys(collections).map(collName => (
              <button
                key={collName}
                className={`admin-nav-item ${activeCollection === collName ? 'active' : ''}`}
                onClick={() => {
                  setActiveCollection(collName)
                  setSelectedDoc(null)
                  setEditedDoc(null)
                }}
              >
                {collName}
                <span className="admin-nav-count">
                  ({collections[collName].length})
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Panel */}
        <main className="admin-main">
          {error && (
            <div className="admin-error">
              <p>{error}</p>
              <button onClick={loadCollections}>Retry</button>
            </div>
          )}

          {activeCollection && collections[activeCollection] && (
            <div className="admin-collection">
              {!selectedDoc ? (
                <>
                  <h2>{activeCollection} Collection</h2>
                  <div className="admin-documents">
                    {collections[activeCollection].length === 0 ? (
                      <p className="admin-empty">No documents in this collection</p>
                    ) : (
                      <div className="admin-doc-list">
                        {collections[activeCollection].map(doc => (
                          <div
                            key={doc.id}
                            className="admin-doc-card"
                            onClick={() => handleSelectDoc(doc)}
                          >
                            <h3>{doc.id}</h3>
                            <p className="admin-doc-preview">
                              {Object.keys(doc).length} fields
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ) : editedDoc ? (
                <>
                  <div className="admin-editor-header">
                    <h2>Edit: {selectedDoc.id}</h2>
                    <div className="admin-editor-actions">
                      <button
                        onClick={handleCancel}
                        className="admin-btn-secondary"
                        disabled={saving}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDelete}
                        className="admin-btn-danger"
                        disabled={saving}
                      >
                        Delete
                      </button>
                      <button
                        onClick={handleSave}
                        className="admin-btn-primary"
                        disabled={saving}
                      >
                        {saving ? 'Saving...' : 'Save'}
                      </button>
                    </div>
                  </div>

                  <div className="admin-editor-form">
                    {Object.keys(editedDoc).map(key => {
                      if (key === 'id') return null
                      const value = editedDoc[key]
                      const type = typeof value

                      return (
                        <div key={key} className={`admin-form-group ${(['features', 'details', 'description'].includes(key)) ? 'admin-form-group-full' : ''}`}>
                          <label htmlFor={key}>
                            {formatFieldName(key)}
                            <span className="admin-field-type">({type})</span>
                            {key === 'updatedAt' && <span className="admin-field-locked">🔒 Auto-set</span>}
                          </label>

                          {/* Read-only timestamp field */}
                          {key === 'updatedAt' ? (
                            <div className="admin-timestamp-display">
                              <p>{formatTimestamp(value)}</p>
                            </div>
                          ) : /* Array Editor for features */
                          type === 'object' && Array.isArray(value) && key === 'features' ? (
                            <ArrayEditor
                              value={value}
                              onChange={v => handleInputChange(key, v)}
                              fieldName={key}
                            />
                          ) : /* Rich Text Editor for details/description */
                          ['details', 'description'].includes(key) && type === 'string' ? (
                            <RichTextEditor
                              value={value}
                              onChange={v => handleInputChange(key, v)}
                              placeholder={`Enter ${key} with markdown support...`}
                            />
                          ) : /* Icon Picker for icon field */
                          key === 'icon' && type === 'string' ? (
                            <IconPicker
                              value={value}
                              onChange={v => handleInputChange(key, v)}
                            />
                          ) : /* Category Dropdown */
                          key === 'category' && type === 'string' ? (
                            <CategoryDropdown
                              value={value}
                              onChange={v => handleInputChange(key, v)}
                            />
                          ) : /* Image URL Field with Preview and Upload */
                          key === 'imageUrl' && type === 'string' ? (
                            <div className="admin-image-field">
                              <div className="admin-image-input-group">
                                <input
                                  id={key}
                                  type="text"
                                  value={value}
                                  onChange={e =>
                                    handleInputChange(key, e.target.value)
                                  }
                                  placeholder="/assets/products/..."
                                  className="admin-input"
                                  disabled={uploading}
                                />
                                <label htmlFor={`${key}-upload`} className="admin-image-upload-btn">
                                  📁 Browse
                                </label>
                                <input
                                  id={`${key}-upload`}
                                  type="file"
                                  accept="image/*"
                                  onChange={e => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                      handleImageUpload(file, key)
                                    }
                                  }}
                                  style={{ display: 'none' }}
                                  disabled={uploading}
                                />
                              </div>
                              {uploading && (
                                <div className="admin-image-uploading">
                                  ⏳ Uploading image...
                                </div>
                              )}
                              {uploadError && (
                                <div className="admin-image-error">
                                  ❌ {uploadError}
                                </div>
                              )}
                              {value && !uploading && (
                                <div className="admin-image-preview">
                                  <img src={value} alt="Preview" onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }} />
                                </div>
                              )}
                            </div>
                          ) : /* Link/URL validation field */
                          (key === 'url' || key === 'slug') && type === 'string' ? (
                            <div className="admin-url-field">
                              <input
                                id={key}
                                type="text"
                                value={value}
                                onChange={e => {
                                  const val = e.target.value;
                                  // For URL: validate format; for slug: enforce lowercase with hyphens
                                  if (key === 'slug') {
                                    const cleanSlug = val.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
                                    handleInputChange(key, cleanSlug);
                                  } else {
                                    handleInputChange(key, val);
                                  }
                                }}
                                placeholder={key === 'url' ? 'https://...' : 'url-slug-format'}
                                className="admin-input"
                              />
                              {key === 'url' && value && (
                                <a href={value} target="_blank" rel="noopener noreferrer" className="admin-url-preview">
                                  🔗 Open Link
                                </a>
                              )}
                            </div>
                          ) : type === 'string' && value.length > 100 ? (
                            <textarea
                              id={key}
                              value={value}
                              onChange={e =>
                                handleInputChange(key, e.target.value)
                              }
                              rows={4}
                              className="admin-input admin-textarea"
                            />
                          ) : type === 'string' ? (
                            <input
                              id={key}
                              type="text"
                              value={value}
                              onChange={e =>
                                handleInputChange(key, e.target.value)
                              }
                              className="admin-input"
                            />
                          ) : type === 'number' ? (
                            <div className="admin-number-field">
                              <input
                                id={key}
                                type="number"
                                value={value}
                                onChange={e =>
                                  handleInputChange(key, Number(e.target.value))
                                }
                                className="admin-input admin-number-input"
                              />
                              <div className="admin-number-buttons">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleInputChange(key, value + 1)
                                  }
                                  className="admin-spinner-btn admin-spinner-up"
                                >
                                  ▲
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleInputChange(key, Math.max(0, value - 1))
                                  }
                                  className="admin-spinner-btn admin-spinner-down"
                                >
                                  ▼
                                </button>
                              </div>
                            </div>
                          ) : type === 'boolean' ? (
                            <div className="admin-toggle-field">
                              <label className="admin-toggle-switch">
                                <input
                                  type="checkbox"
                                  checked={value}
                                  onChange={e =>
                                    handleInputChange(key, e.target.checked)
                                  }
                                  className="admin-toggle-input"
                                />
                                <span className="admin-toggle-slider"></span>
                              </label>
                              <span className="admin-toggle-label">
                                {value ? '🟢 Aktiv' : '🔴 Inaktiv'}
                              </span>
                            </div>
                          ) : type === 'object' ? (
                            // For objects like updatedAt timestamps, show read-only formatted display
                            (key === 'updatedAt' || key === 'createdAt') ? (
                              <div className="admin-json-display">
                                <pre className="admin-json-code">{JSON.stringify(value, null, 2)}</pre>
                              </div>
                            ) : (
                              <textarea
                                id={key}
                                value={JSON.stringify(value, null, 2)}
                                onChange={e => {
                                  try {
                                    const parsed = JSON.parse(e.target.value)
                                    handleInputChange(key, parsed)
                                  } catch {
                                    // Invalid JSON, update raw
                                    handleInputChange(key, e.target.value)
                                  }
                                }}
                                rows={4}
                                className="admin-input admin-textarea admin-json-input"
                              />
                            )
                          ) : (
                            <input
                              id={key}
                              type="text"
                              value={String(value)}
                              onChange={e =>
                                handleInputChange(key, e.target.value)
                              }
                              className="admin-input"
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </>
              ) : null}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
