import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View, Image, Button} from 'react-native';
import logo from '../assets/img/logo.png';

export default function HomeScreeen({navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.title}>HEALTHCARE</Text>
      </View>
      <View style={styles.button1}>
        <Button title='Đăng nhập' onPress={() => navigation.navigate('Login')}/>
      </View>
      <View style={styles.button2}>
        <Button title='Đăng ký' color='#87cefa' onPress={() => navigation.navigate('Regis')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#f0ffff',
        height: 900
    },
    container:{
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
    },
    logo:{
        width: 110,
        height: 95
    },
    title:{
        marginTop: 10,
        fontSize: 25,
        color: '#1e90ff',
        fontWeight: 'bold',
    }, 
    button1:{
        marginTop: 350,
        paddingLeft: 70,
        paddingRight: 70,
        borderColor: '#000000',
    },
    button2:{
        marginTop: 10,
        paddingLeft: 70,
        paddingRight: 70,
    }
});