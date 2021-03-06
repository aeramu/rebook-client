import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useQuery, gql} from '@apollo/client'

import Header from '../../components/common/Header'

export default ({navigation}) => {
  const { loading, error, data, networkStatus, refetch, fetchMore } = useQuery(BOOK_LIST,{
    variables:{
      cursor: null
    }
  })

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

const BOOK_LIST = gql`
  query($cursor: String){
    getBookList(first: 50, after: $cursor){
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