import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
    TouchableOpacity
  } from 'react-native';

import styled from 'styled-components';

import StarIconSvg from '../../../assets/star-icon.svg';
import StarIconSavedSvg from '../../../assets/star-icon-saved.svg';

var imageSaved;

// function setImageSaved (imageSaved=false) {
//     console.log("pressed setImageSaved")
//     return (!imageSaved);
// };


const StarIcon = () => {
    const [imageSaved, setImageSaved] = React.useState(false);
    onPress= () => {
        console.log("pressed this.setImageSaved");
        setImageSaved(!imageSaved)
    }

    <StarIconWrapper
        onPress={this.onPress}
        title="Save Image"
    >
        {imageSaved ? <StarIconSavedSvg /> : <StarIconSvg />}
    </StarIconWrapper>

// var imageSaved;
    // const setImageSaved = function (imageSaved=false) {
    //     console.log("pressed setImageSaved")
    //     imageSaved = !imageSaved;
    //     console.log(imageSaved);
    //     return (imageSaved);
    // };
    // onPress = () => {
    //     console.log("pressed this.setImageSaved");
    //     setImageSaved();
    // }

    // if (!imageSaved) {
    //     return (
    //         <StarIconWrapper
                
    //             onPress={this.onPress}
    //             title="Save Image"
    //         >
    //             <StarIconSvg />
    //         </StarIconWrapper>
    //     );
    // } else {
    //     return (
    //         <StarIconWrapper>
    //             <StarIconSavedSvg />
    //         </StarIconWrapper>
    //     );
//     }
};

const StarIconWrapper = styled.TouchableOpacity`
  position: absolute;
  width: 24.55px;
  height: 24.55px;
  left: 150px;
  top: 18px;
`;
//box-sizing: border-box;


export default StarIcon;