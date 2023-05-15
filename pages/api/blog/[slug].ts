import { NextApiRequest, NextApiResponse } from 'next'
import { parseMdx } from '@/lib/mdx'
import { getClient } from '@/lib/sanity-server'
import { groq } from 'next-sanity'
import { allSlugs } from '@/lib/queries'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const slug = req.query.slug
    if (slug === 'slugs') return res.json(await getAllSlugs())
    return res.json(await getBlogData(slug as string))
}

async function getAllSlugs() {
    let slugs = await getClient().fetch(allSlugs)
    return slugs.map(({ slug }) => slug.current)
}

async function getBlogData(slug: string) {
    let blogData = await getClient().fetch(
        groq`
    *[_type == 'blog' && slug.current == $slug][0] {
        title,
        'slug': slug.current,
        created,
        data,
        "readingTime": round(length(data) / 7 / 365)
    }
    `,
        { slug }
    )
    // blogData.data = await parseMdx(blogData.data)
    return blogData
}
