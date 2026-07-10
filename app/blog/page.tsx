import BlogPreview from '@/components/views/BlogPreview'
import { H1 } from '@/components/Typography/Headings'
import type { Metadata } from 'next'
import { getAllPostsPreview } from '@/lib/blog'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL
const ogImage = `${APP_URL}/api/og?type=blog&title=List of all Rstha's Blog`
const description = "List of all Rstha's Blogs"

export const metadata: Metadata = {
    title: 'Rstha | Blog',
    openGraph: {
        title: 'Rstha Blog',
        description: description,
        type: 'article',
        url: `${APP_URL}/blog}`,
        images: ogImage,
    },
    twitter: {
        title: 'Rstha Blog',
        images: ogImage,
        description: description,
    },
}

export default async function Blog() {
    const allBlogPosts = await getAllPostsPreview()

    return (
        <main className="pb-8">
            <header className="mb-editorial-page">
                <p className="m-0 text-editorial-meta font-medium text-editorial-muted">Notes &amp; essays</p>
                <H1 className="mt-2">Writing</H1>
            </header>
            <div className="border-t border-editorial-rule">
                {allBlogPosts.map((blog, i) => (
                    <BlogPreview previewData={blog} key={i} />
                ))}
            </div>
        </main>
    )
}
