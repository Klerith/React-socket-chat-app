import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { SocketProvider } from './context/SocketContext';
import { AppRouter } from './router/AppRouter';

export const ChatApp = () => {
    return (
        <AuthProvider>
        <SocketProvider>
            <AppRouter />
        </SocketProvider>
        </AuthProvider>
    )
}
