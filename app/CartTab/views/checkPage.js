import React, { Component, Date } from 'react';
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

import { CheckBox, Card, Grid, Col, Button} from 'react-native-elements'
export default class CheckPage extends Component {
     static navigationOptions = ({ navigation, screenProps }) => ({
        title: "CheckInfo",
    });
    constructor(props) {
        super(props)
        // const { carName,  } = this.props.navigation.state.params;
    }
    render() {
        return (
            <View>
                <Card>
                    <Text>Select Date And take your Money!</Text>
                    </Card>
                </View>
        );
    }
}