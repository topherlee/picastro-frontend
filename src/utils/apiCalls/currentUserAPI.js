import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../context/AuthContext';
//import { loadUserProfile } from '../../utils';

const loadCurrentUser = () => {

    const {
        token,
        fetchInstance,
        currentUser,
        setCurrentUser,
        currentUserProfile,
        setCurrentUserProfile,
        userSearchAndFilterUrl,
        userActiveObjectSelector,
        userActiveSelector,
        userCurrentPage,
        setUserCurrentPage,
        userScreenUrl,
        domain
    } = useContext(AuthContext);

    useEffect(() => {
        console.log("loadCurrentUser() to be executed.");

        fetch(`${domain}/api/current_user/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then((result) => {
            console.log("loadCurrentUser() executed. Result:", result);
            setCurrentUser(result);
        })
        .catch((error) => {
            console.log("currentuserapi",error);

            // If the error is temporary, retry the call after a delay
            if (isTemporaryError(error) && retryCount < MAX_RETRIES) {
              retryCount += 1;
              setTimeout(HeaderUserName, RETRY_DELAY_MS * Math.pow(2, retryCount));
            } else {
              // Handle the error
            }
          });
    }, [])
}


export default loadCurrentUser;


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
