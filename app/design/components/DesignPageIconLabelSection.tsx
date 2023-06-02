import { EyeIconLabel, ForkIconLabel, StarIconLabel } from '@/components/AtomsAndMolecules/AllIconLabel'
import { H2, H4 } from '@/components/Typography/Headings'

export default function DesignPageIconLabelSection() {
    return (
        <>
            <H2>Icon Label</H2>
            <div className="mb-6">
                <H4 className="listItem">Star Icon Label</H4>
                <StarIconLabel number={500} />
            </div>
            <div className="mb-6">
                <H4 className="listItem">Eye Icon Label</H4>
                <EyeIconLabel number={4000} />
            </div>
            <div className="mb-6">
                <H4 className="listItem">Git Icon Label</H4>
                <ForkIconLabel number={300} />
            </div>
        </>
    )
}
