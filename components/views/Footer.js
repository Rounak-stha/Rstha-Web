import { navItems, socials } from '../../constants'

const footerItems = navItems
    .map(({ name, href }) => ({ name, href }))
    .concat(socials.map(({ name, href }) => ({ name, href })))

export default function Footer() {
    return (
        <div className="mb-2 mono">
            <div className="flex flex-col items-start xs:h-36 flex-wrap w-full mx-auto">
                {footerItems.map(({ name, href }) => (
                    <div key={name}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={href}
                            className="mr-2 cursor-pointer hover:underline block p-1 sm:px-4 sm:py-1.5"
                        >
                            {name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
