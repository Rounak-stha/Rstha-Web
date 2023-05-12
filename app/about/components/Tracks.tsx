import Track from '@/components/views/Track'
import prisma from '@/lib/prisma'

export default async function Tracks() {
    const tracks = await prisma.t3Tracks.findMany({ orderBy: [{ roll: 'asc' }] })

    return (
        <>
            {tracks.map((track) => {
                return <Track key={track.spotifyId} track={track} />
            })}
        </>
    )
}
