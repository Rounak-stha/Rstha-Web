import { useEffect } from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') document.documentElement.classList.add(theme);
    }, []);
    return (
        <>
            <div className='w-full'>
                <div className='xl:w-[800px] lg:w-2/3 sm:w-4/5 mx-auto pt-4 px-4 sm:px-8'>
                    <Nav />
                    <div className='py-4'>{children}</div>
                    <hr className='max-w-full prose border-[color:var(--tw-prose-hr)] dark:border-[color:var(--tw-prose-invert-hr)] my-3' />
                    <Footer />
                </div>
            </div>
        </>
    );
}
