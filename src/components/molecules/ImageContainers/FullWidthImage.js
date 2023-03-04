import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';

var ratio;

const FullWidthImage = ({props}) => {
  //console.log("DFI", props)

  // var source = Image.resolveAssetSource(props.imageURL);
  // ratio = (source.width / source.height);

  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  Image.getSize(props.imageURL, (width, height) => {
    setImgWidth(width);
    setImgHeight(height);
    ratio = width / height;
  });

  return (
    <View>
      <AstroImage
        source={{uri: props.imageURL}}
        style={{
          aspectRatio: ratio,
          maxWidth: "100%",
          width: imgWidth,
          height: imgHeight,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const AstroImage = styled.Image`
  width: 100%;
  max-height: 100%;
`;

export default FullWidthImage;
