import { socials } from '../../constants'

export default function SocialLinks({ center }: { center?: boolean }) {
    return (
        <div className={`mt-6 flex flex-wrap items-center gap-5 text-sm ${center ? 'justify-center' : ''}`}>
            {socials.map(({ name, href }) => (
                <a
                    className="text-editorial-text underline decoration-editorial-faint decoration-1 underline-offset-2 transition-colors hover:text-editorial-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editorial-text"
                    key={href}
                    target="_blank"
                    rel="noreferrer"
                    href={href}
                >
                    {name}
                </a>
            ))}
        </div>
    )
}
