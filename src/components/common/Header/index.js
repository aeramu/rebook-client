import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation()
    const onLoginPress = () => {
        navigation.navigate('Auth')
    }
    const onHeaderPress = () => {
        navigation.navigate('Home')
    }
    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.title} onPress={onHeaderPress}>BiblioGig</Text>
                <Text style={styles.subtitle}>by Coder x ISH TIBEN</Text>
            </View>
            <Text style={styles.login} onPress={onLoginPress}>Login</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor:"blue",
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 60,
    },
    subtitle:   {
        fontSize: 10,
        color: 'white',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingLeft: 60,
    },
    login:   {
        fontSize: 20,
        color: 'white',
        paddingBottom: 10,
        paddingRight: 60,
    }
  });


