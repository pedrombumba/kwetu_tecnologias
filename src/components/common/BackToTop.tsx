import { useState, useEffect } from 'react'
import { FaChevronUp } from 'react-icons/fa'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 w-12 h-12 bg-teal text-deep-blue rounded-full shadow-lg flex items-center justify-center hover:bg-teal/90 transition-opacity opacity-80 hover:opacity-100"
    >
      <FaChevronUp />
    </button>
  )
}
