import prisma from "@/lib/prisma";

const t3Tracks = [
    {
      name: "Fate Don't Know You",
      artist: 'Desi Valentine',
      spotifyId: '5lcqFkCiRvf7oxoIXXNUcp',
      roll: 1
    },
    {
      name: 'Love and Hate',
      artist: 'Michael Kiwanuka',
      spotifyId: '7oOEFDLSQscl0uGulnIEmG',
      roll: 2
    },
    {
      name: "Annie's Song",
      artist: 'John Denver',
      spotifyId: '4J0DbyODwZJcmIAiTSJfMF',
      roll: 3
    }
  ];
  

export default async function (req, res) {
    try {
        await Promise.all(t3Tracks.map( track => prisma.t3Tracks.create({ data: { ...track }})))
        return res.json({ success: true })
    } catch (err) {
        console.log(err)
        return res.json({ success: false })
    }
}