import React, { useContext } from 'react';



const commentPostAPICall = async (urlForApiCall, requestMethod, fetchInstance, token, body) => {
    
    console.log("commentPostAPIcall, body", body)


    try {
        var response = await fetchInstance(urlForApiCall, {
            method: requestMethod,
            headers: {
                'Authorization': `Token ${token.access}`
            },
            body: body
        })
        console.log("RESPONSE", response)
        return response;

    } catch (error) {
        console.log("commentAPI error",error);
        return response;
    }
}

const commentGetAPICall = async (urlForApiCall, requestMethod, fetchInstance, token, body) => {
    
    console.log("commentGetAPIcall")


    try {
        var { response, data } = await fetchInstance(urlForApiCall, {
            method: requestMethod,
            headers: {
                'Authorization': `Token ${token.access}`
            }
            // body: body
        })
        console.log("DATA get", response)
        return data;

    } catch (error) {
        console.log("commentGetAPI",error);
        return response;
    }
}

export {commentPostAPICall, commentGetAPICall};
