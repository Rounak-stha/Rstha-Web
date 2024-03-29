// I am skeptical of this pattern of creating a controlled component
// Is there any other clever way of doing the same thing?
// Get and Set value from parent
'use client'

export default function Input({ value = '', onChange = () => {}, placeholder, disabled = false, className = '' }) {
    return (
        <input
            type="text"
            disabled={disabled}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`bg-input-light dark:bg-input-dark ${
                disabled && 'cursor-not-allowed'
            } w-full rounded-md px-4 py-2 border-none text-black dark:text-sky-50 outline outline-2 outline-bdr-light dark:outline-bdr-dark focus:outline-blue-4 focus:dark:outline-blue-10 ${
                className & className
            }`}
        />
    )
}
