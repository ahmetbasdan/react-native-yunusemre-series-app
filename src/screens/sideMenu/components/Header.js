import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { veryDark } from '../../../helpers/colorHelper'

export default function Header({ style }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/logoRound.png')}
            />
            <Text style={styles.title}>YunusEmre</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 160,
        backgroundColor: veryDark,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        color: '#fff',
        paddingTop: 7,
        fontSize: 20,
        letterSpacing: 0.9,
        fontFamily: 'Proxima-Nova-Bold',
    }
})
