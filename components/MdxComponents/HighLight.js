import React from 'react';
export default function HighLight({ children, color, fontWeight }) {
  return (
    <span
      className='font-semibold'
      style={{
        color: color ? color : '#d44c47',
        fontWeight: fontWeight ? fontWeight : '600'
      }}
    >
      {children}
    </span>
  );
}
