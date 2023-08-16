import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';


const loadCurrentUser = async () => {

    const {
        token,
        fetchInstance,
        currentUser,
        setCurrentUser,
        userSearchAndFilterUrl,
        userActiveObjectSelector,
        userActiveSelector,
        userCurrentPage,
        setUserCurrentPage,
        userScreenUrl
    } = useContext(AuthContext);

    const urlForApiCall = `/api/user/${currentUser.id}`;
    console.log(urlForApiCall);

    useEffect(() => {
        
        fetch(`${domain}/api/current_user/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then((result) => {
            //console.log("INCOMINGDATA",result.username)
            setCurrentUser(result);
            setCurrentUserProfile(loadUserProfile());
            console.log(currentUserProfile.user)
        })
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