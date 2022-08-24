import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggleBtn from '../ThemeToggleBtn';
import { navItems } from '../../constants';

export default function Nav() {
  const router = useRouter();
  const currPath = '/' + router.pathname.split('/')[1].toLowerCase();

  return (
    <div className='flex items-center h-20 py-4'>
      <div className='flex-1 flex'>
        {navItems.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a
              className={`${
                href === currPath
                  ? 'text-black dark:text-sky-50'
                  : 'text-gray-500 dark:text-gray-400'
              } mr-2 font-semibold cursor-pointer inline-block p-1 sm:px-4 sm:py-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all`}
            >
              {name}
            </a>
          </Link>
        ))}
      </div>
      <ThemeToggleBtn />
    </div>
  );
}
