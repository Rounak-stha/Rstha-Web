import { AiFillGithub } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { IoLogoTwitter } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'

const socials = [
    {
        name: 'Github',
        href: 'https://github.com/rounak-stha',
        Icon: AiFillGithub,
        style: {},
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/IamRstha',
        Icon: IoLogoTwitter,
        style: { color: '#1DA1F2' },
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rstha1/',
        Icon: FaLinkedin,
        style: { color: '#0A66C2' },
    },
    {
        name: 'Mail',
        href: 'mailto:rsthaofficial@gmail',
        Icon: SiGmail,
        style: { color: '#BB001B' },
    },
]
const navItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Blog',
        href: '/blog',
    },
    {
        name: 'Design',
        href: '/design',
    },
    {
        name: 'Work',
        href: '/about',
    },
]

export const projects = [
    {
        name: 'Histui',
        link: 'https://github.com/Rounak-stha/histui',
        about: 'A fast CLI for uncovering file coupling, contributor insights, and architectural patterns in Git history.',
        tech: ['Go', 'TypeScript'],
    },
    {
        name: 'TS Lox',
        link: 'https://github.com/Rounak-stha/tslox',
        about: 'A TypeScript implementation of Lox with custom keywords, including a Nepali-keyword demo.',
        tech: ['TypeScript', 'Rust'],
    },
    {
        name: 'Bit',
        link: 'https://github.com/Rounak-stha/bit',
        about: 'A JavaScript implementation of Git built to explore how Git works internally using a deliberately minimal toolset.',
        tech: ['JavaScript', 'Node.js'],
    },
    {
        name: 'Pulse',
        link: 'https://github.com/Rounak-stha/pulse',
        about: 'A Vendure-based commerce platform extended with shop-level multi-tenancy and a website builder.',
        tech: ['TypeScript', 'Node.js', 'Vendure'],
    },
]
export { socials, navItems }
