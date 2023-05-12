import { H2, H4, H5 } from '@/components/Typography/Headings'
import { P2 } from '@/components/Typography/ParaGraph'
import { projects } from '@/constants/index'
import { AiFillGithub } from 'react-icons/ai'

export default function Projects() {
    return (
        <>
            {projects.map(({ name, link, about, tech, github, plans }) => (
                <div className="my-4" key={name}>
                    <div className="flex items-center">
                        <a href={link}>
                            <H4 className="mr-2 !text-blue-500 hover:underline">{name}</H4>
                        </a>
                        {github && (
                            <a href={github}>
                                <span>
                                    <AiFillGithub />
                                </span>
                            </a>
                        )}
                    </div>
                    <P2>{about}</P2>

                    <div className="flex items-center gap-4">
                        <H5>Tech:</H5>
                        {tech.map((t) => (
                            <span key={t} className="text-xs px-3 pt-[3px] pb-1 border border-slate-500 rounded-md">
                                {t}
                            </span>
                        ))}
                    </div>
                    {plans && (
                        <>
                            <H5>Future Plans</H5>
                            <div className="ml-6">
                                {plans.map((p) => (
                                    <li>{p}</li>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </>
    )
}
