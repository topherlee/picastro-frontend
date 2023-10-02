import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { getUserID } from '../../context/UserContext';


const loadUserProfile = async (token, fetchInstance, user_id) => {

    if (!user_id) {
        user_id = getUserID(token);
        console.log("userProfileAPI", user_id)
    }

    const urlForApiCall = `/api/user/${user_id}`;
    
    try {
        var response = await fetchInstance(urlForApiCall, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            response = await response.json()
            return response
        } else {
            throw new Error(response.status)
        }

    } catch (error) {
        console.log("userprofileapi",error);
        return response;
    }
}


export default loadUserProfile;
