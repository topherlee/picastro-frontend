import {
    Alert,
    Modal,
    View,
    Text,
    Pressable,
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';

import React, { useState } from 'react';
import { UserNameImageBurgerHeader } from '../components/molecules';
import { DualColumnMasonryList } from '../components/templates';
import {
    NebulaButton,
    GalaxyButtonGrey,
    CometButtonGrey
} from '../components/atoms';


const SortByScreen = ({ navigation }) => {

    const localFeedData = require('../assets/data/feed.json');
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <UserNameImageBurgerHeader />
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                            <ScrollView
                                horizontal={true}
                            >
                                <NebulaButton />
                                <GalaxyButtonGrey />
                                <CometButtonGrey />
                                <CometButtonGrey />
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
            
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        backgroundColor: "#2F2F2F",
        borderColor: "green",
        borderWidth: 0,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
    image: {
        width: "100%",
        height: 200
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'baseline',
    },
    modalView: {
        flex: 1,
        flexDirection: 'row',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width: '100%',
        height: 282,
        bottom: 0,
        padding: 35,
        alignItems: 'center',
        elevation: 5,
        backgroundColor: "#2F2F2F",
        borderColor: "green",
        borderWidth: 1,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

});

export default SortByScreen;