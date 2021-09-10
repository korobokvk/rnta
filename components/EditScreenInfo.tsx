import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';


export default function EditScreenInfo({ path }: { path: string }) {

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Welcome Screen ;)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    marginHorizontal: 25,
  },
  getStartedText: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'left',
    marginBottom: 15
  }
});
