import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/dist/Feather'
import { dark } from '../../../helpers/colorHelper'

const MenuItem = ({ text, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.contanier}>
        <Text style={styles.text}>{text}</Text>
        <Feather
            name="arrow-right"
            style={styles.icon}
        />
    </TouchableOpacity>
)

export default MenuItem

const styles = StyleSheet.create({
    contanier: {
        backgroundColor:dark,
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#bdbdbd',
    },
    text: {
        flex: 5,
        fontSize: 15,
        color:'#fff',
        fontFamily: 'Proxima-Nova-Reg',
    },
    icon: {
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        right: 16,
        fontSize: 18,
        color: '#fff',
    }
})