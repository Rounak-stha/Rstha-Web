import prisma from '@/lib/prisma'

const t3Tracks = [
    {
        name: "Fate Don't Know You",
        artist: 'Desi Valentine',
        spotifyId: '5lcqFkCiRvf7oxoIXXNUcp',
        previewURL:
            'https://p.scdn.co/mp3-preview/847cd7d8461caa7ed7f1c28cc8c01fd0f61fa611?cid=4162869cea7147d0b851231edc82a6da',
        roll: 1,
    },
    {
        name: 'Love and Hate',
        artist: 'Michael Kiwanuka',
        spotifyId: '7oOEFDLSQscl0uGulnIEmG',
        previewURL: '',
        roll: 2,
    },
    {
        name: "Annie's Song",
        artist: 'John Denver',
        spotifyId: '4J0DbyODwZJcmIAiTSJfMF',
        previewURL:
            'https://p.scdn.co/mp3-preview/465e75f7e04d6552dc42f03801279b8a56aaaa52?cid=4162869cea7147d0b851231edc82a6da',
        roll: 3,
    },
]

export default async function (req, res) {
    try {
        await Promise.all(t3Tracks.map((track) => prisma.t3Tracks.create({ data: { ...track } })))
        return res.json({ success: true })
    } catch (err) {
        console.log(err)
        return res.json({ success: false })
    }
}
