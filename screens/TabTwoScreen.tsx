import * as React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {Text, View} from '../components/Themed';
import {weatherConditions} from '../constants/conditions';
import {selectPending, selectWeather} from '../redux/weather/weatherSelectors';

export default function TabTwoScreen() {
  const isLoaded = useSelector(selectPending);
  const weather = useSelector(selectWeather);
  const {main, temp, name} = weather;
  return (
    <View style={styles.weatherContainer}>
      {isLoaded ? (
        <React.Fragment>
          <View style={styles.headerContainer}>
            <MaterialCommunityIcons
              size={72}
              name={weatherConditions[main].icon}
              color={weatherConditions[main].color}
            />
            <Text style={[styles.tempText, {color: weatherConditions[main].color}]}>{temp}˚</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={[styles.title, {color: weatherConditions[main].color}]}>{name}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={[styles.title, {color: weatherConditions[main].color}]}>{weatherConditions[main].title}</Text>
          </View>
        </React.Fragment>
      ) : (
        <View style={styles.horizontal}>
          <ActivityIndicator size="large" color="#62abe3" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  weatherContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tempText: {
    fontSize: 72,
    color: '#fff',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  bottomContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 60,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
