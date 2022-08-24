import Link from 'next/link';

export default function BlogPreview({ preViewData }) {
  const { title, slug, excerpt, created, readingTime } = preViewData;
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
