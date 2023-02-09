import Head from 'next/head';
import Profile from '@/components/views/Profile';
import { recentPosts } from '@/lib/queries';
import { getClient } from '@/lib/sanity-server';
import BlogPreview from '@/components/views/BlogPreview';
import { H2 } from '@/components/Typography/Headings';

export default function Home({ recentBlogs }) {
  return (
    <div>
      <Head>
        <title>Rstha | Welcome</title>
      </Head>

      <main>
        <Profile />
        <div className='mt-8'>
          <H2 className='mb-6'>Recent Blogs</H2>
          {recentBlogs.map((blog, i) => {
            return (
              <div className='mb-6' key={i}>
                <BlogPreview preViewData={blog} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ preview = true }) {
  const recentBlogs = await getClient(preview).fetch(recentPosts);
  return {
    props: {
      recentBlogs
    }
  };
}
