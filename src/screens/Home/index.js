import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/common/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Edited</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"red",
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});