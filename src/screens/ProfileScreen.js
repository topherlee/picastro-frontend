import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from 'react-native'

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import MasonryList from 'reanimated-masonry-list';
import { HalfWidthPostsContainer } from '../components/organisms';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ProfileScreen = () => {
  const [data, setData] = useState([]);
  const { domain, setDomain, token, fetchInstance, currentUser } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(true);
  const [urlAttachement, setUrlAttachement] = useState("");


  useEffect(() => {
    //Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
    //console.log('AccessToken',jwtDecode(token.access))

    async function loadSortAndFilterScreen() {
      var { response, data } = await fetchInstance('/api/feed/' + currentUser.userName, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token.access}`,
          'Content-Type': 'application/json'
        }
      })
      setData(data);
    }

    loadSortAndFilterScreen().catch(err => { console.log(err) })
    // .then(res => {return res.json()})
    // .then((result) => {
    //     //console.log("INCOMINGDATA",token,result)
    //     setData(result);
    // }).catch (err => {
    //     console.log(err, "Failed to get data from API.");
    // })
  }, [])


  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
      <Text>{currentUser.userName}</Text>
    </View>
  );
};

//export default App;


// const ProfileScreen = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//             {/* <Header /> */}
//             <ScrollView>
//                 <Text style={styles.text}>
//                     Still in progress... check back later
//                 </Text>
//                 <Button
//                     title='Go to Home'
//                     onPress={() => navigation.navigate('Home')}
//                 />
//             </ScrollView>
//         </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'black'
//     },
//     text: {
//         fontSize: 25,
//         fontWeight: '500',
//         color: 'red',
//         textAlign: 'center'
//     },
// });  

export default ProfileScreen;