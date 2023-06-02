import { H1 } from '@/components/Typography/Headings'

import {
    DesignPageBadgesSection,
    DesignPageButtonSection,
    DesignPageCalloutSection,
    DesignPageColorsSection,
    DesignPageContainerSection,
    DesignPageHeaderImage,
    DesignPageIconLabelSection,
    DesignPageInputSection,
    DesignPageTypographySection,
} from './components'

export default function Design() {
    return (
        <>
            <H1>Rstha-Web Design System</H1>
            <hr className="mb-8" />
            <DesignPageHeaderImage />
            <div className="mt-8 mb-14">
                <DesignPageTypographySection />
            </div>
            <div className="mb-14">
                <DesignPageColorsSection />
            </div>
            <div className="mb-14">
                <DesignPageContainerSection />
            </div>
            <div className="mb-14">
                <DesignPageCalloutSection />
            </div>
            <div className="mb-14">
                <DesignPageInputSection />
            </div>
            <div className="mb-14">
                <DesignPageButtonSection />
            </div>
            <div className="mb-14">
                <DesignPageIconLabelSection />
            </div>
            <div className="mb-8">
                <DesignPageBadgesSection />
            </div>
        </>
    )
}
