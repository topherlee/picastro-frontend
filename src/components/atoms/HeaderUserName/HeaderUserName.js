import React, { useContext, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { loadUserProfile, loadCurrentUser } from '../../../utils';


let retryCount = 0;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

const saveUserProfile = async () => {
    loadCurrentUser();
    loadUserProfile();
}

const HeaderUserName = ({style},props) => {
    const {
        domain,
        token,
        currentUser,
        setCurrentUser,
        currentUserProfile,
        setCurrentUserProfile
    } = useContext(AuthContext);

    saveUserProfile();

    return(
        <View style={style}>
            {currentUserProfile.user?.username ?
                <View>
                    <Text style={styles.textUserName}>
                        {currentUserProfile.user.username}
                    </Text>
                    <Text style={styles.textGenderIdentifier}>
                        {currentUser.first_name} {currentUser.last_name} 
                    </Text>
                </View>
                :
                <Text style={{ color: 'white' }}>Nothing to display here</Text>
            }
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