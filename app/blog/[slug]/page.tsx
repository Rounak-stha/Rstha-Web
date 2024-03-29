import Blog from '@/components/views/Blog'
import Head from 'next/head'
import type { Metadata } from 'next'
import { getAllSlugs, getBlogData } from '@/lib/blog'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL

export async function generateMetadata({ params }): Promise<Metadata> {
    const slug = params.slug
    const blogData = await getBlogData(slug)

    const ogImage = `${APP_URL}/api/og?type=blog&title=${blogData.title}`

    return {
        title: `Rstha Blog | ${blogData.title}`,
        description: blogData.title,
        openGraph: {
            title: 'Rstha Blog',
            description: blogData.title,
            type: 'article',
            url: `${APP_URL}/blog/${blogData.slug}`,
            images: ogImage,
        },
        twitter: {
            title: 'Rstha Blog',
            images: ogImage,
            description: blogData.title,
        },
    }
}

export default async function BlogPage({ params }) {
    const slug = params.slug
    const blogData = await getBlogData(slug)

    return (
        <>
            <Head>
                <title>{blogData.title}</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.css"
                    integrity="sha384-1IGr2Yb8xuHjwTG+WoGjj2+I/a/N6z0gDD5YIGCQxywPROOKc3+orbn/R7arWQxD"
                    crossOrigin="anonymous"
                />
            </Head>
            <div className="max-w-full prose dark:prose-invert">
                {/* @ts-expect-error Server Component */}
                <Blog blogData={blogData} />
            </div>
        </>
    )
}

export async function generateStaticParams() {
    const slugs = await getAllSlugs()

    return slugs.map((slug) => {
        return { params: { slug } }
    })
}
