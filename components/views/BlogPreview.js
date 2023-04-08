import Link from 'next/link'
import { H4 } from '../Typography/Headings'
import { P2, P3 } from '../Typography/ParaGraph'
import Container from './Container'

const glowColors = [
    'from-cyan-500 to-blue-500',
    'from-indigo-500 via-purple-500 to-pink-500',
    'from-green-400 to-blue-500',
    'from-[#12c2e9] via-[#c471ed] to-[#f64f59]',
    'from-[#0cebeb] via-[#20e3b2] to-[#f64f59]',
    'from-[#00B4DB] to-[#0083B0]',
]

const getRandomGlowColorClass = () => glowColors[Math.floor(glowColors.length * Math.random())]

export default function BlogPreview({ preViewData }) {
    const { title, slug, excerpt, created, readingTime } = preViewData
    const glowColorClass = getRandomGlowColorClass()

    return (
        <div className="hover:scale-105 transition-transform duration-[350ms] ease-in-out cont">
            <Container outlined glowClass={glowColorClass}>
                <Link href={`/blog/${slug.current}`}>
                    <H4 className={`bg-gradient-to-r ${glowColorClass} !text-transparent bg-clip-text mt-0 mb-1`}>
                        {title}
                    </H4>
                    <P3 className="mb-1">
                        {created} . {readingTime} min read
                    </P3>
                    <P2>{excerpt}</P2>
                </Link>
            </Container>
        </div>
    )
}
