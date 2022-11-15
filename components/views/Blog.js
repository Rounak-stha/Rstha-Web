import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import HighLight from '../MdxComponents/HighLight';
import ImageWithCaption from '../MdxComponents/ImageWithCaption';
import ImageFlexBox from '../MdxComponents/ImageFlexBox';
import MsgForm from './MsgForm';
import Callout from '../MdxComponents/Callout';
import Math from '../MdxComponents/Math';
import Caption from '../MdxComponents/Caption';
import { H1, H2 } from '../Typography/Headings';
import { P3 } from '../Typography/ParaGraph';

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
      </Head>
      <article>
        <H1 className='text-xl sm:text-4xl font-[800] mt-0 mb-2'>{title}</H1>
        <P3 className='mt-0 mb-4'>
          {created} . {readingTime} min read
        </P3>
        <MDXRemote {...data} components={components} />
        <p>If found any error or mistake in this blog post, please do not hesitate to <a className='italic font-bold' href='mailto:rsthaofficial@gmail.com'>reach out</a> to me.</p>
        <MsgForm className='not-prose' />
      </article>
    </>
  );
}
