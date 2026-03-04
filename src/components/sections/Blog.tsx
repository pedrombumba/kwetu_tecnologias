'use client'

import Card from '@/components/common/Card'
import useInView from '@/components/common/useInView'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
}

export default function Blog() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '-100px' })
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Tendências de Tecnologia em 2024',
      excerpt: 'Conheça as tecnologias que estão transformando o mercado em 2024.',
      date: '15 de janeiro de 2025',
      category: 'Tecnologia',
    },
    {
      id: '2',
      title: 'Como Começar com React',
      excerpt: 'Guia prático para iniciantes aprender React do zero.',
      date: '10 de janeiro de 2025',
      category: 'Tutoriais',
    },
    {
      id: '3',
      title: 'Desenvolvimento Web Moderno',
      excerpt: 'Melhores práticas em desenvolvimento web com Next.js.',
      date: '5 de janeiro de 2025',
      category: 'Desenvolvimento',
    },
    {
      id: '4',
      title: 'Segurança em Aplicações Web',
      excerpt: 'Proteja suas aplicações contra vulnerabilidades comuns.',
      date: '28 de dezembro de 2024',
      category: 'Segurança',
    },
    {
      id: '5',
      title: 'DevOps e CI/CD',
      excerpt: 'Automação completa de deploy com GitHub Actions.',
      date: '20 de dezembro de 2024',
      category: 'DevOps',
    },
    {
      id: '6',
      title: 'Histórias de Sucesso na Academia',
      excerpt: 'Conheça os alunos que transformaram suas vidas com a Academia Kwetu.',
      date: '15 de dezembro de 2024',
      category: 'Academia',
    },
  ]

  return (
    <section 
      id="blog"
      className="bg-black py-16 md:py-24 px-4 md:px-8"
      aria-labelledby="blog-title"
    >
      <div ref={ref} className={`container mx-auto max-w-6xl ${inView?'animate-fade-in':'opacity-0'}`}>
        {/* Header */}
        <div className="mb-12">
          <h2 id="blog-title" className="text-4xl md:text-5xl font-black mb-4">
            Blog Kwetu
          </h2>
          <p className="text-lg text-gray-300">
            Artigos, tutoriais e histórias sobre tecnologia e inovação.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id}>
              <Card className="h-full flex flex-col hover:border-teal/50 transition-all cursor-pointer">
                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className="bg-teal/20 text-teal text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 flex-grow">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <a href={`/blog/${post.id}`} className="text-teal hover:text-white transition-colors font-semibold">
                    Ler →
                  </a>
                </div>
              </Card>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="/blog"
            className="inline-block border-2 border-teal text-teal px-8 py-3 rounded-full font-bold hover:bg-teal hover:text-deep-blue transition-all focus:outline-2 focus:outline-offset-2 focus:outline-teal"
          >
            Ver todos os artigos →
          </a>
        </div>
      </div>
    </section>
  )
}
