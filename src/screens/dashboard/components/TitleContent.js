import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { parallaxHeaderHeight, headerHeight } from '../variables'

export default function TitleContent() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/sohbetBg.jpg')}
                style={styles.bgImage}
            />
            <Text style={styles.title}>Tabduk Emre Sohbetleri</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: (parallaxHeaderHeight + headerHeight) / 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImage: {
        width: 250,
        height: 200,
        borderRadius: 16,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        letterSpacing: 1,
        marginTop: 16,
        fontFamily: 'Proxima-Nova-Bold',
    }
})
