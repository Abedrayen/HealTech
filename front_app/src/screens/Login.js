import React from 'react';
import {Text,View,Image, TextInput, StyleSheet, TouchableOpacity,} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import Feather from "@expo/vector-icons/Feather";
import photolo from '../../assets/images/med.png'
import { PrimaryButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {
    const navigation = useNavigation()

   
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={photolo}
                    style={{width:"100%",height:"43%"}}
                />
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
                >Login</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Sign in into your account.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#4AA3A2",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="user" color="#4AA3A2" size={24}/>
                    <TextInput placeholder="Username"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#4AA3A2",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="key"  color="#4AA3A2" size={24}/>
                    <TextInput placeholder="Password"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>

                <PrimaryButton
          onPress={() => navigation.navigate('acceuil')}
          title="Login"
        />
                <Text 
                
                onPress={()=>props.navigation.navigate('renitialise')}
                
                style={{
                    alignSelf:"center",
                    color:"#4AA3A2",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>I forget my password Click here to reset!</Text>
                <Text 
                
                onPress={()=>props.navigation.navigate('register')}
                
                style={{
                    alignSelf:"center",
                    color:"#4AA3A2",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>New User</Text>
            </View>
        )
    
}
export default Login ;

const styles = StyleSheet.create ({
    header: {
        flexDirection: "row",
        
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 50,
        position:'absolute'
      },
    title : {
        marginBottom: 17,
        padding : 17,
        borderRadius : 30,
        
    }
})