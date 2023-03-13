import React, {useState} from 'react';
import {
    Pressable,
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
    Dimensions
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import Modal from "react-native-modal";
import styled from 'styled-components';
import { FullWidthAboveImage, FullWidthImage, FullWidthBelowImage } from '../../molecules';
import { AutoscaleImage } from '../../atoms';

export const FullWidthPostsContainer = ({props}) => {
  //console.log("DFC",props);

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
//   var source = Image.resolveAssetSource(props.imageURL);
//   ratio = (source.width / source.height);

    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    var ratio;

    Image.getSize(props.imageURL, (width, height) => {
      setImgWidth(width);
      setImgHeight(height);
      ratio = width / height;
    });

    
    const [contWidth, setContWidth] = useState(0);
    const [contHeight, setContHeight] = useState(0);
    return (
        <View style={styles.container}>
            <Modal
                isVisible={modalVisible}
                style={{margin: 0}}
                animationIn="fadeIn"
                animationOut="fadeOut"
                backdropOpacity={0.8}
                propagateSwipe
            > 
                <Pressable 
                    style={styles.button}
                    onPress = { () => setModalVisible(!modalVisible) }
                > 
                    <Text style={styles.text}>Go back</Text>
                </Pressable>
                <ReactNativeZoomableView
                    maxZoom={3}
                    minZoom={1}
                    zoomStep={0.5}
                    initialZoom={1}
                    bindToBorders={true}
                    visualTouchFeedbackEnabled={false}
                    onZoomAfter={this.logOutZoomState}
                    disablePanOnInitialZoom={true}
                >   
                    <AutoscaleImage uri={props.imageURL} width={Dimensions.get('window').width}/>
                </ReactNativeZoomableView>
            </Modal>

            <FullWidthAboveImage props={props} />

            <TouchableOpacity 
                onPress={() => setModalVisible(true)}  
            >
                <FullWidthImage
                props={props}
                contHeight={contHeight}
                contWidth={contWidth}
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
        maxHeight: 50
    },
    text: {
        color: "#FFC700",
        fontWeight: 700
    },
})

export default FullWidthPostsContainer;