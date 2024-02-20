import React, {useContext, useState} from 'react';
import {View, Alert, Image, ActionSheetIOS, Platform, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../../context/AuthContext';
import {BottomModal} from '../../common';
import {ImageOptionsView} from '../../atoms';
// import { goToUserScreen } from '../../../utils';

const FullWidthAboveImage = ({props}) => {
	const navigation = useNavigation();
	const {
		fetchInstance,
		token,
		setModalVisible,
		isModalVisible,
		setUserScreenUrl,
		setUserActiveSelector,
		setUserSearchAndFilterUrl,
		setUserCurrentPage,
	} = useContext(AuthContext);

	const goToUserScreen = function (userId) {
		setUserScreenUrl('poster=' + userId);
		//resets the modal and url to default upon loading userscreen
		setUserActiveSelector('most_recent');
		setUserSearchAndFilterUrl('');
		setUserCurrentPage(1);
		navigation.push('UserScreen', {userId: userId});
	};

	return (
		<Banner>
			<TouchableOpacity onPress={() => goToUserScreen(props.poster.id)}>
				<Image
					source={{
						uri: props.poster.profileImage,
						cache: 'reload',
					}}
					style={{
						width: 54,
						height: 54,
						marginLeft: 3,
						borderRadius: 9,
						borderWidth: 0,
						borderColor: 'red',
					}}
				/>
			</TouchableOpacity>
			<NameBanner>
				<TouchableOpacity onPress={() => goToUserScreen(props.poster.id)}>
					<UsernameText>{props.poster.username}</UsernameText>
				</TouchableOpacity>
				<LocationText>{props.poster.location}</LocationText>
			</NameBanner>

			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<Icon name="dots-horizontal" size={40} color="lightgray" />
			</TouchableOpacity>

			{isModalVisible ?
				<BottomModal
					childrenText={'Image Options'}
					children={<ImageOptionsView props={props} />}
				/>
			:	<></>}
		</Banner>
	);
};

const Banner = styled.View`
	display: flex;
	flex: 1;
	flex-direction: row;
	align-items: center;
	align-content: center;
	width: 100%;
	height: 60px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background-color: #2e2e2e;
`;

const NameBanner = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 70%;
	height: 100%;
	padding: 0% 3% 0% 3%;
	border: 0px solid yellow;
`;

const UsernameText = styled.Text`
	color: #7a7a7a;
	font-weight: bold;
	font-size: 18px;
`;

const LocationText = styled.Text`
	color: #7a7a7a;
`;

export default FullWidthAboveImage;
