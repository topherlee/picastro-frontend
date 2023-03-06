import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children, contextValue}) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [domain, setDomain] = useState('http://127.0.0.1:8000');
    const [token, setToken] = useState('');

    const globalContext = {
        domain,
        setDomain,
        isSignedIn,
        setIsSignedIn,
        token,
        setToken,
    }

    return (
        <AuthContext.Provider value={globalContext}>{children}</AuthContext.Provider>
    )
}