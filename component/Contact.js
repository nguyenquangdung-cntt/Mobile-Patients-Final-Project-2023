import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, AppRegistry, StyleSheet, Text, View, Image, Button} from 'react-native';
import bg from '../assets/img/contact.jpg';

class ContactScreeen extends Component {

    render(){
        return (
            <View style={styles.main}>
                <Image source={bg} style={{marginTop: 20, width: 400, height: 200}}/>
                <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginTop: 20}}>Liên hệ bác sĩ</Text>
                <View style={styles.bs}>
                    <Text style={{paddingLeft: 5, paddingTop: 25, fontSize: 20, fontWeight: 'bold'}}>Bác sĩ Dũng</Text>
                    <View style={{marginLeft: 50, padding: 20}}>
                        <Button 
                            title='Liên hệ'
                            onPress={()=>{Linking.openURL('tel:0931802917');}}
                        />
                    </View>
                </View>
                <View style={styles.bs}>
                    <Text style={{paddingLeft: 5, paddingTop: 25, fontSize: 20, fontWeight: 'bold'}}>Bác sĩ Hân</Text>
                    <View style={{marginLeft: 65, padding: 20}}>
                        <Button 
                            title='Liên hệ'
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default ContactScreeen;

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#ffffff',
        height: 900
    },
    bs:{
        flexDirection: 'row', 
        marginTop: 30, 
        borderLeftWidth: 10, 
        marginLeft: 40,
        marginRight: 30,
        borderLeftColor: '#1e90ff',
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }
});