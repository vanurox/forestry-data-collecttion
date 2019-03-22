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
      large_sawlog_ugs: '0',

      text1: '',
      pole_ags1: '0',
      pole_ugs1: '0',
      medium_ags1: '0',
      medium_ugs1: '0',
      small_sawlog_ags1: '0',
      small_sawlog_ugs1: '0',
      large_sawlog_ags1: '0',
      large_sawlog_ugs1: '0',

      text2: '',
      pole_ags2: '0',
      pole_ugs2: '0',
      medium_ags2: '0',
      medium_ugs2: '0',
      small_sawlog_ags2: '0',
      small_sawlog_ugs2: '0',
      large_sawlog_ags2: '0',
      large_sawlog_ugs2: '0',

      text3: '',
      pole_ags3: '0',
      pole_ugs3: '0',
      medium_ags3: '0',
      medium_ugs3: '0',
      small_sawlog_ags3: '0',
      small_sawlog_ugs3: '0',
      large_sawlog_ags3: '0',
      large_sawlog_ugs3: '0'

    }
  }
  static navigationOptions = {
    header: null
  };
  saveData = async () => {
    try {
      var cruise_id = await AsyncStorage.getItem('cruise_id');



      for (let t = 0; t < 4; t++) {
        var species_name = await AsyncStorage.getItem(`species_name${t}`);
        var pole_ags = await AsyncStorage.getItem(`pole_ags${t}`);
        var pole_ugs = await AsyncStorage.getItem(`pole_ugs${t}`);
        var small_sawlog_ags = await AsyncStorage.getItem(`small_sawlog_ags${t}`);
        var large_sawlog_ags = await AsyncStorage.getItem(`large_sawlog_ags${t}`);
        var large_sawlog_ugs = await AsyncStorage.getItem(`large_sawlog_ugs${t}`);
        var small_sawlog_ugs = await AsyncStorage.getItem(`small_sawlog_ugs${t}`);
        var medium_ags = await AsyncStorage.getItem(`medium_ags${t}`);
        var medium_ugs = await AsyncStorage.getItem(`medium_ugs${t}`);

        if (species_name != '') {
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
              this.updatePlotNumber();
              this._storeName();
              this.emptyFields();
            })
            .catch((err) => {
              console.log(`Error whileperforming sweep insertion`)
              Alert.alert(err)
            })
        }
        else
        {
          Alert.alert("Empty ")
        }


      }

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
  speciesName = async (id) => {
    try {
      await AsyncStorage.setItem(`species_name${id}`, this.state.text);


    } catch (error) {
      Alert.alert('Error while saving the cruise name')
    }
  }
  _retrieveData = async () => {
    try {
      const cruise_id = await AsyncStorage.getItem('cruise_id');
      const species_name = await AsyncStorage.getItem('species_name0');
      const pole_ags = await AsyncStorage.getItem('pole_ags0');
      const pole_ugs = await AsyncStorage.getItem('pole_ugs0');
      const small_sawlog_ags = await AsyncStorage.getItem('small_sawlog_ags0');
      const small_sawlog_ugs = await AsyncStorage.getItem('small_sawlog_ugs0');
      const medium_ags = await AsyncStorage.getItem('medium_ags0');
      const medium_ugs = await AsyncStorage.getItem('medium_ugs0');
      const large_sawlog_ags = await AsyncStorage.getItem('large_sawlog_ags0');
      const large_sawlog_ugs = await AsyncStorage.getItem('large_sawlog_ugs0');

      const species_name1 = await AsyncStorage.getItem('species_name1');
      const pole_ags1 = await AsyncStorage.getItem('pole_ags1');
      const pole_ugs1 = await AsyncStorage.getItem('pole_ugs1');
      const small_sawlog_ags1 = await AsyncStorage.getItem('small_sawlog_ags1');
      const small_sawlog_ugs1 = await AsyncStorage.getItem('small_sawlog_ugs1');
      const medium_ags1 = await AsyncStorage.getItem('medium_ags1');
      const medium_ugs1 = await AsyncStorage.getItem('medium_ugs1');
      const large_sawlog_ags1 = await AsyncStorage.getItem('large_sawlog_ags1');
      const large_sawlog_ugs1 = await AsyncStorage.getItem('large_sawlog_ugs1');

      const species_name2 = await AsyncStorage.getItem('species_name2');
      const pole_ags2 = await AsyncStorage.getItem('pole_ags2');
      const pole_ugs2 = await AsyncStorage.getItem('pole_ugs2');
      const small_sawlog_ags2 = await AsyncStorage.getItem('small_sawlog_ags2');
      const small_sawlog_ugs2 = await AsyncStorage.getItem('small_sawlog_ugs2');
      const medium_ags2 = await AsyncStorage.getItem('medium_ags2');
      const medium_ugs2 = await AsyncStorage.getItem('medium_ugs2');
      const large_sawlog_ags2 = await AsyncStorage.getItem('large_sawlog_ags2');
      const large_sawlog_ugs2 = await AsyncStorage.getItem('large_sawlog_ugs2');

      const species_name3 = await AsyncStorage.getItem('species_name3');
      const pole_ags3 = await AsyncStorage.getItem('pole_ags3');
      const pole_ugs3 = await AsyncStorage.getItem('pole_ugs3');
      const small_sawlog_ags3 = await AsyncStorage.getItem('small_sawlog_ags3');
      const small_sawlog_ugs3 = await AsyncStorage.getItem('small_sawlog_ugs3');
      const medium_ags3 = await AsyncStorage.getItem('medium_ags3');
      const medium_ugs3 = await AsyncStorage.getItem('medium_ugs3');
      const large_sawlog_ags3 = await AsyncStorage.getItem('large_sawlog_ags3');
      const large_sawlog_ugs3 = await AsyncStorage.getItem('large_sawlog_ugs3');
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
          large_sawlog_ugs: large_sawlog_ugs,

          text1: species_name1,
          pole_ags1: pole_ags1,
          pole_ugs1: pole_ugs1,
          medium_ags1: medium_ags1,
          medium_ugs1: medium_ugs1,
          small_sawlog_ags1: small_sawlog_ags1,
          small_sawlog_ugs1: small_sawlog_ugs1,
          large_sawlog_ags1: large_sawlog_ags1,
          large_sawlog_ugs1: large_sawlog_ugs1,

          text2: species_name2,
          pole_ags2: pole_ags2,
          pole_ugs2: pole_ugs2,
          medium_ags2: medium_ags2,
          medium_ugs2: medium_ugs2,
          small_sawlog_ags2: small_sawlog_ags2,
          small_sawlog_ugs2: small_sawlog_ugs2,
          large_sawlog_ags2: large_sawlog_ags2,
          large_sawlog_ugs2: large_sawlog_ugs2,

          text3: species_name3,
          pole_ags3: pole_ags3,
          pole_ugs3: pole_ugs3,
          medium_ags3: medium_ags3,
          medium_ugs3: medium_ugs3,
          small_sawlog_ags3: small_sawlog_ags3,
          small_sawlog_ugs3: small_sawlog_ugs3,
          large_sawlog_ags3: large_sawlog_ags3,
          large_sawlog_ugs3: large_sawlog_ugs3
        })
      }
    } catch (error) {
      Alert.alert('error while fetching from async storage')
    }
  };
  _storeName = async (id) => {
    try {
      await AsyncStorage.setItem('species_name0', null);
      await AsyncStorage.setItem('species_name1', null);
      await AsyncStorage.setItem('species_name2', null);
      await AsyncStorage.setItem('species_name3', null);
      await AsyncStorage.setItem('pole_ags0', null);
      await AsyncStorage.setItem('pole_ugs0', null);
      await AsyncStorage.setItem('small_sawlog_ags0', null);
      await AsyncStorage.setItem('small_sawlog_ugs0', null);
      await AsyncStorage.setItem('medium_ags0', null);
      await AsyncStorage.setItem('medium_ugs0', null);
      await AsyncStorage.setItem('large_sawlog_ags0', null);
      await AsyncStorage.setItem('large_sawlog_ugs0', null);

      await AsyncStorage.setItem('pole_ags1', null);
      await AsyncStorage.setItem('pole_ugs1', null);
      await AsyncStorage.setItem('small_sawlog_ags1', null);
      await AsyncStorage.setItem('small_sawlog_ugs1', null);
      await AsyncStorage.setItem('medium_ags1', null);
      await AsyncStorage.setItem('medium_ugs1', null);
      await AsyncStorage.setItem('large_sawlog_ags1', null);
      await AsyncStorage.setItem('large_sawlog_ugs1', null);

      await AsyncStorage.setItem('pole_ags2', null);
      await AsyncStorage.setItem('pole_ugs2', null);
      await AsyncStorage.setItem('small_sawlog_ags2', null);
      await AsyncStorage.setItem('small_sawlog_ugs2', null);
      await AsyncStorage.setItem('medium_ags2', null);
      await AsyncStorage.setItem('medium_ugs2', null);
      await AsyncStorage.setItem('large_sawlog_ags2', null);
      await AsyncStorage.setItem('large_sawlog_ugs2', null);

      await AsyncStorage.setItem('pole_ags3', null);
      await AsyncStorage.setItem('pole_ugs3', null);
      await AsyncStorage.setItem('small_sawlog_ags3', null);
      await AsyncStorage.setItem('small_sawlog_ugs3', null);
      await AsyncStorage.setItem('medium_ags3', null);
      await AsyncStorage.setItem('medium_ugs3', null);
      await AsyncStorage.setItem('large_sawlog_ags3', null);
      await AsyncStorage.setItem('large_sawlog_ugs3', null);


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
              onBlur={() => { this.speciesName(0) }}
            />
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole", {
                id: 0
              })}
            ><Text>{this.state.pole_ags}</Text>
            </Button>

            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole", {
                id: 0
              })}
            ><Text>{this.state.pole_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog", {
                id: 0
              })}
            ><Text>{this.state.small_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog", {
                id: 0
              })}
            ><Text>{this.state.small_sawlog_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog", {
                id: 0
              })}
            ><Text>{this.state.medium_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog", {
                id: 0
              })}
            ><Text>{this.state.medium_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog", {
                id: 0
              })}
            ><Text>{this.state.large_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog", {
                id: 0
              })}
            ><Text>{this.state.large_sawlog_ugs}</Text>
            </Button>

          </View>
          <View style={styles.rowSpeciesStyle}>
            <TextInput
              style={styles.inputAgsStyle}
              placeholder="Enter species"
              defaultValue={this.state.text1}
              onChangeText={(text1) => this.setState({ text1 })}
              onBlur={() => { this.speciesName(1) }}
            />
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole", {
                id: 1
              })}
            ><Text>{this.state.pole_ags}</Text>
            </Button>

            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole", {
                id: 1
              })}
            ><Text>{this.state.pole_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog", {
                id: 1
              })}
            ><Text>{this.state.small_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog", {
                id: 1
              })}
            ><Text>{this.state.small_sawlog_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog", {
                id: 1
              })}
            ><Text>{this.state.medium_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog", {
                id: 1
              })}
            ><Text>{this.state.medium_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog", {
                id: 1
              })}
            ><Text>{this.state.large_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog", {
                id: 1
              })}
            ><Text>{this.state.large_sawlog_ugs}</Text>
            </Button>

          </View>
          <View style={styles.rowSpeciesStyle}>
            <TextInput
              style={styles.inputAgsStyle}
              placeholder="Enter species"
              defaultValue={this.state.text2}
              onChangeText={(text2) => this.setState({ text2 })}
              onBlur={() => { this.speciesName(2) }}
            />
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole", {
                id: 2
              })}
            ><Text>{this.state.pole_ags}</Text>
            </Button>

            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole", {
                id: 2
              })}
            ><Text>{this.state.pole_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog", {
                id: 2
              })}
            ><Text>{this.state.small_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog", {
                id: 2
              })}
            ><Text>{this.state.small_sawlog_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog", {
                id: 2
              })}
            ><Text>{this.state.medium_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog", {
                id: 2
              })}
            ><Text>{this.state.medium_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog", {
                id: 2
              })}
            ><Text>{this.state.large_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog", {
                id: 2
              })}
            ><Text>{this.state.large_sawlog_ugs}</Text>
            </Button>

          </View>
          <View style={styles.rowSpeciesStyle}>
            <TextInput
              style={styles.inputAgsStyle}
              placeholder="Enter species"
              defaultValue={this.state.text3}
              onChangeText={(text3) => this.setState({ text3 })}
              onBlur={() => { this.speciesName(3) }}
            />
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole", {
                id: 3
              })}
            ><Text>{this.state.pole_ags}</Text>
            </Button>

            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole", {
                id: 3
              })}
            ><Text>{this.state.pole_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog", {
                id: 3
              })}
            ><Text>{this.state.small_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog", {
                id: 3
              })}
            ><Text>{this.state.small_sawlog_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog", {
                id: 3
              })}
            ><Text>{this.state.medium_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog", {
                id: 3
              })}
            ><Text>{this.state.medium_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog", {
                id: 3
              })}
            ><Text>{this.state.large_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog", {
                id: 3
              })}
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

