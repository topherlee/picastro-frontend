const likeUrl = '/api/like/';
const dislikeUrl = '/api/dislike/';
const getLikeListUrl = '/api/like/1';
const getLikeListMethod = 'GET';

async function loadLikedPostList() {
	try {
		var response = await apiCallLikeDislike(
			getLikeListUrl,
			getLikeListMethod,
			fetchInstance,
			token,
		);
		var listOfLikes;
		if (response.ok) {
			listOfLikes = await response.json();
			setListOfLikes(listOfLikes.results);
			// console.log('listOfLikes', listOfLikes);
		}
	} catch (error) {
		console.log('ERROR starIcon loadLikedPostList', error);
		return [];
	}
}

const apiCallLikeDislike = async (urlForApiCall, requestMethod, fetchInstance, token) => {
	try {
		var response = await fetchInstance(urlForApiCall, {
			method: requestMethod,
			headers: {
				Authorization: `Token ${token.access}`,
			},
		});
		// console.log("DATA", response, data)
		return response;
	} catch (error) {
		console.log('starIconAPI', error);
		return response;
	}
};

export default apiCallLikeDislike;
