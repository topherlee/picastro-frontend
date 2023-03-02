import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const Coin = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let email = 'admin@example.com';
  let password = '123456';

  const getMovies = async (email, password) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
        
      })
      .then(res => {
        console.log("response");
        console.log(res.status);
        console.log(res.headers);
        return res.json();
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
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

export default Coin;