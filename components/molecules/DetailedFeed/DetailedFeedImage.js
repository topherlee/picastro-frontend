import {View, Text, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components';

var ratio;

const DetailedFeedImage = (props) => {
  var source = Image.resolveAssetSource(props.imageURL);
  ratio = (source.width / source.height);
  return (
    <View>
      <AstroImage
        source={props.imageURL}
        style={{
          aspectRatio: ratio,
          maxWidth: '100%',
          height: 'auto',
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

export default DetailedFeedImage;
