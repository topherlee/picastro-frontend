import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import Modal from "react-native-modal";
import styled from 'styled-components';
import { FullWidthAboveImage, FullWidthImage, FullWidthBelowImage } from '../../molecules';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


var windowWidth = Math.ceil(Dimensions.get('window').width);

export const FullWidthPostsContainer = ({ props }) => {
    //console.log("DFC",props);
    const [modalVisible, setModalVisible] = useState(false);
    const [contWidth] = useState(0);
    const [contHeight] = useState(0);
    return (
        <View style={styles.container}>
            <Modal
                isVisible={modalVisible}
                style={{margin: 0}}
                animationIn="fadeIn"
                animationOut="fadeOut"
                backdropOpacity={0.8}
                propagateSwipe>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Icon name="window-close" size={30} color="lightgray" />
                </TouchableOpacity>
                <ReactNativeZoomableView
                    maxZoom={6}
                    minZoom={1}
                    zoomStep={0.5}
                    initialZoom={1}
                    bindToBorders={true}
                    visualTouchFeedbackEnabled={false}
                    onZoomAfter={this.logOutZoomState}
                    disablePanOnInitialZoom={true}
                    style={{
                        width: windowWidth,
                        borderColor: 'yellow',
                        borderWidth: 0,
                    }}>
                    <Image
                        source={{
                            uri: props.image,
                        }}
                        resizeMethod='scale'
                        style={{width: Dimensions.get('window').width, aspectRatio: props.aspectRatio ? props.aspectRatio : 1}}
                    />
                </ReactNativeZoomableView>
            </Modal>

            <FullWidthAboveImage props={props} />

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <FullWidthImage
                    props={props}
                    contHeight={contHeight}
                    contWidth={contWidth}
                />
            </TouchableOpacity>

            <FullWidthBelowImage props={props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: "0%",
        borderWidth: 0,
        borderColor: "red",
        flex: 1,
        maxWidth: "100%"
    },
    button: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        maxHeight: 50,
        top: 40,
        zIndex: 400
    },
    fullResImage: {
        width: windowWidth,
        height: undefined,
        aspectRatio: 1,
    }
})

export default FullWidthPostsContainer;