'use client'

'use client'

import { useState } from 'react'
import useInView from '@/components/common/useInView'
import Card from '@/components/common/Card'

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQ() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '-100px' })
  const [openId, setOpenId] = useState<string | null>(null)

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'Como me inscrevo na Academia?',
      answer: 'Você pode se inscrever através do nosso site ou contactando-nos diretamente. Oferecemos múltiplas turmas ao longo do ano.',
    },
    {
      id: '2',
      question: 'Qual é o preço dos cursos?',
      answer: 'Os preços variam de acordo com o curso. Oferecemos pacotes de bolsas para alunos com dificuldades financeiras.',
    },
    {
      id: '3',
      question: 'Vocês oferecem certificados?',
      answer: 'Sim, todos os alunos que completam o curso recebem um certificado reconhecido no mercado.',
    },
    {
      id: '4',
      question: 'Qual é a duração típica de um curso?',
      answer: 'Nossos cursos variam de 4 a 8 semanas, dependendo do nível e conteúdo. Temos também workshops de 2 dias.',
    },
    {
      id: '5',
      question: 'Vocês oferecem aulas online?',
      answer: 'Sim, oferecemos aulas híbridas e totalmente online para maior flexibilidade. Temos turmas em tempo real e materiais assincronos.',
    },
    {
      id: '6',
      question: 'Como é o suporte após o curso?',
      answer: 'Oferecemos suporte contínuo através de comunidades, mentoria 1-on-1 opcional e acesso à rede de alumni da Kwetu.',
    },
  ]

  return (
    <section 
      id="faq"
      className="bg-deep-blue py-16 md:py-24 px-4 md:px-8"
      aria-labelledby="faq-title"
    >
      <div ref={ref} className={`container mx-auto max-w-3xl ${inView?'animate-fade-in':'opacity-0'}`}>
        {/* Header */}
        <h2 id="faq-title" className="text-4xl md:text-5xl font-black mb-4 text-center">
          Perguntas <span className="text-teal">Frequentes</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Respostas rápidas para dúvidas comuns sobre nossos serviços
        </p>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <Card key={faq.id} className="p-0 overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-800/50 transition-colors text-left focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-${faq.id}`}
              >
                <h3 className="font-semibold pr-4">{faq.question}</h3>
                <span className={`text-teal text-2xl flex-shrink-0 transition-transform ${openId === faq.id ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>

              {openId === faq.id && (
                <div 
                  id={`faq-${faq.id}`}
                  className="px-6 pb-6 text-gray-400 border-t border-gray-700 animate-slideDown"
                >
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Ainda tem dúvidas? Contacte-nos diretamente!</p>
          <a 
            href="#contactos"
            className="inline-block bg-teal/20 border border-teal text-teal px-8 py-3 rounded-full font-semibold hover:bg-teal hover:text-deep-blue transition-all focus:outline-2 focus:outline-offset-2 focus:outline-teal"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
}
