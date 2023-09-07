import React, {useContext} from 'react';
import {
    View,
    Text,
    Pressable,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Button,
    Alert,
} from 'react-native';
import { TouchableIcon } from '../../common';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../../context/AuthContext';
import globalStyling from '../../../../constants/globalStyling';

export default function ImageOptionsView({props}) {
    const {fetchInstance, token, currentUser, setModalVisible} = useContext(AuthContext);
    const navigation = useNavigation();

    const handleDelete = function () {
        Alert.alert(
            'Delete Post?',
            'This post will be permanently deleted.',
            [{
                text: 'Delete',
                onPress: () => onConfirmDelete(),
                style: 'destructive',
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Delete Cancelled'),
                style: 'cancel',
            },]
        );
    };

    const deletePost = async id => {
        try {
            var {response, data} = await fetchInstance(
                `/api/feed/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Token ${token.access}`,
                        'Content-Type': 'application/json',
                    },
                },
            );
            return {response, data};
        } catch (err) {
            console.log('ok error', err);
        }
    };

    const onConfirmDelete = () => {
        deletePost(props.id).then(({response, data}) => {
            if (response.ok) {
                Alert.alert(
                    'Delete Successful',
                    'This post has been successfully deleted.',
                    [{
                        text: 'OK', 
                        onPress: () => {
                            setModalVisible(false);
                            navigation.goBack();
                        }
                    }],
                );
            } else {
                Alert.alert('Delete Failed', 'Please try again later.');
            }
        });
        console.log('OK Pressed');
    };

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center'
            }}>
            {currentUser.username === props.username ? <>
                <TouchableIcon name="pencil-outline" size={60} label="Edit" />
                <TouchableIcon name="delete-outline" size={60} color="red" label="Delete" onPress={handleDelete} />
            </> : 
                <TouchableIcon name="cancel" size={60} label="Cancel" onPress={() => setModalVisible(false)} />
            }
        </View>
    );
}
