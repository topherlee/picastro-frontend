import React, {useState} from 'react';
import {
    Button,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Modal
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

import styled from 'styled-components';
import { FullWidthAboveImage, FullWidthImage, FullWidthBelowImage } from '../../molecules';

export const FullWidthPostsContainer = ({props}) => {
  console.log("DFC",props);

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  var source = Image.resolveAssetSource(props.imageURL);
  ratio = (source.width / source.height);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                presentationStyle="pageSheet"
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >   
                <ReactNativeZoomableView
                    maxZoom={3}
                    minZoom={1}
                    zoomStep={0.5}
                    initialZoom={1}
                    bindToBorders={true}
                    visualTouchFeedbackEnabled={false}
                    onZoomAfter={this.logOutZoomState}
                    disablePanOnInitialZoom={true}
                    style={{backgroundColor: 'rgba(0, 0, 0, 0.95)'}}
                >   
                    <Image 
                        source={props.imageURL}
                        style={{
                            aspectRatio: ratio,
                            width: '100%',
                            height: 'auto',
                        }}
                        resizeMode="contain"
                    />
                </ReactNativeZoomableView>
            </Modal>
            <FullWidthAboveImage props={props} />
            <TouchableOpacity 
                onPress={() => setModalVisible(true)}  >
                <FullWidthImage
                props={props}
                />
            </TouchableOpacity>
            <FullWidthBelowImage props={props} />
        </View>
    )
}

const View1 = styled.TouchableOpacity`
    width: 100%;
`;

const styles = StyleSheet.create({
    container: {
        marginVertical: "2%",
        borderWidth: 0, 
        borderColor: "red",
        flex: 1,
    }
})

export default FullWidthPostsContainer;