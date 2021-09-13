import React, {useEffect} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {View, Text} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {selectLocation, selectPending, selectWeather} from '../redux/weather/weatherSelectors';
import {getWeatherByCityName} from '../redux/weather/weatherThunk';
import {useLocation} from '../hooks/useLocation';
import {RectButton} from 'react-native-gesture-handler';

export default function TabOneScreen({navigation}: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch();
  useLocation();
  const locationState = useSelector(selectLocation);
  const isLoaded = useSelector(selectPending);
  const weather = useSelector(selectWeather);

  useEffect(() => {
    if (locationState) {
      dispatch(getWeatherByCityName(locationState));
    }
  }, [locationState]);

  return (
    <View style={styles.container}>
      {isLoaded ? (
        <React.Fragment>
          <Text style={styles.title}>Welcome to Karri Weather app</Text>
          <View style={styles.separator}></View>
          <Text style={styles.title}>
            Today in {locationState} will be {weather.main}
          </Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  getStartedText: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
