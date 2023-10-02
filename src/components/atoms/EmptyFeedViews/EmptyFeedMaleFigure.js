import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import FigureImage from '../../../assets/images/empty-feed2.svg';

export default function EmptyFeedMaleFigure() {
    return (
        <View style={styles.container}>
            <Text style={styles.topText}>Looks like you haven't any images in your feed. Let's change that now!</Text>
      
            <FigureImage
                style={styles.figureImage}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        borderWidth: 0,
        borderColor: 'red'
    },
    figureImage: {
        maxWidth: '100%',
        bottom: -40
    },
    topText: {
        color: '#959595',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'

    },
});
