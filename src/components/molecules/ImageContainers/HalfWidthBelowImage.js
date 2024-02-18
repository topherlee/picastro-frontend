import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

import {StarIcon} from '../../atoms';

const HalfWidthBelowImage = (props) => (
    <View
        style={{
            width: '100%',
            height: 'auto',
            paddingVertical: '10%',
            paddingHorizontal: '10%',
            backgroundColor: '#2e2e2e',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            alignItems: 'center',
        }}>
        <View style={{flex: 1, gap: 3}}>
            <Text
                style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold',
                    fontSize: 11,
                    color: '#7a7a7a',
                }}>
                {props.astroNameShort}
            </Text>
            <Text
                style={{
                    fontFamily: 'Inter',
                    fontSize: 11,
                    color: '#7a7a7a',
                }}>
                {props.astroName}
            </Text>
        </View>
        <View>
            <StarIcon {...props} />
        </View>
    </View>
);

const View3 = styled.View`
    width: 98%;
    height: 57px;
    flex: 1;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #2e2e2e;
`;

const TextStarNameShort = styled.Text`
    position: absolute;
    left: 15px;
    top: 15px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;

    color: #7a7a7a;
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

    color: #7a7a7a;
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
