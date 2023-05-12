'use client'

import { useState, useEffect } from 'react'
import { BsSpotify } from 'react-icons/bs'
import PlayingAnimation from './PlayingAnimation'
import type { Song } from '@/lib/spotify'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL

export default function CurrentlyPlaying() {
    const [song, setSong] = useState<Song | null>(null)

    useEffect(() => {
        fetch(APP_URL + '/api/currentlyPlaying')
            .then((res) => {
                if (!res.ok) throw ''
                return res.json()
            })
            .then((data) => setSong(data))
            .catch(() => false)
    }, [])

    setInterval(() => {
        fetch(APP_URL + '/api/currentlyPlaying')
            .then((res) => {
                if (!res.ok) throw ''
                return res.json()
            })
            .then((res) => setSong(res.data))
            .catch(() => false)
    }, 180000)

    return (
        <span className="font-semibold text-gray-600 dark:text-gray-300">
            <span className="mr-1">
                <BsSpotify className="inline" fill="#1DB954" size="1rem" />
            </span>
            <span className="text-sm">{song ? `Currently Playing: ${song.name} - ${song.artist}` : 'Not playing'}</span>
            {song && <PlayingAnimation color="#1DB954" />}
        </span>
    )
}
