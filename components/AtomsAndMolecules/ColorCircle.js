export default function ColorCircle({ bgClass, border=true, style = {}, className }) {
    return (
        <div style={style} className={`h-16 w-16 rounded-full ${ border && 'border-2 border-bdr-light dark:border-bdr-dark' } ${bgClass} ${className}`}></div>
    )
}