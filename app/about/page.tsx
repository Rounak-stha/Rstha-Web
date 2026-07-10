import { H1 } from '@/components/Typography/Headings'
import Projects from './components/Projects'

export const metadata = {
    title: 'Rstha | Work',
}

export default function More() {
    return (
        <main className="pb-8">
            <H1 className="mb-16">Work</H1>
            <section id="projects">
                <Projects />
            </section>
        </main>
    )
}
