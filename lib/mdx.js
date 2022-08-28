import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';

const rootfolder = process.cwd();

const getAllBlogsPath = () => {
  return fs
    .readdirSync(path.join(rootfolder, '/blogs'))
    .map((file) => file.replace('.mdx', ''));
};

const getBlogContents = async (slug) => {
  return fs.readFileSync(path.join(rootfolder, `/blogs/${slug}.mdx`), {
    encoding: 'utf-8'
  });
};

const parseMdx = async (source) => {
  return await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypePrism, rehypeCodeTitles, rehypeKatex],
      format: 'mdx'
    }
  });
};

export { getAllBlogsPath, getBlogContents, parseMdx };
