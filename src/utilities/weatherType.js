// icons
import Thunderstorm from '../../assets/icons/thunderstorms-night.svg'
import Drizzle from '../../assets/icons/shower-rain.svg'
import Rain from '../../assets/icons/rain-night.svg'
import Snow from '../../assets/icons/snow-night.svg'
import Clear from '../../assets/icons/clear-night.svg'
import Clouds from '../../assets/icons/overcast-night.svg'
import Haze from '../../assets/icons/mist-night.svg'
import Mist from '../../assets/icons/mist-night.svg'
// backgrounds
import ThunderstormBG from '../../assets/backgrounds/thunderstorm.jpg'
import DrizzleBG from '../../assets/backgrounds/drizzle.jpg'
import RainBG from '../../assets/backgrounds/rain.jpg'
import SnowBG from '../../assets/backgrounds/snow.jpg'
import ClearBG from '../../assets/backgrounds/clear.jpg'
import CloudsBG from '../../assets/backgrounds/clouds.jpg'
import HazeBG from '../../assets/backgrounds/haze.jpg'
import MistBG from '../../assets/backgrounds/mist.jpg'

export const weatherType = {
  Thunderstorm: {
    icon: size => <Thunderstorm width={size} height={size} />,
    message: 'Get ready to dance in the rain',
    backgroundImage: ThunderstormBG
  },
  Drizzle: {
    icon: size => <Drizzle width={size} height={size} />,
    message: "It's a mist-ery to me",
    backgroundImage: DrizzleBG
  },
  Rain: {
    icon: size => <Rain width={size} height={size} />,
    message: "Let's make some rain art",
    backgroundImage: RainBG
  },
  Snow: {
    icon: size => <Snow width={size} height={size} />,
    message: 'Do you want to build a snowman?',
    backgroundImage: SnowBG
  },
  Clear: {
    icon: size => <Clear width={size} height={size} />,
    message: 'Today is a good day to have a picnic',
    backgroundImage: ClearBG
  },
  Clouds: {
    icon: size => <Clouds width={size} height={size} />,
    message: 'The clouds are putting on a show',
    backgroundImage: CloudsBG
  },
  Haze: {
    icon: size => <Haze width={size} height={size} />,
    message: 'It could get mist-ical',
    backgroundImage: HazeBG
  },
  Mist: {
    icon: size => <Mist width={size} height={size} />,
    message: 'Are you ready for some mystery?',
    backgroundImage: MistBG
  }
}
