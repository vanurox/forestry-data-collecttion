import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";

export default class AdditionalVegetationNotes extends Component {
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
        <Text style = {styles.textStyle5}>
            Plot
         </Text>
         <Text style = {styles.textStyleAdd}>
            Additional Vegetation Notes
         </Text>
         
        </View>
        
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyleNum}>
            1
         </Text>
         <TextInput
                style={styles.inputaddsStyle}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
             
               
              
        </View>
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyleNum}>
           2
         </Text>
         <TextInput
                style={styles.inputaddsStyle}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              
              
        </View>
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyleNum}>
            3
         </Text>
         <TextInput
                style={styles.inputaddsStyle}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
          
          
              
        </View>
     
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("FlemingSENRS")}
          >
            Done
          </Button>
           <Button
            style={styles.backButtonStylePole}
            onPress={() => this.props.navigation.navigate("Organic")}
          >           
          Back
          </Button> 
               
        </ImageBackground>        
      </View>
    );
  }
}

