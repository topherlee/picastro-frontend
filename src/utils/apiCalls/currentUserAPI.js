import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../context/AuthContext';
//import { loadUserProfile } from '../../utils';


const loadCurrentUser = async () => {

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

    let temp_user;
    // const urlForApiCall = `/api/user/${currentUser.id}`;
    // console.log(urlForApiCall);

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
            console.log("currentUser.id", currentUser.id);
            return result
        })
        // .then((result) => {
        //     console.log("result", result);
        //     console.log("currentUser", currentUser);
            // setCurrentUserProfile(loadUserProfile());
            // console.log("currentUserProfile.user", currentUserProfile.user);
        // })
        .catch (err => {
            console.log(err);
            //setData(existingData);
        })
        .catch((error) => {
            // If the error is temporary, retry the call after a delay
            if (isTemporaryError(error) && retryCount < MAX_RETRIES) {
              retryCount += 1;
              setTimeout(HeaderUserName, RETRY_DELAY_MS * Math.pow(2, retryCount));
            } else {
              // Handle the error
            }
          });
    }, [])

    console.log("another temp_user", temp_user);
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
