import React, { createContext, useCallback, useState } from 'react';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
};


export const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] = useState(initialState)

    const login = async( email, password ) => {

        const resp = await fetchSinToken('login', { email, password }, 'POST');

        if ( resp.ok ) {
            localStorage.setItem('token', resp.token );
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

        }

        return resp.ok;

    }

    const register = async(nombre, email, password) => {

        const resp = await fetchSinToken('login/new', { nombre, email, password }, 'POST');
        
        if ( resp.ok ) {
            localStorage.setItem('token', resp.token );
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

            return true;
        }

        return resp.msg;

    }

    const verificaToken = useCallback( async() => {

        const token = localStorage.getItem('token');
        // Si token no existe
        if ( !token ) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            })

            return false;
        }

        const resp = await fetchConToken('login/renew');
        if ( resp.ok ) {
            localStorage.setItem('token', resp.token );
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

            return true;
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });

            return false;
        }

    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            checking: false,
            logged: false,
        });
    }


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificaToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

