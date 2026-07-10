import { H1 } from '../Typography/Headings'
import SocialLinks from './SocialLinks'

export default function Profile() {
    return (
        <section className="max-w-intro py-4 pb-editorial-intro sm:pb-20">
            <p className="m-0 text-editorial-meta font-medium text-editorial-muted">Developer &amp; writer</p>
            <H1 className="mt-2">Rounak Shrestha</H1>
            <SocialLinks />
        </section>
    )
}
