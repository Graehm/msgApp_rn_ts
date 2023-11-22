import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Page = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>If you see this then it is working</Text>
        </View>
    )
}

export default Page