import { Analytics } from '@vercel/analytics/react'
import { Source_Sans_Pro } from 'next/font/google'
import Nav from '@/components/views/Nav'
import Footer from '@/components/views/Footer'
import Toaster from '@/components/Toaster'
import '@/styles/global.css'

const sourceSansPro = Source_Sans_Pro({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weight: ['200', '300', '400', '600', '700', '900'],
})

const ogDescription = "Welcome to Rounak Shrestha's website. Visit to know more about him and read awesome blogs."
const ogImage = 'https://rounakstha.me/api/og?type=web&title=Welcome to Rstha Web'

export const metadata = {
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
}

export default function RootLayout({ children }) {
    return (
        <html className="dark" lang="en">
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.png" />
            </head>
            <body
                className={`dark:bg-back-dark bg-back-light text-dark dark:text-light text-[1.07rem] ${sourceSansPro.className}`}
            >
                <Analytics />
                <Toaster />
                <div className="w-full">
                    <div className="xl:w-[800px] lg:w-2/3 sm:w-4/5 mx-auto pt-4 px-4 sm:px-8">
                        <Nav />
                        <div className="py-4">{children}</div>
                        <hr className="max-w-full prose border-[color:var(--tw-prose-hr)] dark:border-[color:var(--tw-prose-invert-hr)] my-3" />
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    )
}
