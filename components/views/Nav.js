'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '../../constants'

export default function Nav() {
    const currPath = usePathname()

    const visibleItems = navItems.filter(({ href }) => href !== '/design')

    return (
        <header className="flex items-baseline justify-start gap-4 py-editorial-nav-compact pb-editorial-nav-bottom-compact text-editorial-nav sm:py-editorial-nav sm:pb-editorial-nav-bottom">
            <nav className="flex flex-wrap items-center gap-3 text-editorial-nav-mobile sm:gap-5 sm:text-editorial-nav" aria-label="Primary navigation">
                {visibleItems.map(({ name, href }) => (
                    <Link
                        key={name}
                        href={href}
                        aria-current={href === currPath ? 'page' : undefined}
                        className={`text-editorial-muted transition-colors hover:text-editorial-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editorial-text ${
                            href === currPath ? 'text-editorial-link underline decoration-1 underline-offset-2' : ''
                        }`}
                    >
                        {name === 'Blog' ? 'Writing' : name}
                    </Link>
                ))}
            </nav>
        </header>
    )
}
