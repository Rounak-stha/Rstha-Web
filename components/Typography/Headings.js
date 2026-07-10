const Base = ({ as: Tag, children, mono = false, italic = false, className = '' }) => (
    <Tag className={`${mono && 'mono'} ${italic && 'italic'} font-semibold tracking-heading text-editorial-text ${className}`}>
        {children}
    </Tag>
)

export const H1 = ({ className = '', children, ...props }) => (
    <Base as="h1" {...props} className={'my-0 text-editorial-display ' + className}>
        {children}
    </Base>
)

export const H2 = ({ className = '', children, ...props }) => (
    <Base as="h2" {...props} className={'my-0 text-editorial-section ' + className}>
        {children}
    </Base>
)

export const H3 = ({ className = '', children, ...props }) => (
    <Base as="h3" {...props} className={'my-0 text-editorial-subsection ' + className}>
        {children}
    </Base>
)

export const H4 = ({ className = '', children, ...props }) => (
    <Base as="h4" {...props} className={'my-0 text-editorial-project ' + className}>
        {children}
    </Base>
)

export const H5 = ({ className = '', children, ...props }) => (
    <Base as="h5" {...props} className={'my-0 text-base leading-snug ' + className}>
        {children}
    </Base>
)

export const H6 = ({ className = '', children, ...props }) => (
    <Base as="h6" {...props} className={'my-0 text-sm leading-snug ' + className}>
        {children}
    </Base>
)
