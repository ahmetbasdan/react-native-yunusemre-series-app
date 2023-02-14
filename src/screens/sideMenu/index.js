import React from 'react'
import { View } from 'react-native'
import { Header, MenuItem } from './components'
import styles from './styles'
import { Actions } from 'react-native-router-flux'

export default function index() {
    return (
        <View style={styles.container}>
            <Header />
            <MenuItem text="Türbe Yol Tarifi" onPress={() => Actions.TurbeAdress()} />
            <MenuItem text="Hakkımızda" onPress={() => Actions.AboutUs()} />
        </View>
    )
}
