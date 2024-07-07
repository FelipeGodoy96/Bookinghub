"use client";

import { createContext, useState, useEffect } from "react";

export const LogonStateContext = createContext()

export const LogonStateContextProvider = ({children}) => {
    // const [logonState, setLogonState] = useState(() => {
    //         const sessionLogonState = window.localStorage.getItem('logonState');
    //         return sessionLogonState ? JSON.parse(sessionLogonState) : { isLoggedIn: false, token: null };
    //     })

    const [logonState, setLogonState] = useState('')

    useEffect(() => {
        const sessionLogonState = sessionStorage.getItem('logonState');
        setLogonState(sessionLogonState ? JSON.parse(sessionLogonState) : JSON.stringify({isLoggedIn: false, token: null}))
    }, [])

    
        useEffect(() => {
            sessionStorage.setItem('logonState', JSON.stringify(logonState));
        }, [logonState])
    
    return (
        <LogonStateContext.Provider value={{logonState, setLogonState}}>
            {children}
        </LogonStateContext.Provider>
    )
}
