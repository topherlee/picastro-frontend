import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children, contextValue}) => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    
    const globalContext = {
        isSignedIn,
        setIsSignedIn
    }

    return (
        <AuthContext.Provider value={globalContext}>{children}</AuthContext.Provider>
    )
}