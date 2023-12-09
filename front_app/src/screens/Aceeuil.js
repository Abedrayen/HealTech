// import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
// import React, { useState } from 'react'
// import Header from '../components/Header';
// import Search from '../components/Search';
// import Slider from '../components/Slider';
// import Symptome from '../components/Symptome';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import BottomNav from '../navigation/BottomNav';
// import { Icon } from '@expo/vector-icons/AntDesign';
// import { Feather, Ionicons } from '@expo/vector-icons';

import React, { useState} from "react";
import { View, TouchableOpacity, StyleSheet, Animated, TouchableHighlight, FlatList, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Symptome from "../components/Symptome";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../navigation/BottomNav";
import Colors from "../../assets/Shared/Colors";

const Aceeuil = (props) => {

  const foods = [
    {
        id:1, 
    name: 'Slider 1',
    imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
    },
    {
        id: 2,
        name: 'Slider 2',
        imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
    },
    {
        id: 2,
        name: 'Slider 2',
        imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
    },
    {
        id: 2,
        name: 'Slider 2',
        imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
    },
    {
        id: 2,
        name: 'Slider 2',
        imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
    },
    {
        id: 2,
        name: 'Slider 2',
        imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
    }
]

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

  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={Colors.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={styles.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={food.imageUrl} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: Colors.grey, marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${food.price}
            </Text>
            <View style={styles.addToCartBtn}>
              <Icon name="add" size={20} color={Colors.white} /> 
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return(
    <View style={{
      flex: 1
    }}>
    <Header />
    {/* <Slider /> */}
    <Symptome />
    {/* <BottomNav /> */}


    <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
      <Animated.View style={[styles.circle, { bottom: icon_1}]}>
        <TouchableOpacity onPress={() => navigation.navigate('admin-profile')}>
          <Icon name="user" size={25} color="#FFFF" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2}]}>
        <TouchableOpacity onPress={() => navigation.navigate('formulaire')}>
          <Icon name="print" size={25} color="#FFFF" />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { right: icon_3}]}>
        <TouchableOpacity onPress={() => navigation.navigate('action')}>
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
    </View>
  )

}

export default Aceeuil;

const styles = StyleSheet.create({
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
     
  },
  card: {
    height: 220,
    width: 180,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: "#fff",
  },
  addToCartBtn: {
    height: 30, 
    width: 30,
    borderRadius: 20,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
})



// const styles = StyleSheet.create({
  
//   circle: {
//     backgroundColor:"#4AA3A2",
//     width:60,
//     height:60,
//     position: 'absolute',
//     bottom:40,
//     borderRadius:50,
//     left:40,
//     justifyContent:'center',
//     alignItems:'center'
//   }
// })

