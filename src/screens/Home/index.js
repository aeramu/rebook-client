import React from 'react';
import { StyleSheet, Text, View, FlatList, useWindowDimensions } from 'react-native';
import { useQuery, gql } from '@apollo/client'

import Card from '../../components/book/Card'
import SearchBar from '../../components/common/SearchBar'

export default ({navigation}) => {
  const numColumns = Math.floor(useWindowDimensions().width / 250) 

  const [filter, setFilter] = React.useState("")

  const {loading, data} = useQuery(GET_BOOK_LIST,{
    variables: {
      first: 50,
      after: null,
      filter: filter
    }
  })

  const onCardPress = (id) => {
    navigation.navigate('Book', { bookId:id })
  }
 
  return (
    <View style={styles.container}>
      <SearchBar
        style={styles.searchBar}
        onChangeText={setFilter}
      />
      {
        loading
        ? <Text>Loading...</Text>
        : <FlatList
          key={numColumns}
          numColumns={numColumns ? numColumns : 1}
          data={data && data.getBookList.edges}
          renderItem={({item}) => <View style={styles.cardContainer}>
            <Card
              title={item.title}
              author={item.author}
              imageUrl={item.coverImage}
              onPress={onCardPress(item.id)}
            />
          </View>}
          keyExtractor={item => item.id }
        />
      }
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
  },
  searchBar: {
    marginTop:30,
    marginBottom:20,
    width:300
  }
});

const GET_BOOK_LIST = gql`
  query($first: Int!, $after: String, $filter: String){
    getBookList(first: $first, after: $after, filter: $filter){
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