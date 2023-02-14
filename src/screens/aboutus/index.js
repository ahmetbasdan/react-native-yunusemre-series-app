import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hakkımızda</Text>
            <Text style={styles.text}>YunusEmre uygulamasını ücretsiz ve sınırsız bir şekilde kullanabilirsiniz. Mobil uygulama fikriniz veya girişiminiz var ise aeb81tr@gmail.com mail adresinden bana ulaşabilirsiniz.</Text>
        </View>
    )
}
