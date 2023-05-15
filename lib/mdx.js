import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypePrism from 'rehype-prism-plus'
import { compileMDX } from 'next-mdx-remote/rsc'
import { Callout, Caption, HighLight, ImageFlexBox, ImageWithCaption, Math } from '@/components/MdxComponents'

const rootfolder = process.cwd()

const components = {
    HighLight,
    ImageWithCaption,
    ImageFlexBox,
    Callout,
    Math,
    Caption,
}

const getAllBlogsPath = () => {
    return fs.readdirSync(path.join(rootfolder, '/blogs')).map((file) => file.replace('.mdx', ''))
}

const getBlogContents = async (slug) => {
    return fs.readFileSync(path.join(rootfolder, `/blogs/${slug}.mdx`), {
        encoding: 'utf-8',
    })
}

const parseMdx = async (source) => {
    return await serialize(source, {
        parseFrontmatter: true,
        mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeKatex, rehypeSlug],
            format: 'mdx',
        },
    })
}

const serverParseMdx = async (data) => {
    const { content } = await compileMDX({
        source: data,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm, remarkMath],
                rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeKatex, rehypeSlug],
                format: 'mdx',
            },
        },
        components,
    })
    return content
}

export { getAllBlogsPath, getBlogContents, parseMdx, serverParseMdx }
