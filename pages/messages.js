import { useEffect, useState } from 'react';
import Head from 'next/head';
import MsgForm from '@/components/views/MsgForm';
import useSWR from 'swr';
import { swrFetcher, swrOptions } from '@/lib/swr';
import { handleNetworkRequestError } from '@/lib/error';
import { parse } from 'cookie';
import { P2, P3 } from '@/components/Typography/ParaGraph';

const N_COOKIE_NAME = process.env.NEXT_PUBLIC_N_COOKIE_NAME

export default function Message() {
  const { data: messages, isValidating, error } = useSWR('/api/message', swrFetcher, swrOptions)
  const [newMessage, setNewMessage] = useState(null)
  const [messager, setMessager] = useState('')

  useEffect(() => { 
    const messager = parse(document.cookie)[N_COOKIE_NAME]
    if (messager) setMessager(messager)
  }, [])

  useEffect(() => { if (error) handleNetworkRequestError(error) }, [error])

  if (newMessage) {
    messages.unshift(newMessage)
    setNewMessage(null)
  }

  return (
    <>
      <Head>
        <title>Rstha | Messages</title>
      </Head>
      <div>
        <MsgForm messager={messager} setNewMessage={setNewMessage} />
        {messages && messages.map(({ name, message, date }, i) => (
          <div key={name + i} className='my-5'>
            <P2 className='mb-1'>{message}</P2>
            <P3 className='font-semibold'>
              {name ? name : '______'}
              <span className='inline-block ml-3'>{date}</span>
            </P3>
          </div>
        ))} 
        { isValidating && (
          ['a','b','c','d','e','f'].map(i => {
            let msgWidth = Math.ceil(80 * (Math.random() + 1))
            let nameWidth = Math.ceil(40 * (Math.random() + 1))
            return (
            <div key={i} className='my-5'>
              <p style={{width: msgWidth + 'px'}} className='mb-1 skeleton h-4 rounded-lg'></p>
              <p style={{width: nameWidth + 'px'}} className='skeleton h-3 rounded-lg'>
              </p>
          </div>
          )})
        )}
      </div>
    </>
  );
}