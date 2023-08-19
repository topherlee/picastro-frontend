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
        user
    } = useContext(AuthContext);
    const [imageIsSaved, setImageIsSaved] = React.useState(false);

    const likeUrl = '/api/like/';

    const saveImage = async () => {
        try {
            userID = jwtDecode(token?.access).user_id;
            console.log (userID);

            var requestData = JSON.stringify({
                'user': userID,
                'post': props.id
              })
            console.log("StarIcon requestData", requestData);

            const imageLikeResponse = await imageLike(requestData, fetchInstance, token);

            console.log("imageLikeResponse", imageLikeResponse);

            if (imageLikeResponse.response.status === 201) {
                setImageIsSaved(!imageIsSaved);
            } else {
                // change this later on to a meaningful action. Currently it is only doing the
                // same as the if statement, because the imageLike() is not working correctly.
                setImageIsSaved(!imageIsSaved);
            }
            
        } catch (err) {
            console.log('ERROR',err)
        }
    }
    
    async function unsaveImage() {
        console.log("unsaveImage");
        const imageDislikeResponse = await imageDislike(props.id, fetchInstance, token);
        console.log("props.id", props.id, imageDislikeResponse);

        if (imageDislikeResponse.response.status === 200) {
            setImageIsSaved(!imageIsSaved);
        } else {
            // change this later on to a meaningful action. Currently it is only doing the
            // same as the if statement, because the imageLike() is not working correctly.
            setImageIsSaved(!imageIsSaved);
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