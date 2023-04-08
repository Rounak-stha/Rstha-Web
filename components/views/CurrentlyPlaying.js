import { BsSpotify } from 'react-icons/bs'
import PlayingAnimation from './PlayingAnimation'

export default function CurrentlyPlaying({ song }) {
    return (
        <span className="font-semibold text-gray-600 dark:text-gray-300">
            <span className="mr-1">
                <BsSpotify className="inline" fill="#1DB954" size="1rem" />
            </span>
            <span className="text-sm">{song ? `Currently Playing: ${song.name} - ${song.artist}` : 'Not playing'}</span>
            {song && <PlayingAnimation className="inline-block" color="#1DB954" />}
        </span>
    )
}
