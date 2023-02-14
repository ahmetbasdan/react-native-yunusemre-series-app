import React from 'react'
import { StatusBar, LogBox } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Routes from './src/Routes'
import { veryDark } from './src/helpers/colorHelper'
import StoreProvider from './src/stores/StoreProvider';
import TrackPlayer from "react-native-track-player";
import { observer } from 'mobx-react'
import SohbetStore from './src/stores/SohbetStore'
import SplashScreen from 'react-native-splash-screen'
import SohbetData from './src/data/sohbetData';

LogBox.ignoreLogs(['currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInput'])

@observer
export default class App extends React.Component {

  componentDidMount() {
    changeNavigationBarColor(veryDark, false)

    TrackPlayer.setupPlayer().then(async () => {

      await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        ]
      })

      TrackPlayer.addEventListener('playback-state', async (data) => {
        SohbetStore.setPlayerState(data.state)
      })

      TrackPlayer.addEventListener('playback-track-changed', async (data) => {
        const seciliSohbet = await SohbetData.find(x => x.id == data.nextTrack)
        if (seciliSohbet != undefined) {
          SohbetStore.setSeciliSohbet(seciliSohbet)
        }
      })

    })

    SplashScreen.hide()
  }

  async componentWillUnmount() {
    TrackPlayer.destroy()
    SohbetStore.setPlayerState(null)
    SohbetStore.setSeciliSohbet(null)
  }

  render() {
    return (
      <StoreProvider>
        <StatusBar backgroundColor={veryDark} barStyle="light-content" />
        <Routes />
      </StoreProvider >
    )
  }

}
