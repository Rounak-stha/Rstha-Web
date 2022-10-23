import { useState, useEffect } from 'react';
import axios from 'axios';
import Track from '@/components/views/Track';
import CurrentlyPlaying from '@/components/views/CurrentlyPlaying';
import Head from 'next/head';
import prisma from '@/lib/prisma';
import Tweet from '@/components/views/Tweet';
import TweetSkeleton from '@/components/views/TweetSkeleton';
import useSWR from 'swr';
import { handleNetworkRequestError } from '@/lib/error';
import { swrFetcher, swrOptions } from '@/lib/swr';
import { P1 } from '@/components/Typography/ParaGraph';
import { H3, H4 } from '@/components/Typography/Headings';

export default function More({ t3Tracks }) {
  const [tracks, setTracks] = useState(t3Tracks);
  const [currentlyPlaying, setCurrentlyPlaying] = useState('');

  let { data: tweets, isValidating: loadingTweets, error: tweetsError } = useSWR('/api/getLikedTweets',  swrFetcher, swrOptions)
  
  useEffect(() => {
    if (tweetsError) handleNetworkRequestError(tweetsError)
  }, [tweetsError])

  useEffect(() => {
    axios
    .get('/api/currentlyPlaying')
    .then((res) => setCurrentlyPlaying(res.data));

    Promise.all(
      tracks.map(
        async (track) =>
          new Promise(async (resolve) => {
            if (track.previewUrl) resolve(track);
            else {
              if (track.spotifyId) {
                track.previewUrl = await axios
                  .get(`/api/getPreview/${track.spotifyId}`)
                  .then((res) => res.data);
              }
              resolve(track);
            }
          })
      )
    ).then((updatedTracks) => {
      setTracks(updatedTracks);
    });

    setInterval(() => {
      axios
        .get('/api/currentlyPlaying')
        .then((res) => setCurrentlyPlaying(res.data));
    }, 180000);
  }, []);

  return (
    <>
      <Head>
        <title>Rstha | More</title>
      </Head>
      <P1 className='mb-6 text-lg'>
        Playing with Spotify and Twitter API
      </P1>
      <div className='my-4'>
        <div className='flex items-center flex-wrap'>
          <H3 className='mr-2 my-0'>Music</H3>
          <CurrentlyPlaying song={currentlyPlaying} />
        </div>
        <H4 className='my-1'>Tracks on Repeat</H4>
        {tracks.map((track) => {
          return <Track key={track.spotifyId} track={track} />;
        })}
        { !tweetsError && <H3 className='font-semibold text-2xl mt-4'>Recently Liked Tweets</H3> }
        <div className=''>
          {
            tweets ? 
              tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)
              : loadingTweets && [1,2,3].map((i) => <TweetSkeleton key={i} />)
          }
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const t3Tracks = await prisma.t3Tracks.findMany({ orderBy: [{ roll: 'asc'}]})
  return { props: { t3Tracks }}
}