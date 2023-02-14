import React from 'react'
import { View, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import { inject, observer } from 'mobx-react'

@inject("sohbetStore")
@observer
export default class Player extends React.Component {

    playerButtonIconRender = () => {
        const { sohbetStore, playOnPress } = this.props

        switch (sohbetStore.playerState) {
            case 2:
                return (
                    <MaterialIcons
                        name={"play-circle-filled"}
                        color="#fff"
                        size={80}
                        style={styles.playIcon}
                        onPress={playOnPress}
                    />
                )
            case 3:
                return (
                    <MaterialIcons
                        name={"pause-circle-filled"}
                        color="#fff"
                        size={80}
                        style={styles.playIcon}
                        onPress={playOnPress}
                    />
                )
            default:
                return (
                    <MaterialIcons
                        name={"pause-circle-filled"}
                        color="#fff"
                        size={80}
                        style={styles.playIcon}
                        onPress={playOnPress}
                    />
                )
        }
    }

    render() {
        const { previousOnPress, nextOnPress } = this.props

        return (
            <View style={styles.container}>
                <MaterialIcons
                    name="skip-previous"
                    color="#fff"
                    size={65}
                    onPress={previousOnPress}
                />
                {this.playerButtonIconRender()}
                <MaterialIcons
                    name="skip-next"
                    color="#fff"
                    size={65}
                    onPress={nextOnPress}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginBottom: 32,
    },
    playIcon: {
        paddingHorizontal: 12,
    }
})
