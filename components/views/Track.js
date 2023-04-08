import { useState, useEffect } from 'react'
import { RiMusic2Fill } from 'react-icons/ri'
import { motion } from 'framer-motion'

import PlayingAnimation from './PlayingAnimation'
import { P2, P3, P4 } from '../Typography/ParaGraph'

export default function Track({ track }) {
    const [playing, setPlaying] = useState(false)

    const { name, artist, spotifyId, previewUrl } = track
    useEffect(() => {
        const tracks = document.getElementsByTagName('audio')
        Object.keys(tracks).forEach((audio) => (tracks[audio].volume = 0.2))
    }, [])
    return (
        <div
            className="flex items-start cursor-pointer"
            title={previewUrl ? 'Tap to Play Preview' : "Can't Play"}
            onPause={() => setPlaying(false)}
            onClick={() => {
                const allAudios = document.getElementsByTagName('audio')
                Object.keys(allAudios).forEach((audio) => {
                    if (allAudios[audio].getAttribute('id') === spotifyId) return
                    if (!allAudios[audio].paused) allAudios[audio].pause()
                })
                const audioElem = document.getElementById(spotifyId)
                if (!audioElem.getAttribute('src')) return
                if (audioElem.paused) {
                    audioElem.play()
                    setPlaying(true)
                } else audioElem.pause()
            }}
        >
            <div className="text-[1.4rem] mt-1.5 mr-2 w-6">
                {playing ? (
                    <PlayingAnimation />
                ) : (
                    <>
                        <svg width="0" height="0">
                            <linearGradient id="music-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop stopColor="#FF1493" offset="0%" />
                                <stop stopColor="#C71585" offset="25%" />
                                <stop stopColor="#FFB6C1" offset="90%" />
                            </linearGradient>
                        </svg>
                        <span className="animate-pulse">
                            <RiMusic2Fill style={{ fill: 'url(#music-gradient)' }} />
                        </span>
                    </>
                )}
            </div>
            <div className="my-1" key={name} onMouseEnter={() => {}}>
                <P2 className="font-semibold leading-[1em]">{name}</P2>
                <P3 className="text-gray-600 dark:text-gray-400">{artist}</P3>
                {spotifyId && <audio className="hidden" controls id={spotifyId} src={previewUrl} />}
            </div>
        </div>
    )
}
