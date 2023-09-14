import React, { useContext } from 'react';



const apiCallLikeDislike = async (urlForApiCall, requestMethod, fetchInstance, token) => {
    try {
        var {response,data} = await fetchInstance(urlForApiCall, {
            method: requestMethod,
            headers: {
                'Authorization': `Token ${token.access}`
            }
        })
        // console.log("DATA", response, data)
        return {response, data}

    } catch (error) {
        console.log("starIconAPI",error);
        return [];
    }
}


export default apiCallLikeDislike;
