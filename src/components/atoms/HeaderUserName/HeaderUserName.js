import React, { useContext, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { loadUserProfile, loadCurrentUser } from '../../../utils';


// const saveUserProfile = async (domain, token, currentUser) => {
//     loadUser = await loadCurrentUser();
//     console.log("HeaderUserName", currentUser);
//     loadUserProfile(currentUser);
// }

const HeaderUserName = ({style, userProfile}) => {
    const {
        domain,
        token,
        currentUser,
        setCurrentUser,
        currentUserProfile,
        setCurrentUserProfile
    } = useContext(AuthContext);

    console.log("props", userProfile?.username)

    // const saveUserProfile = async () => {
    //     loadCurrentUser();
    //     const userPro = await loadUserProfile();
    //     console.log("userPro", userPro)
    // }

    // saveUserProfile();

    // saveUserProfile(domain, token, currentUser);

    return(
        <View style={style}>
            <View>
                <Text style={styles.textUserName}>
                    {userProfile?.user.username}
                </Text>
                <Text style={styles.textGenderIdentifier}>
                    {userProfile?.genderIdentifier} {currentUser.last_name} 
                </Text>
            </View>
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