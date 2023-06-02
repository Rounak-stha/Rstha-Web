import { getCurrentlyPlaying } from '@/lib/spotify'

export default async function currentlyPlaying(req, res) {
    const currentlyPlaying = await getCurrentlyPlaying()
    return res.json(currentlyPlaying)
}
