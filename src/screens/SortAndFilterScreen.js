import {
    Alert,
    View,
    Text,
    Pressable,
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Modal from "react-native-modal";

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

import { AuthContext } from '../context/AuthContext';
import MasonryList from 'reanimated-masonry-list';
import { HalfWidthPostsContainer } from '../components/organisms';

const SortAndFilterScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const {
        domain,
        setDomain,
        token,
        fetchInstance,
        currentUser,
        searchAndFilterUrl,
        setSearchAndFilterUrl,
        isSortModalVisible,
        setSortModalVisible,
        activeSelector,
        setActiveSelector,
        activeObjectSelector,
        setActiveObjectSelector
    } = useContext(AuthContext);
    //const [urlAttachement, setUrlAttachement] = useState("");



    useEffect(() => {
        Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
        //console.log('AccessToken',jwtDecode(token.access))

        const urlForApiCall = '/api/feed/' + searchAndFilterUrl;
        console.log("urlForApiCall", urlForApiCall);

        async function loadSortAndFilterScreen() {
            var {response,data} = await fetchInstance(urlForApiCall, {
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

    const toggleModal = () => {
        setSortModalVisible(!isSortModalVisible);
      };

    return (
        <SafeAreaView style={styles.container}>
            <UserNameImageBurgerHeader />
            <View>
                <Modal
                    transparent={true}
                    isVisible={isSortModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setSortModalVisible(!isSortModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={ 
                                    (setActiveSelector == 'randomizer') ? [styles.button, styles.buttonSelected] : 
                                    [styles.button, styles.buttonUnselected] }
                                onPress={() => {
                                    setSortModalVisible(!isSortModalVisible);
                                    setSearchAndFilterUrl('?ordering=?');
                                    setActiveSelector('randomizer');
                                    // loadSortAndFilterScreen();
                                }}
                            >
                                <Text style={styles.buttonText}>Randomizer</Text>
                            </Pressable>
                            <Pressable
                                style={ 
                                    (setActiveSelector == 'most_recent') ? [styles.button, styles.buttonSelected] : 
                                    [styles.button, styles.buttonUnselected] }
                                onPress={() => {
                                    setSortModalVisible(!isSortModalVisible);
                                    setSearchAndFilterUrl('?ordering=pub_date');
                                    setActiveSelector('most_recent');
                                    //loadSortAndFilterScreen();
                                }}
                            >
                                <Text style={styles.buttonText}>Most recent</Text>
                            </Pressable>
                            <Pressable
                                style={ 
                                    (setActiveSelector == 'object_type') ? [styles.button, styles.buttonSelected] : 
                                    [styles.button, styles.buttonUnselected] }
                                onPress={() => {
                                    setActiveSelector('object_type');
                                    //loadSortAndFilterScreen();
                                }}
                            >
                                <Text style={styles.buttonText}>Object Type</Text>
                            </Pressable>
                            <ScrollView
                                horizontal={true}
                            >
                                <IssTransitButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setSortModalVisible(!isSortModalVisible);
                                        setActiveObjectSelector('iss_transit');
                                        setSearchAndFilterUrl('?imageCategory=iss_transit');
                                    }}
                                />
                                <LunarButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setSortModalVisible(!isSortModalVisible);
                                        setActiveObjectSelector('lunar');
                                        setSearchAndFilterUrl('?imageCategory=lunar');
                                    }}
                                />
                                <SolarButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setSortModalVisible(!isSortModalVisible);
                                        setActiveObjectSelector('solar');
                                        setSearchAndFilterUrl('?imageCategory=solar');
                                    }}
                                />
                                <PlanetButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setSortModalVisible(!isSortModalVisible);
                                        setActiveObjectSelector('planet');
                                        setSearchAndFilterUrl('?imageCategory=planet');
                                    }}
                                />
                                <CometButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setSortModalVisible(!isSortModalVisible);
                                        setActiveObjectSelector('comet');
                                        setSearchAndFilterUrl('?imageCategory=comet');
                                    }}
                                />
                                <GalaxyButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setSortModalVisible(!isSortModalVisible);
                                        setActiveObjectSelector('galaxy');
                                        setSearchAndFilterUrl('?imageCategory=galaxy');
                                    }}
                                />
                                <AsterismsButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setSortModalVisible(!isSortModalVisible);
                                        setActiveObjectSelector('asterism');
                                        setSearchAndFilterUrl('?imageCategory=asterism');
                                    }}
                                />
                                <NebulaButtonGrey
                                    styles={styles.iconContainer}
                                    onPress={() => {
                                        setSortModalVisible(!isSortModalVisible);
                                        setActiveObjectSelector('nebula');
                                        setSearchAndFilterUrl('?imageCategory=nebula');
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
        height: 32,
        gap: 5
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