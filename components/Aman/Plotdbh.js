import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground,AsyncStorage,Alert } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";
import BaseUrl from "../../helpers/BaseUrl";

export default class Plotdbh extends Component {
  constructor(props){
    super(props);
    this.state={
      species:'',
      ht:0,
      dbh:'',
    }
  }
  static navigationOptions = {
    header: null
  };
  nextScreen=async()=>{
    try{
      await AsyncStorage.setItem('species',this.state.species)
      await AsyncStorage.setItem('ht',this.state.ht)
      await AsyncStorage.setItem('dbh',this.state.dbh)
      this.props.navigation.navigate('CanopyClosure');
    }
    catch(err)
    {

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
                onChangeText={(species) => this.setState({species})}
              />
              <TextInput
                style={styles.inputSpeciesStyle}
                placeholder="2"
                keyboardType="numeric"
                onChangeText={(ht) => this.setState({ht})}
              />
              <TextInput
                style={styles.inputSpeciesStyle}
                placeholder="3"
                onChangeText={(dbh) => this.setState({dbh})}
              />       
        </View>
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => {this.nextScreen()}}
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

