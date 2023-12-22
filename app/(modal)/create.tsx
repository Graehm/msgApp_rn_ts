import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useRouter } from 'expo-router'

const Page = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [icon, setIcon] = useState('')
    const startGroup = useMutation(api.groups.create)
    const router = useRouter()
//create a new group in the convex mutation 
    const onCreateGroup = async () => {
        await startGroup({
            name, 
            description: desc, 
            icon_url: icon
        })
        router.back()
    }
    return (
        <KeyboardAvoidingView>
            <Text>Yo!</Text>
        </KeyboardAvoidingView>
    )
}

export default Page

