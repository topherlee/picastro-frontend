import React, {useState, useContext, useEffect} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    Modal,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {AuthContext} from '../../../context/AuthContext';
import {CommentOutputContainer} from '../index';

export default function CommentContainer({comments}) {

    return (
        <FlatList
            style={{flex: 1, height: 300}}
            contentContainerStyle={{flexGrow: 1}}
            data={comments}
            renderItem={({item}) => <CommentOutputContainer {...item} />}
            keyExtractor={item => item.id}
        />
    );
}
