import type { IconType } from 'react-icons/lib'

export type BadgeSize = 'sm' | 'md' | 'lg'

export default function Badge({ size, Icon, colorClass }: { size: BadgeSize; Icon: IconType; colorClass: string }) {
    let widthAndHeight = ''
    switch (size) {
        case 'md':
            widthAndHeight = 'w-[22px] h-[22px]'
            break
        case 'md':
            widthAndHeight = 'w-6 h-6'
            break
        case 'lg':
            widthAndHeight = 'w-[26px] h-[26px]'
            break
        default:
            widthAndHeight = 'w-[22px] h-[22px]'
    }
    return (
        <>
            <span
                className={`inline-flex items-center p-[6px] mr-2 text-sm font-semibold rounded-full ${widthAndHeight} ${
                    colorClass ? colorClass : 'bg-gray-700 text-gray-300'
                }`}
            >
                <Icon />
            </span>
        </>
    )
}
