import React from 'react'
import { View, Text } from 'react-native'

import Summary from './Summary'

export default () => {
    return (
        <View>
            <Text>This is Book Page</Text>
            <Summary
                style={{width:500}}
            />
        </View>
    )
}