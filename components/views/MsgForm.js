import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast'
import axios from 'axios';
import IncognitoToggle from '../IncognitoToggle';
import { getFormattedDateTime } from '@/lib/dateTime';
import { MESSAGE_APPRECIATION, NETWORK_ERROR } from '@/constants/toastMessages';
import TextArea from '../AtomsAndMolecules/TextArea';
import { P1, P2 } from '../Typography/ParaGraph';
import Button from '../AtomsAndMolecules/Button';
import Container from './Container';
import SendIconButton from '../AtomsAndMolecules/SendIconButton';

const GOOGLE_SIGN_IN = process.env.NEXT_PUBLIC_GOOGLE_SIGN_IN

export default function MsgForm({ messager, className, setNewMessage }) {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false)
    const [incognito, setIncognito] = useState(false);
    const [longMessage, setLongMessage] = useState(false);

    const push = useRouter().push

    return (
        <Container>
            <div className='leading-[1.4rem] font-semibold flex items-center'>
                <P1 className='mr-2'>Write to me</P1>
                <IncognitoToggle
                    incognito={incognito}
                    setIncognito={setIncognito}
                />
            </div>
            <P2 className='mb-3'>{ !messager ? 'First, Tell us who you are with google.' : 'Send ' + (incognito ? 'Private ' : 'Public ') + 'message as ' + messager }</P2>

            <div className=''>
                <div className='relative'>
                    <TextArea
                        disabled={!messager}
                        className='outline-blue-100'
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
                            <div className='absolute bottom-3 right-3 '>
                                <SendIconButton
                                    loading={sendingMessage}
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
                                />
                            </div>

                        ) : (
                            <Button
                                className='absolute bottom-[10px] right-3'
                                onClick={() => push(GOOGLE_SIGN_IN)} 
                            > Sign In
                            </Button>
                        )
                    }
                </div>
            </div>
        </Container>
    );
}
