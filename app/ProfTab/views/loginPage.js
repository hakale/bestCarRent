import React, { Component } from 'react';
var ProgressBar = require('ProgressBarAndroid');
import {hostip} from '../../config'
import {action_login} from '../../reducers/action'
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

import {
    List ,
    Button,
    Divider,
    FormLabel,
    FormInput,
    FormValidationMessage
}  from 'react-native-elements';

export default class LoginPage extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Login",

  });
    constructor(props) {
        super(props);
        console.log(this.navigationOptions)
        this.state = {
            loginstate: 'UN_LOGIN',
            email: '',
            passwd: ''
        }
    }
    email_input = (text) => {
        console.log(text)
        this.setState(
            (preState) => {
                return Object.assign(preState, {email: text})
            }
        )
    }
    password_input = (text) => {
        console.log(text)
         this.setState(
            (preState) => {
                return Object.assign(preState, {passwd: text})
            }
        )
    }
    onLoginPress = () => {
        if (this.state.email.length == 0 || this.state.passwd.length == 0) {
            Alert.alert(
                    '',
                    '输入完整信息',
                    [
                        { text: '是', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            return;
        }
        this.setState(
            () => {
                return {loginstate: 'LOGINING'}
            }
        )
        console.log('login press')
        console.log(this.state.loginstate)
        console.log(this.state.passwd)
        fetch(hostip + '/api/post/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                passwd: this.state.passwd
            })
        })
            .then((response) => {
                console.log(response)
                //console.log(response.formData())
                console.log(response.body)
                return response.json()})
            .then((responseJson) => {
                console.log('Json', responseJson)
                if (responseJson.MESSAGE == 'SUCCESS') {
                    this.setState(
                        () => {
                            return { loginstate: 'FINISHED' }
                        }
                    )
                    this.props.dispatch(action_login(responseJson.DATA))
                    this.props.navigation.navigate('ProfilePage');
                }
                else {
                    ToastAndroid.showWithGravity(
                        responseJson.MESSAGE,
                        ToastAndroid.SHORT, ToastAndroid.CENTER
                    )
                    this.setState(() => ({loginstate: 'UN_LOGIN'}))
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
    onRegPress = () => {
        this.props.navigation.navigate('RegisterPage');
    }
    render() {
        return (
            <View>
                {
                    this.state.loginstate == 'LOGINING' ? (
                        <View >
                            <ProgressBar styleAttr="Horizontal" />
                        </View>
                    ) : (null)
                }

                <View style={{ marginVertical: 10 }}>
                    <FormLabel>邮箱</FormLabel>
                    {/*<FormInput onChangeText={someFunction}/>*/}
                    <FormInput ref='forminput' textInputRef='email' onChangeText={(text) => this.email_input(text)} />
                    <FormLabel>密码</FormLabel>
                    <FormInput
                        secureTextEntry={true}
                        maxLength={16}
                        returnKeyLabel='登录' onChangeText={(text) => this.password_input(text)} />
                    {/*<FormValidationMessage>Error message</FormValidationMessage>*/}
                </View>
                <View style={{ justifyContent: 'space-around' }} >
                    <Button title='Login' backgroundColor='#0d47a1'
                        onPress={() => this.onLoginPress()} />
                    <View style={{ height: 20 }} />
                    <Button title='Register' backgroundColor='#0d47a1'
                        onPress={() => this.onRegPress()} />
                </View>
            </View>
        );
    }
}
