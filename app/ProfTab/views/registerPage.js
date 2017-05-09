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

export default class RegisterPage extends Component {
     static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Register",
    
  });
    onSubmitPress = () => {

    }
    render() {
        return(
            <ScrollView>
                <FormLabel>UserName</FormLabel>
                <FormInput />
                 <FormLabel>PassWord</FormLabel>
                <FormInput />
                 <FormLabel>E-mail</FormLabel>
                <FormInput />
                 <FormLabel>ID card number</FormLabel>
                <FormInput />
                <FormLabel>Address</FormLabel>
                <FormInput />
                <Button title='Submit' backgroundColor='#0d47a1'
                    onPress={() => this.onSubmitPress()}/>
            </ScrollView>
        );
    }
}