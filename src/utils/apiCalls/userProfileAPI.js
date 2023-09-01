import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { getUserID } from '../../context/UserContext';


const loadUserProfile = async (token, fetchInstance, user_id) => {

    // const {
    //     token,
    //     fetchInstance,
    //     currentUser,
    //     userSearchAndFilterUrl,
    //     userActiveObjectSelector,
    //     userActiveSelector,
    //     userCurrentPage,
    //     setUserCurrentPage,
    //     userScreenUrl,
    //     setCurrentUserProfile,
    //     user
    // } = useContext(AuthContext);

    if (!user_id) {
        user_id = getUserID(token);
        console.log("userProfileAPI", user_id)
    }

    const urlForApiCall = `/api/user/${user_id}`;
    
    try {
        var {response,data} = await fetchInstance(urlForApiCall, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        console.log("DATA", data)
        return data

    } catch (error) {
        console.log("userprofileapi",error);
        return [];
    }
}


export default loadUserProfile;


// useEffect(() => {
        
//     fetch(`${domain}/api/current_user/`, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Token ${token.access}`,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => {return res.json()})
//     .then((result) => {
//         //console.log("INCOMINGDATA",result.username)
//         setCurrentUser(result);
//     }).catch (err => {
//         console.log(err);
//         //setData(existingData);
//     })
// }, [])