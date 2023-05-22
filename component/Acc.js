import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppRegistry, StyleSheet, Text, TextInput, View, Image, Button, ScrollView, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import qr from '..//assets/img/qr.jpg';

class Acc extends Component{


    getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@user')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          console.log(e);
        }
      }

    render(){
        return(
            <View style={styles.main}> 
                <View style={styles.Icon}>
                    <Icon
                        name='user-circle-o'
                        color="#000000"
                        style={{ fontSize: 150 }}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.back}>
                        <Pressable
                            style={{backgroundColor: '#87cefa', borderRadius: 10}}
                            onPress={() => this.props.navigation.navigate('Setting')}
                        >
                        <View style={{flexDirection: 'row'}}>
                            <Icon
                                name='arrow-circle-o-left'
                                color="#000000"
                                style={{paddingTop: 10, paddingLeft: 10, paddingBottom: 10, paddingRight: 5, color: '#ffffff', fontSize: 24}}
                            />
                            <Text style={{color: '#ffffff', paddingTop: 8, paddingRight: 10 ,fontSize: 17}}>Trở về</Text>
                        </View>

                        </Pressable>
                    </View>
                    <View style={styles.form}>
                        <View style={{marginTop: 20}}>
                            <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Họ và Tên: </Text>
                            <TextInput 
                                placeholder='Họ và tên'
                                style={{borderWidth: 1, marginTop: 5, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10}}
                            />
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Số điện thoại: </Text>
                            <TextInput 
                                placeholder='Số điện thoại'
                                style={{borderWidth: 1, marginTop: 5, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10}}
                            />
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Địa chỉ: </Text>
                            <TextInput 
                                placeholder='Địa chỉ'
                                style={{borderWidth: 1, marginTop: 5, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10}}
                            />
                        </View>
                        <Pressable style={{backgroundColor: '#008000', borderRadius: 10, marginTop: 20, marginLeft: 10, marginRight: 200}}>
                            <View style={{marginLeft: 30}}>
                                <Text style={{color: '#ffffff', paddingTop: 10 ,fontSize: 17, paddingBottom: 10}}>Cập nhật</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }
}
export default Acc;
const styles = StyleSheet.create({
    main:{
        backgroundColor: '#e0ffff',
        height: '100%'
    },
    Icon:{
        marginLeft: '30%',
        marginTop: '10%',
    },
    content:{
        backgroundColor:'#ffffff',
        height: '100%',
        borderTopWidth: 0,
        marginTop: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    form:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 450
    },
    back:{
        marginTop: 50,
        paddingLeft: 30,
        flexDirection: 'row',
    },
})