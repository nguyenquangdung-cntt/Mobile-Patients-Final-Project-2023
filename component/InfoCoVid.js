import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import bg from '..//assets/img/slide1.jpg';

class InfoCoVid extends Component{
    render(){
        return(
            <ScrollView style={styles.main}>
                <Image source={bg} style={{ width: 400, height: 300 }}/>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 10, borderLeftWidth: 5, paddingLeft: 10, marginTop: 10}}>Số liệu tại Việt Nam</Text>
                 <View style={styles.content}>
                    <View style={styles.canhiem}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center', paddingTop: 10}}>SỐ CA NHIỄM</Text>
                        <Text style={{color: 'red', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>11.526.858</Text>
                        <Text style={{textAlign: 'center', paddingBottom: 10}}>24 giờ qua +24</Text>
                    </View>
                    <View style={styles.khoibenh}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center', paddingTop: 10}}>KHỎI</Text>
                        <Text style={{color: '#008000', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>10.614.735</Text>
                    </View>
                 </View>
                 <View style={styles.tuvong}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center', paddingTop: 10}}>TỬ VONG</Text>
                        <Text style={{color: '#000000', textAlign: 'center', fontSize: 20, fontWeight: 'bold', paddingBottom: 10}}>43.186</Text>
                </View>
                <View style={{borderLeftWidth: 5, marginLeft: 10, marginTop: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 10}}>Các biện pháp phòng dịch COVID-19 tại nhà hiệu quả</Text>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold', paddingLeft: 25, paddingTop: 15, fontSize: 15}}>Giãn cách xã hội</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        Hạn chế tối đa tiếp xúc trực tiếp với người khác, đặc biệt trong không gian kín. Không ra khỏi nhà nếu không thật sự cần thiết. Với người cao tuổi sống một mình cần giữ liên lạc với con cháu, người thân qua điện thoại, máy tính bảng, ứng dụng video call trên máy tính bảng.
                    </Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        Không đi ra ngoài nơi tập trung đông người. Giữ khoảng cách tiếp xúc trên 2 mét. Trữ sẵn thực phẩm và thuốc trong nhà trong nhiều ngày.
                    </Text>
                    <Text style={{fontWeight: 'bold', paddingLeft: 25, paddingTop: 15, fontSize: 15}}>Biện pháp bảo vệ cá nhân</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                    - Đeo khẩu trang khi cần thiết phải ra ngoài, không được chạm vào mặt ngoài khẩu trang, không kéo xuống cằm để nó
                    </Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>- Rửa tay thường xuyên. Nếu không có xà phòng và nước, hãy dùng dung dịch sát trùng tay chứa tối thiểu 60% cồn.</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}> - Tránh chạm tay vào mắt, mũi, miệng khi chưa rửa tay.</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}> - Khi ho hoặc hắt hơi, hãy dùng khăn giấy hoặc mặt trong khuỷu tay, sau đó hãy rửa tay.</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>- Làm sạch và khử trùng các bề mặt và đồ vật thường chạm vào bằng dung dịch tối thiểu 60% cồn.</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        - Vệ sinh mũi họng thường xuyên, có thể giữ ẩm mũi bằng nhỏ dung dịch nước muối sinh lý, xúc miệng họng bằng các dung dịch vệ sinh miệng họng thông thường.
                    </Text>
                    <Text style={{fontWeight: 'bold', paddingLeft: 25, paddingTop: 15, fontSize: 15}}>Tiêm chủng vắc xin phòng COVID-19</Text>
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        Tiêm chủng vắc xin phòng COVID-19 là biện pháp quan trọng, giúp phòng ngừa và giảm biến chứng nặng của COVID-19
                    </Text> 
                    <Text style={{textAlign: 'justify', paddingLeft: 25, paddingRight: 25, marginTop: 5}}>
                        Các nghiên cứu đã chứng minh các loại vắc xin phòng COVID-19 như AstraZeneca, Pfizer hay Moderna đều giảm nguy cơ tử vong và biến chứng bệnh nặng do COVID-19, nhất là đối với người cao tuổi.
                    </Text>                      
                </View>
            </ScrollView>
        )
    }
}

export default InfoCoVid;

const styles = StyleSheet.create({
    main:{
       backgroundColor: '#ffffff',
       height: '100%'
    },
    content:{
        flexDirection: 'row',
        marginTop: 10
    },
    canhiem:{
        backgroundColor: '#ffc0cb',
        width: 170,
        marginTop: 10,
        marginLeft: 10
    },
    khoibenh:{
        backgroundColor: '#90ee90',
        width: 170,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 10
    },
    tuvong:{
        backgroundColor: '#c0c0c0',
        marginLeft: 90,
        marginRight: 90,
        marginTop: 10
    }
})