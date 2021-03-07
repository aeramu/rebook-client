import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { gql, useQuery} from '@apollo/client'

import Summary from './Summary'
import Header from '../../components/common/Header'

export default (props) => {
    const { route } = props

    const {data, loading} = useQuery(GET_BOOK_BY_ID, {
        variables:{
            id: route.params.bookId
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

    return (
        <View>
            <Header/>
            <View style={styles.container}>
                <Image
                style={styles.image} 
                source={{ uri: data.getBookByID.coverImage}}
                />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                        {data.getBookByID.title}
                    </Text>
                    <Text style={styles.author}>
                        {data.getBookByID.author}
                    </Text>
                    <Summary
                        bookID = {route.params.bookId} 
                        style={styles.summary}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle:{
        alignItems:'stretch',
        justifyContent: 'flex-start',   
        flexDirection: 'column',
        marginLeft: 50,
        flex: 1,
    },
    container:{
        alignItems:'stretch',
        justifyContent: 'flex-start', 
        flexDirection: 'row',
        padding: 50,
        backgroundColor:'white'
    },
    image: {
        width: 350,  
        height: 500,
        borderRadius: 10,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
    },
    author: {
        fontSize: 20,
        color: 'grey',
    },
    summary: {
        marginTop: 20,
    }
});

const GET_BOOK_BY_ID = gql`
    query($id: ID!){
        getBookByID(id: $id){
            id
            title
            author
            coverImage
        }
    }
`