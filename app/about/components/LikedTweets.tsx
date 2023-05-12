import Tweet from '@/components/views/Tweet'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL

export default async function LikedTweets() {
    // Fetch on every request
    const res = await fetch(`${APP_URL}/api/getLikedTweets`, { cache: 'no-store' })
    if (!res.ok) throw ''
    const likedTweets = await res.json()

    return (
        <>
            {likedTweets.map((tweet) => (
                <Tweet key={tweet.id} {...tweet} />
            ))}
        </>
    )
}
