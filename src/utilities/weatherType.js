// icons
import ClearDayIcon from '../../assets/icons/clear-day.svg'
import ClearNightIcon from '../../assets/icons/clear-night.svg'
import OvercastDayIcon from '../../assets/icons/overcast-day.svg'
import OvercastNightIcon from '../../assets/icons/overcast-night.svg'
import ScatteredCloudsIcon from '../../assets/icons/scattered-clouds.svg'
import BrokenCloudsIcon from '../../assets/icons/broken-clouds.svg'
import ShowerRainIcon from '../../assets/icons/shower-rain.svg'
import RainDayIcon from '../../assets/icons/rain-day.svg'
import RainNightIcon from '../../assets/icons/rain-night.svg'
import ThunderstormsDayIcon from '../../assets/icons/thunderstorms-day.svg'
import ThunderstormsNightIcon from '../../assets/icons/thunderstorms-night.svg'
import SnowDayIcon from '../../assets/icons/snow-day.svg'
import SnowNightIcon from '../../assets/icons/snow-night.svg'
import MistDayIcon from '../../assets/icons/mist-day.svg'
import MistNightIcon from '../../assets/icons/mist-night.svg'
// backgrounds
import ThunderstormBG from '../../assets/backgrounds/thunderstorm.jpg'
import DrizzleBG from '../../assets/backgrounds/drizzle.jpg'
import RainBG from '../../assets/backgrounds/rain.jpg'
import SnowBG from '../../assets/backgrounds/snow.jpg'
import ClearBG from '../../assets/backgrounds/clear.jpg'
import CloudsBG from '../../assets/backgrounds/clouds.jpg'
import HazeBG from '../../assets/backgrounds/haze.jpg'
import MistBG from '../../assets/backgrounds/mist.jpg'

const weatherType = {
  Thunderstorm: {
    message: 'Get ready to dance in the rain',
    backgroundImage: ThunderstormBG
  },
  Drizzle: {
    message: "It's a mist-ery to me",
    backgroundImage: DrizzleBG
  },
  Rain: {
    message: "Let's make some rain art",
    backgroundImage: RainBG
  },
  Snow: {
    message: 'Do you want to build a snowman?',
    backgroundImage: SnowBG
  },
  Clear: {
    message: 'Today is a good day to have a picnic',
    backgroundImage: ClearBG
  },
  Clouds: {
    message: 'The clouds are putting on a show',
    backgroundImage: CloudsBG
  },
  Haze: {
    message: 'It could get mist-ical',
    backgroundImage: HazeBG
  },
  Mist: {
    message: 'Are you ready for some mystery?',
    backgroundImage: MistBG
  }
}

const weatherIcon = (icon, size) => {
  switch (icon) {
    case '01d':
      return <ClearDayIcon width={size} height={size} />
    case '01n':
      return <ClearNightIcon width={size} height={size} />
    case '02d':
      return <OvercastDayIcon width={size} height={size} />
    case '02n':
      return <OvercastNightIcon width={size} height={size} />
    case '03d':
    case '03n':
      return <ScatteredCloudsIcon width={size} height={size} />
    case '04d':
    case '04n':
      return <BrokenCloudsIcon width={size} height={size} />
    case '09d':
    case '09n':
      return <ShowerRainIcon width={size} height={size} />
    case '10d':
      return <RainDayIcon width={size} height={size} />
    case '10n':
      return <RainNightIcon width={size} height={size} />
    case '11d':
      return <ThunderstormsDayIcon width={size} height={size} />
    case '11n':
      return <ThunderstormsNightIcon width={size} height={size} />
    case '13d':
      return <SnowDayIcon width={size} height={size} />
    case '13n':
      return <SnowNightIcon width={size} height={size} />
    case '50d':
      return <MistDayIcon width={size} height={size} />
    case '50n':
      return <MistNightIcon width={size} height={size} />
  }
}

export { weatherType, weatherIcon }
