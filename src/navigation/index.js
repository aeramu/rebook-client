import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Book from '../screens/Book'
import Auth from '../screens/Auth'
import EditReview from '../screens/EditReview'
import Header from '../components/common/Header'

const RootStack = createStackNavigator()
const RootStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{ 
            header: () => {
                return <Header/>
            } 
        }}>
            <RootStack.Screen name='Home' component={Home}/>
            <RootStack.Screen name='Book' component={Book}/>
            <RootStack.Screen name='Auth' component={Auth}/>
            <RootStack.Screen name='EditReview' component={EditReview}/>
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
        Book: 'book/:bookId',
        Auth: 'login',
        EditReview: 'edit'
    },
};

export default () => {
    return (
        <NavigationContainer linking={linking}>
            <RootStackScreen/>
        </NavigationContainer>
    )
}