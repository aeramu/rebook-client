import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default () => {
return(
    <View style={styles.container}>
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email..."
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
            />
        </View>
   
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password..."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
    </View>

  )}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: "grey",
        padding: 40,
        margin: 20,
        borderRadius: 10,
    },

    inputView: {
        backgroundColor: "white",
        borderColor: "skyblue",
        borderRadius: 10,
        borderWidth: 2,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    
      TextInput: {
        height: 50,
        flex: 1,
        padding: 25,
        marginLeft: 20,
    },

      loginBtn: {
        borderRadius: 10,
        width: "70%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "skyblue",
    },
})