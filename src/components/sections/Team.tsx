'use client'

import Card from '@/components/common/Card'

export default function Team() {
  const team = [
    {
      name: 'Jordão Mbumba',
      role: 'Director Geral',
      localImage: 'jordao-mbumba.svg',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
      bio: 'Líder estratégico com foco em desenvolvimento local e parcerias institucionais.',
    },
    {
      name: 'Alexandre Sampaio',
      role: 'CTO',
      localImage: 'alexandre-sampaio.svg',
      avatar:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80',
      bio: 'Responsável por engenharia de produto e arquitetura de soluções escaláveis.',
    },
    {
      name: 'Jandira dos Santos',
      role: 'Gestora da Kwetu',
      localImage: 'jandira-dos-santos.svg',
      avatar:
        'https://images.unsplash.com/photo-1531123414780-fdf3f8a9f2d8?auto=format&fit=crop&w=400&q=80',
      bio: 'Gestão operacional, programas de formação e relacionamento com a comunidade.',
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black/40 via-surface to-black">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-black mb-6">Equipe Executiva da Kwetu Tecnologias</h2>
        <p className="text-gray-300 mb-8">Conheça a liderança da Kwetu.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="text-center p-6 soft-card">
              <img
                src={`/images/team/${member.localImage}`}
                alt={member.name}
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = member.avatar
                }}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-teal text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
