import React, { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

import styled from 'styled-components';
import { AuthContext } from '../../../context/AuthContext';
import StarIconSvg from '../../../assets/star-icon.svg';
import StarIconSavedSvg from '../../../assets/star-icon-saved.svg';


let userID;

const StarIcon = (props) => {
    const {
        token,
        fetchInstance,
        searchAndFilterUrl,
        isSortModalVisible,
        setSortModalVisible,
        activeSelector,
        activeObjectSelector,
        currentPage,
        setCurrentPage,
        user
    } = useContext(AuthContext);
    const [imageIsSaved, setImageIsSaved] = React.useState(false);

    useEffect(() => {
        userID = jwtDecode(token?.access).user_id;
      }, [])

    // let userID = jwtDecode(token?.access).user_id;

    const likeUrl = '/api/like/';

    let requestData = [];

    const saveImage = async () => {
        try {
            let requestData = [];
            requestData.append("user", userID);
            requestData.append("post", props.id);
            console.log("requestData", requestData);

            var {response,data} = await fetchInstance(likeUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token.access}`,
                    'Content-Type': 'application/json'
                },
                body: requestData
            })
            
            setImageIsSaved(!imageIsSaved);
            console.log('UPLOAD RESULT', data)
            return {response, data}
        } catch (err) {
            console.log('ERROR',err)
        }
    }
    
    // async function saveImage() {
    //     console.log("saveImage");
    //     const urlForApiCall = likeUrl;

    //     // let requestData = {};
    //     // requestData.append("user", userID);
    //     // requestData.append("post", props.id);
        
    //     console.log("requestData", requestData);
    //     try {
    //         var { response, data } = await fetchInstance(urlForApiCall, {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Token ${token.access}`,
    //                 'Content-Type': 'application/json'
    //             },
    //             body: requestData
    //         })
            
    //         setImageIsSaved(!imageIsSaved);
    //         //return data.results
    //     } catch (error) {
    //         console.error(error);
    //         return [];
    //     }
    // }

    async function unsaveImage(props) {
        console.log("unsaveImage");
        setImageIsSaved(!imageIsSaved);
    //     const urlForApiCall = '/api/dislike/' + props.id;
    //     try {
    //         var { response, data } = await fetchInstance(urlForApiCall, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Authorization': `Token ${token.access}`,
    //                 'Content-Type': 'application/json'
    //             },
    //         })
            
    //         setImageIsSaved(!imageIsSaved)
    //         return data.results
    //     } catch (error) {
    //         console.error(error);
    //         return [];
    //     }
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