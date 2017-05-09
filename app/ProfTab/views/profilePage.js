// import {Button, Avatar, Divider} from 'react-native-material-design';
import { Avatar, Divider, List, ListItem } from 'react-native-elements';
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
// import ListItem from './set/listItem';

export default class ProfilePage extends Component {
    // constructor(props) {

    // }
    static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
    
  });
     constructor(props) {
    super(props);
        this.state = {
        list : [
        {
            icon: 'chat',
            txt: '我的评价',
            
        },
         {
            icon: 'favorite-border',
            txt: '我的收藏',
            
        },
         {
            icon: 'place',
            txt: '我的地址',
            
        },
         {
            icon: 'headset-mic',
            txt: '客服中心',
            
        },
         {
            icon: 'info-outline',
            txt: '帮助与反馈',
            
        },
        ]
        }
     }
     onLoginPress = () => {
          this.props.navigation.navigate('LoginPage');
     }
    render() {
        return (
            <View>
            <View style={styles.topcontainer}>
                <Image style={styles.backgroundPic} source={require('../../imgs/background.jpeg')}>
                <TouchableOpacity onPress={()=>console.log('avatar press')}>
                    <View style={styles.avatarBoxStyle}>
                        <Avatar  large rounded source= {require('../../imgs/avatar.jpg')} />
                    {/*<Avatar icon="folder" backgroundColor="paperLime"/>*/}
                    </View>
                </TouchableOpacity>
                    <View style={styles.userNameContainer}>
                        {
                            this.props.ifLogin ? (
                                <Text style={styles.textStyle}>{this.state.userName}</Text>
                            ):(
                                <TouchableOpacity onPress={() => {this.onLoginPress()}}>

                                <Text style={styles.textStyle}>登录/注册</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </Image>
            </View>
           <List>
            {
                this.state.list.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.txt}
                    leftIcon={{name: item.icon}}
                />
                ))
            }
            </List>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    backgroundPic: {
        flex: 1,
        width: null,
        height: 100,
        resizeMode: 'cover',
        flexDirection: 'row',
        alignItems: 'center',
    },
    topcontainer: {
        height: 100,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: '#0097a7',
        // borderColor: '#ff1744',
        // borderWidth : 2
    },
    avatarBoxStyle: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#ff1744',
        borderWidth : 2
        
    },
    userNameContainer:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderColor: '#ff1744',
        // borderWidth : 2
    },
    textStyle: {
        fontSize: 20
    },
    listContainer: {
        marginVertical: 5,
        backgroundColor: '#eeeeee'
    }
})
module.exports=ProfilePage