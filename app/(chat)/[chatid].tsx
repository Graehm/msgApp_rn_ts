import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Page = () => {
    const { chatid } = useLocalSearchParams()
    // console.log('~file: [chatid].tsx:7 ~ Page ~ id:', chatid)
    return (
        <View>
            <Text>Chat Page is in the House</Text>
        </View>
    )
}

export default Page