import { Callout } from '@/components/MdxComponents'
import { H2, H4 } from '@/components/Typography/Headings'

export default function DesignPageCalloutSection() {
    return (
        <>
            <H2>Callout</H2>
            <div className="mb-6">
                <H4 className="listItem">Info Callout</H4>
                <Callout type="info">This callout block holds normal information.</Callout>
            </div>
            <div className="mb-6">
                <H4 className="listItem">Info Callout</H4>
                <Callout type="question">This callout block holds question.</Callout>
            </div>
            <div className="mb-6">
                <H4 className="listItem">Info Callout</H4>
                <Callout type="warning">This callout block holds warning information.</Callout>
            </div>
            <div className="mb-6">
                <H4 className="listItem">Info Callout</H4>
                <Callout type="danger">This callout block holds danger information.</Callout>
            </div>
        </>
    )
}
