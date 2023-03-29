import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { IoLogoTwitter } from 'react-icons/io';
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
        name: 'Design',
        href: '/design'
    },
    {
        name: 'About',
        href: '/about'
    }
];

export const projects = [
    {
        name: 'Rstha Web',
        link: 'https://www.rounakstha.me',
        about: "Rounak Shrestha's portfolio + blog site",
        tech: ['Nextjs', 'Tailwind', 'PlanetScale', 'Sanity.io']
    },
    {
        name: 'Snote',
        link: 'https://snote-md.vercel.app/',
        about: 'A short note taking app with markdown editor for rich text formatting and elegant note structure with the power of code highlighting',
        tech: ['Nextjs 13 with TypeScript', 'MD-Editor']
    },
    {
        name: 'MD-Editor',
        github: 'https://github.com/rounak-stha/markdown-editor',
        link: 'https://md-editor-web.vercel.app/',
        about: 'A light package to add markdown powered editor on your web app. Demo can be viewed on the link above with synced MD-HTML parsing. Contributions are highly appreciated',
        plans: ['Add additional key bindings', 'Make the theme more elegant'],
        tech: ['Codemirror', 'Unified Ecosystem']
    },
    {
        name: 'API Docs',
        link: 'https://api-docs-app.vercel.app/',
        about: 'Document your API by writting your API specs in JSON',
        plans: ['Reformat the JSON structure', 'Add a demo page of a demo API'],
        tech: ['React', 'Codemirror']
    },
    {
        name: 'GitHuh Repo Search',
        link: 'https://ghub-repo-search.netlify.app/',
        about: 'Github Repository Search Helper',
        plans: ['NO FUTURE PLANS'],
        tech: ['React']
    }
];
export { socials, navItems };
export * from './texts';
