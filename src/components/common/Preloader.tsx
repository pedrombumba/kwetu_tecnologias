'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-deep-blue via-dark-blue to-teal flex items-center justify-center z-50">
      <img
        src="/images/Kweto logo icon.svg"
        alt="Kwetu Icon"
        className="h-20 w-20 object-contain animate-fadeIn animate-scale-up"
      />
    </div>
  )
}