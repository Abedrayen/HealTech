import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import user from '../../assets/images/5.jpg'
import { Ionicons } from '@expo/vector-icons'
import Search from './Search'
import { useNavigation } from '@react-navigation/native'

export default function Header() {
        const navigation = useNavigation()
  return (
    <View style={{backgroundColor:"#4AA3A2", width:'100%', borderBottomLeftRadius:20, borderBottomRightRadius:20, height:250}}>
        <View style={{display: 'flex', flexDirection:'row',
                alignItems:'center', justifyContent:'space-between', width: "100%",
                borderRadius: 50,paddingHorizontal: 20, backgroundColor:"#4AA3A2"}}>
    <View style={{display:'flex', flexDirection:'row', gap:7, alignItems:'center', marginTop:100}}>
        <Image source={{}} style={{with:45, borderRadius:99}}/>
        <View>
        <Text>Hello</Text>
        <Text style={{fontSize:18,
              fontWeight: 'bold'}}>name</Text>  
      </View>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('notification')}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>

            
    </View>
            <Search />
    </View>
    
  )
}



