export default function Container({ children, glow, glowClass, outlined = false, className }) {
    return (
        <div className={`group relative rounded-md w-full ${className}`}>
            <div
                className={`w-full h-full ${
                    outlined ? 'dark:bg-back-dark bg-white' : 'dark:bg-gray-12 bg-blue-50'
                } rounded-md p-5 ${
                    outlined && glowClass && 'group-hover:border-white dark:group-hover:border-back-dark'
                } border-2 ${outlined ? 'border-bdr-light' : 'border-blue-100'} dark:border-bdr-dark`}
            >
                {children}
            </div>
            <div
                className={`absolute top-0 left-0 h-full w-full -z-[1] blur group-hover:bg-gradient-to-r ${
                    glow
                        ? glowClass
                            ? glowClass
                            : 'from-red-500 via-blue-500 to-indigo-500'
                        : glowClass
                        ? glowClass
                        : ''
                }`}
            ></div>
        </div>
    )
}
