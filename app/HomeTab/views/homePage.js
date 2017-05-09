/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import {Button, Card } from 'react-native-material-design';
import BannerLite from 'react-native-banner-lite';
import React, { Component } from 'react';
import ExCard from '../../set/exCard'
import {
    SearchBar,
    Divider,
    Avatar
} from 'react-native-elements';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

export default class HomePage extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
    
  });
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Jillian', 'Julie', 'Devin', 'Jillian', 'Julie', 'Devin'
      ])
    };
    
  }
  onCardPress = (carName) => {
      console.log('card press:')
      console.log(carName)
      this.props.navigation.navigate('DETAIL', carName);
    };
  render() {
    
    return (
      <View style={{flex: 1}}>
         <SearchBar
                        round
                        lightTheme
                        placeholder='Type Here...' />
         
          {/*<View style={{height:300}}>
            <Swiper style={styles.wrapper}
                      showsButtons={false}
                      removeClippedSubviews={false}
                      bounces={true}
                      height={250} >

              <View style={styles.slide1}>
                <Image source={{uri: 'http://7xlkdd.com1.z0.glb.clouddn.com/IMG_0507.JPG'}}/>
              </View>
              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
         </View>*/}
         <ScrollView style={styles.marginVertical} >
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
         <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', margin: 20}}>
           <TouchableOpacity onPress={()=>console.log('RENT_Left')}>
            <View style={[styles.buyActionStyle, {backgroundColor: 'powderblue'}]} >
              <Text>租</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>console.log('BUY')}>
             <View style={[styles.buyActionStyle, {backgroundColor: 'skyblue'}]}>
              <Text>买</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('RENT_Right')}>
              <View style={[styles.buyActionStyle, {backgroundColor: 'steelblue'}]} >
                <Text>租</Text>
              </View>
            </TouchableOpacity>
            

          </View>
          <View style={{flex:2}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => 
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.onCardPress({carName: 'BMW'})}>
                <ExCard  carStyle='p' capacity='2' />
              </TouchableOpacity>
              }
            />
          </View>
         </ScrollView>
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    // flex: 1
    height: 100
  },
  rollStyle: {
    // marginVertical: 5
  },
  buyActionStyle:{
    width: 70, 
    height: 70, 
    borderRadius:35, 
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

module.exports = HomePage
