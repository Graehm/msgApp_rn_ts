import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Page = () => {
    const { id } = useLocalSearchParams()
    // console.log('~file: [chatid].tsx:7 ~ Page ~ id:', id)
    return (
        <View>
            <Text>If you see this then it is working</Text>
        </View>
    )
}

export default Page