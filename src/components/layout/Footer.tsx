export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Kwetu Tecnologias',
      links: ['Sobre nós', 'Softwares', 'Academia', 'Blog', 'Carreiras'],
    },
    {
      title: 'Academia',
      links: ['Cursos', 'Instrutores', 'Bolsas', 'Eventos'],
    },
    {
      title: 'Suporte',
      links: ['FAQ', 'Política de privacidade', 'Termos de uso'],
    },
  ]

  return (
    <footer 
      className="bg-black dark:bg-deep-blue-dark border-t border-teal/20 pt-12 pb-6"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-teal font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  let href = '#'
                  switch (link) {
                    case 'Sobre nós': href = '/about'; break
                    case 'Softwares': href = '/softwares'; break
                    case 'Academia': href = '/academia'; break
                    case 'Blog': href = '/blog'; break
                    case 'Carreiras': href = '/carreiras'; break
                    default: href = '#'
                  }
                  return (
                    <li key={link}>
                      <a
                        href={href}
                        className="text-gray-400 hover:text-teal transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                      >
                        {link}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h4 className="text-teal font-bold mb-4">Redes sociais</h4>
            <div className="flex gap-4 mb-6">
              {['facebook', 'linkedin', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`Kwetu no ${social}`}
                  className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center hover:bg-teal hover:text-deep-blue transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                >
                  <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} Kwetu Tecnologias<br />
              Design moderno e acessível
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>#4fc4cb #000246 | Saurimo, Lunda-Sul | Academia Kwetu Tecnologias: transformando o leste com tecnologia</p>
        </div>
      </div>
    </footer>
  )
}
