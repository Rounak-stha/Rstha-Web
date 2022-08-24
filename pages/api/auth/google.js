import { setAllCookies } from '@/lib/cookie'
import prisma from '@/lib/prisma'

const axios = require('axios')

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } = process.env

export default async function googleAuth(req, res) {
    if (parseInt(req.query.redirect) === 1) {
      const googleAuthURL = getGoogleAuthURL()
      return res.redirect(307, googleAuthURL)
    }

    const code = req.query.code
    if (!code) return res.status(400).end()

    try {
        const { id_token, access_token } = await getGoogleTokens(code)
    
        const googleUser = await axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
            {
              headers: {
                Authorization: `Bearer ${id_token}`,
              },
            }
          )
          .then(({data}) => { return { email: data.email, name: data.name }}) 
          .catch((err) => {
            console.log(err) // debug
            res.status(500).end()
          })

        const { id } = await prisma.messager.upsert({ where: { email: googleUser.email }, create: { ...googleUser }, update: {} })
        console.log(id)

        setAllCookies(res, { messagerId: id, ...googleUser })
        return res.redirect(307, `/messages`)
        
    } catch(err) {
        console.log(err) // debug
        res.status(500).end()
    }
}


function getGoogleAuthURL() {
    const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth'
    const options = new URLSearchParams({
        redirect_uri: GOOGLE_REDIRECT_URI,
        client_id: GOOGLE_CLIENT_ID,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ].join(" ")
    })
    return `${rootURL}?${options.toString()}`
}

function getGoogleTokens(code) {
    const url = "https://oauth2.googleapis.com/token";
  const params = new URLSearchParams({
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URI,
    grant_type: "authorization_code",
  })

  return axios
    .post(url, params.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch auth tokens`);
      throw new Error(error.message);
    });
}