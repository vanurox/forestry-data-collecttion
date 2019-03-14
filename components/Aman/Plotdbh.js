import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, AsyncStorage, Alert } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";
import BaseUrl from "../../helpers/BaseUrl";

export default class Plotdbh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: '',
      ht: '0',
      dbh: '',
    };
    console.log("Plotdbh constructor called");
  }
  static navigationOptions = {
    header: null
  };
  nextScreen = async () => {
    try {
      await AsyncStorage.setItem('species', this.state.species)
      await AsyncStorage.setItem('ht', this.state.ht)
      await AsyncStorage.setItem('dbh', this.state.dbh)
      this.props.navigation.navigate('CanopyClosure');
      this.setState({
        ht: '0',
        dbh: '',
        species: ''
      })
    }
    catch (err) {

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
            <Text style={styles.textStyle3}>
              Plot
         </Text>
            <Text style={styles.textStyle3}>
              Species
         </Text>
            <Text style={styles.textStyle3}>
              HT
         </Text>
            <Text style={styles.textStyle3}>
              DBH
         </Text>
          </View>

          <View style={styles.rowSpeciesStyle}>
            <Text style={styles.textStyle2}>
              1
         </Text>
            <TextInput
              style={styles.inputSpeciesStyle1}
              value={this.state.species}
              onChangeText={(species) => this.setState({ species })}
            />
            <TextInput
              style={styles.inputSpeciesStyle}
              keyboardType="numeric"
              value={this.state.ht}
              onChangeText={(ht) => this.setState({ ht })}
            />
            <TextInput
              style={styles.inputSpeciesStyle}
              value={this.state.dbh}
              onChangeText={(dbh) => this.setState({ dbh })}
            />
          </View>
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => { this.nextScreen() }}
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

