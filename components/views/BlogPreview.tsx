import Link from 'next/link'
import { BlogPostPreview } from '@/lib/blog'

export default function BlogPreview({ previewData }: { previewData: BlogPostPreview }) {
    const { title, slug, excerpt, created, readingTime } = previewData
    return (
        <article className="border-b border-editorial-rule py-8 first:pt-0 last:border-b-0">
            <Link href={`/blog/${slug}`} className="text-editorial-post font-semibold text-editorial-text underline decoration-editorial-faint decoration-1 underline-offset-2 transition-colors hover:text-editorial-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editorial-text">
                {title}
            </Link>
            {excerpt && <p className="mt-3 text-editorial-copy text-editorial-subtle">{excerpt}</p>}
            <p className="mt-4 text-editorial-meta font-medium text-editorial-muted">
                {created} · {readingTime} min read
            </p>
        </article>
    )
}
