import { Alert } from "react-native";

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

const commentGetAPICall = async (fetchInstance, token, postId, setNextComments, page=1) => {
    
    var url = `/api/comments/${postId}?page=${page}`

    try {
        var response = await fetchInstance(url, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            response = await response.json();
            setNextComments(response.next);
            return response.results;
        } else {
            throw new Error(`HTTP response status ${response.status}`);
        }

    } catch (error) {
        console.log("commentGetAPI",error);
        Alert.alert('Error Fetching Data', error.toString());
        return [];
    }
}

const fetchMore = async (
    fetchInstance,
    token,
    postId,
    page,
    setComments,
    nextComments,
    setNextComments,
    isCommentsLoading,
    setIsCommentsLoading,
) => {
    console.log('fetchmore comments', isCommentsLoading, nextComments, token);
    if (isCommentsLoading) return;
    if (!nextComments) return;
    setIsCommentsLoading(true);
    console.log('setIsCommentsLoading');

    const pageUrl = `?page=${page}`;
    console.log('comments fetchmore page', page);
    const newData = await commentGetAPICall(
        fetchInstance,
        token,
        postId,
        setNextComments,
        page
    );
    console.log()
    setIsCommentsLoading(false);
    setComments(prevData => [...prevData, ...newData]);
};

export {commentPostAPICall, commentGetAPICall, fetchMore};
