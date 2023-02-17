import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children, contextValue}) => {
    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )
}