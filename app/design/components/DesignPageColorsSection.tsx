import ColorCircle from '@/components/AtomsAndMolecules/ColorCircle'
import { H2, H4 } from '@/components/Typography/Headings'
import ColorPallete from '@/components/views/ColorPallete'
import * as customColors from '../../../constants/customColors'

export default function DesignPageColorsSection() {
    return (
        <>
            <H2>Colors</H2>
            <div className="mb-6">
                <H4 className="listItem">Global Backgrounds</H4>
                <div className="flex gap-4">
                    <ColorCircle bgClass="bg-back-dark" />
                    <ColorCircle bgClass="bg-back-light" />
                </div>
            </div>

            <div className="mb-6">
                <H4 className="listItem">Texts</H4>
                <div className="flex gap-4">
                    <ColorCircle bgClass="bg-light" />
                    <ColorCircle bgClass="bg-lighter" />
                    <ColorCircle bgClass="bg-dark" />
                    <ColorCircle bgClass="bg-darker" />
                </div>
            </div>

            <div className="mb-6">
                <H4 className="listItem">Color Pallete</H4>
                <div className="flex flex-wrap gap-4">
                    {Object.keys(customColors).map((color) => (
                        <ColorPallete key={color} colors={customColors[color]} />
                    ))}
                </div>
            </div>
        </>
    )
}
