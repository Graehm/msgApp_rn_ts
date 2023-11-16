import { Link, Stack } from 'expo-router'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
})
// essentially the app-server functionality
export default function RootLayoutNav() {
  return (
    <ConvexProvider client={convex}>
      <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EEA217',
        },
        headerTintColor: '#fff',
      }}>
        {/* sets up create chat modal icon */}
        <Stack.Screen 
          name="index"
          options={{
            headerTitle: 'My Chats',
            headerRight: () => (
              <Link href={'/(modal)/create'} asChild>
                <TouchableOpacity>
                  <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>
              </Link>
            )
          }}
        />
        {/* create modal routing here for when a user clicks the create a new chat icon. 
        it grabs the path of create new chat form line 38 */}
          <Stack.Screen 
            name="(modal)/create"
            options={{
              headerTitle: 'Start a Chat',
              presentation: 'modal',
              headerLeft: () => (
                <Link href={'./'} asChild>
                  <TouchableOpacity>
                    <Ionicons name="close-outline" size={32} color="White" />
                  </TouchableOpacity>
                </Link>
              )
            }}
          />
      </Stack>
    </ConvexProvider>
  );
}