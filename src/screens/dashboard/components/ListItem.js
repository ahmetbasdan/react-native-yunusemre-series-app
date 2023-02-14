import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { subTextColor, activeColor } from '../../../helpers/colorHelper'
import { inject, observer } from 'mobx-react'

@inject("sohbetStore")
@observer
export default class ListItem extends React.Component {
    render() {
        const { selected, item, onPress } = this.props
        const color = selected ? activeColor : "#fff"
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={onPress}
            >
                <Text style={{ color, ...styles.title }}>{item.title}</Text>
                <Text style={styles.subTitle}>Tabduk Emre Sohbetleri</Text>
                <Text style={styles.sure}>{item.sure}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
    title: {
        fontFamily: 'Proxima-Nova-Bold',
        fontSize: 15,
    },
    subTitle: {
        color: subTextColor,
        fontSize: 12,
        paddingTop: 4,
        fontFamily: 'Proxima-Nova-Reg',
    },
    sure: {
        color: subTextColor,
        fontSize: 13,
        position: 'absolute',
        right: 12,
        top: 12,
        fontFamily: 'Proxima-Nova-Reg',
    }
})
