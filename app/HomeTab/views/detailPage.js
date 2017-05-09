import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import BannerLite from 'react-native-banner-lite';
import { 
    List ,
    Button,
    Divider
}  from 'react-native-elements';
export default class DetailPage extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Detail",
    
  });
    constructor(props) {
        super(props)
        this.state = {
            carImagList : [
                {
                    url: 'http://7xlkdd.com1.z0.glb.clouddn.com/20160301183919.png'
                },
                {
                    url: 'http://7xlkdd.com1.z0.glb.clouddn.com/IMG_0507.JPG'
                }
            ]
        }
    }
    onRentButtonPress = (carID) => {
        this.props.navigation.navigate('CHECK_OUT', carID);
    }
    render() {
        const { carName,  } = this.props.navigation.state.params;
        return (

                <ScrollView>
                 <View style={{height:150}}>
                  <BannerLite
            items={[
              {
                title: "Hello",
                subtitle: "World",
                imageURL: "http://h.hiphotos.baidu.com/image/h%3D200/sign=3a225a4129a4462361caa262a8227246/30adcbef76094b36fbaf3bd6aacc7cd98d109dcf.jpg",
                onPress:(index)=>{console.log("tap"+index)}
              },
              {
                title: "How",
                subtitle: "R U",
                imageURL: "http://a4.att.hudong.com/35/64/01300000276819133197645554930.jpg",
                onPress:(index)=>{console.log("tap"+index)}
              },
              {
                title: "R U OK",
                subtitle: "😂😂😂",
                imageURL: "http://pic69.nipic.com/file/20150610/21067407_235515103000_2.jpg",
                onPress:(index)=>{console.log("tap"+index)}
              },
            ]}
                />
            </View>
            <View style={{
                paddingHorizontal: 15
            }}>
            <Text style={styles.textStyle}>{carName}</Text>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 15, marginVertical: 10,justifyContent: 'space-between'}}>
                <Text style={styles.textStyle}>Price</Text>
                <Button 
                title='Rent'
                raised
                icon={{name: 'local-grocery-store', }}
                onPress={() => this.onRentButtonPress({carID: 3})}/>
                </View>
            <Divider style={{ backgroundColor: 'blue' }} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    // flex: 1
    height: 100
  },
  textStyle: {
      fontSize: 20
  }
})