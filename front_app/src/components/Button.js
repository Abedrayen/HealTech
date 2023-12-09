import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';


const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
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
                    }}>Login</Text>
                </View>
    </TouchableOpacity>
  );
};


export {PrimaryButton};