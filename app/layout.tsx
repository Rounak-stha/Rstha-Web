import { Analytics } from '@vercel/analytics/react'
import { DM_Sans } from 'next/font/google'
import Nav from '@/components/views/Nav'
import Footer from '@/components/views/Footer'
import Toaster from '@/components/Toaster'
import '@/styles/global.css'
import type { Metadata } from 'next'

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-sans',
})

const ogDescription = "Welcome to Rounak Shrestha's website. Visit to know more about him and read awesome blogs."
const ogImage = 'https://rounakstha.me/api/og?type=web&title=Welcome to Rstha Web'

export const metadata: Metadata = {
    description: "Welcome to Rounak Shrestha's website. Visit to know more about him and read awesome blogs.",
    keywords: ['Rounak Shrestha', 'Rstha', 'Rounak Stha', 'Blog'],
    openGraph: {
        title: 'Rstha Web',
        type: 'website',
        url: 'https://www.rounakstha.me',
        description: ogDescription,
        images: ogImage,
    },
    twitter: {
        card: 'summary_large_image',
        site: '@IamRstha',
        title: 'Rstha Web',
        description: ogDescription,
        images: ogImage,
    },
    icons: [{ rel: 'icon', type: 'image/x-icon', url: '/favicon.png' }],
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`min-h-screen bg-editorial-canvas text-base leading-editorial text-editorial-text tracking-normal ${dmSans.className} ${dmSans.variable}`}>
                <Analytics />
                <Toaster />
                <div className="min-h-screen">
                    <div className="mx-auto max-w-reading px-4 sm:px-5">
                        <Nav />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    )
}
