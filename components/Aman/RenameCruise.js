import React, { Component } from "react";
import { View, Text,TextInput, ImageBackground, AsyncStorage, Alert } from "react-native";
import Button from "react-native-button";
import 'whatwg-fetch';
import styles from "./Styles";
import BaseUrl from "../../helpers/BaseUrl";

export default class CruiseName extends Component {
  constructor(props){
    super(props);
    this.state={
      cruiseName : '',
      selectedCruiseId:this.props.navigation.state.params.cruiseId
    }
  }
  static navigationOptions = {
    header: null
  };
  reName=()=>{
      var data = new FormData();
    data.append('cru_name', this.state.cruiseName);
    data.append('cruise_id', this.state.selectedCruiseId)
    data.append('update_cruise',this.state.cruiseName)
        fetch(BaseUrl, {
      method:'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: data
    })
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      if(res.msg==1){
        this.props.navigation.navigate("Cruise");
      }
    })
    .catch((err)=>{
      console.log(`Error while inserting cruise name ${err}`);
    })
  }
  nextScreenAndAddName=()=>{
    this.reName();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
        <Text style = {styles.textStyle}>
            Edit Cruise Name 
         </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Type here..."
          onChangeText={(cruiseName) => this.setState({cruiseName})}
        />
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.nextScreenAndAddName()}
          >
          Update
          </Button>
          <Button
            style={styles.backButtonStyle}
            onPress={() => this.props.navigation.navigate("Cruise")}
          >           
          Back
          </Button> 
        </ImageBackground>        
      </View>
    );
  }
}

