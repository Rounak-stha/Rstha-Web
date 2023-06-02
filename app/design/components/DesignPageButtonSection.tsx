import { EyeIconLabel, ForkIconLabel, StarIconLabel } from '@/components/AtomsAndMolecules/AllIconLabel'
import Button from '@/components/AtomsAndMolecules/Button'
import SendIconButton from '@/components/AtomsAndMolecules/SendIconButton'
import { H2, H4 } from '@/components/Typography/Headings'

export default function DesignPageButtonSection() {
    return (
        <>
            <H2>Buttons</H2>
            <div className="mb-6">
                <H4 className="listItem">Normal Buttons</H4>
                <div className="flex items-center gap-3 flex-wrap">
                    <Button>Button</Button>
                    <Button size="md">Button</Button>
                    <Button size="lg">Button</Button>
                </div>
            </div>

            <div className="mb-6">
                <H4 className="listItem">Outlined Button</H4>
                <div className="flex items-center gap-3 flex-wrap">
                    <Button outlined>Button</Button>
                    <Button size="md" outlined>
                        Button
                    </Button>
                    <Button size="lg" outlined>
                        Button
                    </Button>
                </div>
            </div>
            <div className="mb-6">
                <H4 className="listItem">Disabled Button</H4>
                <div className="flex items-center gap-3 flex-wrap">
                    <Button disabled>Button</Button>
                    <Button size="md" disabled>
                        Button
                    </Button>
                    <Button size="lg" disabled>
                        Button
                    </Button>
                </div>
            </div>
            <div className="mb-6">
                <H4 className="listItem">Send Icon Buttons</H4>
                <div className="flex items-center gap-3 flex-wrap">
                    <SendIconButton />
                    <SendIconButton size="md" />
                    <SendIconButton size="lg" />
                </div>
            </div>
            <div className="mb-6">
                <H4 className="listItem">Loading Icon Button</H4>
                <div className="flex items-center gap-3 flex-wrap">
                    <SendIconButton loading />
                    <SendIconButton loading size="md" />
                    <SendIconButton loading size="lg" />
                </div>
            </div>
        </>
    )
}
