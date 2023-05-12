import Profile from '@/components/views/Profile'
import { recentPosts } from '@/lib/queries'
import { getClient } from '@/lib/sanity-server'
import BlogPreview from '@/components/views/BlogPreview'
import { H2 } from '@/components/Typography/Headings'

const description = 'Welcome to Rstha web. Visit to know more about Rounak Shrestha | Full Stack Developer'
const ogImage = 'https://rounakstha.me/api/og?type=web&title=Welcome to Rstha Web'

export const metadata = {
    title: 'Rstha | Welcome',
}

export default async function Home() {
    const recentBlogs = await getClient().fetch(recentPosts)
    return (
        <div>
            <main>
                <Profile />
                <div className="mt-8">
                    <H2 className="mb-6">Recent Blogs</H2>
                    {recentBlogs.map((blog, i) => {
                        return (
                            <div className="mb-6" key={i}>
                                <BlogPreview preViewData={blog} />
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}
