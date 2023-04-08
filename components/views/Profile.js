import { SHORT_INTRO } from '@/constants/texts'
import { H3 } from '../Typography/Headings'
import SocialLinks from './SocialLinks'

export default function Profile() {
    return (
        <div>
            <div className="mb-4">
                <H3 className="mt-0">
                    Hey <span className="wave-emoji">👋</span>, {SHORT_INTRO}
                </H3>
            </div>
            <SocialLinks center />
        </div>
    )
}
