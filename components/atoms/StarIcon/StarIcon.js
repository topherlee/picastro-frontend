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


const StarIcon = () => {
    const [imageIsSaved, setImageIsSaved] = React.useState(false);
    return (
        <StarIconWrapper
            onPress={ () => {setImageIsSaved(!imageIsSaved)}}
            title="Save Image"
        >
            {imageIsSaved ? <StarIconSavedSvg /> : <StarIconSvg /> }
        </StarIconWrapper>
    );
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