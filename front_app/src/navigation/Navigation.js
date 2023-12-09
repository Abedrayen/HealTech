import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Aceeuil from "../screens/Aceeuil";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Reinitialise from "../screens/Reinitialise";

import { NavigationContainer } from "@react-navigation/native";
import Formulaire from "../screens/Formulaire";
import BottomNav from "./BottomNav";
import User from "../screens/User/User";
import EditProfil from "../screens/User/EditProfil";
import Notification from "../screens/Notification";
import Admin from "../screens/Admin/Admin";
import Maladie1 from "../screens/Maladie1";
import SymptomesPage from "../screens/Docteur/Doc";
import AdminPage from "../screens/Admin/Action";


const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};



const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="renitialise" component={Reinitialise} />
      <Stack.Screen name="acceuil" component={Aceeuil}  />
      <Stack.Screen name="formulaire" component={Formulaire}  />
      <Stack.Screen name="user-profile" component={User}  />
      <Stack.Screen name="admin-profile" component={Admin}  />
      <Stack.Screen name="action" component={AdminPage}  />
      <Stack.Screen name="edit-profile-user" component={EditProfil}  />
      <Stack.Screen name="notification" component={Notification}  />
      <Stack.Screen name="maladie1" component={Maladie1}  />
      <Stack.Screen name="doc" component={SymptomesPage}  />

      

    </Stack.Navigator>
    
  );
};


export default HomeStackNavigator;


