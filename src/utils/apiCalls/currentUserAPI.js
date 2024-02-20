import React, {useContext, useEffect} from 'react';

import {AuthContext} from '../../context/AuthContext';
import {getUserID} from '../../context/UserContext';

const loadCurrentUser = async (token, fetchInstance) => {
	const urlForApiCall = `/api/current_user/`;

	try {
		var response = await fetchInstance(urlForApiCall, {
			method: 'GET',
			headers: {
				Authorization: `Token ${token.access}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			response = await response.json();
			return response;
		} else {
			throw new Error(response.status);
		}
	} catch (error) {
		console.log('currentUserAPI', error);
		return response;
	}
};

//     useEffect(() => {
//         console.log("loadCurrentUser() to be executed.");

//         fetch(`${domain}/api/current_user/`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Token ${token.access}`,
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(res => {return res.json()})
//         .then((result) => {
//             console.log("loadCurrentUser() executed. Result:", result);
//             setCurrentUser(result);
//         })
//         .catch((error) => {
//             console.log("currentuserapi",error);

//             // If the error is temporary, retry the call after a delay
//             if (isTemporaryError(error) && retryCount < MAX_RETRIES) {
//               retryCount += 1;
//               setTimeout(HeaderUserName, RETRY_DELAY_MS * Math.pow(2, retryCount));
//             } else {
//               // Handle the error
//             }
//           });
//     }, [])
// }

export default loadCurrentUser;
