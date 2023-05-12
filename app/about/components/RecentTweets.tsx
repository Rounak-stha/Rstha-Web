import Tweet from '@/components/views/Tweet'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL

export default async function RecentTweets() {
    // Fetch on every request
    const res = await fetch(`${APP_URL}/api/getRecentTweets`, { cache: 'no-store' })
    if (!res.ok) throw ''
    const recentTweets = await res.json()

    return (
        <>
            {recentTweets.map((tweet) => (
                <Tweet key={tweet.id} {...tweet} />
            ))}
        </>
    )
}
