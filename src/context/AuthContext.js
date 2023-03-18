import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import {Platform} from "react-native";

import * as Keychain from 'react-native-keychain';
export const AuthContext = React.createContext({});


export const AuthProvider = ({children, contextValue}) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [domain, setDomain] = useState(Platform.OS === 'ios' ? 'http://127.0.0.1:8000/' : 'http://10.0.2.2:8000/');
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState({
        "id": null,
        "username": null,
        "first_name": null,
        "last_name": null,
        "email": null,
        "last_login": null,
        "date_joined": null
    });
    const [loading, setLoading] = useState(false);

    async function refreshAllTokens() {
        try {
            var credentials = await Keychain.getGenericPassword();
            console.log('UPDATING TOKENS', token.refresh)
            console.log('CREDS', JSON.parse(credentials.password))

            var response = await fetch(`${domain}/api/auth/login/refresh/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'refresh':token.refresh})
            })
            
            newToken = await response.json();
            console.log('REFRESH STATUS',response.status);

            if (response.ok) {
                console.log('REFRESH OK', newToken)
                await Keychain.setGenericPassword('token', JSON.stringify(newToken))
                setToken(newToken);
                return newToken;
            }else {
                console.log('REFRESH TOKEN EXPIRED')
                setToken(null);
                setIsSignedIn(false);
                return null
            }
        } catch (err) {
            console.log('REFRESH TOKEN ERROR', err)
            setIsSignedIn(false);
        }
    }

    let originalRequest = async (url, config) => {
        url = `${domain}${url}`
        var response = await fetch(url, config)
        var data = await response.json()
        return {response, data}
    }

    let fetchInstance = async (url, config={}) => {
        try {
            var credentials = await Keychain.getGenericPassword();
            credentials = JSON.parse(credentials.password)
            const user = jwtDecode(credentials.access)
            const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

            if (isExpired) {
                console.log('REFERSHING EXPIRED TOKEN')
                newToken = await refreshAllTokens();
                setToken(newToken)
                await Keychain.setGenericPassword('token', JSON.stringify(newToken))
            }

            //proceed with request

            config['headers'] = {
                Authorization: `Token ${newToken?.access}`
            }

            var {response, data} = await originalRequest(url, config)
            return {response, data}
        } catch (err) {
            console.log('FETCH ERROR')
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
        fetchInstance
    }

     useEffect(() => {
    //     let interval = setInterval(() => {
    //         if (token) {
    //             refreshAllTokens();
    //         }
    //     }, 240000);
    //     return () => clearInterval(interval)

        setLoading(false);
     }, [token, loading, isSignedIn])

    return (
        <AuthContext.Provider value={globalContext}>
            {children}
        </AuthContext.Provider>
    )
}