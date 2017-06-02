import React, { Component } from 'react';
import ProgressBar from 'ProgressBarAndroid'
import {hostip} from '../../config'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../app'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  ListView,
  RefreshControl,
} from 'react-native';
import {
    List ,
    ListItem,
    Button,
    Divider,
    FormLabel,
    FormInput,
    FormValidationMessage
}  from 'react-native-elements';

var ButtonGroup = React.createClass({
  render() {

  }
})

var OrderCard =React.createClass(  {
  // <Image source={{}}  style={{width: 50, height: 50}}/>

  _cancelOrd(carID) {
    console.log(this.props)
    fetch(hostip + '/api/post/cancel', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.props.email,
            passwd: this.props.passwd,
            car_id: carID
        })
    })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.MESSAGE == 'SUCCESS'){
                ToastAndroid.showWithGravity(
                    '订单取消成功',
                    ToastAndroid.SHORT, ToastAndroid.BOTTOM
                )
                this.props.navigation.navigate('ProfilePage');
            }
            else {
                ToastAndroid.showWithGravity(
                    responseJson.MESSAGE,
                    ToastAndroid.SHORT, ToastAndroid.CENTER
                )
            }
        })
        .catch((error) => {
            console.error(error);
            Alert.alert(
                '',
                '网络开小差了',
                [
                    { text: '稍后', onPress: () => console.log('Ask me later pressed') },
                ],
                { cancelable: false }
            )
        });
  },
  _delay (carID) {
    fetch(hostip + '/api/post/delay', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.props.email,
            passwd: this.props.passwd,
            car_id: carID
        })
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('Json', responseJson)
            if (responseJson.MESSAGE == 'SUCCESS') {
                // console.log(Store)
                ToastAndroid.showWithGravity(
                    '延期成功',
                    ToastAndroid.SHORT, ToastAndroid.BOTTOM
                )
                this.props.navigation.navigate('ProfilePage');
            }
            else {
                ToastAndroid.showWithGravity(
                    responseJson.MESSAGE,
                    ToastAndroid.SHORT, ToastAndroid.CENTER
                )
            }
        })
        .catch((error) => {
            console.error(error);
            Alert.alert(
                '',
                '网络开小差了',
                [
                    { text: '稍后', onPress: () => console.log('Ask me later pressed') },
                ],
                { cancelable: false }
            )
        });
  },
  _repair_n (carID) {
    fetch(hostip + '/api/post/repair', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.props.email,
            passwd: this.props.passwd,
            car_id: carID
        })
    })
        .then((response) =>response.json())
        .then((responseJson) => {
            console.log('Json', responseJson)
            if (responseJson.MESSAGE == 'SUCCESS') {
                ToastAndroid.showWithGravity(
                    '报修成功',
                    ToastAndroid.SHORT, ToastAndroid.BOTTOM
                )
                this.props.navigation.navigate('ProfilePage');
            }
            else {
                ToastAndroid.showWithGravity(
                    responseJson.MESSAGE,
                    ToastAndroid.SHORT, ToastAndroid.CENTER
                )
            }
        })
        .catch((error) => {
            console.error(error);
            Alert.alert(
                '',
                '网络开小差了',
                [
                    { text: '稍后', onPress: () => console.log('Ask me later pressed') },
                ],
                { cancelable: false }
            )
        });
  },
  render() {
    return (
      <View style={{flex: 1, margin: 10, borderColor: '#9ccc65', borderWidth: 1,height: 120, padding: 5}}>
        <View style={{justifyContent:'space-between', flexDirection:'row', flex:1}}>
          <Text> {this.props.carName}</Text>
            <Text> {this.props.status}</Text>
        </View>

      <View style={{flexDirection:'row', backgroundColor:'#eeeeee', flex:3}}>
              <View style={{width: 20}} >
              </View>
           <Image source={{uri: 'http://bblee.coding.me/imgs/jfk-cs-lewise.jpg'}}
           resizeMode='cover'
            style={{flex: 2, width: 50,  }}/>
              <View style={{flex: 1, justifyContent: 'center'}}>
              <Text> {this.props.carID}</Text>
              </View>
            </View>
                <View style={{justifyContent:'flex-end',alignItems: 'flex-end', flex: 1}}>
              {(() => {
                switch (this.props.status) {
                    case '等待审核':
                        return (
                            <TouchableOpacity onPress={()=>{this._cancelOrd(this.props.carID)}} >
                            <Text>取消订单</Text>
                            </TouchableOpacity>
                          )

                case '等待取车':
                        return (
                          <TouchableOpacity onPress={()=>{this._cancelOrd(this.props.carID)}} >
                          <Text>取消订单</Text>
                          </TouchableOpacity>
                        )

                case '租车中':
                  return(
                    <View style={{flexDirection:'row', flex:1}}>
                    <TouchableOpacity onPress = { () => {this._repair_n(this.props.carID)}}>
                      <Text>车辆报修</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress = {() => {this._delay(this.props.carID)}}>
                      <Text> 延期3天</Text>
                      </TouchableOpacity>
                    </View>
                  )
              case '报修处理中':
                return (
                  <TouchableOpacity onPress={()=>{this._cancelOrd(this.props.carID)}} >
                  <Text>报修电话</Text>
                  </TouchableOpacity>
                )
              default:
                    null
            }
        })()}

</View>
      </View>
    );
  }
})



export class OrderPage extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "订单",

});
constructor(props) {
  super(props)
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows([
      {
        status: '等待审核'
      },
    {
      status: '等待取车'
    },
    {
      status: '租车中'
    }
  ])
  }
}
_onRefresh = () => {
  fetch(hostip + '/api/post/get_orders', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          email: this.props.email,
          passwd: this.props.passwd,
      })
  })
      .then((response) => response.json())
      .then((responseJson) => {
          console.log('Json', responseJson)
          if (responseJson.MESSAGE == 'SUCCESS') {
            this.
              ToastAndroid.showWithGravity(
                  '刷新成功',
                  ToastAndroid.SHORT, ToastAndroid.BOTTOM
              )
              this.props.navigation.navigate('ProfilePage');
          }
          else {
              ToastAndroid.showWithGravity(
                  responseJson.MESSAGE,
                  ToastAndroid.SHORT, ToastAndroid.CENTER
              )
          }
      })
      .catch((error) => {
          console.error(error);
          Alert.alert(
              '',
              '网络开小差了',
              [
                  { text: '稍后', onPress: () => console.log('Ask me later pressed') },
              ],
              { cancelable: false }
          )
      });
}
  render() {
    return (
      <View style={{flex: 2}}>
      <ListView
      refreshControl={
         <RefreshControl
           refreshing={this.state.refreshing}
           onRefresh={this._onRefresh.bind(this)}
         />
       }
        dataSource = {this.state.dataSource}
        renderRow={(rowData) =>
          <OrderCard carName='ffff' status={rowData.status} carID='235'
          email={this.props.appData.userinfo.email }passwd={this.props.appData.userinfo.passwd}/>
        }
        />
    </View>

    )
  }
}
export default connect( mapStateToProps,
  mapDispatchToProps)(OrderPage)

// module.exports=OrderPage
