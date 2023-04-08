const { default: axios } = require('axios')

const twitter_bearer_token = process.env.TWITTER_BEARER

export async function getRecentTweets() {
    const tweets = await axios
        .get(
            'https://api.twitter.com/2/users/1518846408031293440/tweets?' +
                new URLSearchParams({
                    expansions: 'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
                    exclude: 'retweets,replies',
                    'tweet.fields':
                        'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
                    'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
                    'media.fields': 'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics',
                    max_results: 5,
                }).toString(),
            {
                headers: {
                    Authorization: 'Bearer ' + twitter_bearer_token,
                },
            }
        )
        .then((res) => {
            const tweets = res.data
            tweets.data = tweets.data.slice(0, 2)
            return tweets
        })
    return tweets
}

export async function getLikedTweets() {
    const tweets = await axios
        .get(
            'https://api.twitter.com/2/users/1518846408031293440/liked_tweets?' +
                new URLSearchParams({
                    expansions: 'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
                    'tweet.fields':
                        'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
                    'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
                    'media.fields': 'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics',
                    max_results: 5,
                }).toString(),
            {
                headers: {
                    Authorization: 'Bearer ' + twitter_bearer_token,
                },
            }
        )
        .then((res) => {
            const tweets = res.data
            tweets.data = tweets.data.slice(0, 1)
            return tweets
        })
        .catch((err) => {
            console.log(err.response.data)
            return []
        })
    return tweets
}

export function getTweetAuthor(tweets, tweet) {
    const foundAuthor = tweets.includes.users.find((user) => user.id === tweet.author_id)
    return foundAuthor ? foundAuthor : {}
}

export function getTweetMedia(tweets, tweet) {
    let media = []
    if (tweet.attachments && tweet.attachments.media_keys) {
        media = tweet.attachments.media_keys.map((key) => {
            const media = tweets.includes.media.find((m) => m.media_key === key)
            return media
        })
    }
    return media
}

export function getReferencedTweets(tweets, tweet) {
    let referenced_tweets = []
    if (tweet.referenced_tweets) {
        referenced_tweets = tweet.referenced_tweets.map((ref) => {
            const refed_tweet = tweets.includes.tweets.find((tweet) => tweet.id === ref.id)
            delete refed_tweet.public_metrics.quote_count
            const data = {
                id: refed_tweet.id,
                text: refed_tweet.text,
                type: ref.type,
                created_at: refed_tweet.created_at,
                public_metrics: {
                    ...refed_tweet.public_metrics,
                },
                author: getTweetAuthor(tweets, refed_tweet),
            }
            return data
        })
    }
    return referenced_tweets
}
