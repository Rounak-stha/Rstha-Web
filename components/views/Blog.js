import { serverParseMdx } from '@/lib/mdx'

export default async function Blog({ blogData }) {
    const { title, created, readingTime, data } = blogData
    const parsedBlogBody = await serverParseMdx(data)
    return (
        <article className="pb-8">
            <header className="mb-editorial-article">
                <p className="m-0 text-editorial-meta font-medium text-editorial-muted">Writing</p>
                <h1 className="mt-2 max-w-article text-editorial-title font-semibold text-editorial-text">{title}</h1>
                <p className="mt-4 text-editorial-meta font-medium text-editorial-muted">
                    {created} · {readingTime} min read
                </p>
            </header>
            <div className="text-base leading-copy text-editorial-body [&>*:first-child]:mt-0 [&_a]:text-editorial-text [&_a]:underline [&_a]:decoration-editorial-faint [&_a]:decoration-1 [&_a]:underline-offset-1 [&_blockquote]:my-6 [&_blockquote]:border-l [&_blockquote]:border-editorial-faint [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-editorial-muted [&_figcaption]:mt-2 [&_figcaption]:text-editorial-meta [&_figcaption]:text-editorial-muted [&_figure]:my-6 [&_h2]:mt-11 [&_h2]:mb-4 [&_h2]:text-editorial-section [&_h2]:font-semibold [&_h2]:tracking-heading [&_h2]:text-editorial-text [&_h3]:mt-11 [&_h3]:mb-4 [&_h3]:text-editorial-subsection [&_h3]:font-semibold [&_h3]:tracking-heading [&_h3]:text-editorial-text [&_h4]:mt-11 [&_h4]:mb-4 [&_h4]:text-editorial-project [&_h4]:font-semibold [&_h4]:tracking-heading [&_h4]:text-editorial-text [&_img]:h-auto [&_img]:max-w-full [&_li+li]:mt-1 [&_ol]:my-6 [&_ol]:pl-5 [&_p]:my-6 [&_pre]:mb-6 [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-editorial-rule [&_pre]:bg-editorial-code [&_pre]:p-5 [&_pre]:text-editorial-code [&_ul]:my-6 [&_ul]:pl-5 [&_:not(pre)>code]:border [&_:not(pre)>code]:border-editorial-rule [&_:not(pre)>code]:bg-editorial-surface [&_:not(pre)>code]:px-1 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:text-sm">
                {parsedBlogBody}
            </div>
            <p className="mt-12 border-t border-editorial-rule pt-6 text-sm italic leading-compact text-editorial-muted [&_a]:text-editorial-text [&_a]:underline [&_a]:decoration-editorial-faint [&_a]:decoration-1 [&_a]:underline-offset-1">
                    Hey I assume you finished reading, I would love to know your feedback or if found any error or
                    mistake in this blog post, please do not hesitate to{' '}
                    <a href="mailto:rsthaofficial@gmail.com">
                        reach out
                    </a>{' '}
                    to me.
            </p>
        </article>
    )
}
