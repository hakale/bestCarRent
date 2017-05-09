// import Icon from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-material-design';
import React, { Component } from 'react';
import 
{
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
var ListItem = React.createClass( {
    render() {
        return (
            <View style={styles.itemcontainer}>
                <View style={styles.itemLeft}>
                <Icon name={this.props.iconName} color="#bdbdbd" />
                <Text style={styles.textStyle}>{'    '+ this.props.txt} </Text>
                </View>
                <View>
                <Icon name='navigate-next' size={20}/>
                </View>
            </View>
        );
    }
})

var styles = StyleSheet.create({
    itemcontainer: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
        // borderColor: '#ff1744',
        // borderWidth : 2
    },
    itemLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 15,
        color: '#424242'
    }
})
module.exports=ListItem