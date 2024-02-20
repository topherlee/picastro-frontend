import React, {useState, useContext, useEffect, forwardRef} from 'react';
import {
	View,
	Text,
	KeyboardAvoidingView,
	Modal,
	TouchableOpacity,
	FlatList,
	RefreshControl,
} from 'react-native';
import {AuthContext} from '../../../context/AuthContext';
import {CommentOutputContainer} from '../index';
import {fetchMore} from '../../../utils';

const CommentContainer = forwardRef(function CommentContainer(
	{
		comments,
		nextComments,
		fetchMoreComments,
		setNextCommentsPage,
		onRemoveComment,
		refreshComments,
		refreshing,
		postOwner,
	},
	ref,
) {
	const ListEmptyComponent = () => {
		return (
			<View style={{paddingTop: 10}}>
				<Text
					style={{
						textAlign: 'center',
						fontWeight: 'bold',
						color: '#959595',
					}}>
					No comments yet.
				</Text>
			</View>
		);
	};

	return (
		<FlatList
			ref={ref}
			style={{flex: 1, maxHeight: 360}}
			contentContainerStyle={{flexGrow: 1}}
			data={comments}
			renderItem={({item}) => (
				<CommentOutputContainer
					{...item}
					onRemoveComment={onRemoveComment}
					postOwner={postOwner}
				/>
			)}
			keyExtractor={(item) => item.id}
			refreshControl={
				<RefreshControl
					tintColor={'#FFC700'}
					refreshing={refreshing}
					onRefresh={() => {
						refreshComments();
					}}
				/>
			}
			onEndReached={() => {
				if (comments.length != 0 && nextComments) {
					fetchMoreComments();
				}
			}}
			ListEmptyComponent={ListEmptyComponent}
			onEndReachedThreshold={0.5}
		/>
	);
});

export default CommentContainer;
