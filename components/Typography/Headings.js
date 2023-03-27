const Base = ({ children, mono, italic = false, className }) => (
    <h1 className={`${mono && 'mono'} ${italic && 'italic'} font-semibold text-darker dark:text-lighter ` + className}>
        {children}
    </h1>
);

export const H1 = ({ className, children, ...props }) => (
    <Base {...props} className={'text-4xl my-4 ' + className}>
        {children}
    </Base>
);

export const H2 = ({ className, children, ...props }) => (
    <Base {...props} className={'text-3xl my-3 ' + className}>
        {children}
    </Base>
);

export const H3 = ({ className, children, ...props }) => (
    <Base {...props} className={'text-2xl my-2 ' + className}>
        {children}
    </Base>
);

export const H4 = ({ className, children, ...props }) => (
    <Base {...props} className={'text-xl my-1 ' + className}>
        {children}
    </Base>
);

export const H5 = ({ className, children, ...props }) => (
    <Base {...props} className={'text-lg my-1 ' + className}>
        {children}
    </Base>
);

export const H6 = ({ className, children, ...props }) => (
    <Base {...props} className={'text-base my-1 ' + className}>
        {children}
    </Base>
);
