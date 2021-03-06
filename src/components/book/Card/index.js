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
                resizeMode='cover' 
                style={styles.image} 
                source={{ uri: imageUrl }}
                />
                <View style={styles.tag}>
                    <Text style={styles.title} numberOfLines={2}>
                        {title}
                    </Text>
                    <Text style={styles.subtitle} numberOfLines={1}>
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
        width: 210,
        height:420,
    },
    image: {
        height: 320
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


