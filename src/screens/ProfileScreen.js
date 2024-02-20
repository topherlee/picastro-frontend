import {View, Text, ActivityIndicator, FlatList} from 'react-native';

import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';

const ProfileScreen = () => {
	const [data, setData] = useState([]);
	const {token, fetchInstance, currentUser} = useContext(AuthContext);

	useEffect(() => {
		async function loadSortAndFilterScreen() {
			var {response, data} = await fetchInstance('/api/feed/' + currentUser.userName, {
				method: 'GET',
				headers: {
					Authorization: `Token ${token.access}`,
					'Content-Type': 'application/json',
				},
			});
			setData(data);
		}

		loadSortAndFilterScreen().catch((err) => {
			console.log(err);
		});
	}, []);

	return (
		<View style={{flex: 1, padding: 24}}>
			{isLoading ?
				<ActivityIndicator />
			:	<FlatList
					data={data}
					keyExtractor={({id}) => id}
					renderItem={({item}) => (
						<Text>
							{item.title}, {item.releaseYear}
						</Text>
					)}
				/>
			}
			<Text>{currentUser.userName}</Text>
		</View>
	);
};

export default ProfileScreen;
