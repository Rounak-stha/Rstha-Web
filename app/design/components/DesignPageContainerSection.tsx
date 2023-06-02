import { H2, H4 } from '@/components/Typography/Headings'
import Container from '@/components/views/Container'

export default function DesignPageContainerSection() {
    return (
        <>
            <H2>Container</H2>
            <div className="mb-6">
                <H4 className="listItem">Base Container</H4>
                <Container className="h-20" />
            </div>
            <div className="mb-6">
                <H4 className="listItem">Base Container: Glow on Hover</H4>
                <Container glowClass="from-yellow-500 via-pink-500 to-orange-500" className="h-20" />
            </div>
            <div className="mb-6">
                <H4 className="listItem">Outlined Container</H4>
                <Container outlined className="h-20" />
            </div>
            <div className="mb-6">
                <H4 className="listItem">Outlined Container: Glow on Hover</H4>
                <Container outlined glowClass="from-blue-500 via-cyan-500 to-indigo-500" className="h-20" />
            </div>
        </>
    )
}
