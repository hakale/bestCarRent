import {Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
var ExCard = React.createClass( {
    render() {
        return (
            <View>
                
                <Card
                    image={{uri: 'http://bblee.coding.me/imgs/jfk-cs-lewise.jpg'}}
                    >
                    <View>
                        <View style={styles.outerCard}>
                            <View style={styles.innerCard}>
                                <Icon name='drive-eta' size={20} color='#607d8b'/>
                                <Text style={styles.testStyle}>{this.props.carStyle}</Text>
                            </View>
                            <View style={styles.innerCard}>
                                <Icon name='people' size={20} color='#607d8b'/>
                                <Text style={styles.testStyle}>{this.props.capacity}</Text>
                            </View>
                        </View>
                    </View>
            </Card>
            </View>
        );
    }
   
})
var styles = StyleSheet.create({
    outerCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    innerCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    testStyle: {
        fontSize: 20
    },
    iconStyle: {
        color: '#607d8b'
    }
})
module.exports = ExCard