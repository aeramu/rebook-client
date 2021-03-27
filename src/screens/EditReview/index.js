import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Editor from '../../components/common/Editor'

export default () => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={{color: "white"}}>Publish</Text>
                </TouchableOpacity>
            </View>
            <Editor
                style = {{fontSize: 45}}
                placeholder="Title..."
            />
            <Editor
                style = {{fontSize: 25}}
                placeholder="Tell your summary..."
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        justifyContent:'flex-start',
        alignItems: 'stretch',
        paddingHorizontal: 200,
    },

    header:{
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight: 50,
        marginTop: 25,
    },

    loginBtn: {
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        backgroundColor: "green",
    },
})