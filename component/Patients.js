import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View, Image, Button} from 'react-native';
import img1 from '../assets/img/slide3.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

class PatientScreeen extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: []
        }
        const firebaseConfig = {
            apiKey: "AIzaSyBuVyr4uj_0t-zKZXvnyA0-mgnF8GmFq7A",
            authDomain: "covid19-93267.firebaseapp.com",
            databaseURL: "https://covid19-93267-default-rtdb.firebaseio.com",
            projectId: "covid19-93267",
            storageBucket: "covid19-93267.appspot.com",
            messagingSenderId: "709726013376",
            appId: "1:709726013376:web:04749c92c3e36191ccea25",
            measurementId: "G-R75LZ5H9JJ"
        }
        firebase.initializeApp(firebaseConfig);
    }

    componentDidMount(){
        const readUserData = () => {
            const ref = firebase.database().ref('SM001/')
            ref.on('value', (snapshot) => {
                const data = snapshot.val();
                this.setState({
                    list: data
                })
            })
        }
        readUserData();
    }

    render(){
        return (
            <View style={styles.main}>
                <View style={styles.container}>
                    <Image source={img1} style={styles.img}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.title}>Theo dõi sức khỏe</Text>
                </View>
                <View style={styles.tempBody}>
                    <Icon 
                        name='thermometer-empty'
                        color="#ffa500"
                        style={{marginRight: 50,fontSize: 60, marginLeft: 20, padding: 10}}
                    />
                    <Text style={{marginLeft: 20, fontSize: 40, paddingTop: 10}}>{parseFloat(this.state.list.tempBody).toFixed(1)} *C</Text>
                </View>
                <View style={styles.heartBeat}>
                    <Icon 
                        name='heartbeat'
                        color="#ff0000"
                        style={{marginRight: 20,fontSize: 60, marginLeft: 20, padding: 10}}
                    />
                    <Text style={{marginLeft: 20, fontSize: 40, paddingTop: 10}}>{this.state.list.heartBeat} BPM</Text>
                </View>
                <View style={styles.oxy}>
                    <Icon 
                        name='tint'
                        color="#00bfff"
                        style={{marginRight: 60,fontSize: 60, marginLeft: 35, padding: 10}}
                    />
                    <Text style={{marginLeft: 20, fontSize: 40, paddingTop: 10}}>{this.state.list.oxyBlood} %</Text>
                </View>
            </View>
        );
    }
}

export default PatientScreeen;

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#ffffff',
        height: 900
    },
    container:{
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    container2:{
        borderLeftWidth: 5,
        backgroundColor: 'transparent',
        marginLeft: 30,
        marginTop: 20
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    img:{
        width: 350,
        height: 200
    },
    heartBeat:{
        borderLeftWidth: 10,
        borderLeftColor: '#ff0000',
        marginLeft: 30,
        marginRight: 20,
        marginTop: 40,
        flexDirection: 'row',
        backgroundColor: '#ffc0cb',
    },
    tempBody:{
        backgroundColor: '#ffe4b5',
        borderLeftWidth: 10,
        borderLeftColor: '#ffa500',
        marginLeft: 30,
        marginRight: 20,
        marginTop: 40,
        flexDirection: 'row',
    },
    oxy:{
        borderLeftWidth: 10,
        borderLeftColor: '#00bfff',
        marginLeft: 30,
        marginRight: 20,
        marginTop: 40,
        flexDirection: 'row',
        backgroundColor: '#e0ffff',
    }
});