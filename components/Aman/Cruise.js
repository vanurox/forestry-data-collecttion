import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "react-native-button";

import styles from "./Styles";

export default class Cruise extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
        <Text style = {styles.textStyle}>
            Cruise
         </Text>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("CruiseName")}
          >
            New
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("ExistingCruises")}
          >
            Existing
          </Button>
          <Button
            style={styles.backButtonStyle}
            onPress={() => this.props.navigation.navigate("FlemingSENRS")}
          >
            Back
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

