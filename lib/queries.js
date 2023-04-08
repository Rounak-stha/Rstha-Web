import { groq } from 'next-sanity'

const allPosts = groq`
    *[_type == 'blog' && created <= now()] | order(created desc) {
        title,
        excerpt,
        created,
        slug, 
        "readingTime": round(length(data) / 7 / 365)
    }
`
const recentPosts = groq`
*[_type == 'blog' && created <= now()] | order(created desc)[0...3] {
    title,
    excerpt,
    created,
    slug, 
    "readingTime": round(length(data) / 7 / 365)
}
`

const allSlugs = groq`
    *[_type == "blog"] {
        slug
    }
`

const postWithData = groq`
*[_type == 'blog' && slug.current=$slug][0] {
    title,
    created,
    data,
    "readingTime": round(length(data) / 7 / 200)
}
`

export { allPosts, allSlugs, postWithData, recentPosts }
