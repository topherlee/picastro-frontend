
const apiCallLikeDislike = async (urlForApiCall, requestMethod, fetchInstance, token) => {
    try {
        var response = await fetchInstance(urlForApiCall, {
            method: requestMethod,
            headers: {
                'Authorization': `Token ${token.access}`
            }
        })
        // console.log("DATA", response, data)
        return response;

    } catch (error) {
        console.log("starIconAPI",error);
        return response;
    }
}


export default apiCallLikeDislike;
