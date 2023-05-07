import colors from './colors'

export const weatherType = {
  Thunderstorm: {
    icon: 'zap',
    message: 'Get ready to dance in the rain',
    backgroundColor: colors.eigengrau
  },
  Drizzle: {
    icon: 'cloud-rain',
    message: "It's a mist-ery to me",
    backgroundColor: colors.drizzle
  },
  Rain: {
    icon: 'umbrella',
    message: "Let's make some rain art",
    backgroundColor: colors.rain
  },
  Snow: {
    icon: 'cloud-snow',
    message: 'Do you want to build a snowman?',
    backgroundColor: colors.snow
  },
  Clear: {
    icon: 'sun',
    message: 'Today is a good day to have a picnic',
    backgroundColor: colors.sun
  },
  Clouds: {
    icon: 'cloud',
    message: 'The clouds are putting on a show',
    backgroundColor: colors.cloud
  },
  Haze: {
    icon: 'wind',
    message: 'It could get mist-ical',
    backgroundColor: colors.haze
  },
  Mist: {
    icon: 'align-justify',
    message: 'Are you ready for some mystery?',
    backgroundColor: colors.mist
  }
}
