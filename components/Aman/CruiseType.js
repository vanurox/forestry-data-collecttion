import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "react-native-button";

import styles from "./Styles";

export default class CruiseType extends Component {
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
          <Text style={styles.textStyleCruise}>
            Cruise Type
         </Text>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("BasalAreaFactor")}
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
            onPress={() => this.props.navigation.navigate("BasalAreaFactor")}
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

