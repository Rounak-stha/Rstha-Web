import React from 'react';

const iconType = {
  Question: '❓',
  Info: '🤔',
  Warning: '⚠'
};

export default function Callout({ type, children, bold }) {
  return (
    <div
      className='not-prose p-4 px-5 rounded-lg bg-callout-light dark:bg-callout-dark dark:border-callout-dark-bdr'
      style={{}}
    >
      <div className='flex items-center mb-1'>
        <div
          className={`text-sm mr-[0.6rem] ${
            type === 'Warning' ? 'text-yellow-500' : ''
          }`}
        >
          {type ? iconType[type] : '💡'}
        </div>
        <span className='font-semibold'>{type}</span>
      </div>
      <div className={`text-justify ${bold ? 'font-bold' : ''}`}>
        {children}
      </div>
    </div>
  );
}
