import { useState } from 'react'
import { allPosts } from '@/lib/queries'
import { getClient } from '@/lib/sanity-server'
import BlogPreview from '@/components/views/BlogPreview'
import Head from 'next/head'
import Input from '@/components/AtomsAndMolecules/Input'
import { H2 } from '@/components/Typography/Headings'

export default function Blog({ blogs }) {
    const [searchText, setSearchText] = useState('')

    return (
        <>
            <Head>
                <title>Rstha | Blog</title>
            </Head>
            <div>
                <Input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search"
                />
                <H2 className="text-3xl mt-8 mb-6">{searchText ? 'Searched Blogs' : 'All Blogs'}</H2>
                {!searchText
                    ? blogs.map((blog, i) => {
                          return (
                              <div key={i} className="mb-6">
                                  <BlogPreview preViewData={blog} />
                              </div>
                          )
                      })
                    : blogs
                          .filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()))
                          .map((blog, i) => {
                              return (
                                  <div key={i}>
                                      <BlogPreview preViewData={blog} />
                                  </div>
                              )
                          })}
            </div>
        </>
    )
}

export async function getStaticProps({ preview = true }) {
    const blogs = await getClient(preview).fetch(allPosts)
    return {
        props: {
            blogs,
        },
    }
}
