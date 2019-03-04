import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground,Alert,AsyncStorage } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";
import BaseUrl from "../../helpers/BaseUrl";

export default class AdditionalVegetationNotes extends Component {
  constructor(props){
    super(props);
    this.state={
      additional_vegetation_notes:''
    }
  }
  static navigationOptions = {
    header: null
  };
  savePlotData=async()=>{
    try
    {
      var cruise_id = await AsyncStorage.getItem('cruise_id');
      var species = await AsyncStorage.getItem('species');
      var ht = await AsyncStorage.getItem('ht');
      var dbh = await AsyncStorage.getItem('dbh');
      var canopy_closure = await AsyncStorage.getItem('canopy_closure');
      var soil_rock = await AsyncStorage.getItem('soil_rock');
      var moss_lichen = await AsyncStorage.getItem('moss_lichen');
      var ground_grass = await AsyncStorage.getItem('ground_grass');
      var cover_forb = await AsyncStorage.getItem('cover_forb');
      var shrub = await AsyncStorage.getItem('shrub');
      var organic = await AsyncStorage.getItem('organic');
      var sand = await AsyncStorage.getItem('sand');
      var silt = await AsyncStorage.getItem('silt');
      var clay = await AsyncStorage.getItem('clay');
      var gravels = await AsyncStorage.getItem('gravels');
      var cobbles = await AsyncStorage.getItem('cobbles');
      var additional_vegetation_notes =this.state.additional_vegetation_notes ;
      var data = new FormData();
      data.append('cruise_id', cruise_id.toString());
      data.append('species', species.toString());
      data.append('ht', ht);
      data.append('dbh', dbh.toString());
      data.append('canopy_closure', canopy_closure.toString());
      data.append('soil_rock', soil_rock.toString())
      data.append('moss_lichen', moss_lichen.toString())
      data.append('ground_grass', ground_grass.toString())
      data.append('cover_forb', cover_forb.toString())
      data.append('shrub', shrub.toString())
      data.append('organic', "abc")
      data.append('sand', sand.toString())
      data.append('silt', silt.toString())
      data.append('clay', clay.toString())
      data.append('gravels', gravels.toString())
      data.append('cobbles', cobbles.toString())
      data.append('additional_vegetation_notes', this.state.additional_vegetation_notes.toString())
      fetch( BaseUrl, {
        method: 'POST',
        body: data
      })
        .then((response) => {
          return response.json()
        })
        .then((res) => {
          console.log(res);
          this.props.navigation.navigate("FlemingSENRS");
        })
        .catch((err) => {
          console.log(err);
        })


    }
    catch(err)
    {
      console.log(err);
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
                onChangeText={(additional_vegetation_notes) => this.setState({additional_vegetation_notes})}
              />
             
               
              
        </View>
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => {this.savePlotData()}}
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

