import { useState } from 'react';
import { allPosts } from '@/lib/queries';
import { getClient } from '@/lib/sanity-server';
import Link from 'next/link';
import BlogPreview from '@/components/views/BlogPreview';
import Head from 'next/head';

function BlogCard({ blog }) {
  const { title, slug, excerpt, created, readingTime } = blog;
  return (
    <div className='mt-4 mb-6'>
      <Link href={`/blog/${slug.current}`}>
        <a>
          <p className='text-xl font-semibold mb-1'>{title}</p>
          <p className='text-sm text-gray-600 mb-1'>
            {created} . {readingTime} min read
          </p>
          <p className='text-gray-900 dark:text-gray-400'>{excerpt}</p>
        </a>
      </Link>
    </div>
  );
}

export default function Blog({ blogs }) {
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <Head>
        <title>Rstha | Blog</title>
      </Head>
      <div>
        <input
          type='text'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='Search'
          className='bg-input-light dark:bg-input-dark w-full rounded-lg px-4 py-2 mb-4 border-2 border-gray-200 dark:border-none   focus:border-none focus:outline outline-2 outline-purp-light dark:outline-purp-bdr-dark'
        />
        <p className='text-3xl font-bold my-4'>
          {searchText ? 'Searched Blogs' : 'All Blogs'}
        </p>
        {!searchText
          ? blogs.map((blog, i) => {
              return (
                <div key={i}>
                  <BlogPreview preViewData={blog} />
                </div>
              );
            })
          : blogs
              .filter(({ title }) =>
                title.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((blog, i) => {
                return (
                  <div key={i}>
                    <BlogCard blog={blog} />
                  </div>
                );
              })}
      </div>
    </>
  );
}

export async function getStaticProps({ preview = true }) {
  const blogs = await getClient(preview).fetch(allPosts);
  return {
    props: {
      blogs
    }
  };
}
