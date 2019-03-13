import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, AsyncStorage, Alert } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation'
import styles from "./Styles";
import BaseUrl from "../../helpers/BaseUrl";

export default class SpeciesPole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cruise_id: '',
      text: '',
      pole_ags: '0',
      pole_ugs: '0',
      medium_ags: '0',
      medium_ugs: '0',
      small_sawlog_ags: '0',
      small_sawlog_ugs: '0',
      large_sawlog_ags: '0',
      large_sawlog_ugs: '0'

    }
  }
  static navigationOptions = {
    header: null
  };
  saveData = async () => {
    try {
      var cruise_id = await AsyncStorage.getItem('cruise_id');
      var species_name = await AsyncStorage.getItem('species_name');
      var pole_ags = await AsyncStorage.getItem('pole_ags');
      var pole_ugs = await AsyncStorage.getItem('pole_ugs');
      var small_sawlog_ags = await AsyncStorage.getItem('small_sawlog_ags');
      var large_sawlog_ags = await AsyncStorage.getItem('large_sawlog_ags');
      var large_sawlog_ugs = await AsyncStorage.getItem('large_sawlog_ugs');
      var small_sawlog_ugs = await AsyncStorage.getItem('small_sawlog_ugs');
      var medium_ags = await AsyncStorage.getItem('medium_ags');
      var medium_ugs = await AsyncStorage.getItem('medium_ugs');

      var data = new FormData();
      data.append('cruise_id', cruise_id);
      data.append('species_name', species_name);
      data.append('pole_ags', pole_ags);
      data.append('pole_ugs', pole_ugs);
      data.append('small_sawlog_ags', small_sawlog_ags);
      data.append('small_sawlog_ugs', small_sawlog_ugs)
      data.append('medium_ags', medium_ags)
      data.append('medium_ugs', medium_ugs)
      data.append('large_sawlog_ugs', large_sawlog_ugs)
      data.append('large_sawlog_ags', large_sawlog_ags)
      console.log('Save Sweep called');
      fetch(BaseUrl, {
        method: 'POST',
        body: data
      })
        .then((response) => {
          return response.json()
        })
        .then((res) => {
          console.log(res);
          Alert.alert(
            'Add species or not',
            'Do you want to add more species',
            [
              { text: 'no', onPress: () => { this.updatePlotNumber(), this._storeName(), this.emptyFields() }, style: 'cancel' },
              {
                text: 'Yes', onPress: () => {
                  this.props.navigation.navigate('SpeciesPole'), this._storeName(), this.emptyFields()
                }
              },
            ],
            { cancelable: false }
          )
        })
        .catch((err) => {
          console.log(`Error whileperforming sweep insertion`)
          Alert.alert(err)
        })
    }
    catch (err) {
      console.log(err);
      Alert.alert(err);
    }
  }

  updatePlotNumber = async () => {
    try {
      let fd = new FormData();
      let cruise_id = await AsyncStorage.getItem('cruise_id');
      console.log(`Cruise id is ${cruise_id}`);
      fd.append('cruise_id', cruise_id);
      fd.append('update_plot_number', 'testing');

      fetch(BaseUrl, {
        method: 'POST',
        body: fd
      })
        .then((res) => {
          return res.json();
        })
        .then((r) => {
          this.props.navigation.push('Sweep', { 'demoParam': 'hi' })
        })
        .catch((err) => {
          console.log(`Error while updating plot number`);
        })
    } catch (err) {
      Alert.alert(err);
    }
  }
  emptyFields = () => {

    this.setState({
      text: ''
    })
  }
  speciesName = async () => {
    try {
      await AsyncStorage.setItem('species_name', this.state.text);


    } catch (error) {
      Alert.alert('Error while saving the cruise name')
    }
  }
  _retrieveData = async () => {
    try {
      const cruise_id = await AsyncStorage.getItem('cruise_id');
      const species_name = await AsyncStorage.getItem('species_name');
      const pole_ags = await AsyncStorage.getItem('pole_ags');
      const pole_ugs = await AsyncStorage.getItem('pole_ugs');
      const small_sawlog_ags = await AsyncStorage.getItem('small_sawlog_ags');
      const small_sawlog_ugs = await AsyncStorage.getItem('small_sawlog_ugs');
      const medium_ags = await AsyncStorage.getItem('medium_ags');
      const medium_ugs = await AsyncStorage.getItem('medium_ugs');
      const large_sawlog_ags = await AsyncStorage.getItem('large_sawlog_ags');
      const large_sawlog_ugs = await AsyncStorage.getItem('large_sawlog_ugs');
      if (species_name !== null) {
        this.setState({
          text: species_name,
          cruise_id: cruise_id,
          pole_ags: pole_ags,
          pole_ugs: pole_ugs,
          medium_ags: medium_ags,
          medium_ugs: medium_ugs,
          small_sawlog_ags: small_sawlog_ags,
          small_sawlog_ugs: small_sawlog_ugs,
          large_sawlog_ags: large_sawlog_ags,
          large_sawlog_ugs: large_sawlog_ugs
        })
      }
    } catch (error) {
      Alert.alert('error while fetching from async storage')
    }
  };
  _storeName = async (id) => {
    try {
      await AsyncStorage.setItem('species_name', '');
      await AsyncStorage.setItem('pole_ags', '0');
      await AsyncStorage.setItem('pole_ugs', '0');
      await AsyncStorage.setItem('small_sawlog_ags', '0');
      await AsyncStorage.setItem('small_sawlog_ugs', '0');
      await AsyncStorage.setItem('medium_ags', '0');
      await AsyncStorage.setItem('medium_ugs', '0');
      await AsyncStorage.setItem('large_sawlog_ags', '0');
      await AsyncStorage.setItem('large_sawlog_ugs', '0');
    } catch (error) {

    }
  }

  componentWillMount() {
    this._retrieveData();
  }

  nextScreen = (screenName) => {
    this.props.navigation.navigate(screenName);
  }
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.rowSpeciesStyle}>
            <Text style={styles.textSpeciesStyle}>
              Species
         </Text>
            <Text style={styles.textStyle1Pole}>
              Pole {"\n"}
              AGS       UGS
         </Text>
            <Text style={styles.textStyle1Pole}>
              Small Sawlog {"\n"}
              AGS        UGS
         </Text>
            <Text style={styles.textStyle1Pole}>
              Medium Sawlog {"\n"}
              AGS        UGS
         </Text>
            <Text style={styles.textStyle1Pole}>
              Large Sawlog {"\n"}
              AGS        UGS
         </Text>
          </View>

          <View style={styles.rowSpeciesStyle}>
            <TextInput
              style={styles.inputAgsStyle}
              placeholder="Enter species"
              defaultValue={this.state.text}
              onChangeText={(text) => this.setState({ text })}
              onBlur={() => { this.speciesName() }}
            />
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole")}
            ><Text>{this.state.pole_ags}</Text>
            </Button>

            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole")}
            ><Text>{this.state.pole_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog")}
            ><Text>{this.state.small_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog")}
            ><Text>{this.state.small_sawlog_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog")}
            ><Text>{this.state.medium_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog")}
            ><Text>{this.state.medium_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog")}
            ><Text>{this.state.large_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog")}
            ><Text>{this.state.large_sawlog_ugs}</Text>
            </Button>

          </View>
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("Cruise")}
          >
            References
          </Button>
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => { this.saveData() }}
          >
            Done
          </Button>


          <Button
            style={styles.backButtonStylePole}
            onPress={() => this.props.navigation.push("Sweep")}
          >
            Back
          </Button>

        </ImageBackground>
      </View>
    );
  }
}

