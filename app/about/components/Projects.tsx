import { projects } from '@/constants/index'

export default function Projects() {
    return (
        <div>
            {projects.map(({ name, link, about, tech, github, plans }) => (
                <article className="border-b border-editorial-rule py-10 first:pt-0 last:border-b-0" key={name}>
                    <h3 className="m-0 text-editorial-project font-semibold text-editorial-text">
                        <a className="text-editorial-text underline decoration-editorial-faint decoration-1 underline-offset-2 transition-colors hover:text-editorial-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editorial-text" href={link}>{name}</a>
                        {github && (
                            <a href={github} className="ml-3 text-editorial-footer font-medium text-editorial-muted transition-colors hover:text-editorial-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-editorial-text">
                                Repository
                            </a>
                        )}
                    </h3>
                    <p className="mt-2 text-editorial-copy text-editorial-subtle">{about}</p>
                    <p className="mt-3 text-editorial-meta font-medium text-editorial-muted">{tech.join(' · ')}</p>
                    {plans && (
                        <p className="mt-3 text-editorial-meta font-medium text-editorial-muted">Next: {plans.join(' · ')}</p>
                    )}
                </article>
            ))}
        </div>
    )
}
