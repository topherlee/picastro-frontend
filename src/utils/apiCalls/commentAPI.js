
const commentPostAPICall = async (urlForApiCall, requestMethod, fetchInstance, token, body, onSendComment) => {
    
    console.log("commentPostAPIcall, body", body)

    try {
        var response = await fetchInstance(urlForApiCall, {
            method: requestMethod,
            headers: {
                'Authorization': `Token ${token.access}`
            },
            body: body
        })
        if (response.ok) {
            response = await response.json();
            onSendComment();
            return response;
        } else {
            throw new Error(`HTTP response status ${response.status}`);
        }

    } catch (error) {
        console.log("commentAPI error",error);
        return response
    }
}

const commentGetAPICall = async (urlForApiCall, requestMethod, fetchInstance, token, body) => {
    
    console.log("commentGetAPIcall")

    try {
        var response = await fetchInstance(urlForApiCall, {
            method: requestMethod,
            headers: {
                'Authorization': `Token ${token.access}`
            }
        })
        if (response.ok) {
            response = await response.json();
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
