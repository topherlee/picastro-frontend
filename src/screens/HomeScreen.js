import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    Alert,
} from 'react-native';

import {useScrollToTop} from '@react-navigation/native';
import {UserNameImageBurgerHeader} from '../components/molecules';
import {AuthContext} from '../context/AuthContext';
import MasonryList from 'reanimated-masonry-list';
import {HalfWidthPostsContainer} from '../components/organisms';
import {BottomFilterModal} from '../components/molecules';
import {EmptyFeedMaleFigure} from '../components/atoms';
import globalStyling from '../../constants/globalStyling';
import {apiCallLikeDislike, loadLikedPostList} from '../utils';

const HomeScreen = ({navigation, route}) => {
    //this is to scroll up on pressing the homescreen
    const ref = useRef();
    useScrollToTop(ref);

    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState(null);
    const [retry, setRetry] = useState(0);

    const {
        token,
        fetchInstance,
        searchAndFilterUrl,
        isModalVisible,
        activeSelector,
        activeObjectSelector,
        listOfLikes,
        setListOfLikes,
        currentPostsPage,
        setCurrentPostsPage,
    } = useContext(AuthContext);

    const urlForApiCall = '/api/feed/?' + searchAndFilterUrl;

    const loadLikedPostListURL = '/api/like/1';
    const loadLikedPostListMethod = 'GET';

    async function loadLikedPostList() {
        try {
            var response = await apiCallLikeDislike(
                loadLikedPostListURL,
                loadLikedPostListMethod,
                fetchInstance,
                token,
            );
            var listOfLikes2;
            if (response.ok) {
                listOfLikes2 = await response.json();
                setListOfLikes(listOfLikes2.results);
                console.log('listOfLikes', listOfLikes);
            }
        } catch (error) {
            console.log('ERROR', error);
            return [];
        }
    }

    async function loadHomescreen(pageNum) {
        try {
            var pageUrl = pageNum ? `&page=${pageNum}` : '';
            var response = await fetchInstance(urlForApiCall + pageUrl, {
                method: 'GET',
                headers: {
                    Authorization: `Token ${token.access}`,
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                response = await response.json();
                setNext(response.next);
                return response.results;
            } else {
                throw new Error(`HTTP response status ${response.status}`);
            }
        } catch (error) {
            console.log('HOMESCREEN', error);

            Alert.alert('Error Fetching Data', error.toString());
            return [];
        }
    }

    const fetchMore = async () => {
        if (isLoading) return;
        if (!next) return;
        setIsLoading(true);

        const nextPage = currentPostsPage + 1;
        const newData = await loadHomescreen(nextPage);
        setCurrentPostsPage(nextPage);
        setIsLoading(false);
        setData((prevData) => [...prevData, ...newData]);
    };

    const refreshPage = async () => {
        ref.current?.scrollTo({
            y: 0,
            animated: true,
        });
        setCurrentPostsPage(1);
        const newData = await loadHomescreen(1);
        setData(newData);
        setRefreshing(false);
    };

    useEffect(() => {
        loadHomescreen(currentPostsPage)
            .then((res) => {
                setData(res);
                setRefreshing(false);
            })
            .catch((err) => {
                console.log('UE ERROR', err);
            });
        loadLikedPostList();
    }, [activeObjectSelector, activeSelector, retry]);

    useEffect(() => {
        refreshPage();
    }, [route.params]);

    return (
        <SafeAreaView style={styles.container}>
            <UserNameImageBurgerHeader />
            {isModalVisible ? <BottomFilterModal screen={'Home'} /> : <></>}
            <View
                style={{
                    backgroundColor: 'black',
                    borderWidth: 0,
                    borderColor: 'white',
                    flex: 1,
                }}>
                <MasonryList
                    innerRef={ref}
                    data={data}
                    numColumns={2}
                    onRefresh={refreshPage}
                    refreshing={refreshing}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    indicatorStyle={'white'}
                    renderItem={({item}) => (
                        <HalfWidthPostsContainer {...item} />
                    )}
                    // LoadingView={<ActivityIndicator size={"large"} />}
                    ListEmptyComponent={
                        <View
                            style={{
                                maxWidth: '96%',
                                paddingTop: '3%',
                            }}>
                            <EmptyFeedMaleFigure />
                        </View>
                    }
                    LoadingView={
                        <ActivityIndicator size="large" color="#FFC700" />
                    }
                    contentContainerStyle={{
                        borderColor: 'red',
                        borderWidth: 0,
                        paddingTop: '3%',
                        paddingLeft: '4%',
                        backgroundColor: 'black',
                    }}
                    style={{
                        flex: 1,
                        maxWidth: '96%',
                        columnGap: 10,
                        borderColor: 'yellow',
                        borderWidth: 0,
                    }}
                    onEndReached={() => {
                        if (data.length != 0) fetchMore();
                    }}
                    onEndReachedThreshold={0.1}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        backgroundColor: '#2F2F2F',
        borderColor: 'yellow',
        borderWidth: 0,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
    modalWrapper: {
        borderColor: 'red',
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
        backgroundColor: '#2F2F2F',
        borderColor: 'green',
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
        gap: 5,
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
        textAlignVertical: 'center',
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
        gap: 20,
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
        top: 0,
    },
});

export default HomeScreen;
