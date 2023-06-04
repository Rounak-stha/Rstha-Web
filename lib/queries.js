import { groq } from 'next-sanity'

export const allPostsPreview = groq`
    *[_type == 'blog' && created <= now()] | order(created desc) {
        title,
        excerpt,
        created,
        'slug': slug.current, 
        "readingTime": round(length(data) / 7 / 365)
    }
`
export const recentPosts = groq`
*[_type == 'blog' && created <= now()] | order(created desc)[0...3] {
    title,
    excerpt,
    created,
    'slug': slug.current, 
    "readingTime": round(length(data) / 7 / 365)
}
`

export const allSlugs = groq`
    *[_type == "blog"] {
        slug
    }
`

export const postWithData = groq`
*[_type == 'blog' && slug.current=$slug][0] {
    title,
    created,
    data,
    "readingTime": round(length(data) / 7 / 200)
}
`
