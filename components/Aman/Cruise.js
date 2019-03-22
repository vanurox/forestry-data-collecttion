import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground ,AsyncStorage,Alert} from "react-native";
import Button from "react-native-button";

import styles from "./Styles";

export default class Cruise extends Component {
  constructor(props){
    super(props);
    this.state={
      
          species_name: '',
          pole_ags: '0',
          pole_ugs: '0',
          small_sawlog_ags: '0',
          small_sawlog_ugs: '0',
          medium_ags: '0',
          medium_ugs: '0',
          large_sawlog_ags: '0',
          large_sawlog_ugs: '0'
        
    }
  }
  static navigationOptions = {
    header: null
  };
  _storeName=async(id)=>{
    try {
      await AsyncStorage.setItem('species_name', this.state.species_name);
      await AsyncStorage.setItem('pole_ags', this.state.pole_ags);
      await AsyncStorage.setItem('pole_ugs', this.state.pole_ugs);
      await AsyncStorage.setItem('small_sawlog_ags', this.state.small_sawlog_ags);
      await AsyncStorage.setItem('small_sawlog_ugs', this.state.small_sawlog_ugs);
      await AsyncStorage.setItem('medium_ags', this.state.medium_ags);
      await AsyncStorage.setItem('medium_ugs', this.state.medium_ugs);
      await AsyncStorage.setItem('large_sawlog_ags', this.state.large_sawlog_ugs);
      await AsyncStorage.setItem('large_sawlog_ugs', this.state.large_sawlog_ags);
    } catch (error) {
      Alert.alert('Error while saving the cruise name')
    }
  }
  componentDidMount(){
    this._storeName();
  }
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

