import { notFound } from 'next/navigation'

interface Post {
  id: string
  title: string
  content: string
  date: string
  category: string
}

export default function PostPage({ params }: { params: { id: string } }) {
  const posts: Post[] = [
    {
      id: '1',
      title: 'Tendências de Tecnologia em 2024',
      content: 'Conteúdo completo do post sobre tendências...',
      date: '15 de janeiro de 2025',
      category: 'Tecnologia',
    },
    // adicione outros posts de exemplo aqui
  ]

  const post = posts.find((p) => p.id === params.id)
  if (!post) return notFound()

  return (
    <article className="container mx-auto max-w-3xl py-16 px-4">
      <h1 className="text-4xl font-black mb-4">{post.title}</h1>
      <div className="text-gray-500 mb-8">
        <time>{post.date}</time> • <span>{post.category}</span>
      </div>
      <div className="prose prose-invert">{post.content}</div>
    </article>
  )
}
