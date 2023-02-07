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
import { H2, H3, H4, H5 } from '@/components/Typography/Headings';
import { ABOUT_ME, REACH_OUT } from '../constants';
import SocialLinks from '@/components/views/SocialLinks';

export default function More({ t3Tracks }) {
  const [tracks, setTracks] = useState(t3Tracks);
  const [currentlyPlaying, setCurrentlyPlaying] = useState('');

  let { data: likedTweets, isValidating: loadingLikedTweets, error: likedTweetsError } = useSWR('/api/getLikedTweets',  swrFetcher, swrOptions)
  let { data: recentTweets, isValidating: loadingRecentTweets, error: recentTweetsError } = useSWR('/api/getRecentTweets',  swrFetcher, swrOptions)
  useEffect(() => {
    if (likedTweetsError || recentTweetsError) handleNetworkRequestError(likedTweetsError || recentTweetsError)
  }, [likedTweetsError, recentTweetsError])

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
        <title>Rstha | About</title>
      </Head>
      <div>
        <div className='mb-8'>
          <H2>Me</H2>
          {
            ABOUT_ME.map((text, i) => <H5 key={i}>{text}</H5>)
          }
        </div>
        <div className='mb-8'>
          <H2>Reach Out</H2>
          <H5>{ REACH_OUT }</H5>
          <SocialLinks />
        </div>
        <div className='mb-8'>
          <div className='flex items-center flex-wrap'>
            <H2 className='mr-2 my-0'>Music</H2>
            <CurrentlyPlaying song={currentlyPlaying} />
          </div>
          <H4 className='my-1'>Tracks on Repeat</H4>
          {tracks.map((track) => {
            return <Track key={track.spotifyId} track={track} />;
          })}
        </div>
        <div className='mb-2'>
          { !recentTweetsError && <H2 className='font-semibold'>Recent Tweets</H2> }
          <div className=''>
            {
              recentTweets ? 
                recentTweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)
                : loadingRecentTweets && [1,2,3].map((i) => <TweetSkeleton key={i} />)
            }
          </div>
        </div>
        <div className='mb-2'>
          { !likedTweetsError && <H2 className='font-semibold'>Last Liked Tweet</H2> }
          <div className=''>
            {
              likedTweets ? 
                likedTweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)
                : loadingLikedTweets && [1,2,3].map((i) => <TweetSkeleton key={i} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const t3Tracks = await prisma.t3Tracks.findMany({ orderBy: [{ roll: 'asc'}]})
  return { props: { t3Tracks }}
}