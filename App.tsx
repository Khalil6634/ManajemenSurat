import type { ComponentProps } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Icon bawaan Expo

import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './pages/homscreens';
import ProfileScreen from './pages/profile';
import SearchScreen from './pages/searchscreens';
import uploadscreens from 'pages/uploadscreens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'home';
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Upload') {
                iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Upload" component={uploadscreens} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
