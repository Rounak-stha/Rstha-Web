interface Props {
    children: React.ReactNode
    italic?: boolean
    mono?: boolean
    bold?: boolean
    semibold?: boolean
    className?: string
}

const Base = ({ children, mono, bold = false, semibold = false, italic = false, className }: Props) => (
    <p
        className={
            `mt-4 text-base leading-copy text-editorial-copy ${mono && 'mono'} ${bold && 'font-bold'} ${semibold && 'font-semibold'} ${italic && 'italic'} ` +
            className
        }
    >
        {children}
    </p>
)

export const P1 = ({ className, children, ...props }: Props) => (
    <Base {...props} className={'text-editorial-lede ' + className}>
        {children}
    </Base>
)

export const P2 = ({ className, children, ...props }: Props) => (
    <Base {...props} className={'text-editorial-body ' + className}>
        {children}
    </Base>
)

export const P3 = ({ className, children, ...props }: Props) => (
    <Base {...props} className={'text-sm ' + className}>
        {children}
    </Base>
)

export const P4 = ({ className, children, ...props }: Props) => (
    <Base {...props} className={'text-xs ' + className}>
        {children}
    </Base>
)
