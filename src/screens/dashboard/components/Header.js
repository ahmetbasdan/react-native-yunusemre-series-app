import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/dist/Feather'
import { headerHeight } from '../variables'
import { veryDark } from '../../../helpers/colorHelper'
import { Actions } from 'react-native-router-flux'

const { width } = Dimensions.get('window')
export default function Header() {
    return (
        <View style={styles.container}>
            <Feather
                name="menu"
                color="#fff"
                size={24}
                onPress={() => Actions.drawerOpen()}
            />
            <Text style={styles.title}>YunusEmre</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: headerHeight,
        backgroundColor: veryDark,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        marginLeft: 16,
        letterSpacing: 0.9,
        fontFamily: 'Proxima-Nova-Bold',
        paddingTop: 1,
    }
})
