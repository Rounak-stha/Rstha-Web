'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggleBtn from '../ThemeToggleBtn'
import { navItems } from '../../constants'

export default function Nav() {
    const currPath = usePathname()

    return (
        <div className="flex items-center h-20 py-4">
            <div className="flex-1 flex">
                {navItems.map(({ name, href }) => (
                    <Link
                        key={name}
                        href={href}
                        className={`${
                            href === currPath && 'text-darker dark:text-lighter'
                        } mr-2 font-semibold cursor-pointer inline-block p-1 sm:px-4 sm:py-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-12 transition-colors`}
                    >
                        {name}
                    </Link>
                ))}
            </div>
            <ThemeToggleBtn />
        </div>
    )
}
