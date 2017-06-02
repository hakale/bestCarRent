import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import {hostip} from '../../config'
import BannerLite from 'react-native-banner-lite';
import {
    List ,
    Button,
    Divider
}  from 'react-native-elements';
export default class DetailPage extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Detail",

  });
    constructor(props) {
        super(props)
        this.state = {
            carImagList : [
              {
                title: "",
                subtitle: "",
                imageURL: "",
              },
              {
                title: "",
                subtitle: "",
                imageURL: "",
              },
              {
                title: "",
                subtitle: "",
                imageURL: "",
              },
            ]
        }
        console.log('Pare fetch')
        // fetch(hostip + '/api/post/car_detail', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         car_id: this.props.navigation.state.params.carID
        //     })
        // })
        //     .then((response) => {
        //         return response.json()})
        //     .then((responseJson) => {
        //         console.log('Json', responseJson)
        //         if (responseJson.MESSAGE == 'SUCCESS') {
        //             this.setState(
        //               () =>{
        //                 return {
        //                   carImagList: responseJson.DATA.imagelist,
        //
        //                 }
        //               }
        //             )
        //         }
        //         else {
        //             ToastAndroid.showWithGravity(
        //                 responseJson.MESSAGE,
        //                 ToastAndroid.SHORT, ToastAndroid.CENTER
        //             )
        //         }
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //         ToastAndroid.showWithGravity(
        //             '网络开小差了,稍后重试',
        //             ToastAndroid.SHORT, ToastAndroid.CENTER
        //         )
        //     });
    }
    onRentButtonPress = (carID) => {
        this.props.navigation.navigate('CHECK_OUT', carID);
    }
    render() {
        const { carName,  } = this.props.navigation.state.params;
        return ( <ScrollView>
                 <View style={{height:150}}>
                  <BannerLite
                  items={this.state.carImagList}
                />
            </View>
            <View style={{
                paddingHorizontal: 15
            }}>
            <Text style={styles.textStyle}>Tuck</Text>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 15, marginVertical: 10,justifyContent: 'space-between'}}>
                <Text style={styles.textStyle}>Price</Text>
                <Button
                title='租车'
                raised
                icon={{name: 'local-grocery-store', }}
                onPress={() => this.onRentButtonPress({carID: 3})}/>
                </View>
            <Divider style={{ backgroundColor: 'blue' }} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    // flex: 1
    height: 100
  },
  textStyle: {
      fontSize: 20
  }
})
