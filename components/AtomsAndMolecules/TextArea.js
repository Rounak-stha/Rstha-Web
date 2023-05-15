'use client'

export default function TextArea({
    disabled = false,
    value = '',
    onChange = () => {},
    placeholder = '',
    className = '',
}) {
    return (
        <textarea
            disabled={disabled}
            className={`text-black dark:text-sky-50 outline outline-2 outline-bdr-light dark:outline-bdr-dark focus:outline-blue-4 focus:dark:outline-blue-10 ${
                disabled && 'cursor-not-allowed'
            } w-full rounded-md pt-2 pb-3 pl-3 pr-12 bg-input-light dark:bg-input-dark custom-scrollbar ${
                className && className
            }`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}
