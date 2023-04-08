import { serialize } from 'cookie'
import { encrypt, decrypt } from './crypto'

const M_COOKIE_NAME = process.env.M_COOKIE_NAME
const N_COOKIE_NAME = process.env.NEXT_PUBLIC_N_COOKIE_NAME

const M_COOKIE_OPTIONS = { path: '/api', maxAge: 14 * 86400, httpOnly: true, sameSite: 'Strict' }
const N_COOKIE_OPTIONS = { path: '/', maxAge: 14 * 86400, httpOnly: false, sameSite: 'None', secure: true }

function setCookies(res, cookieData) {
    let cookies
    if (Array.isArray(cookieData))
        cookies = cookieData.map(({ name, value, options }) => serialize(name, value, options))
    else cookies = serialize(cookieData.name, cookieData.value, cookieData.options)
    res.setHeader('Set-Cookie', cookies)
}

function encryptCookie(value) {
    let cookieValue = encrypt(value)
    return JSON.stringify(cookieValue)
}

function decryptCookie(value) {
    value = JSON.parse(value)
    let decrypted = decrypt(value)
    return JSON.parse(decrypted)
}

function setAllCookies(res, data) {
    const M_COOKIE_VALUE = encryptCookie(JSON.stringify(data))
    const N_COOKIE_VALUE = data.name
    setCookies(res, [
        { name: M_COOKIE_NAME, value: M_COOKIE_VALUE, options: M_COOKIE_OPTIONS },
        { name: N_COOKIE_NAME, value: N_COOKIE_VALUE, options: N_COOKIE_OPTIONS },
    ])
}

function setMCookie(res, data) {
    let value = encryptCookie(JSON.stringify(data))

    setCookies(res, { name: M_COOKIE_NAME, value, options: M_COOKIE_OPTIONS })
}

function clearAllCookies(res) {
    setCookies(res, [
        { name: M_COOKIE_NAME, value: '', options: { ...M_COOKIE_OPTIONS, maxAge: -1 } },
        { name: N_COOKIE_NAME, value: '', options: { ...N_COOKIE_OPTIONS, maxAge: -1 } },
    ])
}

export { setCookies, setAllCookies, setMCookie, clearAllCookies, decryptCookie }
