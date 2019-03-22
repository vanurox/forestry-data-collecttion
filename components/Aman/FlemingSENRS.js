import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground,Image, screenOrientation } from "react-native";
import Button from "react-native-button";
import styles from "./Styles";

export default class FlemingSENRS extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
       <Image
          source={require("./logo.jpg")}
          style={{ width: '100%', height: '30%', justifyContent: "center",
          alignItems: "center",resizeMode: "stretch",}}
        >
        </Image>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
         <Text style = {styles.textStyle}>
            Fleming SENRS 
         </Text>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("Cruise")}
          >
            Cruise
          </Button>

          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("Cruise")}
          >
            References
          </Button>

          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("Cruise")}
          >
            Export
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

