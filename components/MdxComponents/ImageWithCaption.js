import Image from 'next/image'
import React from 'react'

export default function ImageWithCaption({ image }) {
    const { src, caption, width, height } = image
    return (
        <figure className="w-full">
            {width && height ? (
                <Image className="mx-auto rounded-lg" src={src} alt={caption} width={width} height={height} />
            ) : (
                <>
                    <div className={`relative w-full ${!height ? 'h-48 md:h-80' : 'h-56 sm:h-72 md:h-96'} rounded-lg`}>
                        <Image
                            className="mx-auto rounded-lg"
                            src={src}
                            alt={caption}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </>
            )}
            <figcaption align="center">
                <span className="italic text-sm">{caption}</span>
            </figcaption>
        </figure>
    )
}
