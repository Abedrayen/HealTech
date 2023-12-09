import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from 'react-native-paper';

const EditProfil = () => {
    

  return (
    <View style={styles.container}>
        <View style={{margin:20}}>
            <View style={{alignItems:"center", top: 55}}>
                <TouchableOpacity onPress={() => {}}>
                    <View style={{
                        height:100,
                        width:100,
                        borderRadius:15,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <ImageBackground source={{
                            uri: 'https://www.geds.fr/kcfinder/upload/images/blog/2023/salaire-medecin-generaliste/salaire-medecin-generaliste.jpg',
                        }}
                            style={{height:100,width:100}}
                            imageStyle={{borderRadius:15}}
                        >
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Icon name='camera' size={35} color="#fff" style={{
                                opacity:0.7,
                                alignItems:'center',
                                justifyContent:'center',
                               
                                borderRadius:10,
                            }} />
                        </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={{marginTop:10, fontSize:18, fontWeight:'bold'}}>Josaphat Songo</Text>
            </View>
            <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:15,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2,
                    top: 70,
                   
                    paddingBottom: 5,
                    
                }}>
                   <Icon name="user"  color="#00716F" size={24}/>
                   <TextInput 
                        secureTextEntry
                        placeholder="Last name"
                        
                        style={{paddingHorizontal:10}}
                    />
                </View>
        </View>
    </View>
  )
}

export default EditProfil;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 70,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
    
  });