const { default: axios } = require('axios')

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env

const access_token_endpoint = 'https://accounts.spotify.com/api/token'
const currentlyPlayingEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing'
const tracksEndpoint = 'https://api.spotify.com/v1/tracks'

export type Song = {
    artist: string
    name: string
    spotify_id: string
    previewURL: string
    type: string
}

async function getAccessToken() {
    try {
        const { access_token } = await axios
            .post(
                access_token_endpoint,
                new URLSearchParams({
                    grant_type: 'refresh_token',
                    refresh_token: SPOTIFY_REFRESH_TOKEN as string,
                }).toString(),
                {
                    headers: {
                        Authorization: `Basic ${Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString(
                            'base64'
                        )}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            )
            .then((res) => res.data)
        return { access_token }
    } catch (err) {
        console.log(err)
        return { error: true }
    }
}

async function getCurrentlyPlaying(): Promise<Song | null> {
    try {
        const { access_token, error } = await getAccessToken()
        if (error) return null

        const currentlyPlaying: Song | null = await fetch(currentlyPlayingEndpoint, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })
            .then((res) => {
                if (res.status !== 200) throw ''
                return res.json()
            })
            .then((data) => {
                const { artists, name, previewURL, type, id: spotify_id } = data.item
                return { artist: artists[0].name, name, previewURL, type, spotify_id }
            })
            .catch(() => null)
        return currentlyPlaying
    } catch (err) {
        console.log(err)
        return null
    }
}

async function getTrackPreview(id) {
    try {
        const { access_token, error } = await getAccessToken()
        if (error) return null
        const previewUrl = await axios
            .get(`${tracksEndpoint}/${id}`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            })
            .then((res) => res.data.preview_url)
        return previewUrl
    } catch (err) {
        console.log(err)
        return null
    }
}

export { getCurrentlyPlaying, getTrackPreview }
