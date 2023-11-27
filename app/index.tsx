import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'
import { Link } from 'expo-router'

// automatic and realtime connection to Convex
// acts as the index.js and access groups/ts and other files via query data
const Page = () => {
    const groups = useQuery(api.groups.get) || []

    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container}>
                {groups.map((group) => (
                    <Link href={{ pathname: '/(chat)/[chatid]', params: { chatid: group._id } }} key={group._id.toString()}>
                        <Text>{group.name}</Text>
                    </Link>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 10, 
        backgroundColor: '#F8F5EA'
    },
})


export default Page