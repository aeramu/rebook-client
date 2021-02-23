import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Book from '../screens/Book'

const RootStack = createStackNavigator()
const RootStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name='Home' component={Home}/>
            <RootStack.Screen name='Book' component={Book}/>
        </RootStack.Navigator>
    )
}

const linking = {
    prefixes: [
        'https://aeramu.github.io/rebook-client',
        'http://localhost:1900'
    ],
    config: {
        Home: '',
        Book: 'book/:bookId'
    },
};

export default () => {
    return (
        <NavigationContainer linking={linking}>
            <RootStackScreen/>
        </NavigationContainer>
    )
}