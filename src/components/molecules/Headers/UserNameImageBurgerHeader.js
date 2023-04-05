import React, { useContext } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserImage, HeaderUserName } from '../../atoms';
import { AuthContext } from '../../../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const UserNameImageBurgerHeader = () => {
    const navigation = useNavigation();
    const {
        currentUser,
        setUserScreenUrl,
        setUserActiveSelector,
        setUserSearchAndFilterUrl,
        setUserCurrentPage
    } = useContext(AuthContext);
    
    // useEffect(() => {
    //     Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
    //     //console.log(`Token ${token}`)

    //     fetch(`${domain}/api/current_user/`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Token ${token}`,
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => {return res.json()})
    //     .then((result) => {
    //         //console.log("INCOMINGDATA",token,result)
    //         setCurrentUser(result);
    //         console.log("currentuser",currentUser)
    //         console.log('result',result)
    //     }).catch (err => {
    //         console.log(err);
    //         //setData(existingData);
    //     })
    // }, [])
    
    return (
        <View style={styles.headerContainer}>
            <View style={styles.userImage}>
                <TouchableOpacity 
                    style={styles.userImage}
                    onPress={function () {
                        setUserScreenUrl('poster=' + currentUser.id);
                        //resets the modal and url to default upon loading userscreen
                        setUserActiveSelector('most_recent'); 
                        setUserSearchAndFilterUrl('')
                        setUserCurrentPage(1)
                        navigation.navigate('UserScreen');
                     }}
                >
                    <UserImage />
                </TouchableOpacity>
            </View>
            <HeaderUserName 
                style={styles.textContainer}
            />
            <View>
                <TouchableOpacity onPress={function() {navigation.openDrawer()}} >
                    <Icon name={"menu"} size={40} color="lightgray" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#2F2F2F',
        display: "flex",
        top: 0,
        width: '100%',
        height: 60,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    textContainer: {
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        top: 0,
        width: '70%',
        flexDirection: 'column',
        marginLeft: 15,
    },
    textGenderIdentifier: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '500',
        color: 'white',
        textAlign: 'left'
    },
    image: {
        width: "100%",
        height: 200
    },
    userImage: {
        height: 40,
        paddingLeft: 0,
        //flex: 1,
    },
    BurgerButton: {
        width: 40,
        height: 40,
        right: 5,
    }
});  

export default UserNameImageBurgerHeader;
