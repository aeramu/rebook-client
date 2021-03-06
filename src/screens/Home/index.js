import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions } from 'react-native';
import { useQuery, gql } from '@apollo/client'

import Header from '../../components/common/Header'
import Card from '../../components/book/Card'

const initWindowWidth = Dimensions.get("window").width;

export default ({navigation}) => {
  const [windowWidth, setWindowWidth] = useState( initWindowWidth );

  const onChange = ({ window }) => {
    setWindowWidth( window.width );
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  const numColumns = Math.floor(windowWidth / 250) 

  const { loading, data } = useQuery(GET_BOOK_LIST,{
    variables: {
      first: 50,
      after: null
    }
  })

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (!data) {
    return (
      <View>
        <Text>Failed to load</Text>
      </View>
    )
  }

  const onButtonPress = () => {
    navigation.navigate('Book')
  }
 
  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        key={numColumns}
        numColumns={numColumns ? numColumns : 1}
        data={data.getBookList.edges}
        renderItem={({item}) => <View style={styles.cardContainer}>
          <Card
            title={item.title}
            author={item.author}
            imageUrl={item.coverImage}
            onPress={()=>alert(`Kamu mencet ${item.title}`)}
          />
        </View>}
        keyExtractor={item => item.id }
      />
      <Button
        title="Go to Book Page"
        onPress={onButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardContainer : {
    margin:20
  }
});

const GET_BOOK_LIST = gql`
  query($first: Int! $after: String){
    getBookList(first: $first after: $after){
      edges{
        id
        title
        author
        coverImage
      }
      pageInfo{
        endCursor
        hasNextPage
      }
    }
  }
`