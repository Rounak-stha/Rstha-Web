import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import HighLight from '../MdxComponents/HighLight';
import ImageWithCaption from '../MdxComponents/ImageWithCaption';
import ImageFlexBox from '../MdxComponents/ImageFlexBox';
import MsgForm from './MsgForm';
import Callout from '../MdxComponents/Callout';
import Math from '../MdxComponents/Math';
import Caption from '../MdxComponents/Caption';

// https://mdxjs.com/

const components = {
  HighLight,
  ImageWithCaption,
  ImageFlexBox,
  MsgForm,
  Callout,
  Math,
  Caption
};

export default function Blog({ blogData }) {
  const { title, created, readingTime, data } = blogData;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <article>
        <h1 className='text-xl sm:text-3xl mb-2'>{title}</h1>
        <p className='text-sm mt-0 mb-4'>
          {created} . {readingTime} min read
        </p>
        <MDXRemote {...data} components={components} />
        <MsgForm className='not-prose' />
      </article>
    </>
  );
}
