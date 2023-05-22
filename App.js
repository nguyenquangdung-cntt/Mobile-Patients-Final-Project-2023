import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreeen from './component/Home';
import LoginScreen from './component/Login';
import RegisScreen from './component/regis';
import BottomTabs from './component/BottomTabs';
import Acc from './component/Acc';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreeen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Regis" component={RegisScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Patient" component={BottomTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Account" component={Acc} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
