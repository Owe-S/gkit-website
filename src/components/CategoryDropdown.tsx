import '../styles/CategoryDropdown.css'

interface CategoryDropdownProps {
  value: string
  onChange: (value: string) => void
  options?: string[]
}

const DEFAULT_CATEGORIES = ['Produkter', 'Apps', 'Integrasjoner', 'Verktøy']

export default function CategoryDropdown({ value, onChange, options }: CategoryDropdownProps) {
  const categories = options || DEFAULT_CATEGORIES

  return (
    <div className="admin-category-dropdown">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="admin-category-select"
      >
        <option value="">-- Select Category --</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}
