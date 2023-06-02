import Input from '@/components/AtomsAndMolecules/Input'
import InputWithOptions from '@/components/AtomsAndMolecules/InputWithOptions'
import SelectOptions from '@/components/AtomsAndMolecules/SelectOptions'
import TextArea from '@/components/AtomsAndMolecules/TextArea'
import { H2, H4 } from '@/components/Typography/Headings'

export default function DesignPageInputSection() {
    return (
        <>
            <H2>Inputs</H2>
            <div className="mb-6">
                <H4 className="listItem">Normal Text Input</H4>
                <Input placeholder="Place Your Text" />
            </div>
            <div className="mb-6">
                <H4 className="listItem">Input With Options</H4>
                <InputWithOptions name="Type Comedy" options={['Comedy', 'Hilarious', 'Terrific']} />
            </div>
            <div className="mb-6">
                <H4 className="listItem">Text Area</H4>
                <TextArea placeholder="Place Your Text" />
            </div>
            <div className="mb-6">
                <H4 className="listItem">Select</H4>
                <SelectOptions name="Options" options={['Comedy', 'Hilarious', 'Terrific']} />
            </div>
        </>
    )
}
