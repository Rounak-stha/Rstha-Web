import React from 'react';
import Caption from './Caption';
export default function ImageWithCaption({ image }) {
  const { src, caption, width } = image;
  return (
    <figure className=''>
      <img
        className='mx-auto rounded-lg'
        src={src}
        alt={caption}
        style={{ width }}
      />
      <figcaption align='center'>
        <span className='italic'>{caption}</span>
      </figcaption>
    </figure>
  );
}
