import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';

export default () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>BiblioGig</Text>
            <Text style={styles.subtitle}>by Coder x ISH TIBEN</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
      height: 100,
      backgroundColor:"blue",
      alignItems: 'stretch',
      alignSelf:'stretch',
      justifyContent: 'flex-start',
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
    }
  });


