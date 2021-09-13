import React, {useEffect} from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useDispatch} from 'react-redux';

import {Text, View} from './Themed';

type EditScreenProps = {city: string | null; onPress?: () => void};

export default function EditScreenInfo({city, onPress}: EditScreenProps) {
  useEffect(() => {
    (async () => {})();
  });
  return (
    <View>
      <ListItem
        underlayColor="#62abe3"
        Component={TouchableHighlight}
        containerStyle={{
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 6,
          margin: 5,
        }}
        onPress={onPress}
        pad={20}>
        <ListItem.Content>
          <ListItem.Title>
            <Text>{city}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>Tap to see more</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}
