import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useRouter } from 'expo-router'

const Page = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [icon, setIcon] = useState('')
    const router = useRouter()
    const startGroup = useMutation(api.groups.create)
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
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.textInput} value={name} onChangeText={setName}></TextInput>
           
            <Text style={styles.label}>Desccription</Text>
            <TextInput style={styles.textInput} value={desc} onChangeText={setDesc}></TextInput>

            <Text style={styles.label}>Icon URL</Text>
            <TextInput style={styles.textInput} value={icon} onChangeText={setIcon}></TextInput>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex:1, 
        backgroundColor: '#F8F5EA',
        padding: 10, 
    },
    label: {
        marginVertical: 10,
    },
    textInput: {
        borderWidth: 1, 
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10, 
        minHeight: 40, 
        backgroundColor: '#fff'
    }
})
export default Page



