import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default (props) => {
    const {onChangeText, onSubmit, style} = props
    return (
        <View style={[styles.container, style]}>
            <TextInput
                placeholder="Search..."
                onChangeText={(text) => onChangeText(text)}
                style={styles.textInput}
            />
            <Ionicons
                name='search'
                onPress={onSubmit}
                size={15}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth: 0.5,
        borderColor:'grey',
        borderRadius: 20,
        padding: 10,
    },
    textInput:{
        flex:1,
    }
})