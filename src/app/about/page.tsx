import About from '@/components/sections/About'

export default function AboutPage() {
  return (
    <>
      <About />
      <section className="bg-gradient-to-r from-black via-deep-blue to-black py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-gray-300">
          <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
          <p className="mb-4">
            Fundada em 2022 por três engenheiros naturais da Lunda-Sul, a Kwetu nasceu do sonho de levar inovação tecnológica para o interior de Angola. Começamos com uma pequena equipa em Saurimo e hoje somos referência em desenvolvimento de software e formação na região leste.
          </p>
          <p className="mb-4">
            Em 2025 lançamos a Academia Kwetu, que já formou mais de 500 profissionais. Em 2026 expandimos a nossa sede e os nossos serviços, criando novos produtos como KwetuPay e F-API.
          </p>
          <p>
            A nossa missão é transformar o leste de Angola por meio de tecnologia e educação, criando oportunidades de emprego e capacitação para jovens e empresas locais.
          </p>
        </div>
      </section>
    </>
  )
}
