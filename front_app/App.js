import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeStackNavigator from './src/navigation/Navigation';
import BottomNav from './src/navigation/BottomNav';

export default function App() {
  return (
    
    <NavigationContainer independent={true}>
      <HomeStackNavigator  /> 
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
