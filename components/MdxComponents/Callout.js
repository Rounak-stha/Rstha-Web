import React from 'react'
import { AiOutlineInfoCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdOutlineDangerous } from 'react-icons/md'

const iconType = {
    question: {
        Icon: AiOutlineQuestionCircle,
        text: 'Question',
    },
    info: {
        Icon: AiOutlineInfoCircle,
        text: 'Info',
    },
    danger: {
        Icon: MdOutlineDangerous,
        text: 'Danger',
    },
    warning: {
        Icon: MdOutlineDangerous,
        text: 'Warning',
    },
}

const getContainerClass = (type) => {
    switch (type) {
        case 'info':
            return 'dark:bg-blue-14 dark:border-blue-13 dark:text-blue-1 bg-blue-0 border-blue-1 text-blue-12'
        case 'warning':
            return 'dark:bg-yellow-14 dark:border-yellow-13 dark:text-yellow-1 bg-yellow-0 border-yellow-1 text-yellow-12 selection:bg-yellow-05 selection:text-yellow-7'
        case 'question':
            return 'dark:bg-green-14 dark:border-green-13 dark:text-green-1 bg-green-0 border-green-1 text-green-12 selection:bg-green-05 selection:text-green-7'
        case 'danger':
            return 'dark:bg-red-14 dark:border-red-13 dark:text-red-1 bg-red-0 border-red-1 text-red-12 selection:bg-red-05 selection:text-red-7'
    }
}

const getTitleColorClass = (type) => {
    switch (type) {
        case 'info':
            return 'text-blue-9 dark:text-blue-0 border-b-[1px] border-blue-2 dark:border-blue-10'
        case 'warning':
            return 'text-yellow-9 dark:text-yellow-0 border-b-[1px] border-yellow-2 dark:border-yellow-10'
        case 'question':
            return 'text-green-9 dark:text-green-0 border-b-[1px] border-green-2 dark:border-green-10'
        case 'danger':
            return 'text-red-9 dark:text-red-0 border-b-[1px] border-red-2 dark:border-red-10'
    }
}

export default function Callout({ type = 'info', children, bold }) {
    const Icon = iconType[type] ? iconType[type].Icon : iconType['info'].Icon
    const containerClass = getContainerClass(type)
    const titleColorClass = getTitleColorClass(type)

    type = iconType[type] ? iconType[type].text : iconType['info'].text

    return (
        <div className={`not-prose p-4 px-5 rounded-lg border-2 ${containerClass}`} style={{}}>
            <div className={`flex border-0 items-center pb-1 mb-1 text-xl ${titleColorClass}`}>
                <div className={`mr-[0.6rem]`}>
                    <Icon size={20} />
                </div>
                <span className="font-semibold">{type}</span>
            </div>
            <div className={`text-justify ${bold ? 'font-bold' : ''}`}>{children}</div>
        </div>
    )
}
