import { socials } from '../../constants'

export default function Footer() {
    return (
        <footer className="mt-12 flex flex-col justify-between gap-4 border-t border-editorial-rule py-6 text-editorial-footer text-editorial-faint sm:flex-row">
            <span>© {new Date().getFullYear()} Rounak Shrestha</span>
            <div className="flex flex-wrap items-center gap-3">
                {socials.map(({ name, href }) => (
                    <a className="text-editorial-muted transition-colors hover:text-editorial-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editorial-text" target="_blank" rel="noreferrer" href={href} key={name}>
                        {name}
                    </a>
                ))}
            </div>
        </footer>
    )
}
