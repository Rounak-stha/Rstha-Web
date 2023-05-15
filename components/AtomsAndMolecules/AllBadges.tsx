import { Check, Cross } from '../Icons'
import Badge from './Badge'
import type { BadgeSize } from './Badge'

interface Props {
    size?: BadgeSize
}

export function CheckBadge({ size = 'sm' }: Props) {
    return <Badge size={size} Icon={Check} colorClass="bg-green-1 text-green-12" />
}

export function CrossBadge({ size = 'sm' }: Props) {
    return <Badge size={size} Icon={Cross} colorClass="bg-red-1 text-red-12" />
}
