import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  TouchableOpacity,
  DatePickerAndroid,
  ToastAndroid,
  Alert
} from 'react-native';
import {hostip} from '../../config'

import {
    Button,
    Divider
}  from 'react-native-elements';
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../app'

export class CheckPage extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Check",

  });
  constructor(props) {
    super(props);


    this.state = {
      startTime : null,
      endTime: null,
      initT: null,
      carID: this.props.navigation.state.params.carID
    }
    fetch(hostip + '/api/post/car_use_st_time', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          car_id: this.props.navigation.state.params.carID
        })
    })
        .then((response) => {
            return response.json()})
        .then((responseJson) => {
            console.log('Json', responseJson)
            if (responseJson.MESSAGE == 'SUCCESS') {
              this.setState(
                () => ({initTime: responseJson.DATA.Stime})
              )
            }
          })
          .catch((error) => {
          });
    console.log(this.props.navigation.state.params.carID)
  }
  startTPress = async () => {
    try {
      if (this.state.initT == null) {
        stDate = new Date()
      }
      else {
        stDate = new Date(initT[0], initT[1], initT[2])
      }
      const {action, year, month, day} = await DatePickerAndroid.open({
        // 要设置默认值为今天的话，使用`new Date()`即可。
        // 下面显示的会是2020年5月25日。月份是从0开始算的。
        date: stDate,
        minDate: stDate
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
        this.setState(
          () => {
            return {
              startTime: [year, month, day],
              endTime: null}
          }
        )
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  endTPress = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // 要设置默认值为今天的话，使用`new Date()`即可。
        // 下面显示的会是2020年5月25日。月份是从0开始算的。
        date: new Date(this.state.startTime[0], this.state.startTime[1],
        this.state.startTime[2]),
        minDate: new Date(this.state.startTime[0], this.state.startTime[1],
        this.state.startTime[2])
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
        this.setState(
          () => {
            return {
              endTime: [year, month, day]}
          }
        )
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
    onButtonPress = () => {
      if (this.props.appData.logined == false) {
        Alert.alert(
                    '',
                    '请先登录',
                    [
                        { text: '先看看', onPress: () => console.log('OK Pressed') },
                        { text: '登录', onPress: () => this.props.navigation.navigate('LoginPage')},
                    ],
                    { cancelable: false }
                )
      return
      }
      fetch(hostip + '/api/post/gene_order', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.props.appData.userinfo.email,
            passwd: this.props.appData.userinfo.passwd,
            car_id: this.state.carID,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
        })
    })
        .then((response) => {
            return response.json()})
        .then((responseJson) => {
            if (responseJson.MESSAGE == 'SUCCESS') {
              ToastAndroid.showWithGravity(
                  '订单生成成功，等待审核',
                  ToastAndroid.SHORT, ToastAndroid.CENTER
              )
              this.props.navigation.navigate('HOME');
            }
        })
        .catch((error) => {
            console.log('get page flow fail')
            ToastAndroid.showWithGravity(
                '网络开了小差，请重试',
                ToastAndroid.SHORT, ToastAndroid.CENTER
            )
        });
    }

    render() {
        return(
            <View>
                <Text> CheckOut</Text>
                <View style={{ justifyContent: 'space-around' }} >
                <Button
                backgroundColor='#0d47a1'
                icon={{name: 'date-range'}}
                title = {this.state.startTime == null ? '租车时间': this.state.startTime.join(' . ')}
                onPress = { () => {this.startTPress()}}
                />
                <View style={{ height: 20 }} />
                <Button
                backgroundColor='#0d47a1'
                icon={{name: 'date-range'}}
                disabled = {this.state.startTime == null ? true : false}
                title = {this.state.endTime == null ? '还车时间': this.state.endTime.join(' . ')}
                onPress = { () => {this.endTPress()}}
                />
                <View style={{ height: 20 }} />
                <Button
                backgroundColor='#ff5722'
                title='支付'
                onPress={() => {this.onButtonPress()} }/>
                </View>
            </View>
        );
    }
}
export default connect(  mapStateToProps,
  mapDispatchToProps)(CheckPage)
