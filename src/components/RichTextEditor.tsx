import { useState } from 'react'
import '../styles/RichTextEditor.css'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [showPreview, setShowPreview] = useState(false)

  const applyFormat = (before: string, after: string = '') => {
    const textarea = document.activeElement as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end) || 'text'
    const newValue =
      value.substring(0, start) +
      before +
      selectedText +
      after +
      value.substring(end)

    onChange(newValue)
    setTimeout(() => {
      textarea.focus()
      textarea.selectionStart = start + before.length
      textarea.selectionEnd = start + before.length + selectedText.length
    }, 0)
  }

  const insertMarkdown = (markdown: string) => {
    const textarea = document.activeElement as HTMLTextAreaElement
    const start = textarea?.selectionStart || value.length
    const newValue = value.substring(0, start) + markdown + value.substring(start)
    onChange(newValue)
    setTimeout(() => {
      if (textarea) {
        textarea.focus()
        textarea.selectionStart = start + markdown.length
      }
    }, 0)
  }

  const parseMarkdown = (text: string) => {
    return text
      .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
      .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
      .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
      .replace(/^- (.*?)$/gm, '<li>$1</li>')
      .replace(/^(\d+)\. (.*?)$/gm, '<li>$2</li>')
      .replace(/\n/g, '<br />')
  }

  return (
    <div className="admin-rte">
      <div className="admin-rte-toolbar">
        <button
          type="button"
          onClick={() => applyFormat('**', '**')}
          title="Bold"
          className="admin-rte-btn"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => applyFormat('*', '*')}
          title="Italic"
          className="admin-rte-btn"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => applyFormat('# ')}
          title="Heading"
          className="admin-rte-btn"
        >
          H
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('\n- ')}
          title="List"
          className="admin-rte-btn"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => applyFormat('[', '](url)')}
          title="Link"
          className="admin-rte-btn"
        >
          🔗 Link
        </button>
        <button
          type="button"
          onClick={() => applyFormat('`', '`')}
          title="Code"
          className="admin-rte-btn"
        >
          Code
        </button>
        <div className="admin-rte-spacer"></div>
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className={`admin-rte-btn ${showPreview ? 'active' : ''}`}
        >
          {showPreview ? '📝 Edit' : '👁️ Preview'}
        </button>
      </div>

      {showPreview ? (
        <div className="admin-rte-preview">
          <div
            className="admin-rte-preview-content"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(value) || '<p style="opacity: 0.5;">Empty</p>' }}
          />
        </div>
      ) : (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder || 'Enter markdown text...'}
          className="admin-rte-textarea"
          rows={8}
        />
      )}

      <div className="admin-rte-help">
        <small>
          Supports: <code>**bold**</code> <code>*italic*</code> <code># heading</code> <code>- list</code> <code>[link](url)</code>
        </small>
      </div>
    </div>
  )
}
