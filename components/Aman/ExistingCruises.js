import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground,Picker, TouchableHighlight, Alert, Modal, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import Helper from '../../helpers/Helper';
import BaseUrl from '../../helpers/BaseUrl';

import styles from "./Styles";

export default class ExistingCruises extends Component {
  constructor(props){
    super(props);
    this.state={
      cruiseList:[],
      user:'defaultValue',
      existingCruiseId:null
    }
  }
  static navigationOptions = {
    header: null,
    cruise_list:[]
  };
  state = {user: ''}
  updateUser = (user,index) => {
    index = index - 1;
    this.setState({ user: user},()=>{
      this.state.cruiseList.forEach((element,value) => {
        if(value==index){
          console.log(value,index);
          this.setState({
            user:user,
            existingCruiseId:element.id
          })
        }
      });
    })
  }
  componentDidUpdate=()=>{
    console.log(this.state.cruiseList)
  }
  getCruiseList=()=>{
    let res = Helper( 'GET');
    res.then((res)=>{
      console.log(res);
      this.setState({
        cruiseList:res
      })
    })
  }
  deleteExistingCruise=()=>{
    let data = new FormData();
    data.append('delete_cruise',this.state.user);
    data.append('cruise_id',this.state.existingCruiseId);
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
      console.log(res);
      if(res.msg===1){
        this.props.navigation.navigate("Cruise");
      }
      else{
        Alert.alert('Error while deleting the Existing user')
      }
    })
    .catch((err)=>{
      console.log(`Error while deleting cruise name ${err}`);
    })
  }
  handleListOfCruises=(e)=>{
    this.props.navigation.navigate('CruiseDetails',{existingCruiseId:this.state.existingCruiseId});
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={styles.backgroundImage}
        >
        <Text style = {styles.textStyle}>
            Existing Cruise
         </Text>

       <Picker style={styles.pickerStyle} selectedValue = {this.state.user} onValueChange = {this.updateUser} selectedValue={this.state.user}>
               <Picker.Item label = "List of Existing Cruise" value = "defaultValue" />
               {
                 this.state.cruiseList.map((item, index)=>{
                   return(
                      <Picker.Item label = {item.cruise_name} value = {item.cruise_name} key={item.id}/>
                   );
                 })
               }
        </Picker>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.handleListOfCruises()}
          >
            Open
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.deleteExistingCruise()}
          >
            Delete
          </Button>
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonStyleText}
            onPress={() => this.props.navigation.navigate("RenameCruise",{cruiseId:this.state.existingCruiseId})}
          >
            Rename
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
  componentDidMount(){
    this.getCruiseList();
  }
}
