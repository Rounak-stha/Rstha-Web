import BlogPreview from '@/components/views/BlogPreview'
import { H2 } from '@/components/Typography/Headings'
import type { Metadata } from 'next'

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
    const res = await fetch(`${APP_URL}/api/blogs`)
    if (!res.ok) throw 'Can not fetch all posts'
    const allBlogPosts = await res.json()

    return (
        <>
            <div>
                <H2 className="text-3xl mb-6">All Blogs</H2>
                {allBlogPosts.map((blog, i) => {
                    return (
                        <div key={i} className="mb-6">
                            <BlogPreview preViewData={blog} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
