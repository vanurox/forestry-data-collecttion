import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Picker, TouchableHighlight, Alert, Modal, AsyncStorage } from "react-native";
import Button from "react-native-button";
import Helper from '../../helpers/Helper';

import styles from "./Styles";

export default class BasalAreaFactor extends Component {
  constructor() {
    super();
    this.state = {
      cruise_name: '',
      pickerValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
  static navigationOptions = {
    header: null
  };
  state = { user: '' }
  updateUser = (user) => {
    this.setState({ user: user })
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cruise_name');
      if (value !== null) {
        this.setState({
          cruise_name: value
        })
      }
    } catch (error) {
      Alert('error while fetching from async storage')
    }
  };
  componentWillMount() {
    this._retrieveData();
  }
  getBasalAreaFactorList = () => {
    var data = new FormData();
    data.append('cruise_name', this.state.cruise_name);
    data.append('basal_area_factor', this.state.user);
    let res = Helper('POST', data);
    res.then((res) => {
      if (res.msg == 1) {
        this.props.navigation.navigate("Sweep", {
          cruise_name: this.state.cruise_name
        })
      }
    })
  }
  enterInputAndNextScreen = () => {
    this.getBasalAreaFactorList();
  }
  render() {
    return (
      <View style={styles.container}>

        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
          <Text style={styles.textStyle}>
            Basal Area Factor
         </Text>

          <Picker style={styles.pickerStyle} selectedValue={this.state.user} onValueChange={this.updateUser}>
            <Picker.Item label="List of Area" value="" />
            {
              this.state.pickerValue.map(
                (v, i) => {
                  return (
                    <Picker.Item key={i} label={v.toString()} value={v} />
                  );
                }
              )
            }
          </Picker>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.enterInputAndNextScreen()}
          >
            Enter
          </Button>
          <Button
            style={styles.backButtonStyle}
            onPress={() => this.props.navigation.navigate("CruiseType")}
          >
            Back
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

