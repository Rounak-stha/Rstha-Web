import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='dark' lang='en'>
      <Head>
        <link rel='icon' type='image/x-icon' href='/favicon.png' />
        <meta name='description' content="Welcome to Rounak Shrestha's website. Visit to know more about him and read awesome blogs." />
        <meta name="keywords" content="Rounak Shrestha, Rstha, Rounak Stha, Blog" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='dark:bg-back-dark bg-back-light text-dark dark:text-light text-[1.07rem]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Roboto Mono
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.css" integrity="sha384-1IGr2Yb8xuHjwTG+WoGjj2+I/a/N6z0gDD5YIGCQxywPROOKc3+orbn/R7arWQxD" crossOrigin="anonymous" />

// IBM Plex Sans
//<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

// <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
