import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Image} from 'react-native'

export default (props) => {
    const {title, author, imageUrl, onPress} = props

    return(
        <TouchableHighlight
            onPress={onPress}
            underlayColor="white"
        >
            <View style={styles.container}>
                <Image
                resizeMode='stretch' 
                style={styles.image} 
                source={require('../../../../assets/kajian.png')}
                />
                <View style={styles.tag}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {author}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start', 
        borderRadius: 10,  
        overflow:'hidden',
        borderWidth: 0.75,
        borderColor: 'grey',
    },
    image: {
        width: 150,  
        height: 200,   
    },
    tag: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    subtitle:   {
        fontSize: 15,
        color: 'grey',
        justifyContent: 'center',
    }
  });


