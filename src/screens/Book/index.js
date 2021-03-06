import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Summary from './Summary'
import Header from '../../components/common/Header'

export default () => {
    return (
        <View>
            <Header/>
            <View style={styles.container}>
                <Image
                style={styles.image} 
                source={{ uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328310410l/12329637.jpg'}}
                />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                        Judul Buku
                    </Text>
                    <Text style={styles.author}>
                        Penulis
                    </Text>
                    <Summary
                        bookID = {"tes"} 
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