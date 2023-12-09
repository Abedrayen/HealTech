import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

const Notification = (props) => {
    const navigation = useNavigation()
  return (
    <View style={{backgroundColor:"#FFF",height:"100%"}}>
      <View style={styles.header}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Feather name="chevron-left" color="#4AA3A2" size={25} /> 
                    </TouchableOpacity>
    </View>
    <Text
         style={{
            fontSize:30,
            fontFamily:"SemiBold",
            alignSelf:"center",
            top:70
    }}
        >Notification
    </Text>
            <View>
                <Text style={{fontSize:20, top:100, left:20}}>You have no notifications</Text>
            </View>
            <View style={{display:'flex', width:327,height:88, flexDirection:'column', alignItems:"flex-start", gap:10, top:160, marginLeft:10, backgroundColor:'#d1ded4', borderTopLeftRadius:16, borderTopRightRadius:16, borderBottomLeftRadius:16,borderBottomRightRadius:16, paddingLeft:20}}>
                
                    <Text style={{fontSize:16, fontWeight:700, color:"black", top:5}}>See all</Text>
                    <Text style={{fontSize:14, fontWeight:400, color:"#7E7E7E" }}>See all</Text>
                
            </View>
    </View>
  )
}

export default Notification

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