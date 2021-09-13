import {requestForegroundPermissionsAsync, reverseGeocodeAsync, getCurrentPositionAsync} from 'expo-location';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectLocation} from '../redux/weather/weatherSelectors';
import {setLocation} from '../redux/weather/weatherSlices';

export const useLocation = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const {status} = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const {
        coords: {longitude, latitude},
      } = await getCurrentPositionAsync({});

      const [locationByCoords] = await reverseGeocodeAsync({longitude, latitude});
      const {city} = locationByCoords;
      dispatch(setLocation(city));
    })();
  }, []);
};
