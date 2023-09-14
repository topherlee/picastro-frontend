import React, { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

import styled from 'styled-components';
import { AuthContext } from '../../../context/AuthContext';
import StarIconSvg from '../../../assets/star-icon.svg';
import StarIconSavedSvg from '../../../assets/star-icon-saved.svg';

import { imageLike, imageDislike } from '../../../utils';


let userID;

const StarIcon = (props) => {
    const {
        token,
        fetchInstance,
        currentUser,
        user
    } = useContext(AuthContext);
    const [imageIsSaved, setImageIsSaved] = React.useState(false);

    const likeUrl = '/api/like/';
    const dislikeUrl = '/api/dislike/';

    const apiCallLikeDislike = async (urlForApiCall, requestMethod) => {
        try {
            var {response,data} = await fetchInstance(urlForApiCall, {
                method: requestMethod,
                headers: {
                    'Authorization': `Token ${token.access}`
                }
            })
            // console.log("DATA", response, data)
            return {response, data}
    
        } catch (error) {
            console.log("starIconAPI",error);
            return [];
        }
    }

    const saveImage = async () => {
        try {
            urlForApiCall = likeUrl + props.id;
            let requestMethod = 'POST';
            console.log("StarIcon like urlForApiCall", urlForApiCall);

            imageLikeResponse = await apiCallLikeDislike(urlForApiCall, requestMethod)
            
            if (imageLikeResponse.response.status === 201) {
                setImageIsSaved(!imageIsSaved);
            } else if (imageLikeResponse.response.status === 403) {
                pass
            } else {
                // change this later on to a meaningful action. Currently it is only doing the
                // same as the if statement, because the imageLike() is not working correctly.
                console.log("else path in StarIcon.js")
            }
            
        } catch (err) {
            console.log('ERROR',err)
        }
    }
    
    const unsaveImage = async () => {
        try {
            urlForApiCall = dislikeUrl + props.id;
            let requestMethod = 'DELETE';
            console.log("StarIcon dislike urlForApiCall", urlForApiCall);

            imageLikeResponse = await apiCallLikeDislike(urlForApiCall, requestMethod)
            
            if (imageLikeResponse.response.status === 204) {
                setImageIsSaved(!imageIsSaved);
            } else if (imageLikeResponse.response.status === 403) {
                pass
            } else {
                // change this later on to a meaningful action. Currently it is only doing the
                // same as the if statement, because the imageLike() is not working correctly.
                console.log("else path in StarIcon.js")
            }
            
        } catch (err) {
            console.log('ERROR',err)
        }
    }

    return (
        <StarIconWrapper
            onPress={() => {
                !imageIsSaved ? saveImage() : unsaveImage() }}
            title="Save Image"
        >
            {imageIsSaved ? <StarIconSavedSvg /> : <StarIconSvg />}
        </StarIconWrapper>
    );
};

const StarIconWrapper = styled.TouchableOpacity`
  width: 24.55px;
  height: 24.55px;
`;


export default StarIcon;