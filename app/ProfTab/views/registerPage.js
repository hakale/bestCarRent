import React, { Component } from 'react';
import {hostip} from '../../config'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid
} from 'react-native';
import ProgressBar from 'ProgressBarAndroid'
import {
    List ,
    Button,
    Divider,
    FormLabel,
    FormInput,
    FormValidationMessage
}  from 'react-native-elements';

export default class RegisterPage extends Component {
     static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Register",

  });
    constructor(props) {
      super(props);
      this.state = {
        register_state: 'UN_REG',
        username: '',
        passwd: '',
        email: '',
        idcard: '',
        address: '',
      }
    }
    username_input = (text) => {
      this.setState((preState) => Object.assign(preState, {username: text}))
    }
    password_input = (text) => {
      this.setState((preState) => Object.assign(preState, {passwd: text}))
    }
    email_input = (text) => {
      this.setState((preState) => Object.assign(preState, {email: text}))
    }
    idcard_input = (text) => {
      this.setState((preState) => Object.assign(preState, {idcard: text}))
    }
    address_input = (text) => {
      this.setState((preState) => Object.assign(preState, {address: text}))
    }
    onSubmitPress = () => {
      this.setState(() => {register_state: 'ING'})
      fetch(hostip + '/api/post/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          passwd: this.state.passwd,
          email: this.state.email,
          idcard: this.state.idcard,
          address: this.state.address,
        })
      })
      .then((response) => {
          return response.json()})
      .then((responseJson) => {
          console.log('Json', responseJson)
          if (responseJson.MESSAGE == 'SUCCESS') {
              this.setState(
                  () => {
                      return { register_state: 'FINISHED' }
                  }
              )
              this.props.navigation.navigate('ProfilePage');
          }
          else {
              ToastAndroid.showWithGravity(
                  responseJson.MESSAGE,
                  ToastAndroid.SHORT, ToastAndroid.CENTER
              )
              this.setState(() => ({loginstate: 'UN_REG'}))
          }
    })
    .catch((error) => {
        console.error(error);
        Alert.alert(
            '',
            '网络请求失败,请重试',
            [
                { text: '好', onPress: () => console.log('Ask me later pressed') },
            ],
            { cancelable: false }
        )
    });
  }
    render() {
        return(
          <View>
          {
              this.state.register_state == 'ING' ? (
                  <View >
                      <ProgressBar styleAttr="Horizontal" />
                  </View>
              ) : (null)
          }
            <ScrollView>
                <FormLabel>UserName</FormLabel>
                <FormInput placeholder="Type here" onChangeText={(text) => this.username_input(text)}/>
                 <FormLabel>PassWord</FormLabel>
                <FormInput placeholder="Type here" onChangeText={(text) => this.password_input(text)}/>
                 <FormLabel>E-mail</FormLabel>
                <FormInput placeholder="Type here" onChangeText={(text) => this.email_input(text)}/>
                 <FormLabel>ID card number</FormLabel>
                <FormInput placeholder="Type here" onChangeText={(text) => this.idcard_input(text)}/>
                <FormLabel>Address</FormLabel>
                <FormInput placeholder="Type here" onChangeText={(text) => this.address_input(text)}/>
                <Button title='Submit' backgroundColor='#0d47a1'
                    onPress={() => this.onSubmitPress()}/>
            </ScrollView>
            </View>
        );
    }
}
