import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TrackPlayer from "react-native-track-player";
import { inject, observer } from 'mobx-react'
import SohbetData from '../data/sohbetData';

@inject("sohbetStore")
@observer
export default class AutoNextTrackHelper extends TrackPlayer.ProgressComponent {

    nextBtn = async () => {
        const { seciliSohbet } = this.props.sohbetStore
        const selectedIndex = SohbetData.findIndex(x => x.id == seciliSohbet.id)
        const sohbetDataCount = SohbetData.length - 1

        if (selectedIndex == sohbetDataCount) await this.props.sohbetStore.setSeciliSohbet(SohbetData[0])
        else await this.props.sohbetStore.setSeciliSohbet(SohbetData[selectedIndex + 1])

        const { sohbetStore } = this.props
        await TrackPlayer.reset()
        await TrackPlayer.add(sohbetStore.seciliSohbet)
        TrackPlayer.play()
    }

    render() {
        const { duration, position } = this.state
        if (duration > 1 & duration - position < 1) this.nextBtn()
        return null
    }
}
