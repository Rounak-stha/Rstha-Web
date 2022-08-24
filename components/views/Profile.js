import SocialLinks from './SocialLinks';

export default function Profile() {
  return (
    <div>
      <div className='text-2xl font-semibold mb-4'>
        <p className=''>
          Hey <span className='wave-emoji'>👋</span>, welcome! I am Rounak
          Shrestha. I enjoy blogging, coding, playing table tennis, watching
          Anime. I would love to know about you too. Write to me or lets
          connect.
        </p>
      </div>
      <SocialLinks center />
    </div>
  );
}
