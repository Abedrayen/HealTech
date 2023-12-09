import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../assets/Shared/Colors'


export default function Search() {
  return (
    <View style={{marginTop:15, marginBottom:90}}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        borderWidth:0.6,
        marginLeft:10,
        borderColor:Colors.GRAY,
        borderRadius:20,
        padding:10
      }}>
        <Ionicons name="search-outline" size={24} color={Colors.PRIMARY}  />
        <TextInput placeholder='Search' 
            style={{width:'100%'}}
        />
      </View>
    </View>
  )
}