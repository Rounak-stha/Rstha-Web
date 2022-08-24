import axios from "axios"

const swrFetcher = url => axios.get(url).then(res => res.data)

const swrOptions = { revalidateOnFocus: false, shouldRetryOnError: false }

export { swrFetcher, swrOptions }