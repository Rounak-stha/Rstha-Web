import { getCurrentlyPlaying } from '@/lib/spotify'

export default async (req, res) => {
    const currentlyPlaying = await getCurrentlyPlaying()
    return res.json(currentlyPlaying)
}
