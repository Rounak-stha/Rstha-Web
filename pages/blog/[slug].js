import Blog from '@/components/views/Blog';
import { parseMdx } from '@/lib/mdx';
import { getClient } from '@/lib/sanity-server';
import { allSlugs, postWithData } from '@/lib/queries';
import { groq } from 'next-sanity';
import Head from 'next/head';

export default function slug({ blogData }) {
  return (
    <>
      <Head>
        <title>{blogData.title}</title>
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
