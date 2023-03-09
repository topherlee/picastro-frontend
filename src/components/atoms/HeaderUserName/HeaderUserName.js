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
    Platform
} from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import localCurrentUser from '../../../assets/data/currentUser';

//console.log(localCurrentUser);

const HeaderUserName = ({style},props) => {
    const [data, setData] = useState([]);
    const {domain, setDomain, token} = useContext(AuthContext);

    useEffect(() => {
        Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
        //console.log(`Token ${token}`)

        fetch(`${domain}/api/current_user/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then((result) => {
            //console.log("INCOMINGDATA",result.username)
            setData(result);
        }).catch (err => {
            console.log(err);
            //setData(existingData);
        })
    }, [])
    return(
        <View style={style}>
            <Text style={styles.textUserName}>
                {data.username}
            </Text>
            <Text style={styles.textGenderIdentifier}>
                {data.first_name} {data.last_name}
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