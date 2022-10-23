import { H3 } from '../Typography/Headings';
import SocialLinks from './SocialLinks';

export default function Profile() {
  return (
    <div>
      <div className='mb-4'>
        <H3 className='mt-0'>
          Hey <span className='wave-emoji'>👋</span>, welcome! I am Rounak
          Shrestha. I enjoy blogging, coding, playing table tennis, watching
          Anime. I would love to know about you too. Write to me or lets
          connect.
        </H3>
      </div>
      <SocialLinks center />
    </div>
  );
}
