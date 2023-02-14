import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import { dark, activeColor, veryDark, medDark } from '../../../helpers/colorHelper'
import { inject, observer } from 'mobx-react'
import { Actions } from 'react-native-router-flux'
import TrackPlayer from 'react-native-track-player';

const contentHeight = 60
const sliderHeight = 1.5
const containerHeight = contentHeight + sliderHeight

@inject("sohbetStore")
@observer
export default class MiniPlayer extends TrackPlayer.ProgressComponent {

    playToggleBtn = () => {
        const { sohbetStore } = this.props

        switch (sohbetStore.playerState) {
            case 2:
                TrackPlayer.play()
                break;
            case 3:
                TrackPlayer.pause()
                break;
            default:
                alert("Player state bulunamadı!")
        }
    }

    playerButtonIconRender = () => {
        const { sohbetStore } = this.props

        switch (sohbetStore.playerState) {
            case 2:
                return (
                    <MaterialIcons
                        name={"play-arrow"}
                        color="#fff"
                        size={32}
                    />
                )
            case 3:
                return (
                    <MaterialIcons
                        name={"pause"}
                        color="#fff"
                        size={32}
                    />
                )
            default:
                return null
        }
    }

    render() {
        const { sohbetStore } = this.props
        const { duration, position } = this.state
        const yuzde = (position * 100) / duration

        if (sohbetStore.seciliSohbet == null) return null

        return (
            <View style={styles.container}>
                <Slider rate={yuzde || 0} />
                <View style={styles.content}>
                    <Image
                        source={sohbetStore.seciliSohbet.artwork}
                        style={styles.image}
                    />
                    <TouchableOpacity
                        onPress={() => Actions.MusicPlayer()}
                        style={styles.titleBtn}
                    >
                        <Text style={styles.title}>{sohbetStore.seciliSohbet.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.95}
                        style={styles.playBtn}
                        onPress={() => this.playToggleBtn()}
                    >
                        {this.playerButtonIconRender()}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const Slider = ({ rate }) => (
    <View style={{
        width: `${rate}%`,
        height: sliderHeight,
        backgroundColor: activeColor,
    }}>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: containerHeight,
        backgroundColor: veryDark,
    },
    content: {
        width: '100%',
        height: contentHeight,
        backgroundColor: dark,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: contentHeight + 10,
        height: contentHeight,
        flex: 1,
    },
    titleBtn: {
        flex: 3,
        height: contentHeight,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 0.5,
        fontSize: 15,
        fontFamily: 'Proxima-Nova-Bold',
    },
    playBtn: {
        flex: 0.6,
        backgroundColor: medDark,
        height: contentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
