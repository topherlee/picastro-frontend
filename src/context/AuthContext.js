import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children, contextValue}) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [domain, setDomain] = useState('http://127.0.0.1:8000');
    const [token, setToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    async function refreshAllTokens() {
        console.log('UPDATING TOKENS', refreshToken)

        var response = await fetch(`${domain}/api/auth/login/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'refresh':refreshToken})
        })
        
        var newTokens = await response.json();

        console.log('REFRESH STATUS',response.status);

        if (response.ok) {
            console.log('REFRESH OK', newTokens)
            setToken(newTokens.access);
            setRefreshToken(newTokens.refresh);
        }else {
            console.log('REFRESH TOKEN EXPIRED')
            setToken('');
            setRefreshToken('');
            setIsSignedIn(false);
        }
    }

    const globalContext = {
        domain,
        setDomain,
        isSignedIn,
        setIsSignedIn,
        token,
        setToken,
        currentUser,
        setCurrentUser,
        refreshToken,
        setRefreshToken
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if (token) {
                refreshAllTokens();
            }
        }, 24000);
        return () => clearInterval(interval)
    }, [refreshToken, loading])

    return (
        <AuthContext.Provider value={globalContext}>{children}</AuthContext.Provider>
    )
}