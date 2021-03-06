import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useQuery, gql} from '@apollo/client'

import Header from '../../components/common/Header'

export default ({navigation}) => {
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