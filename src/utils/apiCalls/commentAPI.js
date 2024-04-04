import {Alert} from 'react-native';
import * as Burnt from 'burnt';

const commentPostAPICall = async (fetchInstance, token, body, onSendComment, postId) => {
	// console.log('commentPostAPIcall, body', body);
	const url = '/api/comments/';

	try {
		var response = await fetchInstance(url, {
			method: 'POST',
			headers: {
				Authorization: `Token ${token.access}`,
			},
			body: body,
		});
		if (response.ok) {
			response = await response.json();
			// console.log('RESPONSE', response);
			return response;
		} else {
			Burnt.alert({
				title: 'Failed to Post Comment',
				message: `HTTP Response Status ${response?.status}`,
				preset: 'error',
				duration: 2, // duration in seconds
				shouldDismissByTap: true,
			});
			throw new Error(`HTTP response status ${response.status}`);
		}
	} catch (error) {
		console.log('commentAPI error', error);
		return null;
	}
};

const commentGetAPICall = async (fetchInstance, token, postId, setNextComments, page = 1) => {
	var url = `/api/comments/${postId}?page=${page}`;

	try {
		var response = await fetchInstance(url, {
			method: 'GET',
			headers: {
				Authorization: `Token ${token.access}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			response = await response.json();
			setNextComments(response.next);
			return response.results;
		} else {
			Burnt.toast({
				title: 'Fetch Error',
				message: 'Failed to Fetch Comments',
				preset: 'error',
				haptic: 'error',
				duration: 4, // duration in seconds
				shouldDismissByDrag: true,
			});
			throw new Error(`HTTP response status ${response.status}`);
		}
	} catch (error) {
		console.log('commentGetAPI', error);
		return [];
	}
};

const commentDeleteAPICall = async (fetchInstance, token, commentId) => {
	var url = `/api/comment/${commentId}`;

	try {
		var response = await fetchInstance(url, {
			method: 'DELETE',
			headers: {
				Authorization: `Token ${token.access}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			Burnt.toast({
				title: 'Comment Deleted',
				preset: 'done',
				haptic: 'success',
				duration: 2, // duration in seconds
				shouldDismissByDrag: true,
			});
			return true;
		} else {
			Burnt.alert({
				title: 'Failed to Delete Comment',
				message: `HTTP Response Status ${response?.status}`,
				preset: 'error',
				duration: 2, // duration in seconds
				shouldDismissByTap: true,
			});
			throw new Error(`HTTP response status ${response.status}`);
		}
	} catch (error) {
		console.log('commentDeleteAPI', error);
		return false;
	}
};

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
	setCommentsPage,
) => {
	if (isCommentsLoading) return;
	if (!nextComments) return;
	setIsCommentsLoading(true);
	console.log('setIsCommentsLoading');

	const pageUrl = `?page=${page}`;
	console.log('comments fetchmore page', page);
	const newData = await commentGetAPICall(fetchInstance, token, postId, setNextComments, page);
	setIsCommentsLoading(false);
	setCommentsPage((page) => page + 1);
	setComments((prevData) => [...prevData, ...newData]);
};

export {commentDeleteAPICall, commentPostAPICall, commentGetAPICall, fetchMore};
