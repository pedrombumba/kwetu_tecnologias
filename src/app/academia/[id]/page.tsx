import { notFound } from 'next/navigation'

interface Course {
  id: string
  name: string
  duration: string
  description: string
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const courses: Course[] = [
    { id: '1', name: 'HTML & CSS', duration: '4 semanas', description: 'Fundações da web' },
    { id: '2', name: 'JavaScript', duration: '6 semanas', description: 'Linguagem interativa' },
    { id: '3', name: 'React Pro', duration: '8 semanas', description: 'Framework moderno' },
    { id: '4', name: 'React Native', duration: '8 semanas', description: 'Apps híbridos' },
    { id: '5', name: 'Flutter', duration: '8 semanas', description: 'Apps nativas' },
    { id: '6', name: 'Docker & Kubernetes', duration: '6 semanas', description: 'Containerização' },
    { id: '7', name: 'Python Básico', duration: '4 semanas', description: 'Fundações' },
    { id: '8', name: 'Django', duration: '8 semanas', description: 'Framework web' },
    { id: '9', name: 'TypeScript', duration: '6 semanas', description: 'JS tipado' },
    { id: '10', name: 'Node.js', duration: '8 semanas', description: 'Backend JS' },
    { id: '11', name: 'AI & Machine Learning', duration: '2 dias', description: 'Introdução IA' },
    { id: '12', name: 'Web3 e Blockchain', duration: '2 dias', description: 'Futuro web' },
  ]

  const course = courses.find((c) => c.id === params.id)
  if (!course) return notFound()

  return (
    <section className="container mx-auto max-w-3xl py-16 px-4">
      <h1 className="text-4xl font-black mb-4">{course.name}</h1>
      <p className="text-teal font-semibold mb-2">{course.duration}</p>
      <p className="mb-8 text-gray-300">{course.description}</p>
      <a
        href="/contactos"
        className="inline-block bg-teal text-deep-blue px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
      >
        Inscrever-se
      </a>
    </section>
  )
}
