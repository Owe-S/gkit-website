import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut, User } from 'firebase/auth'
import { getFirestore, collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import '../styles/Admin.css'

interface DocData {
  id: string
  [key: string]: any
}

export default function Admin() {
  const navigate = useNavigate()
  const auth = getAuth()
  const db = getFirestore()
  const [user, setUser] = useState<User | null>(null)
  const [collections, setCollections] = useState<{ [key: string]: DocData[] }>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCollection, setActiveCollection] = useState<string | null>(null)
  const [selectedDoc, setSelectedDoc] = useState<DocData | null>(null)
  const [editedDoc, setEditedDoc] = useState<DocData | null>(null)
  const [saving, setSaving] = useState(false)

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

  const handleSave = async () => {
    if (!editedDoc || !activeCollection) return

    try {
      setSaving(true)
      const docRef = doc(db, activeCollection, editedDoc.id)
      const { id, ...dataToSave } = editedDoc
      await updateDoc(docRef, dataToSave)
      
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
                        <div key={key} className="admin-form-group">
                          <label htmlFor={key}>
                            {key}
                            <span className="admin-field-type">({type})</span>
                          </label>

                          {type === 'string' && value.length > 100 ? (
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
                            <input
                              id={key}
                              type="number"
                              value={value}
                              onChange={e =>
                                handleInputChange(key, Number(e.target.value))
                              }
                              className="admin-input"
                            />
                          ) : type === 'boolean' ? (
                            <div className="admin-checkbox-group">
                              <input
                                id={key}
                                type="checkbox"
                                checked={value}
                                onChange={e =>
                                  handleInputChange(key, e.target.checked)
                                }
                                className="admin-checkbox"
                              />
                              <label htmlFor={key} className="admin-checkbox-label">
                                {value ? 'Yes' : 'No'}
                              </label>
                            </div>
                          ) : type === 'object' ? (
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
