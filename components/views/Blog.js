import { H1 } from '../Typography/Headings'
import { P3 } from '../Typography/ParaGraph'
import { serverParseMdx } from '@/lib/mdx'

export default async function Blog({ blogData }) {
    const { title, created, readingTime, data } = blogData
    const parsedBlogBody = await serverParseMdx(data)
    return (
        <>
            <article>
                <H1 className="text-xl sm:text-4xl font-[800] mt-0 mb-2">{title}</H1>
                <P3 className="mt-0 mb-4">
                    {created} . {readingTime} min read
                </P3>
                {parsedBlogBody}
                <p className="m-0">
                    Hey I assume you finished reading, I would love to know your feedback or if found any error or
                    mistake in this blog post, please do not hesitate to{' '}
                    <a className="italic font-bold" href="mailto:rsthaofficial@gmail.com">
                        reach out
                    </a>{' '}
                    to me.
                </p>
            </article>
        </>
    )
}
