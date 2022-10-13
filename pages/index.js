import Head from 'next/head';
import Profile from '@/components/views/Profile';
import MsgForm from '@/components/views/MsgForm';
import { recentPosts } from '@/lib/queries';
import { getClient } from '@/lib/sanity-server';
import BlogPreview from '@/components/views/BlogPreview';

export default function Home({ recentBlogs }) {
  return (
    <div className='mt-4'>
      <Head>
        <title>Rstha | Welcome</title>
      </Head>

      <main>
        <Profile />
        <div className='mt-8'>
          <p className='text-3xl font-semibold mt-4 mb-2'>Recent Blogs</p>
          {recentBlogs.map((blog, i) => {
            return (
              <div key={i}>
                <BlogPreview preViewData={blog} />
              </div>
            );
          })}
        </div>
        <div className='w-full mt-12'>
          <MsgForm />
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
