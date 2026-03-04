import { notFound } from 'next/navigation'

interface Service {
  id: string
  name: string
  description: string
  features: string[]
}

export default function SoftwarePage({ params }: { params: { id: string } }) {
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

  const service = services.find((s) => s.id === params.id)
  if (!service) return notFound()

  return (
    <section className="container mx-auto max-w-4xl py-16 px-4">
      <h1 className="text-4xl font-black mb-4">{service.name}</h1>
      <p className="text-lg text-gray-300 mb-8">{service.description}</p>
      <h2 className="text-2xl font-bold mb-4">Funcionalidades</h2>
      <ul className="list-disc list-inside space-y-2">
        {service.features.map((feat) => (
          <li key={feat}>{feat}</li>
        ))}
      </ul>
      <div className="mt-12">
        <a
          href="mailto:info@kwetu.ao?subject=Interesse em {service.name}"
          className="inline-block bg-teal text-deep-blue px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Solicitar demonstração
        </a>
      </div>
    </section>
  )
}
