import React, { useContext, useEffect, useState } from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { AuthContext } from '../../../context/AuthContext';


const HeaderUserName = ({style}) => {
    
    const [data, setData] = useState([]);
    const {domain, setDomain, token, setCurrentUser} = useContext(AuthContext);
    
    useEffect(() => {
        Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
        //console.log(`Token ${token}`)

        const localCurrentUser = require('../../../../assets/data/currentUser.json');
        
        fetch(`${domain}/api/current_user/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then((result) => {
            console.log(result);
            //incomingData = result;
            setData(result);
        }).catch (err => {
            console.log(err);
            setData(localCurrentUser);
        })
    }, [])

    return (
    
        <View
            style={style}>
            <Text style={styles.textUserName}>
                {data[0].username}
            </Text>
            <Text style={styles.textGenderIdentifier}>
                {data[0].genderIdentifier}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textUserName: {
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        fontWeight: '700',
        color: 'white',
        textAlign: 'left',
    },
    textGenderIdentifier: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '500',
        color: 'white',
        textAlign: 'left'
    },
}); 

export default HeaderUserName;