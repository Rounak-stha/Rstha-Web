import { H2 } from '@/components/Typography/Headings'
import { ABOUT_ME, REACH_OUT } from '../../constants'
import SocialLinks from '@/components/views/SocialLinks'
import { P2 } from '@/components/Typography/ParaGraph'
import Projects from './components/Projects'

export const metadata = {
    title: 'Rstha | About',
}

export default function More() {
    return (
        <div>
            <div className="mb-8">
                <H2 className="mt-0">Me</H2>
                {ABOUT_ME.map((text, i) => (
                    <P2 key={i}>{text}</P2>
                ))}
            </div>
            <div className="mb-8">
                <H2>Reach Out</H2>
                <P2 className="mb-4">{REACH_OUT}</P2>
                <SocialLinks />
            </div>
            <div id="projects" className="mb-8">
                <H2>Recent Projects</H2>
                <Projects />
            </div>
        </div>
    )
}
