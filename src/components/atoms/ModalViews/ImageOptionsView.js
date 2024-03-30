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
import * as Burnt from 'burnt';
import {TouchableIcon} from '../../common';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../../context/AuthContext';
import globalStyling from '../../../../constants/globalStyling';

export default function ImageOptionsView({props}) {
	const {fetchInstance, token, currentUser, setModalVisible} = useContext(AuthContext);
	const navigation = useNavigation();
	console.log(currentUser.username, props.poster.username);
	const handleDelete = function () {
		Alert.alert('Delete Post?', 'This post will be permanently deleted.', [
			{
				text: 'Delete',
				onPress: () => onConfirmDelete(),
				style: 'destructive',
			},
			{
				text: 'Cancel',
				onPress: () => console.log('Delete Cancelled'),
				style: 'cancel',
			},
		]);
	};

	const deletePost = async (id) => {
		try {
			var response = await fetchInstance(`/api/feed/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Token ${token.access}`,
					'Content-Type': 'application/json',
				},
			});
			return response;
		} catch (err) {
			console.log('ok error', err);
		}
	};

	const onConfirmDelete = () => {
		deletePost(props.id).then((response) => {
			if (response.ok) {
				Burnt.toast({
					title: 'Delete Successful', // required
					preset: 'done',
					message: `Post has been deleted`, // optional
					duration: 2, // duration in seconds
					shouldDismissByDrag: true,
					haptic: 'success',
				});
				setModalVisible(false);
				navigation.goBack();
			} else {
				Burnt.toast({
					title: 'Delete Failed', // required
					preset: 'error',
					message: 'Please try again', // optional
					haptic: 'error',
					duration: 2, // duration in seconds
					shouldDismissByDrag: true,
				});
			}
		});
	};

	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'center',
			}}>
			{currentUser.username === props.poster.username ?
				<>
					<TouchableIcon name="pencil-outline" size={60} label="Edit" />
					<TouchableIcon
						name="delete-outline"
						size={60}
						color="red"
						label="Delete"
						onPress={handleDelete}
					/>
				</>
			:	<TouchableIcon
					name="cancel"
					size={60}
					label="Cancel"
					onPress={() => setModalVisible(false)}
				/>
			}
		</View>
	);
}
