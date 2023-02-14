import { StyleSheet } from 'react-native'
import { subTextColor } from '../../helpers/colorHelper'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    image: {
        width: null,
        height: null,
        flex: 1,
        opacity: 0.7,
    },
    content: {
        ...StyleSheet.absoluteFill,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    title: {
        color: '#fff',
        fontSize: 26,
        alignSelf: 'flex-start',
        fontFamily: 'Proxima-Nova-Bold',
    },
    subTitle: {
        color: subTextColor,
        alignSelf: 'flex-start',
        marginBottom: 16,
        fontFamily: 'Proxima-Nova-Reg',
    },
    backButton: {
        position: 'absolute',
        fontSize: 32,
        left: 12,
        top: 8,
        zIndex: 999999,
    },
    headerText: {
        position: 'absolute',
        left: 58,
        top: 12,
        color: '#fff',
        fontFamily: 'Proxima-Nova-Bold',
        fontSize: 20,
        zIndex: 999999,
    }
})

export default styles