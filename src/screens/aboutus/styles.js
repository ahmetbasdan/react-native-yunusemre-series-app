import { StyleSheet } from 'react-native'
import { dark } from '../../helpers/colorHelper'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: dark,
        paddingHorizontal: 12,
    },
    title: {
        color: '#fff',
        fontSize: 26,
        textAlign:'center',
        marginTop:24,
        marginBottom:8,
        fontFamily: 'Proxima-Nova-Bold',
    },
    text: {
        color: '#fff',
        fontSize: 17,
        lineHeight: 24,
        fontFamily: 'Proxima-Nova-Reg',
    }
})

export default styles