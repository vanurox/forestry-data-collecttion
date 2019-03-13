import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, AsyncStorage, Alert } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';
import Helper from '../../helpers/Helper'
import 'whatwg-fetch';

import styles from "./Styles";
import BaseUrl from "../../helpers/BaseUrl";

export default class CruiseName extends Component {
  constructor() {
    super();
    this.state = {
      cruiseName: '',
    }
    AsyncStorage.clear().then(() => { console.log('Async cleared') });
  }
  static navigationOptions = {
    header: null
  };
  _storeName = async (id, cruiseName) => {
    try {
      let cruise_id = id.toString();
      await AsyncStorage.setItem('cruise_id', cruise_id);
      await AsyncStorage.setItem('cruise_name', cruiseName);
    } catch (error) {
      Alert('Error while saving the cruise name')
    }
  }
  addName = () => {
    var data = new FormData();
    data.append('cruise_name', this.state.cruiseName);
    fetch(BaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: data
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.msg == 1) {
          this._storeName(res.cruise_id, this.state.cruiseName);
          this.props.navigation.navigate("CruiseType");
          this.emptyFields()
        }
      })
      .catch((err) => {
        console.log(`Error while inserting cruise name ${err}`);
      })
  }
  emptyFields = () => {
    this.setState({
      cruiseName: ''
    })
  }
  nextScreenAndAddName = () => {
    this.addName();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
          <Text style={styles.textStyle}>
            Cruise Name
         </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Type here..."
            onChangeText={(cruiseName) => this.setState({ cruiseName })}
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

