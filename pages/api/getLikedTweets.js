import { getLikedTweets, getTweetAuthor, getTweetMedia, getReferencedTweets } from '@/lib/twitter'

export default async function likedTweets(req, res) {
    const formatted_tweets = []
    const tweets = await getLikedTweets()
    tweets.data.forEach((tweet) => {
        delete tweet.public_metrics.quote_count
        let data = {
            id: tweet.id,
            text: tweet.text,
            created_at: tweet.created_at,
            public_metrics: {
                ...tweet.public_metrics,
            },
            media: getTweetMedia(tweets, tweet),
            author: getTweetAuthor(tweets, tweet),
            referenced_tweets: getReferencedTweets(tweets, tweet),
        }
        formatted_tweets.push(data)
    })
    return res.send(formatted_tweets)
}
