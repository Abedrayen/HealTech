import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Aceeuil from '../screens/Aceeuil'
import Detail from '../screens/Detail'
import Login from '../screens/Login'
import { Feather } from '@expo/vector-icons'
import Register from '../screens/Register'
import Home from '../screens/Home'

const Tab=createBottomTabNavigator()
export default function BottomNav() {
  return (
    <Tab.Navigator >
        
        <Tab.Screen name='home' component={Home} options={{tabBarIcon: ({color}) => (
        <Feather name="home" color="#4AA3A2" size={25} />
      ),
      }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create ({
  header: {
      flexDirection: "row",
      
      justifyContent: "space-between",
      width: "100%",
      paddingHorizontal: 20,
      paddingTop: 50,
      position:'absolute'
    },
})