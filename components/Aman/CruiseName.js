import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground, AsyncStorage, Alert } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';
import Helper from '../../helpers/Helper'
import 'whatwg-fetch';

import styles from "./Styles";

export default class CruiseName extends Component {
  constructor(){
    super();
    this.state={
      cruiseName : '',
    }
  }
  static navigationOptions = {
    header: null
  };
  _storeName=async()=>{
    try {
      await AsyncStorage.setItem('cruise_name', this.state.cruiseName,()=>{console.log("value saved in async")});
    } catch (error) {
      Alert('Error while saving the cruise name')
    }
  }
  addName=()=>{
    var data = new FormData()
    data.append('cruise_name', this.state.cruiseName)
    let res = Helper('/','POST',data);
    res.then((res)=>{
      if(res.msg==1){
        this._storeName();
        this.props.navigation.navigate("CruiseType");
      }
    })
  }
  nextScreenAndAddName=()=>{
    this.addName();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
        <Text style = {styles.textStyle}>
            Cruise Name 
         </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Type here..."
          onChangeText={(cruiseName) => this.setState({cruiseName})}
        />
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.nextScreenAndAddName()}
          >
          Add
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
}

