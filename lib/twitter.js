const { default: axios } = require("axios");

const twitter_bearer_token = process.env.TWITTER_BEARER

async function getLikedTweets() {
    const tweets = await axios.get(
        'https://api.twitter.com/2/users/1518846408031293440/liked_tweets?' + 
        new URLSearchParams({
            'expansions': 'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
            'tweet.fields': 'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
            'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
            'media.fields': 'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics'
        }).toString(),
        {
            headers: {
                Authorization: 'Bearer ' + twitter_bearer_token 
            }
        }
    ).then(res => res.data)
    return tweets
}

export { getLikedTweets }