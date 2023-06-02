import { H1, H2, H3, H4 } from '@/components/Typography/Headings'
import { P1, P2, P3, P4 } from '@/components/Typography/ParaGraph'

const Headings = [H1, H2, H3, H4]
const Paragraphs = [P1, P2, P3, P4]

const longText =
    'I see her everywhere in every beautiful things I see; on the mountains, on the grass, on the Japanese Creamic Vessel, when smooth breeze runs through my skin.'

export default function DesignPageTypographySection() {
    return (
        <>
            <H2 className="mb-8">TypoGraphy</H2>
            <H2 className="mb-8">TypoGraphy</H2>
            <div id="font-family" className="mb-8">
                <H3>Font Family</H3>
                <H4 className="listItem">Source Sans Pro</H4>
                <P1 className="mb-4">{longText}</P1>
                <H4 className="listItem">Roboto Mono</H4>
                <P1 className="mb-4" mono>
                    {longText}
                </P1>
            </div>
            <div id="headings" className="mb-8">
                <H3>Headings</H3>
                {Headings.map((H, i) => (
                    <div key={i} className="mb-6 last:mb-0">
                        <H4 className="listItem">H{i + 1}</H4>
                        <H>Tell me something funny now, will you?</H>
                    </div>
                ))}
            </div>
            <div id="texts" className="mb-8">
                <H3>Texts</H3>
                {Paragraphs.map((P, i) => (
                    <div key={i} className="mb-6 last:mb-0">
                        <H4 className="listItem">Text {i + 1}</H4>
                        <P>Tell me something funny now, will you?</P>
                    </div>
                ))}
            </div>
        </>
    )
}
