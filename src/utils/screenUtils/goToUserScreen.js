import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/AuthContext';

// const goToUserScreen = function (userID) {
//     const navigation = useNavigation();
//     const {
//         setUserScreenUrl,
//         setUserActiveSelector,
//         setUserSearchAndFilterUrl,
//         setUserCurrentPage,
//         } = useContext(AuthContext);
    
//     setUserScreenUrl('poster=' + userID);
//     //resets the modal and url to default upon loading userscreen
//     setUserActiveSelector('most_recent'); 
//     setUserSearchAndFilterUrl('')
//     setUserCurrentPage(1)
//     // navigation.navigate('UserScreen');
//  }

//  export default goToUserScreen;