'use client'
import { Toaster as T } from 'react-hot-toast'

export default function Toaster() {
    return (
        <T
            toastOptions={{
                style: {
                    color: 'white',
                },
                success: {
                    iconTheme: {
                        primary: '#B0EACD',
                        secondary: '#21BF73',
                    },
                    style: {
                        background: '#21BF73',
                    },
                },
                error: {
                    style: {
                        background: '#F38181',
                    },
                },
            }}
        />
    )
}
