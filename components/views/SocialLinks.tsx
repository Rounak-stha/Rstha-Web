import { socials } from '../../constants'

export default function SocialLinks({ center }: { center?: boolean }) {
    return (
        <div className={`flex gap-4 items-center text-black dark:text-white ${center ? 'justify-center' : ''}`}>
            {socials.map(({ name, href, Icon, style }) => (
                <a
                    className="hover:scale-125 transition-transform ease-in-out"
                    key={href}
                    target="_blank"
                    rel="noreferrer"
                    href={href}
                    aria-label={name}
                >
                    <Icon style={{ fontSize: '2em', ...style }} />
                </a>
            ))}
        </div>
    )
}
