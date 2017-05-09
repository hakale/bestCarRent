import React, { Component } from 'react';
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

import { 
    Button,
    Divider
}  from 'react-native-elements';
export default class CheckOutPage extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Check",
    
  });
    onButtonPress = () => {
        this.props.navigation.navigate('HOME');
    }
    render() {
        return(
            <View>
                <Text> CheckOut</Text>
                <Button
                title='BACK'
                onPress={() => {this.onButtonPress()} }/>
            </View>
        );
    }
}