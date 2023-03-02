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

import React, {useEffect, useState} from 'react';


const ProfileScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
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