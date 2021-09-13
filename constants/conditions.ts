import {MaterialCommunityIcons} from '@expo/vector-icons';

type Props = {
  color: string;
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export const weatherConditions: {
  [key: string]: Props;
} = {
  Rain: {
    color: '#005BEA',
    title: 'Raining',
    icon: 'weather-rainy',
  },
  Clear: {
    color: '#f7b733',
    title: 'So Sunny',
    icon: 'weather-sunny',
  },
  Thunderstorm: {
    color: '#616161',
    title: 'A Storm is coming',
    icon: 'weather-lightning',
  },
  Clouds: {
    color: '#1F1C2C',
    title: 'Clouds',
    icon: 'weather-cloudy',
  },

  Snow: {
    color: '#00d2ff',
    title: 'Snow',
    icon: 'weather-snowy',
  },
  Drizzle: {
    color: '#076585',
    title: 'Drizzle',
    icon: 'weather-hail',
  },
  Haze: {
    color: '#66A6FF',
    title: 'Haze',
    icon: 'weather-hail',
  },
  Mist: {
    color: '#3CD3AD',
    title: 'Mist',
    icon: 'weather-fog',
  },
};
