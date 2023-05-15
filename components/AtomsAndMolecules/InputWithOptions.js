'use client'

export default function InputWithOptions({ name, options, disabled = false, onChange = null, className = '' }) {
    return (
        <div>
            <input
                onChange={onChange}
                placeholder={name}
                list={name + 'inputOptions'}
                name="inputWithOptions"
                className={`bg-input-light dark:bg-input-dark ${
                    disabled && 'cursor-not-allowed'
                } w-full rounded-md px-4 py-2 border-none text-black dark:text-sky-50 outline outline-2 outline-bdr-light dark:outline-bdr-dark focus:outline-blue-4 focus:dark:outline-blue-10 ${
                    className & className
                }`}
            />
            <datalist id={name + 'inputOptions'}>
                {options && options.map((optn) => <option key={optn} value={optn} />)}
            </datalist>
        </div>
    )
}
