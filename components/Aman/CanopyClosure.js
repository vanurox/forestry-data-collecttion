import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";


export default class CanopyClosure extends Component {
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
        <Text style = {styles.textSpeciesStyle}>
            Plot
         </Text>
         <Text style = {styles.textStyleCanopy}>
            Canopy {"\n"}  Closure%
         </Text>
         <Text style = {styles.textStyleCanopy}>
            Soil/ {"\n"}Rock
         </Text>
         <Text style = {styles.textStyleCanopy}>
           Moss/{"\n"}Lichen
         </Text>
         <Text style = {styles.textStyleCanopy}>
            Ground{"\n"}Grass
         </Text>
         <Text style = {styles.textStyleCanopy}>
           Cover{"\n"}Forb
         </Text>
         <Text style = {styles.textStyleCanopy}>
           Shrub
         </Text>
        </View>
        
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle2}>
            1
         </Text>
         <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
               
              
        </View>
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle2}>
           2
         </Text>
         <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              
              
        </View>
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle2}>
            3
         </Text>
         <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              
              
        </View>
       
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("Organic")}
          >
            Done
          </Button>
          <Button
            style={styles.backButtonStylePole}
            onPress={() => this.props.navigation.navigate("Plotdbh")}
          >
            Back 
          </Button>

               
        </ImageBackground>        
      </View>
    );
  }
} 
