import { NextApiRequest, NextApiResponse } from 'next'
import { getClient } from '@/lib/sanity-server'
import { allPosts } from '@/lib/queries'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let posts = await getClient().fetch(allPosts)
    return res.json(posts)
}
