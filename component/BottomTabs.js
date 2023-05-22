import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import PatientScreeen from './Patients';
import InfoCoVid from './InfoCoVid';
import ContactScreeen from './Contact';
import RouteSetting from './RouteSetting';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
                  initialRouteName="Home"
                  activeColor="#1e90ff"
                  barStyle={{ backgroundColor: '#ffffff' }}
            >
            <Tab.Screen 
                    name="Home" 
                    component={PatientScreeen} 
                    options={{
                        tabBarLabel: 'Trang chủ',
                        tabBarIcon: ({ color }) => (
                          <Icon name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Covid" 
                    component={InfoCoVid} 
                    options={{
                        tabBarLabel: 'Thông tin',
                        tabBarIcon: ({ color }) => (
                          <Icon name="info-circle" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Contact" 
                    component={ContactScreeen} 
                    options={{
                        tabBarLabel: 'Liên hệ',
                        tabBarIcon: ({ color }) => (
                          <Icon name="phone-square" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Account" 
                    component={RouteSetting} 
                    options={{
                        tabBarLabel: 'Cài đặt',
                        tabBarIcon: ({ color }) => (
                          <Icon name="cog" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}