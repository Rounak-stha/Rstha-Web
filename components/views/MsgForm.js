import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast'
import axios from 'axios';
import IncognitoToggle from '../IncognitoToggle';
import { FiSend } from 'react-icons/fi'
import { getFormattedDateTime } from '@/lib/dateTime';
import { MESSAGE_APPRECIATION, NETWORK_ERROR } from '@/constants/toastMessages';

const GOOGLE_SIGN_IN = process.env.NEXT_PUBLIC_GOOGLE_SIGN_IN

export default function MsgForm({ messager, className, setNewMessage }) {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false)
    const [incognito, setIncognito] = useState(false);
    const [longMessage, setLongMessage] = useState(false);

    const push = useRouter().push

    return (
        <div
            className={`${
                className ? className : ''
            } border-[1px] border-[#BDE7FF] dark:border-[#232833] bg-[#E9EEFF] dark:bg-[#1a1d23] rounded-lg p-5 w-full`}
        >
            <div className='leading-[1.4rem] font-semibold flex items-center'>
                <p className='mr-2 mb-[2px] text-[1.2rem]'>Write to me</p>
                <IncognitoToggle
                    incognito={incognito}
                    setIncognito={setIncognito}
                />
            </div>
            <p className='text-base'>{ !messager ? 'First, Tell us who you are with google.' : 'Send ' + (incognito ? 'Private ' : 'Public ') + 'message as ' + messager }</p>

            <div className='text-black dark:text-sky-50'>
                <div className='relative'>
                    <textarea
                        disabled={!messager}
                        className={`placeholder-phold-light focus:outline outline-blue-600 dark:placeholder-phold-dark ${!messager && 'cursor-not-allowed h-14'} mt-2 w-full rounded-md pt-2 pb-3 pl-3 pr-12 dark:bg-input-dark custom-scrollbar`}
                        type='text'
                        value={message}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value.length > 200) setLongMessage(true);
                            if (longMessage && value.length < 30)
                            setLongMessage(false);
                            setMessage(value);
                        }}
                        placeholder='Message'
                    />
                    {
                        messager ? (
                            <button
                                className={`${sendingMessage && 'cursor-progress'} h-8 w-8 flex justify-center items-center bg-[#1E90FF] rounded-full text-sky-50 font-bold absolute bottom-3 right-3 active:scale-90`}
                                disabled={sendingMessage}
                                onClick={async () => { 
                                    if (!message) return;
                                    setSendingMessage(true)
                                    axios
                                        .post('/api/message', {
                                            message,
                                            incognito
                                        })
                                        .then((res) => {
                                            const { name } = res.data
                                            setSendingMessage(false)
                                            !incognito && setNewMessage && setNewMessage({ name, message, date: getFormattedDateTime(new Date())})
                                            setMessage('')
                                            toast.success(MESSAGE_APPRECIATION)
                                        })
                                        .catch((e) => {
                                            setSendingMessage(false)
                                            setMessage('')
                                            if (!navigator.onLine) toast.error(NETWORK_ERROR)
                                        })
                                }}
                            >
                                { sendingMessage ? <span className={`${sendingMessage && 'animate-ping'} h-2 w-2 rounded-full bg-white`}></span> : <span className='inline-block mr-[1px] mt-[1px]'><FiSend /></span> }
                            </button>
                        ) : (
                            <button
                                onClick={() => push(GOOGLE_SIGN_IN)} 
                                type="button" 
                                className="px-4 py-[6px] font-semibold text-white bg-slate-500 dark:bg-slate-700 rounded-md absolute bottom-[14px] right-3"
                            > Sign In
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
