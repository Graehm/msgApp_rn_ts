import { Link, Stack } from 'expo-router';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// comes from convex react package to access database from .env
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
	unsavedChangesWarning: false
});

// stack page of all pagesin app
export default function RootLayoutNav() {
	return (
		<ConvexProvider client={convex}>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: '#EEA217'
					},
					headerTintColor: '#fff'
				}}
			>
				{/* is the routing to the main page layout with my chat index using asChild */}
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
				{/* is the routing to the modal pop up for start a new chat */}
				<Stack.Screen
					name="(modal)/create"
					options={{
						headerTitle: 'Start a Chat',
						// specifically makes modal
						presentation: 'modal',
						headerLeft: () => (
							<Link href={'/'} asChild>
								<TouchableOpacity>
									<Ionicons name="close-outline" size={32} color="white" />
								</TouchableOpacity>
							</Link>
						),
						// testing if its simple styling error
						contentStyle: {
							padding: 30
						}
					}}
				/>
				<Stack.Screen name="(chat)/[chatid]" options={{ headerTitle: 'TEST' }} />
			</Stack>
		</ConvexProvider>
	);
}
