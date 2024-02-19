import React, {useContext, useEffect} from 'react';
import jwtDecode from 'jwt-decode';

import styled from 'styled-components';
import {AuthContext} from '../../../context/AuthContext';
import StarIconSvg from '../../../assets/star-icon.svg';
import StarIconSavedSvg from '../../../assets/star-icon-saved.svg';

import {apiCallLikeDislike} from '../../../utils';
import {Alert} from 'react-native';

const StarIcon = (props) => {
    const {
        token,
        fetchInstance,
        currentUser,
        user,
        listOfLikes,
        setListOfLikes,
    } = useContext(AuthContext);
    const [imageIsSaved, setImageIsSaved] = React.useState(false);

    const likeUrl = '/api/like/';
    const dislikeUrl = '/api/dislike/';
    const getLikeListUrl = '/api/like/1';
    const getLikeListMethod = 'GET';

    let imageLikeResponse;

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
                console.log('listOfLikes', listOfLikes);
            }
        } catch (error) {
            console.log('ERROR starIcon loadLikedPostList', error);
            return [];
        }
    }

    useEffect(() => {
        const inListOfLikesCheck = (element) => element.post === props.id;
        const postInListOfLikes = listOfLikes.some(inListOfLikesCheck);
        if (postInListOfLikes) {
            setImageIsSaved(true);
        }
    }, [listOfLikes]);

    const raiseAlert = () =>
        Alert.alert('Sorry!', 'You cannot like your own posts');

    const saveImage = async () => {
        console.log(props);
        if (currentUser.username === props.poster.username) {
            raiseAlert();
        } else {
            try {
                urlForApiCall = likeUrl + props.id;
                let requestMethod = 'POST';

                imageLikeResponse = await apiCallLikeDislike(
                    urlForApiCall,
                    requestMethod,
                    fetchInstance,
                    token,
                );

                if (imageLikeResponse.status === 201) {
                    setImageIsSaved(!imageIsSaved);
                    loadLikedPostList();
                } else if (imageLikeResponse.status === 403) {
                    pass;
                } else {
                    // change this later on to a meaningful action. Currently it is only doing the
                    // same as the if statement, because the imageLike() is not working correctly.
                    console.log('else path in StarIcon.js');
                }
            } catch (err) {
                console.log('ERROR', err);
            }
        }
    };

    const unsaveImage = async () => {
        try {
            urlForApiCall = dislikeUrl + props.id;
            let requestMethod = 'DELETE';

            imageLikeResponse = await apiCallLikeDislike(
                urlForApiCall,
                requestMethod,
                fetchInstance,
                token,
            );

            if (imageLikeResponse.status === 204) {
                setImageIsSaved(!imageIsSaved);
                loadLikedPostList();
            } else if (imageLikeResponse.status === 403) {
                pass;
            } else {
                // change this later on to a meaningful action. Currently it is only doing the
                // same as the if statement, because the imageLike() is not working correctly.
                console.log('else path in StarIcon.js');
            }
        } catch (err) {
            console.log('ERROR', err);
        }
    };

    return (
        <StarIconWrapper
            onPress={() => {
                !imageIsSaved ? saveImage() : unsaveImage();
            }}
            title="Save Image">
            {imageIsSaved ? <StarIconSavedSvg /> : <StarIconSvg />}
        </StarIconWrapper>
    );
};

const StarIconWrapper = styled.TouchableOpacity`
    width: 24.55px;
    height: 24.55px;
`;

export default StarIcon;
