import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, AsyncStorage } from "react-native";
import Button from "react-native-button";

import styles from "./Styles";
import BaseUrl from "../../helpers/BaseUrl";

export default class CruiseType extends Component {
  constructor() {
    super();
    this.state = {
      cruise_id: null
    };
    AsyncStorage.getItem('cruise_id').then((cruise_id) => {
      this.cruise_id = cruise_id;
    })
  }
  static navigationOptions = {
    header: null
  };

  saveCruiseType = (cruise_type) => {
    let fd = new FormData();
    fd.append('cruise_id', this.cruise_id);
    fd.append('cruise_type', cruise_type);
    fetch(BaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: fd
    })
    this.props.navigation.navigate("BasalAreaFactor");

  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
          <Text style={styles.textStyleCruise}>
            Cruise Type
         </Text>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.saveCruiseType('variable radius')}
          >
            Variable Radius
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("CruiseType")}
          >
            Fixed Radius
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.saveCruiseType('mixed radius')}
          >
            Mixed Radius
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("CruiseType")}
          >
            100% Tally
          </Button>
          <Button
            style={styles.backButtonStyle}
            onPress={() => this.props.navigation.navigate("CruiseName")}
          >
            Back
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

