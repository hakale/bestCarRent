import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { CheckBox, Card, Grid, Col, Button} from 'react-native-elements'
export default class CartPage extends Component {
     static navigationOptions = ({ navigation, screenProps }) => ({
        title: null,
    
  });
    constructor(props) {
        super(props)
        this.state = {
            totalM: '100 Yuan',
            allChecked: false,
            cardState: [
                {
                    checked: true,
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/0/01/STS120LaunchHiRes.jpg'
                },{
                    checked: false,
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Space_Shuttle_Columbia_launching.jpg/1280px-Space_Shuttle_Columbia_launching.jpg'
                },{
                    checked: true,
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Atlantis_on_Shuttle_Carrier_Aircraft.jpg/1280px-Atlantis_on_Shuttle_Carrier_Aircraft.jpg'
                },{
                    checked: false,
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/X-15_in_flight.jpg/1920px-X-15_in_flight.jpg'
                },{
                    checked: true,
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Challenger_explosion.jpg/1280px-Challenger_explosion.jpg'
                },{
                    checked: true,
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Enterprise_free_flight.jpg/1280px-Enterprise_free_flight.jpg'
                }
            ]
        }
    }
    onAllPress = () => {
        allChecked = !this.state.allChecked
        console.log('fuck this ;  ')
        newCardState = this.state.cardState.slice()
        console.log(newCardState)
        for (var i = 0; i < newCardState.length; ++i) {
            newCardState[i].checked = allChecked
        }
        this.setState( (state) => {
            return {
                allChecked: allChecked,
                cardState: newCardState
            }
        })
    };
    onPayPress = () => {
        this.props.navigation.navigate('CheckPage');
    }
    onCardPress = (index) => {
        newCardState = this.state.cardState.slice()
        newCardState[index].checked = !newCardState[index].checked
        this.setState( (state) => {
            return {
                cardState: newCardState
            }
        }
        )
    }
    render() {
        return(
            <View style={{flex: 1}}>
            <ScrollView style={{flex: 1 }}>                                   
                      {
                          this.state.cardState.map((item, i) => {
                              return(
                              
                              <Card  key={i} containerStyle={{justifyContent: 'space-around', padding: 0}} flexDirection='row'>
                               
                                <Grid>
                                    <Col size={1} containerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                                        <CheckBox
                                            title=''
                                            containerStyle={{margin:0, padding:0, borderWidth : 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}
                                            center
                                            onPress={ () => this.onCardPress(i)}
                                            checked={item.checked}
                                            />
                                    </Col>
                                    <Col size={4}>
                                        <Card title='Earth mover' containerStyle={{padding:0, margin:0}}  wrapperStyle={{padding:0, margin: 0}}
                                            titleStyle={{padding:0, margin:0}}
                                        image={{uri:item.uri}}
                                        />
                                    </Col>
                                </Grid>
                             </Card>);
                          })
                      }
                </ScrollView>
                <View style={{flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center',borderWidth:1, padding: 0, backgroundColor:'white'}}>
                    <Grid>
                        <Col size={4} containerStyle={{justifyContent: 'space-around', alignItems: 'center'}}>
                                <CheckBox title='全选'
                                center
                                onPress={() => this.onAllPress()}
                                backgroundColor='white'
                                containerStyle={{borderWidth: 0}}
                                    checked={this.state.allChecked} />
                        </Col>
                        <Col size={4} containerStyle={{alignItems: 'center', justifyContent: 'space-around',}}>
                                <Text>Total: {this.state.totalM}</Text>
                            </Col>
                        <Col size={4} onPress={ () => this.onPayPress()}  activeOpacity={0.5} containerStyle={{justifyContent: 'center',alignItems:'center', borderWidth:1,height: 50, backgroundColor: 'red'}}>
                        
                                <Text style={{textAlign:'center'}}>Pay</Text>
                            {/*<Button title='Pay' 
                            raised
                            large
                            buttonStyle={{margin: 0,  backgroundColor: 'red', width: 80}}/>*/}
                        
                        </Col>
                    </Grid>
                    </View>
            </View>
        );
    }
};
module.exports = CartPage