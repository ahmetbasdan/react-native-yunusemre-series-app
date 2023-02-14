import React from 'react'
import { View, StyleSheet } from 'react-native'
import sohbetler from '../../../data/sohbetData'
import ListItem from './ListItem'
import { inject, observer } from 'mobx-react'
import TrackPlayer from 'react-native-track-player';
import { Actions } from 'react-native-router-flux'
import SohbetData from '../../../data/sohbetData'

@inject("sohbetStore")
@observer
export default class Content extends React.Component {

    startSohbetPlayer = async (item) => {
        const { sohbetStore } = this.props

        if (sohbetStore.seciliSohbet != null) {
            if (item.id == sohbetStore.seciliSohbet.id) {
                return Actions.MusicPlayer()
            }
        }

        const currentTrack = await TrackPlayer.getCurrentTrack()

        if (currentTrack == null) {
            await TrackPlayer.reset()
            await TrackPlayer.add(SohbetData)
        }

        await TrackPlayer.skip(item.id)
        TrackPlayer.play()
    }

    seciliSohbet = (item) => {
        const { sohbetStore } = this.props

        return sohbetStore.seciliSohbet != null ?
            sohbetStore.seciliSohbet.id == item.id
                ? true
                : false
            : false
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    sohbetler.map((item, index) => (
                        <ListItem
                            item={item}
                            key={index}
                            selected={this.seciliSohbet(item)}
                            onPress={() => this.startSohbetPlayer(item)}
                        />
                    ))
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    }
})
