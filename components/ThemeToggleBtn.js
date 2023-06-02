'use client'

import { useState, useEffect } from 'react'
import { HiSun } from 'react-icons/hi'
import { IoMoon } from 'react-icons/io5'

export default function ThemeToggleBtn() {
    const [theme, setTheme] = useState('dark')
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const currTheme = localStorage.getItem('theme')
        if (!currTheme) {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        }
        setTheme(currTheme ? currTheme : 'dark')
        setVisible(true)
    }, [])

    function handleChange() {
        const setThemeTo = theme === 'dark' ? 'light' : 'dark'
        const rootElem = document.documentElement
        if (setThemeTo === 'dark') rootElem.classList.add('dark')
        else rootElem.classList.remove('dark')
        localStorage.setItem('theme', setThemeTo)
        setTheme(setThemeTo)
    }

    return (
        <div className={`${!visible && 'hidden'}`}>
            <label>
                {theme === 'dark' ? <HiSun size={30} fill="#f6f626" /> : <IoMoon size={24} fill="#9a9897" />}
                <input className="hidden" type="checkbox" onChange={handleChange} />
            </label>
        </div>
    )
}
