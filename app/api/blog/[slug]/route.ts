import { getClient } from '@/lib/sanity-server'
import { groq } from 'next-sanity'
import { allSlugs } from '@/lib/queries'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    const slug = params.slug
    if (slug === 'slugs') return NextResponse.json(await getAllSlugs())
    return NextResponse.json(await getBlogData(slug as string))
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
    return blogData
}
