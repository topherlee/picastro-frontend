import {
    Alert,
    View,
    Text,
    Pressable,
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import Modal from "react-native-modal";

import React, { useContext, useEffect, useState } from 'react';
import { UserNameImageBurgerHeader } from '../components/molecules';
import {
    NebulaButton,
    GalaxyButton,
    CometButton,
    PlanetButton,
    AsterismsButton,
    ClustersButton,
    IssTransitButton,
    LunarButton,
    SolarButton
} from '../components/atoms';

import { AuthContext } from '../context/AuthContext';
import MasonryList from 'reanimated-masonry-list';
import { HalfWidthPostsContainer } from '../components/organisms';
import {BottomFilterModal} from '../components/molecules';
import globalStyling from '../../constants/globalStyling';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState(null);

    const {
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
        setActiveObjectSelector,
        currentPage,
        setCurrentPage,
        setUserCurrentPage
    } = useContext(AuthContext);


    const urlForApiCall = '/api/feed/?' + searchAndFilterUrl;
    // console.log("urlForApiCall", urlForApiCall);

    async function loadHomescreen(pageNum) {
        try {
            var pageUrl = pageNum ? `&page=${pageNum}` : '';
            var { response, data } = await fetchInstance(urlForApiCall + pageUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token.access}`,
                    'Content-Type': 'application/json'
                }
            })
            
            setNext(data.next)
            return data.results
        } catch (error) {
            console.error(error);
            return [];
            
        }
    }

    const fetchMore = async () => {
        if (isLoading) return;
        if (!next) return;
        setIsLoading(true);
        
        const nextPage = currentPage + 1;
        const newData = await loadHomescreen(nextPage);
        setCurrentPage(nextPage);
        setIsLoading(false);
        setData(prevData => [...prevData, ...newData]);
    };

    const refreshPage = async () => {
        setCurrentPage(1)
        const newData = await loadHomescreen(1)
        setData(newData)
        setRefreshing(false)
    }

    useEffect(() => {
        //console.log('AccessToken',jwtDecode(token.access))

        loadHomescreen(currentPage).then((data)=>{
            setData(data);
            setRefreshing(false);
        })
    }, [activeObjectSelector, activeSelector])

    const toggleModal = () => {
        setSortModalVisible(!isSortModalVisible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <UserNameImageBurgerHeader />
            {/* <View>
                <Modal
                    backdropOpacity={0.5}
                    isVisible={isSortModalVisible}
                    onBackdropPress={() => {
                        setSortModalVisible(false);
                    }}
                    style={styles.modalWrapper}
                    onSwipeComplete={() => {
                        setSortModalVisible(false);
                    }}
                    swipeDirection={['down']}
                    propagateSwipe={true}
                >
                    <View style={styles.modalView}>
                    <Icon name="minus" size={50} color="lightgray"/>
                        <Text
                            style={styles.modalText}
                        >
                            Sort or Filter by:
                        </Text>
                        <View style={styles.buttonWrapper}>
                            <Pressable
                                style={
                                    (activeSelector == 'most_recent') ? [styles.button, styles.buttonSelected] :
                                        [styles.button, styles.buttonUnselected]}
                                onPress={() => {
                                    setSortModalVisible(!isSortModalVisible);
                                    setSearchAndFilterUrl('');
                                    setActiveSelector('most_recent');
                                    setActiveObjectSelector('');
                                }}
                            >
                                <Text style={styles.buttonText}>Most recent</Text>
                            </Pressable>
                            <Pressable
                                style={
                                    (activeSelector == 'object_type') ? [styles.button, styles.buttonSelected] :
                                        [styles.button, styles.buttonUnselected]}
                                onPress={() => {
                                    setActiveSelector('object_type');
                                    setActiveObjectSelector('iss_transit');
                                    setSearchAndFilterUrl('imageCategory=iss_transit');
                                }}
                            >
                                <Text style={styles.buttonText}>Object Type</Text>
                            </Pressable>
                            <Pressable
                                style={
                                    (activeSelector == 'randomizer') ? [styles.button, styles.buttonSelected] :
                                        [styles.button, styles.buttonUnselected]}
                                onPress={() => {
                                    setSortModalVisible(!isSortModalVisible);
                                    setSearchAndFilterUrl('ordering=?');
                                    setActiveSelector('randomizer');
                                    setCurrentPage(1)
                                }}
                            >
                                <Text style={styles.buttonText}>Randomizer</Text>
                            </Pressable>
                        </View>
                        {(activeSelector == 'object_type') ?
                            <ScrollView
                                horizontal={true}
                                style={styles.horizontalScrollview}
                            >
                                <TouchableOpacity
                                    style={globalStyling.iconContainer}
                                    onPress={() => {
                                        setActiveObjectSelector('iss_transit');
                                        setSearchAndFilterUrl('imageCategory=iss_transit');
                                        console.log("searchAndFilterUrl iss", searchAndFilterUrl);
                                        setSortModalVisible(!isSortModalVisible);
                                        setCurrentPage(1)
                                    }}
                                    title="Filter Value"
                                >
                                    <IssTransitButton
                                        selected={activeObjectSelector}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={globalStyling.iconContainer}
                                    onPress={() => {
                                        setActiveObjectSelector('lunar');
                                        setSearchAndFilterUrl('imageCategory=lunar');
                                        console.log("searchAndFilterUrl lunar", searchAndFilterUrl);
                                        setSortModalVisible(!isSortModalVisible);
                                        setCurrentPage(1)
                                    }}
                                    title="Filter Value"
                                >
                                    <LunarButton
                                        selected={activeObjectSelector}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={globalStyling.iconContainer}
                                    onPress={() => {
                                        setActiveObjectSelector('solar');
                                        setSearchAndFilterUrl('imageCategory=solar');
                                        console.log("searchAndFilterUrl solar", searchAndFilterUrl);
                                        setSortModalVisible(!isSortModalVisible);
                                        setCurrentPage(1)
                                    }}
                                    title="Filter Value"
                                >
                                    <SolarButton
                                        selected={activeObjectSelector}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={globalStyling.iconContainer}
                                    onPress={() => {
                                        setActiveObjectSelector('planet');
                                        setSearchAndFilterUrl('imageCategory=planet');
                                        console.log("searchAndFilterUrl planet", searchAndFilterUrl);
                                        setSortModalVisible(!isSortModalVisible);
                                        setCurrentPage(1)
                                    }}
                                    title="Filter Value"
                                >
                                    <PlanetButton
                                        selected={activeObjectSelector}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={globalStyling.iconContainer}
                                    onPress={() => {
                                        setActiveObjectSelector('comet');
                                        setSearchAndFilterUrl('imageCategory=comet');
                                        console.log("searchAndFilterUrl comet", searchAndFilterUrl);
                                        setSortModalVisible(!isSortModalVisible);
                                        setCurrentPage(1)
                                    }}
                                    title="Filter Value"
                                >
                                    <CometButton
                                        selected={activeObjectSelector}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={globalStyling.iconContainer}
                                    onPress={() => {
                                        setActiveObjectSelector('galaxy');
                                        setSearchAndFilterUrl('imageCategory=galaxy');
                                        console.log("searchAndFilterUrl galaxy", searchAndFilterUrl);
                                        setSortModalVisible(!isSortModalVisible);
                                        setCurrentPage(1)
                                    }}
                                    title="Filter Value"
                                >
                                    <GalaxyButton
                                        selected={activeObjectSelector}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={globalStyling.iconContainer}
                                    onPress={() => {
                                        setActiveObjectSelector('asterism');
                                        setSearchAndFilterUrl('imageCategory=asterism');
                                        console.log("searchAndFilterUrl asterism", searchAndFilterUrl);
                                        setSortModalVisible(!isSortModalVisible);
                                        setCurrentPage(1)
                                    }}
                                    title="Filter Value"
                                >
                                    <AsterismsButton
                                        selected={activeObjectSelector}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={globalStyling.iconContainer}
                                    onPress={() => {
                                        setActiveObjectSelector('nebula');
                                        setSearchAndFilterUrl('imageCategory=nebula');
                                        console.log("searchAndFilterUrl nebula", searchAndFilterUrl);
                                        setSortModalVisible(!isSortModalVisible);
                                        setCurrentPage(1)
                                    }}
                                    title="Filter Value"
                                >
                                    <NebulaButton
                                        selected={activeObjectSelector}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={globalStyling.iconContainer}
                                    onPress={() => {
                                        setActiveObjectSelector('cluster');
                                        setSearchAndFilterUrl('imageCategory=cluster');
                                        console.log("searchAndFilterUrl cluster", searchAndFilterUrl);
                                        setSortModalVisible(!isSortModalVisible);
                                        setCurrentPage(1)
                                    }}
                                    title="Filter Value"
                                >
                                    <ClustersButton
                                        selected={activeObjectSelector}
                                    />
                                </TouchableOpacity>
                                
                            </ScrollView>
                            : ""}
                    </View>
                </Modal>
            </View> */}
            <BottomFilterModal />
            <View 
                style={{
                    backgroundColor: "black", 
                    borderWidth: 0, 
                    borderColor: "white", 
                    flex: 1
            }}>
            {data.length > 0 ?
                <MasonryList
                    data={data}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    onRefresh={refreshPage}
                    refreshing={refreshing}
                    showsVerticalScrollIndicator={true}
                    indicatorStyle={"white"}
                    renderItem={({ item }) => <HalfWidthPostsContainer {...item} />}
                    contentContainerStyle={{
                        borderColor: "red",
                        borderWidth: 0,
                        paddingTop: "3%",
                        paddingLeft: "4%",
                        backgroundColor: "black"
                    }}
                    style={{
                        flex: 1,
                        maxWidth: "96%",
                        columnGap: 10,
                        borderColor: "yellow",
                        borderWidth: 0,
                    }}
                    onEndReached={fetchMore}
                    onEndReachedThreshold={0.1}
                />
                :
                <Text style={{ color: 'white' }}>Nothing to display here</Text>
            }
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
    modalWrapper: {
        borderColor: "red",
        borderWidth: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'baseline',
    },
    modalView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        bottom: 0,
        width: '100%',

        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        elevation: 10,
        backgroundColor: "#2F2F2F",
        borderColor: "green",
        borderWidth: 0,
    },
    buttonWrapper: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        borderColor: 'red',
        borderWidth: 0,
        gap: 20
    },
    horizontalScrollview: {
        marginBottom: 10,
    },
    iconContainer: {
        width: 150,
        borderColor: 'yellow',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        top: 0
    }

});

export default HomeScreen;