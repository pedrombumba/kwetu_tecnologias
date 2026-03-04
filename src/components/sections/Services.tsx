'use client'

import { useState } from 'react'
import Card from '@/components/common/Card'
import useInView from '@/components/common/useInView'

interface Service {
  id: string
  name: string
  description: string
  features: string[]
}

export default function Services() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '-100px' })
  const [activeService, setActiveService] = useState('sis')

  const services: Service[] = [
    {
      id: 'sis',
      name: 'SIS',
      description: 'Sistema de gestão escolar completo com controle acadêmico, administrativo e financeiro.',
      features: ['Gestão de alunos', 'Notas e frequência', 'Pagamentos', 'Relatórios'],
    },
    {
      id: 'banco',
      name: 'Banco',
      description: 'Plataforma de serviços bancários digitais com segurança de nível empresarial.',
      features: ['Contas bancárias', 'Transferências', 'Empréstimos', 'Investimentos'],
    },
    {
      id: 'fapi',
      name: 'F-API',
      description: 'Framework robusto para desenvolvimento de APIs RESTful de alta performance.',
      features: ['Autenticação', 'Rate limiting', 'Documentação', 'Monitoramento'],
    },
    {
      id: 'kwetupay',
      name: 'KwetuPay',
      description: 'Gateway de pagamento integrado para facilitar transações online seguras.',
      features: ['Múltiplos métodos', 'Webhook', 'Dashboard', 'Analytics'],
    },
  ]

  return (
    <section 
      id="softwares"
      className="bg-deep-blue py-16 md:py-24 px-4 md:px-8"
      aria-labelledby="services-title"
    >
      <div ref={ref} className={`container mx-auto max-w-6xl ${inView?'animate-fade-in':'opacity-0'}`}>
        {/* Header */}
        <h2 id="services-title" className="text-4xl md:text-5xl font-black mb-8">
          Softwares e<br />
          <span className="text-teal">Soluções Kwetu Tecnologias</span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4 md:pb-0 md:flex-wrap">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all focus:outline-2 focus:outline-offset-2 focus:outline-teal ${
                activeService === service.id
                  ? 'bg-teal text-deep-blue'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              aria-pressed={activeService === service.id}
              aria-label={`Ver detalhes de ${service.name}`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Content */}
        {services.map((service) => (
          activeService === service.id && (
            <div key={service.id} className="animate-fadeIn">
              <Card className="mb-8">
                <h3 className="text-3xl font-bold text-teal mb-4">{service.name}</h3>
                <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                
                <h4 className="font-semibold mb-4 text-white">Funcionalidades principais:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="text-teal font-bold mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  <div className="mt-8">
                    <a
                      href={`/softwares/${service.id}`}
                      className="inline-block bg-teal text-deep-blue px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          )
        ))}
      </div>
    </section>
  )
}
