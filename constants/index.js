import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    name: 'Github',
    href: 'https://github.com/rounak-stha',
    Icon: AiFillGithub,
    style: {}
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rstha1/',
    Icon: FaLinkedin,
    style: { color: '#0A66C2' }
  },
  {
    name: 'Mail',
    href: 'mailto:rsthaofficial@gmail',
    Icon: AiOutlineMail,
    style: { color: 'red' }
  }
];
const navItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Messages',
    href: '/messages'
  },
  {
    name: 'More',
    href: '/more'
  }
];

export { socials, navItems };
