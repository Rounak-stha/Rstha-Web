import Profile from '@/components/views/Profile'
import { recentPosts } from '@/lib/queries'
import { getClient } from '@/lib/sanity-server'
import BlogPreview from '@/components/views/BlogPreview'
import { H3 } from '@/components/Typography/Headings'

export const metadata = {
    title: 'Rstha | Welcome',
}

export default async function Home() {
    const recentBlogs = await getClient().fetch(recentPosts)
    return (
        <main>
            <Profile />
            <section className="border-t border-editorial-rule pt-editorial-section pb-8" aria-labelledby="recent-writing">
                <div className="mb-2 flex items-baseline justify-between">
                    <H3 id="recent-writing">Recent writing</H3>
                    <a href="/blog" className="text-sm text-editorial-text underline decoration-editorial-faint decoration-1 underline-offset-2 transition-colors hover:text-editorial-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editorial-text">
                        View all
                    </a>
                </div>
                <div className="border-t border-editorial-rule">
                    {recentBlogs.map((blog, i) => (
                        <BlogPreview previewData={blog} key={i} />
                    ))}
                </div>
            </section>
        </main>
    )
}
