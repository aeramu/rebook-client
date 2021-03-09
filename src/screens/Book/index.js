import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'

import { gql, useQuery} from '@apollo/client'

import Summary from './Summary'
import Reference from './Reference'
import Header from '../../components/common/Header'

export default (props) => {
    const { route } = props

    const height = useWindowDimensions().height - 200

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
                <View style={styles.image}>
                    <Image
                        style={{ height: height, width: height*15/22}} 
                        source={{ uri: data.getBookByID.coverImage}}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                        {data.getBookByID.title}
                    </Text>
                    <Text style={styles.author}>
                        {data.getBookByID.author}
                    </Text>
                    <Summary
                        bookID = {route.params.bookId} 
                        style={{height: height - 100}}
                    />
                    <Reference
                        bookID = {route.params.bookId}
                        style = {styles.reference}
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
        flex: 1,
    },
    container:{
        alignItems:'stretch',
        justifyContent: 'flex-start', 
        flexDirection: 'row',
        padding: 30,
        backgroundColor:'white',
        flexWrap:'wrap'
    },
    image: {
        marginBottom:20,
        marginRight:30,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
    },
    author: {
        fontSize: 20,
        color: 'grey',
        marginBottom: 10
    },
    reference: {
        marginTop: 30,
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