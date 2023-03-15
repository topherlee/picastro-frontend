import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children, contextValue}) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [domain, setDomain] = useState('http://127.0.0.1:8000');
    const [token, setToken] = useState('');
    const [refreshtoken, setRefreshToken] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    
    const globalContext = {
        domain,
        setDomain,
        isSignedIn,
        setIsSignedIn,
        token,
        setToken,
        currentUser,
        setCurrentUser,
        refreshtoken,
        setRefreshToken
    }

    return (
        <AuthContext.Provider value={globalContext}>{children}</AuthContext.Provider>
    )
}