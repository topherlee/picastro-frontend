import React, { useContext } from 'react';



const commentPostAPICall = async (urlForApiCall, requestMethod, fetchInstance, token, body) => {
    
    console.log("commentAPIcall")


    try {
        var response = await fetchInstance(urlForApiCall, {
            method: requestMethod,
            headers: {
                'Authorization': `Token ${token.access}`
            },
            body: body
        })
        // console.log("DATA", response, data)
        return response;

    } catch (error) {
        console.log("starIconAPI",error);
        return response;
    }
}



export default commentPostAPICall;
