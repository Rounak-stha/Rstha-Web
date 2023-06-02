import { CheckBadge, CrossBadge } from '@/components/AtomsAndMolecules/AllBadges'
import { H2, H4 } from '@/components/Typography/Headings'

export default function DesignPageBadgesSection() {
    return (
        <>
            <H2>Badges</H2>
            <div className="mb-6">
                <H4 className="listItem">Check Badges</H4>
                <div className="flex items-center gap-2">
                    <CheckBadge />
                    <CheckBadge size="md" />
                    <CheckBadge size="lg" />
                </div>
            </div>
            <div className="mb-6">
                <H4 className="listItem">Cross Badges</H4>
                <div className="flex items-center gap-2">
                    <CrossBadge />
                    <CrossBadge size="md" />
                    <CrossBadge size="lg" />
                </div>
            </div>
        </>
    )
}
