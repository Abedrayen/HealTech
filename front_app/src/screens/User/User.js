import { View, Text, SafeAreaView, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {
    Avatar,
    Title,
    Caption,
    
    TouchableRipple,
  } from 'react-native-paper';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";

const  User = () => {
    const navigation = useNavigation()

    const [icon_1] = useState(new Animated.Value(40));
    const [icon_2] = useState(new Animated.Value(40));
    const [icon_3] = useState(new Animated.Value(40));
  
    const [pop, setPop] = useState(false);
  
    const popIn = () => {
      setPop(true);
      Animated.timing(icon_1, {
        toValue: 130,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(icon_2, {
        toValue: 110,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(icon_3, {
        toValue: 130,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  
    const popOut = () => {
      setPop(false);
      Animated.timing(icon_1, {
        toValue: 40,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(icon_2, {
        toValue: 40,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(icon_3, {
        toValue: 40,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }

  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row', marginTop: 15}}>
                <Avatar.Image source={{
                    uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                }} />
            <View style={{ left:250, top:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('edit-profile-user')}>
                        <MaterialCommunityIcons name="tooltip-edit" color="#4AA3A2" size={35} /> 
                    </TouchableOpacity>
            </View>
            </View>
            <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Josaphat Songo</Title>
            <Caption style={styles.caption}>@jos_songo</Caption>
            </View>
        </View>

        <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Riadh, Sousse</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+21656434256</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>songokadimaepm2020@ieee.org</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>12 Years</Title>
            <Caption>Member</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>5</Title>
            <Caption>Consultation</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="account-check-outline" color="#4AA3A2" size={25}/>
            <Text style={styles.menuItemText}>Kede Kede Kede</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="account-check-outline" color="#4AA3A2" size={25}/>
            <Text style={styles.menuItemText}>Kede Kede Kede</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={{}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="account-check-outline" color="#4AA3A2" size={25}/>
            <Text style={styles.menuItemText}>Kede Kede Kede</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="account-check-outline" color="#4AA3A2" size={25}/>
            <Text style={styles.menuItemText}>Kede kede kede</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="logout" color="#4AA3A2" size={25}/>
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
      </View>


      <Animated.View style={[styles.circle, { bottom: icon_1}]}>
        <TouchableOpacity onPress={() => navigation.navigate('user-profile')}>
          <Icon name="user" size={25} color="#FFFF" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2}]}>
        <TouchableOpacity onPress={() => navigation.navigate('formulaire')}>
          <Icon name="print" size={25} color="#FFFF" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { right: icon_3}]}>
        <TouchableOpacity>
          <Icon name="share-alt" size={25} color="#FFFF" />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}
      >
        <Icon name="plus" size={25} color="#FFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default User;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
    circle: {
        backgroundColor: '#4AA3A2',
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 40,
        right: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
     }
  });