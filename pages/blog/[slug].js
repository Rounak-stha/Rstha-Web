import Blog from '@/components/views/Blog';
import { parseMdx } from '@/lib/mdx';
import { getClient } from '@/lib/sanity-server';
import { allSlugs } from '@/lib/queries';
import { groq } from 'next-sanity';
import Head from 'next/head';

export default function slug({ blogData }) {
    return (
        <>
            <Head>
                <title>{blogData.title}</title>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.css'
                    integrity='sha384-1IGr2Yb8xuHjwTG+WoGjj2+I/a/N6z0gDD5YIGCQxywPROOKc3+orbn/R7arWQxD'
                    crossOrigin='anonymous'
                />
                <meta
                    name='description'
                    content='Welcome to Rstha web. Visit to know more about Rounak Shrestha | Full Stack Developer'
                />

                <meta property='og:url' content='https://www.rounakstha.me' />
                <meta property='og:type' content='article' />
                <meta property='og:title' content='Rstha Blog' />
                <meta property='og:description' content={`${blogData.title}`} />
                <meta property='og:image' content={`https://rounakstha.me/api/og?type=blog&title=${blogData.title}`} />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='@IamRstha' />
                <meta name='twitter:title' content='Rstha Blog' />
                <meta name='twitter:description' content={`${blogData.title}`} />
                <meta name='twitter:image' content={`https://rounakstha.me/api/og?type=blog&title=${blogData.title}`} />
            </Head>
            <div className='max-w-full prose dark:prose-invert'>
                <Blog blogData={blogData} />
            </div>
        </>
    );
}

export async function getStaticPaths({ preview = false }) {
    const slugs = await getClient(preview).fetch(allSlugs);

    return {
        paths: slugs.map(({ slug }) => {
            return { params: { slug: slug.current } };
        }),
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params, preview = true }) {
    const { slug = '' } = params;
    let blogData = await getClient(preview).fetch(
        groq`
    *[_type == 'blog' && slug.current == $slug][0] {
        title,
        created,
        data,
        "readingTime": round(length(data) / 7 / 365)
    }
    `,
        { slug }
    );
    blogData.data = await parseMdx(blogData.data);

    return {
        props: { blogData }
    };
}
