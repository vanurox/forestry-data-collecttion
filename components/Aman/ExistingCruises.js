import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground,Picker, TouchableHighlight, Alert, Modal } from "react-native";
import Button from "react-native-button";
import Helper from '../../helpers/Helper';

import styles from "./Styles";

export default class ExistingCruises extends Component {
  constructor(){
    super();
    this.state={
      cruiseList:[],
      user:'defaultValue'
    }
  }
  static navigationOptions = {
    header: null,
    cruise_list:[]
  };
  state = {user: ''}
  updateUser = (user) => {
     this.setState({ user: user })
  }
  getCruiseList=()=>{
    let res = Helper('/', 'GET');
    res.then((res)=>{
      this.setState({
        cruiseList:res
      })
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
        <Text style = {styles.textStyle}>
            Existing Cruise 
         </Text>
        
       <Picker style={styles.pickerStyle} selectedValue = {this.state.user} onValueChange = {this.updateUser} selectedValue={this.state.user}>
               <Picker.Item label = "List of Existing Cruise" value = "defaultValue" />
               {
                 this.state.cruiseList.map((item, index)=>{
                   return(
                    <Picker.Item label = {item.cruise_name} value = {item.cruise_name} key={index} />
                   );
                 })
               }
        </Picker>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("Plot")}
          >
            Open
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("Cruise")}
          >
            Delete
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("Cruise")}
          >
            Rename
          </Button>
          <Button
            style={styles.backButtonStyle}
            onPress={() => this.props.navigation.navigate("Cruise")}
          >
            Back 
          </Button>
        </ImageBackground>
      </View>
    );
  }
  componentDidMount(){
    this.getCruiseList();
  }
}
