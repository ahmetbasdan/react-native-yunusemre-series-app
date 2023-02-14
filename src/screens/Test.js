import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Test() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>{(42*100)/180}</Text>
            <Button text="Geri" />
            <Button text="Başlat" />
            <Button text="İleri" />
        </View>
    )
}


const Button = ({ text, onPress }) => (
    <TouchableOpacity style={{
        backgroundColor: 'gray',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:16,
    }}
        onPress={onPress}
    >
        <Text style={{ fontSize: 21 }}>{text}</Text>
    </TouchableOpacity>
)