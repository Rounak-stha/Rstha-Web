import { parse } from 'cookie'
import { getFormattedDateTime } from '@/lib/dateTime'
import prisma from '@/lib/prisma'
import { decryptCookie } from '@/lib/cookie'

const M_COOKIE_NAME = process.env.M_COOKIE_NAME

//create, get

export default async function messageHandler(req, res) {
    try {
        if (req.method === 'POST') return await saveMessageHandler(req, res)

        if (req.method === 'GET') return getAllMessagesHandler(req, res)
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}

async function getAllMessagesHandler(_, res) {
    try {
        const allMessages = await prisma.message.findMany({
            where: { incognito: false },
            orderBy: [{ date: 'desc' }],
        })
        allMessages.forEach((message) => (message.date = getFormattedDateTime(message.date)))
        return res.json(allMessages)
    } catch (err) {
        console.log(err)
        return res.status(500).end()
    }
}

async function saveMessageHandler(req, res) {
    // private is reserved keyword in scrict mode
    const { messagerId, name } = decryptCookie(parse(req.headers.cookie)[M_COOKIE_NAME])

    let { message, incognito } = req.body

    if (message.lenth > 250) {
        message = message.slice(0, 250)
    }

    const createdMessage = await prisma.message.create({
        data: {
            messagerId,
            name,
            message,
            incognito,
        },
    })

    return res.status(200).json({ name: createdMessage.name })
}
