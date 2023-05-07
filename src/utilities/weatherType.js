import colors from './colors'
import Thunderstorm from '../../assets/icons/thunderstorms-night.svg'
import Drizzle from '../../assets/icons/shower-rain.svg'
import Rain from '../../assets/icons/rain-night.svg'
import Snow from '../../assets/icons/snow-night.svg'
import Clear from '../../assets/icons/clear-night.svg'
import Clouds from '../../assets/icons/overcast-night.svg'
import Haze from '../../assets/icons/mist-night.svg'
import Mist from '../../assets/icons/mist-night.svg'

export const weatherType = {
  Thunderstorm: {
    icon: size => <Thunderstorm width={size} height={size} />,
    message: 'Get ready to dance in the rain',
    backgroundColor: colors.eigengrau
  },
  Drizzle: {
    icon: size => <Drizzle width={size} height={size} />,
    message: "It's a mist-ery to me",
    backgroundColor: colors.drizzle
  },
  Rain: {
    icon: size => <Rain width={size} height={size} />,
    message: "Let's make some rain art",
    backgroundColor: colors.rain
  },
  Snow: {
    icon: size => <Snow width={size} height={size} />,
    message: 'Do you want to build a snowman?',
    backgroundColor: colors.snow
  },
  Clear: {
    icon: size => <Clear width={size} height={size} />,
    message: 'Today is a good day to have a picnic',
    backgroundColor: colors.sun
  },
  Clouds: {
    icon: size => <Clouds width={size} height={size} />,
    message: 'The clouds are putting on a show',
    backgroundColor: colors.cloud
  },
  Haze: {
    icon: size => <Haze width={size} height={size} />,
    message: 'It could get mist-ical',
    backgroundColor: colors.haze
  },
  Mist: {
    icon: size => <Mist width={size} height={size} />,
    message: 'Are you ready for some mystery?',
    backgroundColor: colors.mist
  }
}
