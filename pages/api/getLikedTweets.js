import { getLikedTweets } from "@/lib/twitter";

function getTweetAuthor(tweets, tweet) {
    const foundAuthor = tweets.includes.users.find(user => user.id === tweet.author_id)
    return foundAuthor ? foundAuthor : {}
}

function getTweetMedia(tweets, tweet) {
    let media = []
    if (tweet.attachments && tweet.attachments.media_keys) {
        media = tweet.attachments.media_keys.map(key => {
            const media = tweets.includes.media.find(m => m.media_key === key)
            return media
    })
    }
    return media
}

function getReferencedTweets(tweets, tweet) {
    let referenced_tweets = []
    if (tweet.referenced_tweets) {
        referenced_tweets = tweet.referenced_tweets.map(ref => {
            const refed_tweet = tweets.includes.tweets.find(tweet => tweet.id === ref.id)
            delete refed_tweet.public_metrics.quote_count
            const data = {
                id: refed_tweet.id,
                text: refed_tweet.text,
                type: ref.type,
                created_at: refed_tweet.created_at,
                public_metrics: {
                    ...refed_tweet.public_metrics
                },
                author: getTweetAuthor(tweets, refed_tweet)
            }
            return data
        })
    }
    return referenced_tweets
}

export default async function(req, res) {
    const formatted_tweets = [] 
    const tweets = await getLikedTweets()
    tweets.data.forEach(tweet => {
        delete tweet.public_metrics.quote_count
        let data = {
            id: tweet.id,
            text: tweet.text,
            created_at: tweet.created_at,
            public_metrics: {
                ...tweet.public_metrics
            },
            media: getTweetMedia(tweets, tweet),
            author: getTweetAuthor(tweets, tweet),
            referenced_tweets: getReferencedTweets(tweets, tweet)
        }
        formatted_tweets.push(data)
    })
    return res.send(formatted_tweets)
}