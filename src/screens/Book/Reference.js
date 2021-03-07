import React from 'react'
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native'
import { gql, useQuery} from '@apollo/client'

export default (props) => {
    const {bookID, style} = props

    const {data, loading} = useQuery(GET_BOOK_BY_ID_REFERENCES, {
        variables:{
            id: bookID,
            first: 10,
        }
    })

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return(
        <View style={style}>
            <Text style={styles.containerTitle}>Point of View</Text>
            <FlatList
                data={data.getBookByID.reference.edges}
                renderItem={({item}) => 
                    <ReferenceCard
                        title={item.title}
                        description={item.description}
                        url={item.url}
                    />}
                keyExtractor={item => item.id }
            />
        </View>
    )
}

const ReferenceCard = (props) => {
    const {title, description, url} = props

    const onPress = () => {
        window.open(url)
    }

    return(
        <TouchableHighlight
            underlayColor='white'
            onPress={onPress}
            style={styles.cardContainer}
        >
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{description}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        color:'grey',
        fontSize:25,
        fontWeight:'bold',
        marginLeft:10,
    },  
    title: {
        fontSize:20,
        fontWeight:'bold'
    },
    subtitle: {
        color:'grey'  
    },
    cardContainer: {
        marginVertical:10,
        padding:10,
        paddingHorizontal:20,
        borderRadius:20,
        borderWidth:0.5,
        borderColor:'grey'
    }
})

const GET_BOOK_BY_ID_REFERENCES = gql`
    query($id: ID!, $first: Int!){
        getBookByID(id: $id){
            reference(first: $first){
                edges{
                    id
                    title
                    description
                    url
                    rating
                }
            }
        }
      }
`