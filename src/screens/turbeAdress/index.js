import React from 'react'
import { View, Text, TouchableOpacity, Platform, Linking } from 'react-native'
import styles from './styles'

export default function index() {

    mapLink = () => {
        const tabtukInitialRegion = {
            latitude: 40.0756681,
            longitude: 31.3989714,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
        }
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${tabtukInitialRegion.latitude},${tabtukInitialRegion.longitude}`;
        const label = 'Tabtuk Emre Hz. Türbesi';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adres</Text>
            <Text style={styles.text}>Emremsultan, 06920 Nallıhan/Ankara</Text>
            <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={() => mapLink()}
            >
                <Text style={styles.btnText}>Haritaya Git</Text>
            </TouchableOpacity>
        </View>
    )
}
