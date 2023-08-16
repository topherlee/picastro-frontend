import React from "react";
import styled from 'styled-components';

import { StarIcon } from "../../atoms";


const HalfWidthBelowImage = (props) => (
    <View3>
      <TextStarNameShort>
        {props.astroNameShort}
      </TextStarNameShort>
      <TextStarName>
        {props.astroName}
      </TextStarName>
      <StarIconView>
        <StarIcon {...props} />
      </StarIconView>
    </View3>
);

const View3 = styled.View`
  width: 98%;
  height: 57px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #2e2e2e;
`;

const TextStarNameShort = styled.Text`
  position: absolute;
  left: 15px;
  top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;

  color: #7A7A7A;
  
`;

const TextStarName = styled.Text`
position: absolute;
width: 94px;
top: 30px;
left: 15px;
font-family: 'Inter';
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 13px;

color: #7A7A7A;
`;

const StarIconView = styled.View`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  padding-right: 5%;
  border: 0px solid yellow;
`;

export default HalfWidthBelowImage;