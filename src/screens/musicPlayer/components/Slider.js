import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider';
import { subTextColor } from '../../../helpers/colorHelper';
import TrackPlayer from 'react-native-track-player';

const { width } = Dimensions.get('window')
export default class PlayerSlider extends TrackPlayer.ProgressComponent {

    seekTo = (val) => {
        TrackPlayer.seekTo(val)
    }

    secondToMinute(timeInSeconds) {
        var pad = function (num, size) { return ('000' + num).slice(size * -1); },
            time = parseFloat(timeInSeconds).toFixed(3),
            hours = Math.floor(time / 60 / 60),
            minutes = Math.floor(time / 60) % 60,
            seconds = Math.floor(time - minutes * 60),
            milliseconds = time.slice(-3);

        return pad(minutes, 1) + ':' + pad(seconds, 2);
    }

    render() {
        const { duration, position } = this.state
 
        return (
            <>
                <Slider
                    style={{ width, alignSelf: 'center' }}
                    minimumValue={0}
                    value={position}
                    maximumValue={duration}
                    minimumTrackTintColor="#FFF"
                    maximumTrackTintColor="#fff"
                    thumbTintColor="#fff"
                    onValueChange={(val) => this.seekTo(val)}
                />
                <View style={styles.timer}>
                    <Text style={styles.nowTime}>{this.secondToMinute(position)}</Text>
                    <Text style={styles.lastTime}>{this.secondToMinute(duration)}</Text>
                </View>
            </>
        )
    }

}

const styles = StyleSheet.create({
    timer: {
        flexDirection: 'row',
        width: '100%',
    },
    nowTime: {
        color: subTextColor,
        position: 'absolute',
        left: 0,
        fontSize: 12,
        fontFamily: 'Proxima-Nova-Reg',
    },
    lastTime: {
        color: subTextColor,
        position: 'absolute',
        right: 0,
        fontSize: 12,
        fontFamily: 'Proxima-Nova-Reg',
    }
})
