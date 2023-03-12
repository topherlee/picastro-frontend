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
    NebulaButtonGrey,
    GalaxyButtonGrey,
    CometButtonGrey,
    PlanetButtonGrey,
    AsterismsButtonGrey,
    ClustersButtonGrey,
    IssTransitButtonGrey,
    LunarButtonGrey,
    SolarButtonGrey
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
                            <Pressable
                                style={[styles.button, styles.buttonUnselected]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.buttonText}>Randomizer</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonUnselected]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.buttonText}>Most recent</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonUnselected]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.buttonText}>Equipment Type</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonSelected]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.buttonText}>Hide Modal</Text>
                            </Pressable>
                            <ScrollView
                                horizontal={true}
                            >
                                <IssTransitButtonGrey
                                    styles={styles.iconContainer} />
                                <LunarButtonGrey
                                    styles={styles.iconContainer} />
                                <SolarButtonGrey
                                    styles={styles.iconContainer} />
                                <PlanetButtonGrey />
                                <CometButtonGrey />
                                <GalaxyButtonGrey />
                                <AsterismsButtonGrey />
                                <NebulaButtonGrey />
                                <ClustersButtonGrey />
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
        borderColor: "yellow",
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
        borderRadius: 25,
        padding: 8,
        elevation: 2,
        width: 90,
        height: 32
    },
    buttonUnselected: {
        backgroundColor: '#DDD7D7',
    },
    buttonSelected: {
        backgroundColor: '#FDD015',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 11,
        textAlign: 'center',
        textAlignVertical: 'center'
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
    iconContainer: {
        width: 150,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
    }

});

export default SortByScreen;