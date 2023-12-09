import React from 'react';
import {Text,View,Image, TextInput, StyleSheet, TouchableOpacity,} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import Feather from "@expo/vector-icons/Feather";
import photolo from '../../assets/images/2.jpg'
import { PrimaryButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const Reinitialise = (props) => {
    const navigation = useNavigation()

   
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Text style={{width:"100%",height:"23%", alignItems:'center'}}></Text>
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
                 }}
                >Forgot your password?
                </Text>
                
                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Enter de email address to get link reset your password.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    marginBottom:50,
                    paddingHorizontal:10,
                    borderColor:"#4AA3A2",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#4AA3A2" size={24}/>
                    <TextInput placeholder="Email Address"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Code was sent to your email.
                </Text>
                

               
                
                <View style={{
                    marginHorizontal:80,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#4AA3A2",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                <Text
                     style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Verify code</Text>
                </View>
                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    
                    textAlign:'center',
                    marginTop:25,
                    opacity:0.4
                }}
                >
                    Resend code.
                </Text>
                
            </View>
        )
    
}
export default Reinitialise ;

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