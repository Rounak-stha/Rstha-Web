import Head from 'next/head'
import Profile from '@/components/views/Profile'
import { recentPosts } from '@/lib/queries'
import { getClient } from '@/lib/sanity-server'
import BlogPreview from '@/components/views/BlogPreview'
import { H2 } from '@/components/Typography/Headings'

export default function Home({ recentBlogs }) {
    return (
        <div>
            <Head>
                <title>Rstha | Welcome</title>

                <title>Rstha Web</title>
                <meta
                    name="description"
                    content="Welcome to Rstha web. Visit to know more about Rounak Shrestha | Full Stack Developer"
                />

                <meta property="og:url" content="https://www.rounakstha.me" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Rstha Web" />
                <meta
                    property="og:description"
                    content="Welcome to Rstha web. Visit to know more about Rounak Shrestha | Full Stack Developer"
                />
                <meta property="og:image" content="https://rounakstha.me/api/og?type=web&title=Welcome to Rstha Web" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@IamRstha" />
                <meta name="twitter:title" content="Rstha Web" />
                <meta
                    name="twitter:description"
                    content="Welcome to Rstha web. Visit to know more about Rounak Shrestha | Full Stack Developer"
                />
                <meta name="twitter:image" content="https://rounakstha.me/api/og?type=web&title=Welcome to Rstha Web" />
            </Head>

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

export async function getStaticProps({ preview = true }) {
    const recentBlogs = await getClient(preview).fetch(recentPosts)
    return {
        props: {
            recentBlogs,
        },
    }
}
