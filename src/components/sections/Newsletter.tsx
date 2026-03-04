'use client'

'use client'

import { useState } from 'react'
import useInView from '@/components/common/useInView'

export default function Newsletter() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '-100px' })
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulated submission
    setTimeout(() => {
      if (email) {
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    }, 1000)
  }

  return (
    <section 
      id="newsletter"
      className="bg-deep-blue py-16 md:py-24 px-4 md:px-8"
      aria-labelledby="newsletter-title"
    >
      <div ref={ref} className={`container mx-auto max-w-2xl ${inView?'animate-fade-in':'opacity-0'}`}>
        <div className="text-center mb-8">
          <h2 id="newsletter-title" className="text-4xl md:text-5xl font-black mb-4">
            Fique <span className="text-teal">Atualizado</span>
          </h2>
          <p className="text-lg text-gray-300">
            Receba novidades sobre cursos, bolsas e oportunidades na sua caixa de entrada.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-teal focus:outline-2 focus:outline-offset-2 focus:outline-teal"
              aria-label="Email para newsletter"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-teal text-deep-blue rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50 focus:outline-2 focus:outline-offset-2 focus:outline-teal"
            >
              {status === 'loading' ? 'Inscrevendo...' : 'Inscrever-se'}
            </button>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-sm font-medium">
              ✓ Você foi inscrito com sucesso! Verifique seu email.
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm font-medium">
              ✗ Ocorreu um erro. Tente novamente.
            </div>
          )}
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Privacidade garantida. Sem spam. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  )
}
