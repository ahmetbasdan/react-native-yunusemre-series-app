import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { Slider, Player } from './components'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import { Actions } from 'react-native-router-flux'
import TrackPlayer from 'react-native-track-player';
import { inject, observer } from 'mobx-react'
import SohbetData from '../../data/sohbetData'

@inject("sohbetStore")
@observer
export default class index extends React.Component {

    playToggle = () => {
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

    nextBtn = async () => TrackPlayer.skipToNext()
    
    previousBtn = async () => TrackPlayer.skipToPrevious()
    
    render() {
        const { sohbetStore } = this.props
        return (
            <View style={styles.container} >
                <MaterialIcons
                    name="keyboard-backspace"
                    color="#fff"
                    style={styles.backButton}
                    onPress={() => Actions.pop()}
                />
                <Text style={styles.headerText}>Tabduk Emre Sohbetleri</Text>
                <Image
                    source={sohbetStore.seciliSohbet.artwork}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{sohbetStore.seciliSohbet.title}</Text>
                    <Text style={styles.subTitle}>{sohbetStore.seciliSohbet.artist}</Text>
                    <Slider />
                    <Player
                        previousOnPress={() => this.previousBtn()}
                        playOnPress={() => this.playToggle()}
                        nextOnPress={() => this.nextBtn()}
                    />
                </View>
            </View>
        )
    }
}
