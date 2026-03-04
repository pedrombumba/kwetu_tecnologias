'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import useInView from '@/components/common/useInView'

interface Course {
  id: string
  name: string
  tab: string
  duration: string
  description: string
}

export default function Academia() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '-100px' })
  const [activeTab, setActiveTab] = useState('web')

  const tabs = ['web', 'mobile', 'devops', 'python', 'js', 'workshops']

  const courses: Record<string, Course[]> = {
    web: [
      { id: '1', name: 'HTML & CSS', tab: 'web', duration: '4 semanas', description: 'Fundações da web' },
      { id: '2', name: 'JavaScript', tab: 'web', duration: '6 semanas', description: 'Linguagem interativa' },
      { id: '3', name: 'React Pro', tab: 'web', duration: '8 semanas', description: 'Framework moderno' },
    ],
    mobile: [
      { id: '4', name: 'React Native', tab: 'mobile', duration: '8 semanas', description: 'Apps híbridos' },
      { id: '5', name: 'Flutter', tab: 'mobile', duration: '8 semanas', description: 'Apps nativas' },
    ],
    devops: [
      { id: '6', name: 'Docker & Kubernetes', tab: 'devops', duration: '6 semanas', description: 'Containerização' },
    ],
    python: [
      { id: '7', name: 'Python Básico', tab: 'python', duration: '4 semanas', description: 'Fundações' },
      { id: '8', name: 'Django', tab: 'python', duration: '8 semanas', description: 'Framework web' },
    ],
    js: [
      { id: '9', name: 'TypeScript', tab: 'js', duration: '6 semanas', description: 'JS tipado' },
      { id: '10', name: 'Node.js', tab: 'js', duration: '8 semanas', description: 'Backend JS' },
    ],
    workshops: [
      { id: '11', name: 'AI & Machine Learning', tab: 'workshops', duration: '2 dias', description: 'Introdução IA' },
      { id: '12', name: 'Web3 e Blockchain', tab: 'workshops', duration: '2 dias', description: 'Futuro web' },
    ],
  }

  return (
    <section 
      id="academia"
      className="bg-gradient-to-r from-deep-blue via-black to-deep-blue py-16 md:py-24 px-4 md:px-8"
      aria-labelledby="academia-title"
    >
      <div ref={ref} className={`container mx-auto max-w-6xl ${inView?'animate-fade-in':'opacity-0'}`}>
        {/* Header */}
        <div className="mb-12">
          <h2 id="academia-title" className="text-4xl md:text-5xl font-black mb-4">
            Academia <span className="text-teal">Kwetu Tecnologias</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Formação de excelência em tecnologia com instrutores experientes e metodologia prática.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-4 md:pb-0 md:flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all text-sm md:text-base focus:outline-2 focus:outline-offset-2 focus:outline-teal ${
                activeTab === tab
                  ? 'bg-teal text-deep-blue'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              aria-pressed={activeTab === tab}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses[activeTab]?.map((course) => (
            <Card key={course.id} className="hover:border-teal/50 transition-all">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-teal text-sm font-semibold"> {course.duration}</p>
              </div>
              <p className="text-gray-300 mb-6">{course.description}</p>
              <a
                href={`/academia/${course.id}`}
                className="w-full block text-center bg-teal/20 text-teal px-4 py-2 rounded-lg hover:bg-teal hover:text-deep-blue transition-all font-semibold focus:outline-2 focus:outline-offset-2 focus:outline-teal"
              >
                Saiba mais
              </a>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Mais de 500 alunos já se formaram e estão no mercado</p>
          <a 
            href="#contactos"
            className="inline-block bg-teal text-deep-blue px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all focus:outline-2 focus:outline-offset-2 focus:outline-teal"
          >
            Inscreve-se agora
          </a>
        </div>
      </div>
    </section>
  )
}
