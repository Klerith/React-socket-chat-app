import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    const { chatState } = useContext( ChatContext );
    const { auth } = useContext( AuthContext );

    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div 
                id="mensajes"
                className="msg_history"
            >

                {
                    chatState.mensajes.map( msg => (
                        ( msg.para === auth.uid )
                            ? <IncomingMessage key={ msg._id } msg={ msg } />
                            : <OutgoingMessage key={ msg._id } msg={ msg } />
                    ))
                }

                

            </div>
            {/* <!-- Historia Fin --> */}

           <SendMessage />

        </div>
    )
}
