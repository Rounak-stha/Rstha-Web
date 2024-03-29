import { getTrackPreview } from '@/lib/spotify'

export default async function getPreview(req, res) {
    const { id } = req.query
    const previewUrl = await getTrackPreview(id)
    return res.json(previewUrl)
}
