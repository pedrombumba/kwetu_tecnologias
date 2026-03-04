'use client'

import Card from '@/components/common/Card'
import useInView from '@/components/common/useInView'
import { FiMapPin, FiCheck } from 'react-icons/fi'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
}

export default function Careers() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '-100px' })
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Full Stack Developer',
      department: 'Desenvolvimento',
      location: 'Saurimo',
      type: 'Tempo Inteiro',
    },
    {
      id: '2',
      title: 'QA Engineer',
      department: 'Qualidade',
      location: 'Saurimo',
      type: 'Tempo Inteiro',
    },
    {
      id: '3',
      title: 'Instructor de React',
      department: 'Academia',
      location: 'Remoto/Saurimo',
      type: 'Tempo Inteiro',
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Infraestrutura',
      location: 'Remoto',
      type: 'Tempo Inteiro',
    },
  ]

  return (
    <section 
      id="carreiras"
      className="bg-black py-16 md:py-24 px-4 md:px-8"
      aria-labelledby="careers-title"
    >
      <div ref={ref} className={`container mx-auto max-w-6xl ${inView?'animate-fade-in':'opacity-0'}`}>
        {/* Header */}
        <div className="mb-12">
          <h2 id="careers-title" className="text-4xl md:text-5xl font-black mb-4">
            Carreiras na <span className="text-teal">Kwetu Tecnologias</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Junte-se ao nosso time e ajude-nos a transformar o leste de Angola com tecnologia e inovação.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:border-teal/50 transition-all">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <div className="flex gap-3">
                  <span className="bg-teal/20 text-teal text-xs font-semibold px-3 py-1 rounded-full">
                    {job.department}
                  </span>
                  <span className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 mb-4 flex items-center justify-center gap-2">
                <FiMapPin /> {job.location}
              </p>

              <button className="w-full bg-teal text-deep-blue px-4 py-2 rounded-lg hover:shadow-lg transition-all font-semibold focus:outline-2 focus:outline-offset-2 focus:outline-teal">
                Candidatar-se →
              </button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="mb-12">
          <h3 className="text-xl font-bold mb-4">Por que trabalhar na Kwetu Tecnologias?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex gap-3">
              <FiCheck className="text-teal" /> Ambiente inovador e colaborativo
            </li>
            <li className="flex gap-3">
              <FiCheck className="text-teal" /> Desenvolvimento contínuo
            </li>
            <li className="flex gap-3">
              <FiCheck className="text-teal" /> Salários competitivos
            </li>
            <li className="flex gap-3">
              <FiCheck className="text-teal" /> Benefícios atrativos
            </li>
            <li className="flex gap-3">
              <FiCheck className="text-teal" /> Flexibilidade de horário
            </li>
            <li className="flex gap-3">
              <FiCheck className="text-teal" /> Impacto social real
            </li>
          </ul>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Não vê uma posição que encaixe? Envie seu CV!</p>
          <a 
            href="mailto:carreiras@kwetu.ao"
            className="inline-block bg-teal text-deep-blue px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all focus:outline-2 focus:outline-offset-2 focus:outline-teal"
          >
            Enviar CV
          </a>
        </div>
      </div>
    </section>
  )
}
