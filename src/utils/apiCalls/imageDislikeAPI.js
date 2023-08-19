
const imageDislike = async (postID, fetchInstance, token) => {

    // const {
    //     token,
    //     fetchInstance,
    //     user
    // } = useContext(AuthContext);

    const dislikeUrl = `/api/dislike/${postID}`;

    console.log("imageDislike", dislikeUrl);

    try {
        var {response,data} = await fetchInstance(dislikeUrl, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        
        return {response, data}
    } catch (err) {
        console.log('ERROR',err)
        return err
    }
}

export default imageDislike;