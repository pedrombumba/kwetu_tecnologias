'use client'

import Card from '@/components/common/Card'
import useInView from '@/components/common/useInView'

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '-100px' })
  const stats = [
    { label: 'Produtos', value: '4+' },
    { label: 'Colaboradores', value: '30+' },
    { label: 'Alunos formados', value: '500+' },
  ]

  // paleta extraída do logo e ícone (cores principais)
  const palette = [
    { name: 'Teal', hex: '#4fc4cb' },
    { name: 'Deep Blue', hex: '#020617' },
    { name: 'Dark Blue', hex: '#0b0f3b' },
    { name: 'Slate Blue', hex: '#000b5c' },
  ]

  const team = [
    {
      name: 'Jordão Mbumba',
      role: 'Director Geral',
      localImage: 'jordao-mbumba.svg',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
      bio: 'Líder estratégico com foco em desenvolvimento local e parcerias institucionais.'
    },
    {
      name: 'Alexandre Sampaio',
      role: 'CTO',
      localImage: 'alexandre-sampaio.svg',
      avatar: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80',
      bio: 'Responsável por engenharia de produto e arquitetura de soluções escaláveis.'
    },
    {
      name: 'Jandira dos Santos',
      role: 'Gestora da Kwetu',
      localImage: 'jandira-dos-santos.svg',
      avatar: 'https://images.unsplash.com/photo-1531123414780-fdf3f8a9f2d8?auto=format&fit=crop&w=400&q=80',
      bio: 'Gestão operacional, programas de formação e relacionamento com a comunidade.'
    },
  ]

  return (
    <section 
      id="about"
      className="bg-gradient-to-r from-deep-blue via-black to-deep-blue py-16 md:py-24 px-4 md:px-8 dark:from-deep-blue-dark dark:via-black dark:to-deep-blue-dark"
      aria-labelledby="about-title"
    >
      <div ref={ref} className={`container mx-auto max-w-6xl ${inView?'animate-fade-in':'opacity-0'}`}>
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 id="about-title" className="text-4xl md:text-5xl font-black mb-6">
            Sobre a <span className="text-teal">Kwetu Tecnologias</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Somos uma empresa de tecnologia com sede em Saurimo, Lunda-Sul. Nossa missão é transformar o leste de Angola com softwares inovadores e formação de qualidade.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Acreditamos que a educação e a tecnologia são as ferramentas mais poderosas para criar oportunidades e desenvolvimento sustentável em nossas comunidades.
            </p>
          </div>

          {/* color palette */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Paleta de cores do logotipo</h3>
            <div className="flex gap-4 flex-wrap">
              {palette.map((c) => (
                <div key={c.hex} className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="mt-2 text-xs text-gray-300">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-teal mb-3">
                {stat.value}
              </div>
              <p className="text-gray-400 font-semibold">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Equipe Executiva</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center p-6">
                <img
                  src={`/images/team/${member.localImage}`}
                  alt={member.name}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = member.avatar }}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h4 className="text-lg font-bold mb-1 text-white">{member.name}</h4>
                <p className="text-teal text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
        {/* Para usar fotos reais, coloque imagens na pasta public/images/team/ com os nomes jordao-mbumba.jpg, alexandre-sampaio.jpg e jandira-dos-santos.jpg. Se não estiverem presentes, haverá fallback para Unsplash. */}
      </div>
    </section>
  )
}
