import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground,AsyncStorage,Alert } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";


export default class CanopyClosure extends Component {
  constructor(props){
    super(props);
    this.state={
      canopy_closure:'',
      soil_rock:'',
      moss_lichen:'',
      ground_grass:'',
      cover_forb:'',
      shrub:''
    }
  }
  static navigationOptions = {
    header: null
  };
  saveData=async()=>{
    try{
      await AsyncStorage.setItem('canopy_closure',this.state.canopy_closure)
      await AsyncStorage.setItem('soil_rock',this.state.soil_rock)
      await AsyncStorage.setItem('moss_lichen',this.state.moss_lichen)
      await AsyncStorage.setItem('ground_grass',this.state.ground_grass)
      await AsyncStorage.setItem('cover_forb',this.state.cover_forb)
      await AsyncStorage.setItem('shrub',this.state.shrub)
      this.props.navigation.navigate('Organic');
    }
    catch(err)
    {
      console.log("Not saved");
    }
  }
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
                onChangeText={(canopy_closure) => this.setState({canopy_closure})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(soil_rock) => this.setState({soil_rock})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(moss_lichen) => this.setState({moss_lichen})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(ground_grass) => this.setState({ground_grass})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(cover_forb) => this.setState({cover_forb})}
              />
              <TextInput
                style={styles.inputAgsStyleCanopy}
                placeholder=""
                onChangeText={(shrub) => this.setState({shrub})}
              />
               
              
        </View>
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => {this.saveData()}}
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
