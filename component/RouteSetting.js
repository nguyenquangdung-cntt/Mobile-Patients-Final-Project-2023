import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from './Setting';
import Acc from './Acc';

const Stack = createNativeStackNavigator();

export default function RouteSetting() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Setting">
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }}/>
        <Stack.Screen name="Account" component={Acc} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
