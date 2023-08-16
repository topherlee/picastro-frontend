import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';


const loadUserProfile = async () => {

    const {
        token,
        fetchInstance,
        currentUser,
        userSearchAndFilterUrl,
        userActiveObjectSelector,
        userActiveSelector,
        userCurrentPage,
        setUserCurrentPage,
        userScreenUrl
    } = useContext(AuthContext);

    const urlForApiCall = `/api/user/${currentUser.id}`;
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