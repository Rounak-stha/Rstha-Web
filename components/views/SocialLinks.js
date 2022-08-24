import { socials } from '../../constants';

export default function SocialLinks({ center }) {
  return (
    <div
      className={`flex gap-4 items-center ${center ? 'justify-center' : ''}`}
    >
      {socials.map(({ href, Icon, style }) => (
        <a
          className='hover:scale-125 transition ease-in-out'
          key={href}
          target='_blank'
          rel='noreferrer' 
          href={href}
        >
          <Icon style={{ fontSize: '2em', ...style }} />
        </a>
      ))}
    </div>
  );
}
