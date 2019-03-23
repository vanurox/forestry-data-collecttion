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
      cruise_id: null,
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
      large_sawlog_ugs3: '0',
    }
  }
  static navigationOptions = {
    header: null
  };
  saveData = async () => {
    try {
      var cruise_id = await AsyncStorage.getItem('cruise_id');
      this.setState({
        cruise_id:cruise_id
      })
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
          fetch(BaseUrl, {
            method: 'POST',
            body: data
          })
            .then((response) => {
              return response.json()
            })
            .then((res) => {
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
    finally{
      this.alertCheck();
    }
  }
  alertCheck=()=>{
    Alert.alert(
      'Add more species or not?',
      'Do you want to add more Species??',
      [
        {
          text: 'no', onPress: () => {
            this._storeName();
            this.emptyFields();
            this.updatePlot();
          }, style: 'cancel'
        },
        {
          text: 'Yes', onPress: () => {
            this._storeName();
            this.emptyFields();
            this.props.navigation.navigate("SpeciesPole")
          }
        },
      ],
      { cancelable: false }
    )
  }
  updatePlot=()=>{
      let fd = new FormData();
     fd.append('cruise_id', this.state.cruise_id);
     fd.append('update_plot_number', 'testing');

     fetch(BaseUrl, {
       method: 'POST',
       body: fd
     })
       .then((res) => {
         return res.json();
       })
       .then((r) => {
        this.props.navigation.push('Sweep', { cruise_id: this.state.cruise_id })
       })
       .catch((err) => {
         console.log(`Error while updating plot number`);
       })
  }
  emptyFields = () => {

    this.setState({
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
      large_sawlog_ugs3: '0',

    })
  }
  speciesName = async () => {
    try {
      await AsyncStorage.setItem(`species_name0`, this.state.text);

    } catch (error) {
      Alert.alert('Error while saving the cruise name')
    }
  }
  speciesName1 = async () => {
    try {
      await AsyncStorage.setItem(`species_name1`, this.state.text1);

    } catch (error) {
      Alert.alert('Error while saving the cruise name')
    }
  }
  speciesName2 = async () => {
    try {
      await AsyncStorage.setItem(`species_name2`, this.state.text2);

    } catch (error) {
      Alert.alert('Error while saving the cruise name')
    }
  }
  speciesName3 = async () => {
    try {
      await AsyncStorage.setItem(`species_name3`, this.state.text3);

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
      await AsyncStorage.setItem('species_name0', '');
      await AsyncStorage.setItem('species_name1', '');
      await AsyncStorage.setItem('species_name2', '');
      await AsyncStorage.setItem('species_name3', '');
      await AsyncStorage.setItem('pole_ags0', '');
      await AsyncStorage.setItem('pole_ugs0', '');
      await AsyncStorage.setItem('small_sawlog_ags0', '');
      await AsyncStorage.setItem('small_sawlog_ugs0', '');
      await AsyncStorage.setItem('medium_ags0', '');
      await AsyncStorage.setItem('medium_ugs0', '');
      await AsyncStorage.setItem('large_sawlog_ags0', '');
      await AsyncStorage.setItem('large_sawlog_ugs0', '');

      await AsyncStorage.setItem('pole_ags1', '');
      await AsyncStorage.setItem('pole_ugs1', '');
      await AsyncStorage.setItem('small_sawlog_ags1', '');
      await AsyncStorage.setItem('small_sawlog_ugs1', '');
      await AsyncStorage.setItem('medium_ags1', '');
      await AsyncStorage.setItem('medium_ugs1', '');
      await AsyncStorage.setItem('large_sawlog_ags1', '');
      await AsyncStorage.setItem('large_sawlog_ugs1', '');

      await AsyncStorage.setItem('pole_ags2', '');
      await AsyncStorage.setItem('pole_ugs2', '');
      await AsyncStorage.setItem('small_sawlog_ags2', '');
      await AsyncStorage.setItem('small_sawlog_ugs2', '');
      await AsyncStorage.setItem('medium_ags2', '');
      await AsyncStorage.setItem('medium_ugs2', '');
      await AsyncStorage.setItem('large_sawlog_ags2', '');
      await AsyncStorage.setItem('large_sawlog_ugs2', '');

      await AsyncStorage.setItem('pole_ags3', '');
      await AsyncStorage.setItem('pole_ugs3', '');
      await AsyncStorage.setItem('small_sawlog_ags3', '');
      await AsyncStorage.setItem('small_sawlog_ugs3', '');
      await AsyncStorage.setItem('medium_ags3', '');
      await AsyncStorage.setItem('medium_ugs3', '');
      await AsyncStorage.setItem('large_sawlog_ags3', '');
      await AsyncStorage.setItem('large_sawlog_ugs3', '');


    } catch (error) {

    }
  }

  componentWillMount() {
    this._retrieveData();
  }

  nextScreen = (screenName,id) => {
    this.props.navigation.navigate(screenName,{
      id:id
    });
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
              onPress={() => this.nextScreen("Pole",0)}
            ><Text>{this.state.pole_ags}</Text>
            </Button>

            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole",0,0)}
            ><Text>{this.state.pole_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog",0)}
            ><Text>{this.state.small_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog",0)}
            ><Text>{this.state.small_sawlog_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog",0)}
            ><Text>{this.state.medium_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog",0)}
            ><Text>{this.state.medium_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog",0)}
            ><Text>{this.state.large_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog",0)}
            ><Text>{this.state.large_sawlog_ugs}</Text>
            </Button>

          </View>
          <View style={styles.rowSpeciesStyle}>
            <TextInput
              style={styles.inputAgsStyle}
              placeholder="Enter species"
              defaultValue={this.state.text1}
              onChangeText={(text1) => this.setState({ text1 })}
              onBlur={() => { this.speciesName1() }}
            />
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole",1)}
            ><Text>{this.state.pole_ags}</Text>
            </Button>

            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole",1)}
            ><Text>{this.state.pole_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog",1)}
            ><Text>{this.state.small_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog",1)}
            ><Text>{this.state.small_sawlog_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog",1)}
            ><Text>{this.state.medium_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog",1)}
            ><Text>{this.state.medium_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog",1)}
            ><Text>{this.state.large_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog",1)}
            ><Text>{this.state.large_sawlog_ugs}</Text>
            </Button>

          </View>
          <View style={styles.rowSpeciesStyle}>
            <TextInput
              style={styles.inputAgsStyle}
              placeholder="Enter species"
              defaultValue={this.state.text2}
              onChangeText={(text2) => this.setState({ text2 })}
              onBlur={() => { this.speciesName2() }}
            />
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole",2)}
            ><Text>{this.state.pole_ags}</Text>
            </Button>

            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole",2)}
            ><Text>{this.state.pole_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog",2)}
            ><Text>{this.state.small_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog",2)}
            ><Text>{this.state.small_sawlog_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog",2)}
            ><Text>{this.state.medium_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog",2)}
            ><Text>{this.state.medium_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog",2)}
            ><Text>{this.state.large_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog",2)}
            ><Text>{this.state.large_sawlog_ugs}</Text>
            </Button>

          </View>
          <View style={styles.rowSpeciesStyle}>
            <TextInput
              style={styles.inputAgsStyle}
              placeholder="Enter species"
              defaultValue={this.state.text3}
              onChangeText={(text3) => this.setState({ text3 })}
              onBlur={() => { this.speciesName3() }}
            />
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole",3)}
            ><Text>{this.state.pole_ags}</Text>
            </Button>

            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("Pole",3)}
            ><Text>{this.state.pole_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog",3)}
            ><Text>{this.state.small_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("SmallSawlog",3)}
            ><Text>{this.state.small_sawlog_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog",3)}
            ><Text>{this.state.medium_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("MediumSawlog",3)}
            ><Text>{this.state.medium_ugs}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog",3)}
            ><Text>{this.state.large_sawlog_ags}</Text>
            </Button>
            <Button
              containerStyle={styles.buttonAgs}
              style={styles.buttonStyleText1}
              onPress={() => this.nextScreen("LargeSawlog",3)}
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

