import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children, contextValue}) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [domain, setDomain] = useState('http://127.0.0.1:8000');
    const [token, setToken] = useState('');
    const [currentUser, setCurrentUser] = useState({"date_joined": "", "email": "", "first_name": "", "last_login": null, "last_name": "", "username": ""});

    const globalContext = {
        domain,
        setDomain,
        isSignedIn,
        setIsSignedIn,
        token,
        setToken,
        currentUser,
        setCurrentUser,
    }

    return (
        <AuthContext.Provider value={globalContext}>{children}</AuthContext.Provider>
    )
}