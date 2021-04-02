import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { gql, useMutation} from '@apollo/client'


export default (props) => {
    const {onPress} = props
    const [login, {loading}] = useMutation(LOGIN)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState(" ")

    const onLogin = () => {
        setErrorMessage(" ")
        login({
            variables:{
                email: email,
                password: password
            }
        }).then(({data, errors}) => {
            if (errors) {
                const message = errors[0].message
                setErrorMessage(message)
            }
            else {
                console.log(data);
            }
        })
    }

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

            <Text style={styles.error}>{errorMessage}</Text>

            <Text onPress={onPress} style={styles.account}>
                Don't have an account?
            </Text>

            <TouchableOpacity 
                style={styles.loginBtn} 
                onPress={onLogin}
                disabled={loading}
            >
                {loading ? <ActivityIndicator/> : <Text>Login</Text>}
            </TouchableOpacity>
        </View>
    )
}

const LOGIN = gql`
    mutation($email: String!, $password: String!) {
        login(email:$email, password:$password)
    }
`


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: "grey",
        padding: 40,
        margin: 20,
        borderRadius: 5,
    },

    inputView: {
        backgroundColor: "white",
        borderColor: "skyblue",
        borderRadius: 5,
        borderWidth: 2,
        height: 45,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    error: {
        color:'red',
        marginBottom:20,
    },
    
    TextInput: {
        height: 50,
        flex: 1,
        padding: 25,
        marginLeft: 20,
        outlineWidth: 0,
    },

    loginBtn: {
        borderRadius: 5,
        width: "70%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "skyblue",
    },

    account: {
        fontSize: 13,
        color: "skyblue",
        fontWeight: "bold",
    },
})