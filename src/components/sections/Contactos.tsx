'use client'
import useInView from '@/components/common/useInView'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contactos() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '-100px' })
  return (
    <section 
      id="contactos"
      className="bg-gradient-to-b from-black via-deep-blue to-black py-16 md:py-24 px-4 md:px-8"
      aria-labelledby="contact-title"
    >
      <div ref={ref} className={`container mx-auto max-w-4xl ${inView?'animate-fade-in':'opacity-0'}`}>
        <h2 id="contact-title" className="text-4xl md:text-5xl font-black mb-12 text-center">
          Contacte <span className="text-teal">KWETU</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a 
            href="mailto:info@kwetu.ao"
            className="group flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-teal/50 transition-all"
          >
            <FiMail className="text-4xl mb-4" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-teal text-sm hover:underline break-all">info@kwetu.ao</p>
          </a>

          {/* Phone */}
          <a 
            href="tel:+244923456789"
            className="group flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-teal/50 transition-all"
          >
            <FiPhone className="text-4xl mb-4" />
            <h3 className="font-bold mb-2">Telefone</h3>
            <p className="text-teal text-sm hover:underline">+244 923 456 789</p>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
            <FiMapPin className="text-4xl mb-4" />
            <h3 className="font-bold mb-2">Localização</h3>
            <p className="text-gray-400 text-sm">Saurimo, Lunda-Sul, Angola</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nome"
                className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-teal focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                aria-label="Seu nome"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-teal focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                aria-label="Seu email"
              />
            </div>

            <input
              type="text"
              placeholder="Assunto"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-teal focus:outline-2 focus:outline-offset-2 focus:outline-teal"
              aria-label="Assunto da mensagem"
            />

            <textarea
              placeholder="Mensagem"
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-teal focus:outline-2 focus:outline-offset-2 focus:outline-teal"
              aria-label="Sua mensagem"
            />

            <button
              type="submit"
              className="w-full bg-teal text-deep-blue py-3 rounded-lg font-bold hover:shadow-lg transition-all focus:outline-2 focus:outline-offset-2 focus:outline-teal"
            >
              Enviar mensagem
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="mt-12 w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66724.02516452969!2d20.762421547159694!3d-9.027880634405788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0fad0c5c6a9e9f%3A0x47a8a4b9f17e2b6b!2sSaurimo%2C%20Angola!5e0!3m2!1sen!2sus!4v1617000000000"
            className="w-full h-full"
            loading="lazy"
            aria-label="Mapa da localização da Kwetu Tecnologias"
          ></iframe>
        </div>

        {/* Hours */}
        <div className="mt-12 text-center">
          <h3 className="font-bold mb-4">Horários</h3>
          <p className="text-gray-400">
            Segunda - Sexta: 09h00 - 18h00<br />
            Sábado: 09h00 - 13h00<br />
            Domingo: Fechado
          </p>
        </div>
      </div>
    </section>
  )
}
