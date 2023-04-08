import { NETWORK_ERROR, UNKNOWN_ERROR } from '@/constants/toastMessages'
import toast from 'react-hot-toast'

function handleNetworkRequestError(err) {
    if (!navigator.onLine) return toast.error(NETWORK_ERROR)
    return toast.error(UNKNOWN_ERROR)
}

export { handleNetworkRequestError }
