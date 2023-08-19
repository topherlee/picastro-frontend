import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';


const loadUserProfile = async (user_id) => {

    const {
        token,
        fetchInstance,
        currentUser,
        userSearchAndFilterUrl,
        userActiveObjectSelector,
        userActiveSelector,
        userCurrentPage,
        setUserCurrentPage,
        userScreenUrl,
        user
    } = useContext(AuthContext);

    if (!user_id && !user) {
        user_id = "1";
    } else if (!user_id) {
        user_id = user.user_id;
    }

    const urlForApiCall = `/api/user/${user_id}`;
    console.log(urlForApiCall);

    try {
        var {response,data} = await fetchInstance(urlForApiCall, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        // setNext(data.next);
        return data.results
    } catch (error) {
        console.error(error);
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