import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si'
import { IoLogoTwitter } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    name: 'Github',
    href: 'https://github.com/rounak-stha',
    Icon: AiFillGithub,
    style: {}
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/IamRstha',
    Icon: IoLogoTwitter,
    style: { color: '#1DA1F2' }
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
    Icon: SiGmail,
    style: { color: '#BB001B' }
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
