import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";

export default class Plotdbh extends Component {
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
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle3}>
            Plot
         </Text>
         <Text style = {styles.textStyle3}>
            Species
         </Text>
         <Text style = {styles.textStyle3}>
            HT
         </Text>
         <Text style = {styles.textStyle3}>
           DBH
         </Text>
        </View>
        
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle2}>
            1
         </Text>
             <TextInput
                style={styles.inputSpeciesStyle1}
                placeholder="1"
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputSpeciesStyle}
                placeholder="2"
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputSpeciesStyle}
                placeholder="3"
                onChangeText={(text) => this.setState({text})}
              />
               
              
        </View>
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle2}>
           2
         </Text>
             <TextInput
                style={styles.inputSpeciesStyle1}
                placeholder="1"
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputSpeciesStyle}
                placeholder="2"
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputSpeciesStyle}
                placeholder="3"
                onChangeText={(text) => this.setState({text})}
              />
              
              
              
        </View>
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle2}>
            3
         </Text>
             <TextInput
                style={styles.inputSpeciesStyle1}
                placeholder="1"
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputSpeciesStyle}
                placeholder="2"
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputSpeciesStyle}
                placeholder="3"
                onChangeText={(text) => this.setState({text})}
              />
              
              </View>

        
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("CanopyClosure")}
          >
            Done
          </Button>
           <Button
            style={styles.backButtonStylePole}
            onPress={() => this.props.navigation.navigate("Sweep")}
          >           
          Back
          </Button> 
          
        
               
        </ImageBackground>        
      </View>
    );
  }
}

