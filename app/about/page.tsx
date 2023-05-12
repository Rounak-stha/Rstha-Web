import { Suspense } from 'react'
import CurrentlyPlaying from '@/components/views/CurrentlyPlaying'
import TweetSkeleton from '@/components/views/TweetSkeleton'
import { H2, H4 } from '@/components/Typography/Headings'
import { ABOUT_ME, REACH_OUT } from '../../constants'
import SocialLinks from '@/components/views/SocialLinks'
import { P2 } from '@/components/Typography/ParaGraph'
import Tracks from './components/Tracks'
import LikedTweets from './components/LikedTweets'
import RecentTweets from './components/RecentTweets'
import Projects from './components/Projects'

export const metadata = {
    title: 'Rstha | About',
}

export default function More() {
    return (
        <div>
            <div className="mb-8">
                <H2 className="mt-0">Me</H2>
                {ABOUT_ME.map((text, i) => (
                    <P2 key={i}>{text}</P2>
                ))}
            </div>
            <div className="mb-8">
                <H2>Reach Out</H2>
                <P2 className="mb-4">{REACH_OUT}</P2>
                <SocialLinks />
            </div>
            <div id="projects" className="mb-8">
                <H2>Recent Projects</H2>
                <Projects />
            </div>
            <div className="mb-8">
                <div className="flex items-center flex-wrap">
                    <H2 className="mr-2 !my-0">Music</H2>
                    <CurrentlyPlaying />
                </div>
                <H4 className="my-1">Tracks on Repeat</H4>
                {/* @ts-expect-error Server Component */}
                <Tracks />
            </div>
            <div className="mb-8" id="recent_tweets">
                <H2 className="font-semibold">Recent Tweets</H2>
                <Suspense fallback={<TweetSkeleton />}>
                    {/* @ts-expect-error Server Component */}
                    <RecentTweets />
                </Suspense>
            </div>
            <div className="mb-2">
                <H2 className="font-semibold">Last Liked Tweet</H2>
                <Suspense fallback={<TweetSkeleton />}>
                    {/* @ts-expect-error Server Component */}
                    <LikedTweets />
                </Suspense>
            </div>
        </div>
    )
}
