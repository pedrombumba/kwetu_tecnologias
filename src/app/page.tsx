import '@/app/globals.css'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Academia from '@/components/sections/Academia'
import Blog from '@/components/sections/Blog'
import FAQ from '@/components/sections/FAQ'
import Careers from '@/components/sections/Careers'
import Newsletter from '@/components/sections/Newsletter'
import Contactos from '@/components/sections/Contactos'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="text-center mt-8">
        <a
          href="/about"
          className="inline-block bg-teal text-deep-blue px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all focus:outline-2 focus:outline-offset-2 focus:outline-teal"
        >
          Leia mais sobre nós
        </a>
      </div>
      <Services />
      <Academia />
      <Blog />
      <FAQ />
      <Careers />
      <Newsletter />
      <Contactos />
    </>
  )
}
