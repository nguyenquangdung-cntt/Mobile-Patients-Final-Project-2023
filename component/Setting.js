import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Setting({navigation}){
    return(
        <View style={styles.main}>
            <View style={styles.head}>
                <Text style={{paddingLeft: 5, fontSize: 30}}>Cài đặt</Text>
            </View>
            <View style={styles.container}>
                <Button
                    title='Trang cá nhân'
                    onPress={() => navigation.navigate('Account')}
                />  
            </View>
            <View style={styles.container}>
                <Button
                    title='Đăng xuất'
                />   
            </View>                
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#ffffff',
        height: '100%'
    },
    head:{
        borderLeftWidth: 5,
        borderLeftColor: '#000000',
        marginTop: 70,
        marginLeft: 30
    },
    container:{
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
    }
})