import React, {useContext} from 'react';
import {
    View,
    Text,
    Pressable,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { AuthContext } from '../../context/AuthContext';
import globalStyling from '../../../constants/globalStyling';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomModal({childrenText, children}) {
    const {isModalVisible, setModalVisible} = useContext(AuthContext);
    console.log(children)
    return (
        <View>
            <Modal
                backdropOpacity={0.5}
                isVisible={isModalVisible}
                onBackdropPress={() => {setModalVisible(false);}}
                onBackButtonPress={() => {setModalVisible(false);}}
                onSwipeComplete={() => {setModalVisible(false);}}
                style={globalStyling.bottomModalWrapper}
                swipeDirection={['down']}
                propagateSwipe={true}>
                <View style={globalStyling.bottomModalView}>
                    <Icon name="minus" size={50} color="lightgray" />
                    <Text style={globalStyling.bottomModalText}>
                        {childrenText}
                    </Text>
                    <View style={globalStyling.bottomModalChildView}>
                        {children}
                    </View>
                </View>
            </Modal>
        </View>
    );
}
