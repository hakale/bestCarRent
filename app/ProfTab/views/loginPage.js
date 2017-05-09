import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
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
    onLoginPress = () => {

    }
    onRegPress = () => {
        this.props.navigation.navigate('RegisterPage');
    }
    render() {
        return (
            <View>
                <View style={{marginVertical: 10}}>
                <FormLabel>UserName</FormLabel>
                {/*<FormInput onChangeText={someFunction}/>*/}
                <FormInput ref='forminput' textInputRef='email'/>
                <FormLabel>PassWord</FormLabel>
                <FormInput />
                <FormValidationMessage>Error message</FormValidationMessage>
                </View>
            <View style={{justifyContent: 'space-around'}} >
            <Button title='Login' backgroundColor='#0d47a1' 
                onPress={ () => this.onLoginPress()}/>
            <View style={{height:20}}/>
            <Button title='Register' backgroundColor='#0d47a1'
                onPress={ () => this.onRegPress()} />
            </View>
            </View>
        );
    }
}