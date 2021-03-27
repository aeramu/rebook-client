import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RegistrationForm from '../Auth/RegistrationForm'
import LoginForm from '../Auth/LoginForm'

export default () => {
    const [isLogin, setIsLogin] = React.useState(true)

    const toggleIsLogin = () => {
        setIsLogin(!isLogin)
    }

    return(
        <View style={styles.container}>
            { isLogin
                ? <LoginForm onPress={toggleIsLogin}/>
                : <RegistrationForm onPress={toggleIsLogin}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
})