import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import Modal from "react-native-modal";

import React, { useContext, useEffect, useState } from 'react';
import { UserNameImageBurgerHeader } from '../components/molecules';

import { AuthContext } from '../context/AuthContext';
import MasonryList from 'reanimated-masonry-list';
import { HalfWidthPostsContainer } from '../components/organisms';
import {BottomFilterModal} from '../components/molecules';
import globalStyling from '../../constants/globalStyling';


const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState(null);

    const {
        token,
        fetchInstance,
        searchAndFilterUrl,
        isSortModalVisible,
        setSortModalVisible,
        activeSelector,
        activeObjectSelector,
        currentPage,
        setCurrentPage,
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
            <BottomFilterModal />
            <View 
                style={{
                    backgroundColor: "black", 
                    borderWidth: 0, 
                    borderColor: "white", 
                    flex: 1
            }}>
            {data?.length > 0 ?
                <MasonryList
                    data={data}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    onRefresh={refreshPage}
                    refreshing={refreshing}
                    showsVerticalScrollIndicator={false}
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