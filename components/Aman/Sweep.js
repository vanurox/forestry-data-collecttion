import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, Alert, AsyncStorage } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./Styles";
import BaseUrl from '../../helpers/BaseUrl';

export default class Sweep extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cruise_name: '',
      cruiseId: '',
      valueToDisplay: ''
    }
    
  }

  static navigationOptions = {
    header: null
  };
  getCruiseName = async () => {
    try {
      const value = await AsyncStorage.getItem('cruise_name');
      if (value !== null) {
        this.setState({
          cruise_name: value
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  componentWillMount() {
    console.log('Calling ruisename function with cruise id ');
    this.getCruiseName();
    this.getCruiseId();
  }
  getCruiseId = async () => {
    try {
      const value = await AsyncStorage.getItem('cruise_id');
      console.log(this.state.cruiseId)
      let data = new FormData();
      data.append("cruise_id", value);
      data.append("get_plot_number", "sak/j")
      fetch(BaseUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: data
      })
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          console.log("=========================================");
          console.log(res);

          let num = res.number_of_plots === null ? '0' : res.number_of_plots;
          console.log(`num is ${num}`);
          this.setState({
            valueToDisplay: num,
            cruiseId: value
          })
        })
        .catch((err) => {
          console.log('error occured while hitting the api', err)
        })
    }
    catch (err) {
      console.log("something went wrong while fetching the data from async storage", err)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
          <Text style={styles.textStyleCruise}>
            {this.state.cruise_name}
          </Text>
          {
            this.state.valueToDisplay === null || this.state.valueToDisplay === '' ? (<TextInput
              style={styles.inputStyle1}
              placeholder="Number Of Plots"
              onChangeText={(text) => this.setState({ text })}
              value='NULL'
              editable={false}
            />) : (
                <TextInput
                  style={styles.inputStyle1}
                  placeholder="Number Of Plots"
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.valueToDisplay}
                  editable={false}
                />
              )
          }
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("SpeciesPole", {
              screenName: ''
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
  componentDidMount() {

  }
}
