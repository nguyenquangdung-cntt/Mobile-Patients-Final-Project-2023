import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, Modal, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import bg from '../assets/img/bg-log.jpg';
import { Formik } from 'formik';
import axios from 'axios';
import { NetworkInfo } from "react-native-network-info";

class LoginScreen extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        username: '',
        password: '',
        modalVisible: false,
        errModal: false,
    }
}

storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@user', jsonValue)
  } catch (e) {
    console.log(e)
  }
}

handleSubmit = () => {
  //ip wifi hiện tại đang sử dụng
  axios.post(`http://192.168.1.15:9000/loginpt`,{
    username:this.state.username,
    password:this.state.password      
  })
  .then(res=>{
    if (JSON.stringify(res.data) === '{}') {
      this.setState({errModal: true})
    } else {
      this.setState({modalVisible: true})
      this.storeData(res.data)
    }
  })
}

  render(){
    const {modalVisible} = this.state;
    const {errModal} = this.state;
    return (
      <Formik>
        <ImageBackground source={bg} resizeMode="cover" style={styles.main}>
          <View style={styles.container}>
            <Text style={styles.title}>ĐĂNG NHẬP</Text>
          </View>
          <View style={styles.form}>
            <TextInput style={styles.usn} name='username' placeholder='Tên tài khoản' onChangeText={(text) => {this.setState({username: text})}}/>
          </View>
          <View style={styles.form2}>
            <TextInput style={styles.usn} name='password' secureTextEntry placeholder='Mật khẩu' onChangeText={(text) => {this.setState({password: text})}}/>
          </View>
          <View style={styles.form2}>
            <Button title='Đăng nhập' onPress={() => {this.handleSubmit()}}/>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setState({modalVisible: !modalVisible});
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon 
                name='check-circle'
                color="#5cb85c"
                style={{marginBottom: 10, fontSize: 70}}
              />
              <Text style={styles.modalText}>ĐĂNG NHẬP THÀNH CÔNG</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.props.navigation.navigate('Patient')}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
            animationType="slide"
            transparent={true}
            visible={errModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setState({errModal: !errModal});
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon 
                name='exclamation-circle'
                color="#ff0000"
                style={{marginBottom: 10, fontSize: 70}}
              />
              <Text style={styles.modalText}>ĐĂNG NHẬP THẤT BẠI</Text>
              <Pressable
                style={[styles.button, styles.buttonClose2]}
                onPress={() => this.setState({errModal: !errModal})}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        </ImageBackground>
      </Formik>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
    centeredView: {
      marginTop: 207,
    },
    main:{
        backgroundColor: '#ffffff',
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
    form:{
        marginTop: 50,
        paddingLeft: 50,
        paddingRight: 50,
    }, 
    form2:{
        marginTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
    }, 
    usn:{
        borderBottomWidth: 1,
        height: 50,
        borderBottomColor: '#1e90ff',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      padding: 35,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,

      elevation: 18,
    },
    button: {
      borderRadius: 20,
      padding: 7,
      width: 200,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#5cb85c',
    },
    buttonClose2: {
      backgroundColor: '#ff0000',
    },
    textStyle: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: '900'
    },    
})