import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, AsyncStorage, Alert, ScrollView } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";

export default class Organic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organic: '',
      sand: '',
      silt: '',
      clay: '',
      gravels: '',
      cobbles: ''
    }

  }
  saveData = async () => {
    try {
      await AsyncStorage.setItem('organic', this.state.organic)
      await AsyncStorage.setItem('sand', this.state.sand)
      await AsyncStorage.setItem('silt', this.state.silt)
      await AsyncStorage.setItem('clay', this.state.clay)
      await AsyncStorage.setItem('gravels', this.state.gravels)
      await AsyncStorage.setItem('cobbles', this.state.cobbles)
      this.props.navigation.navigate('AdditionalVegetationNotes');
      this.emptyFields();
    }
    catch (err) {
      console.log("Not saved");
    }
  }
  emptyFields=()=>{
    this.setState({
      organic:'',
      sand:'',
      silt:'',
      clay:'',
      gravels:'',
      cobbles:''
    })
  }
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
          <ScrollView horizontal={true}>
            <View>
              <View style={styles.rowSpeciesStyle}>
                <Text style={styles.textStyleOrganic}>
                  Plot
         </Text>
                <Text style={styles.textStyleOrganic}>
                  Organic
         </Text>
                <Text style={styles.textStyleOrganic}>
                  Sand
         </Text>
                <Text style={styles.textStyleOrganic}>
                  Silt
         </Text>
                <Text style={styles.textStyleOrganic}>
                  Clay
         </Text>
                <Text style={styles.textStyleOrganic}>
                  Gravels
         </Text>
                <Text style={styles.textStyleOrganic}>
                  Cobbles
         </Text>
              </View>

              <View style={styles.rowSpeciesStyle}>
                <Text style={styles.textStyle2}>
                  1
         </Text>
                <TextInput
                  style={styles.inputAgsStyleOrganic}
                  placeholder=""
                  onChangeText={(organic) => this.setState({ organic })}
                />
                <TextInput
                  style={styles.inputAgsStyleOrganic}
                  placeholder=""
                  onChangeText={(sand) => this.setState({ sand })}
                />
                <TextInput
                  style={styles.inputAgsStyleOrganic}
                  placeholder=""
                  onChangeText={(silt) => this.setState({ silt })}
                />
                <TextInput
                  style={styles.inputAgsStyleOrganic}
                  placeholder=""
                  onChangeText={(clay) => this.setState({ clay })}
                />
                <TextInput
                  style={styles.inputAgsStyleOrganic}
                  placeholder=""
                  onChangeText={(gravels) => this.setState({ gravels })}
                />
                <TextInput
                  style={styles.inputAgsStyleOrganic}
                  placeholder=""
                  onChangeText={(cobbles) => this.setState({ cobbles })}
                />


              </View>
            </View>
          </ScrollView>

          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => { this.saveData() }}
          >
            Done
          </Button>

          <Button
            style={styles.backButtonStylePole}
            onPress={() => this.props.navigation.navigate("CanopyClosure")}
          >
            Back
          </Button>

        </ImageBackground>
      </View>
    );
  }
}

