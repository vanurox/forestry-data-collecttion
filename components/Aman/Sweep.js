import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground,Alert } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";

export default class Sweep extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      cruise_name:'',
    }
  }
  
  static navigationOptions = {
    header: null
  };
  componentWillMount() {
    this.setState({
      cruise_name:this.props.navigation.state.params.cruise_name
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
         <Text style = {styles.textStyleCruise}>
            {this.state.cruise_name}
         </Text>
        <TextInput
          style={styles.inputStyle1}
          placeholder="Number Of Plots"
          onChangeText={(text) => this.setState({text})}
        />
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("SpeciesPole",{
              screenName:''
            })}
          >
            Sweep
          </Button>
          
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("Plotdbh")}
          >
            Done
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("FlemingSENRS")}
          >
            Home
          </Button>
           <Button
            style={styles.backButtonStyle}
            onPress={() => this.props.navigation.navigate("BasalAreaFactor")}
          >
            Back 
          </Button>
          
        </ImageBackground>        
      </View>
    );
  }
}
