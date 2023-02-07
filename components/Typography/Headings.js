const Base = ({ children, mono, italic=false, className }) => (
    <h1 className={`${mono && 'mono'} ${italic && 'italic'} font-semibold my-4 text-darker dark:text-lighter ` + className}>{ children }</h1>
)

export const H1 = ({ className, children, ...props }) => (
    <Base {...props} className={"text-4xl " + className}>{ children }</Base>
)

export const H2 = ({ className, children, ...props }) => (
    <Base {...props} className={"text-3xl " + className}>{ children }</Base>
)

export const H3 = ({ className, children, ...props }) => (
    <Base {...props} className={"text-2xl " + className}>{ children }</Base>
)

export const H4 = ({ className, children, ...props }) => (
    <Base {...props} className={"text-xl " + className}>{ children }</Base>
)

export const H5 = ({ className, children, ...props }) => (
    <Base {...props} className={"text-lg " + className}>{ children }</Base>
)

export const H6 = ({ className, children, ...props }) => (
    <Base {...props} className={"text-base " + className}>{ children }</Base>
)