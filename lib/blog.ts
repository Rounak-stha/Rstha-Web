import { groq } from 'next-sanity'
import { cache } from 'react'
import { allPostsPreview, allSlugs } from './queries'
import { getClient } from './sanity-server'

export interface BlogPost {
    title: string
    slug: string
    created: string
    data: string
    readingTime: string
}

export interface BlogPostPreview extends Omit<BlogPost, 'data'> {
    excerpt: string
}

export const getBlogData = cache(async (slug: string) => {
    let blogData: BlogPost = await getClient().fetch(
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
})

export const getAllSlugs = cache(async (): Promise<string[]> => {
    let slugs = await getClient().fetch(allSlugs)
    return slugs.map(({ slug }) => slug.current)
})

export const getAllPostsPreview = cache(async (): Promise<BlogPostPreview[]> => {
    let posts = await getClient().fetch(allPostsPreview)
    return posts
})
