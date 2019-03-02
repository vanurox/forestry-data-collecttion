import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground,Picker, TouchableHighlight, Alert, Modal } from "react-native";
import Button from "react-native-button";

import styles from "./Styles";

export default class Pole extends Component {
  static navigationOptions = {
    header: null
  };
  state = {user: ''}
  updateUser = (user) => {
     this.setState({ user: user })
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
        <Text style = {styles.textStylePole}>
            LargeSawlog
         </Text>
         <View style={styles.rowSpeciesStyle}>
         <Text style = {styles.textStylePole1}>
            AGS
         </Text>
         <Text style = {styles.textStylePole1}>
            UGS
         </Text>
         </View>
         <View style={styles.rowSpeciesStyle}>
           <Picker style={styles.pickerStylePnew} selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Value" value = "" />
               <Picker.Item label = "1" value = "1" />
               <Picker.Item label = "2" value = "2" />
               <Picker.Item label = "3" value = "3" />
        </Picker>
          <Button
            containerStyle={styles.buttonStylePnew}
            style={styles.buttonStyleTextPnew}
            onPress={() => this.props.navigation.navigate("SpeciesPole")}
          >
            +
          </Button>
           <Button
            containerStyle={styles.buttonStylePnew1}
            style={styles.buttonStyleTextPnew}
            onPress={() => this.props.navigation.navigate("SpeciesPole")}
          >
            -
          </Button>
          <Picker style={styles.pickerStylePnew1} selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                <Picker.Item label = "Value" value = "" />
               <Picker.Item label = "1" value = "1" />
               <Picker.Item label = "2" value = "2" />
               <Picker.Item label = "3" value = "3" />
        </Picker>
          <Button
            containerStyle={styles.buttonStylePnew}
            style={styles.buttonStyleTextPnew}
            onPress={() => this.props.navigation.navigate("SpeciesPole")}
          >
            +
          </Button>
           <Button
            containerStyle={styles.buttonStylePnew1}
            style={styles.buttonStyleTextPnew}
            onPress={() => this.props.navigation.navigate("SpeciesPole")}
          >
            -
          </Button>
         </View>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("SpeciesPole")}
          >
            Done
          </Button>
         
          <Button
            style={styles.backButtonStyle}
            onPress={() => this.props.navigation.navigate("SpeciesPole")}
          >
            Back 
          </Button>
        </ImageBackground>
      </View>
    );
  }
}
