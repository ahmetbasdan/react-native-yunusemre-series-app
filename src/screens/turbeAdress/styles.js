import { StyleSheet } from 'react-native'
import { dark, activeColor } from '../../helpers/colorHelper'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: dark,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 26,
        textAlign: 'center',
        fontFamily: 'Proxima-Nova-Bold',
    },
    text: {
        color: '#fff',
        fontSize: 15,
        letterSpacing: 0.9,
        textAlign: 'center',
        fontFamily: 'Proxima-Nova-Reg',
        marginVertical: 12,
    },
    btn: {
        backgroundColor: activeColor,
        width: 150,
        alignSelf: 'center',
        borderRadius: 24,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 16,
        fontFamily: 'Proxima-Nova-Bold',
    }
})

export default styles