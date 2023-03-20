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

import React, { useContext, useEffect, useState } from 'react';
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

import { AuthContext, currentUser } from '../context/AuthContext';
import MasonryList from 'reanimated-masonry-list';
import { HalfWidthPostsContainer } from '../components/organisms';
import { TouchableOpacity } from 'react-native-gesture-handler';
import localCurrentUser from '../assets/data/currentUser';


const SortAndFilterScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const {domain, setDomain, token, fetchInstance, currentUser} = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(true);
    const [urlAttachement, setUrlAttachement] = useState("");


    useEffect(() => {
        Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
        //console.log('AccessToken',jwtDecode(token.access))

        async function loadSortAndFilterScreen() {
            var {response,data} = await fetchInstance('/api/feed/?imageCategory=asterism', {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token.access}`,
                    'Content-Type': 'application/json'
                }
            })
            setData(data);
        }

        loadSortAndFilterScreen().catch(err => {console.log(err)})
        // .then(res => {return res.json()})
        // .then((result) => {
        //     //console.log("INCOMINGDATA",token,result)
        //     setData(result);
        // }).catch (err => {
        //     console.log(err, "Failed to get data from API.");
        // })
    }, [])



    return (
        <SafeAreaView style={styles.container}>
            <UserNameImageBurgerHeader />
            <Text>Test</Text>
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
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    setUrlAttachement('?ordering=pub_date')
                                }
                            }>
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
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                        setUrlAttachement('?imageCategory=iss_transit')
                                    }}
                                />
                                <LunarButtonGrey
                                    styles={styles.iconContainer} />
                                <SolarButtonGrey
                                    styles={styles.iconContainer} />
                                <PlanetButtonGrey />
                                <CometButtonGrey />
                                <GalaxyButtonGrey />
                                <AsterismsButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                        setUrlAttachement('?imageCategory=asterism')
                                    }}
                                />
                                <NebulaButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                        setUrlAttachement('?imageCategory=nebula');
                                        SortAndFilterScreen();
                                    }}
                                />
                                <ClustersButtonGrey />
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
            <ScrollView style={{
                backgroundColor: "black",
                borderColor: "blue",
                borderWidth: 0,
            }}
                contentContainerStyle={{
                    display: "flex",
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignContent: 'center'
                }}>
                {data.length > 0 ? 
                    <MasonryList
                        data={data}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <HalfWidthPostsContainer {...item} />}
                        contentContainerStyle={{
                            borderColor: "red",
                            borderWidth: 0,
                            paddingTop: "3%",
                            paddingLeft: "4%"
                        }}
                        style={{
                            flex: 1,
                            maxWidth: "96%",
                            columnGap: 10,
                            borderColor: "yellow",
                            borderWidth: 0,
                        }}
                    />
                : 
                    <Text style={{color:'white'}}>Nothing to display here</Text>
                }
            </ScrollView>
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

export default SortAndFilterScreen;