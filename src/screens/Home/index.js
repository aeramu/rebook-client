import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from '../../components/common/Header'

export default ({navigation}) => {
  const onButtonPress = () => {
    navigation.navigate('Book')
  }

  return (
    <View style={styles.container}>
      <Header/>
      <Button
        title="Go to Book Page"
        onPress={onButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});