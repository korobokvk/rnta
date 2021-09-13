import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ValueOf} from 'react-native-gesture-handler/lib/typescript/typeUtils';
import {useDispatch, useSelector} from 'react-redux';
import EditScreenInfo from '../components/EditScreenInfo';
import {View} from '../components/Themed';
import {popularCity} from '../constants/popularCity';
import {selectLocation} from '../redux/weather/weatherSelectors';
import {getWeatherByCityName} from '../redux/weather/weatherThunk';
import {useNavigation} from '@react-navigation/native';

export default function ModalScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const currentLocation = useSelector(selectLocation);
  const onTabPress = (cityName: string) => {
    if (cityName !== popularCity.CURRENT) {
      getWeatherByUserChoice(cityName);
    } else {
      getWeatherByUserChoice(currentLocation);
    }
    navigation.navigate('Root', {screen: 'TabTwo'});
  };

  const getWeatherByUserChoice = (cityName: string | null) => {
    if (cityName) {
      dispatch(getWeatherByCityName(cityName));
    }
  };
  return (
    <View>
      <EditScreenInfo
        city={popularCity.CURRENT}
        onPress={() => {
          onTabPress(popularCity.CURRENT);
        }}
      />
      <EditScreenInfo
        city={popularCity.LONDON}
        onPress={() => {
          onTabPress(popularCity.LONDON);
        }}
      />
      <EditScreenInfo
        city={popularCity.TOKYO}
        onPress={() => {
          onTabPress(popularCity.TOKYO);
        }}
      />
      <EditScreenInfo
        city={popularCity.BERLIN}
        onPress={() => {
          onTabPress(popularCity.BERLIN);
        }}
      />
    </View>
  );
}
