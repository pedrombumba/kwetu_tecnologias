'use client'

import Button from '@/components/common/Button'
import useInView from '@/components/common/useInView'

export default function Hero() {
  const { ref, inView } = useInView({ rootMargin: '-100px' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 md:px-8 py-24 overflow-hidden bg-gradient-to-b from-deep-blue via-black to-deep-blue"
      aria-label="Seção de apresentação - Kwetu Tecnologias"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className={`relative z-10 container mx-auto max-w-5xl ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mb-6">
          <span className="inline-block bg-white/10 text-white/90 border-l-4 border-teal px-4 py-2 rounded-md backdrop-blur-sm text-sm font-semibold">
            SAURIMO · LUNDA-SUL
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
          Kwetu Tecnologias
          <span className="block text-2xl md:text-3xl font-light text-teal mt-3 tracking-wider">Tecnologia, Formação e Impacto</span>
        </h1>

        <p className="max-w-2xl text-gray-200 text-lg md:text-xl font-medium mb-8">
          Desenvolvemos soluções digitais e programas de capacitação para impulsionar comunidades e empresas no leste de Angola.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button variant="primary" href="#softwares">Conheça nossos produtos</Button>
          <Button variant="outline" href="#academia">Participe da Academia</Button>
        </div>

        <div className="flex gap-6 items-center text-sm text-gray-300">
          <div className="flex items-center gap-3">
            <strong className="text-white">+300</strong>
            <span>Alunos formados</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <strong className="text-white">4+</strong>
            <span>Produtos em produção</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <strong className="text-white">30+</strong>
            <span>Colaboradores</span>
          </div>
        </div>
      </div>
    </section>
  )
}
