import React, { useContext } from 'react';



const commentPostAPICall = async (fetchInstance, token, body, onSendComment, postId) => {
    
    console.log("commentPostAPIcall, body", body)
    const url = '/api/comments/';

    try {
        var response = await fetchInstance(url, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token.access}`
            },
            body: body
        })
        if (response.ok) {
            response = await response.json();
            // console.log('RESPONSE', response);
            onSendComment(postId);
            return response;
        } else {
            throw new Error(`HTTP response status ${response.status}`);
        }

    } catch (error) {
        console.log("commentAPI error",error);
        return response
    }
}

const commentGetAPICall = async (postId, fetchInstance, token) => {
    
    var url = `/api/comments/${postId}`

    try {
        var response = await fetchInstance(url, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`
            }
        })
        if (response.ok) {
            response = await response.json();
            // console.log("DATA get", response.results)
            return response.results;
        } else {
            throw new Error(`HTTP response status ${response.status}`);
        }

    } catch (error) {
        console.log("commentGetAPI",error);
        return [];
    }
}

export {commentPostAPICall, commentGetAPICall};
