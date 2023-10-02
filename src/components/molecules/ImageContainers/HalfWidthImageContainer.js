import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

import { AstroImageWrapper, AwardIcon } from '../../atoms';


export const HalfWidthImageContainer = (props) => {
    // console.log("poster", props)
    return (
      <View2>
        <AstroImageWrapper 
          {...props}
        />
            <Image
                source={{ uri: props.poster.profileImage }}
                resizeMode="contain"
                style={{
                    position: 'absolute',
                    top: 7,
                    left: 10,
                    width: 25,
                    height: 25,
                    borderWidth: 3,
                    borderColor: '#FFD015',
                    borderRadius: 15
                }}
            />
        <UserName>{props.poster.username}</UserName>
        <AwardIconWrapper>
          <AwardIcon {...props} />
        </AwardIconWrapper>
      </View2>
    )
}

const View2 = styled.View`
  position: relative;
  width: 98%;
  `;
//box-sizing: border-box;
//background-color: grey;
//border: 1px solid yellow;


const UserImage = styled.Image`
    position: absolute;
    top: 7px;
    left: 10px;
    width: 27px;
    height: 20px;
    border: 3px solid #FDD015;
    border-radius: 2px;
`;
//box-sizing: border-box;
//background-color: green;

const UserName = styled.Text`
  position: absolute;
  top: 11px;
  left: 40px;
  color: #fcfcfc;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;  
`;
//box-sizing: border-box;
//background-color: green;
//border: 1px solid white;

const AwardIconWrapper = styled.View`
  position: absolute;
  width: 10%;
  height: 25px;
  top: 9px;
  right: 10px;
  color: #fcfcfc;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
`;


export default HalfWidthImageContainer;