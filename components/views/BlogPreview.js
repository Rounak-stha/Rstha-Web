import Link from 'next/link';

export default function BlogPreview({ preViewData }) {
  const { title, slug, excerpt, created, readingTime } = preViewData;
  return (
    <div className='group'>
      <div className='h-4 mb-2 border-2 border-b-0 border-transparent group-hover:border-bdr-light rounded-md rounded-b-none dark:group-hover:border-bdr-dark'></div>
      <div className='hover:scale-95 transition ease-in-out'>
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
      <div className='h-4 mt-2 border-2 border-t-0 border-transparent group-hover:border-bdr-light rounded-md rounded-t-none dark:group-hover:border-bdr-dark '></div>
    </div>
  );
}