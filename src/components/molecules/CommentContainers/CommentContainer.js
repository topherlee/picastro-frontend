import React, { useState, useContext, useEffect, forwardRef } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    Modal,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { CommentOutputContainer } from '../index';
import { fetchMore } from '../../../utils';
  
const CommentContainer = forwardRef(function CommentContainer({ comments, nextComments, fetchMoreComments, setNextCommentsPage }, ref) {

    return (
        <FlatList
            ref={ref}
            style={{ flex: 1, maxHeight: 400 }}
            contentContainerStyle={{ flexGrow: 1 }}
            data={comments}
            renderItem={({ item }) => <CommentOutputContainer {...item} />}
            keyExtractor={item => item.id}
            onEndReached={() => {
                console.log("comments onEndReached")
                if (comments.length != 0 && nextComments) { 
                    fetchMoreComments()
                    setNextCommentsPage(page => page + 1);
                }
            }}
            
            // onEndReachedThreshold={0.1}
        />
    );
})

export default CommentContainer;