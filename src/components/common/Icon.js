import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TouchableIcon({name, color, size, onPress, label}) {
    var color = color ? color : "#fff",
        size = size ? size : 50;
    return (
        <TouchableOpacity onPress={onPress} style={{flexDirection: 'column', marginHorizontal:10, borderWidth: 0, borderColor: "green"}}>
            <Icon name={name} color={color} size={size} />
            {label ? <Text style={{color: color, fontSize: size/3.5, textAlign: 'center'}}>{label}</Text> : <></>}
        </TouchableOpacity>
    )
}