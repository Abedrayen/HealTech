import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import photo1 from '../../assets/images/5.jpg'
import Logo from '../../assets/images/Logo3.png'


const Detail = (props) => {
  return (
    <View style={styles.container}>
         <ImageBackground source={photo1} style={styles.img} />
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Image source={Logo} />
        </TouchableOpacity>
        
      </View>
     
      <View style={styles.cont3}>
        <Text style={styles.title}>Max Resler</Text>
        <Text style={styles.subtitle}></Text>
        
        <Text style={styles.text}>
        Book an appointement with the best doctors you can find on HealTech
        </Text>
        <View style={styles.cont1}>
          {/* <FontAwesome name="heart-o" color="#000" size={25} /> */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("login")}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    
  },
  title: {
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 20,
    color: "#474747",
    marginTop: 10,
    fontFamily: "Montserrat_400Regular",
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    alignItems:'center',
    lineHeight: 20,
  },
  btn: {
    backgroundColor: "#4AA3A2",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    color: "#FFF",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginTop: 40,
  },
  img: {
    // height: "45%",
    // width: "50%",
    width:450,
    height:600,
    marginTop:-10,
    
  },
  cont3: {
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
    alignItems:'center',
    borderRadius: 50,
    paddingHorizontal: 20,
  },
//   c3: {
//     height: 20,
//     width: 20,
//     borderRadius: 15,
//     backgroundColor: "#529CC0",
//   },
//   c2: {
//     height: 20,
//     width: 20,
//     borderRadius: 15,
//     backgroundColor: "#529C47",
//     marginHorizontal:10
//   },
//   c1: {
//     height: 20,
//     width: 20,
//     borderRadius: 15,
//     backgroundColor: "#E2443B",
//   },
//   selected: {
//     borderColor: "#E2443B",
//     height: 30,
//     width: 30,
//     borderRadius: 24,
//     borderWidth: 2,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cont2: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "100%",
//     marginVertical: 25,
//   },
  header: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "space-between",
    position: 'absolute',
    width: 3,
    height:10,
    left: -40,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  
});