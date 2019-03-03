import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Picker, TouchableNativeFeedback, Alert, Modal,AsyncStorage } from "react-native";
import Button from "react-native-button";

import styles from "./Styles";

export default class Pole extends Component {
  constructor() {
    super();
    this.state = {
      agsValue: 0,
      ugsValue:0
    }
  }
  static navigationOptions = {
    header: null
  };
  state = { user: '' }
  updateUser = (user) => {
    this.setState({ user: user })
  }
 
  nextScreen=()=>{
    AsyncStorage.setItem('large_sawlog_ugs', this.state.ugsValue.toString());
    AsyncStorage.setItem('large_sawlog_ags', this.state.agsValue.toString());
    this.props.navigation.navigate('SpeciesPole',{
      screenName:'LargeSawlog'
    });
  }
  increaseagsCount = () => {
    let agsval = this.state.agsValue;
    this.setState({
      agsValue: agsval + 1
    })
  }
  
  decreaseagsCount = () => {
    if (this.state.agsValue === 0) {

    }
    else {
      let agsval = this.state.agsValue;
      this.setState({
        agsValue: agsval - 1
      })
    }
  }
  increaseugsCount = () => {
    let ugsval = this.state.ugsValue;
    this.setState({
      ugsValue: ugsval + 1
    })
  }
  decreaseugsCount = () => {
    if (this.state.ugsValue === 0) {

    }
    else {
      let ugsval = this.state.ugsValue;
      this.setState({
        ugsValue: ugsval - 1
      })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./bg.jpg")}
          style={poleStyles.backImage}
        >
          <View style={{ width: "100%",  height: 30, justifyContent: 'flex-start', marginTop: 40,backgroundColor:'rgba(0,0,0,0.5)' }}>
            <Text style={{ alignSelf: 'center', color: "#fff", fontSize: 25, fontWeight: 'bold' }}>Pole</Text>
          </View>
          <View style={{ width: "100%", flexDirection: 'row',  height: 50,backgroundColor:'rgba(0,0,0,0.5)', justifyContent: 'space-around', marginTop: 20, }}>

            <Text style={{ alignSelf: 'center', color: "#fff", fontSize: 22, fontWeight: 'bold' }}>AGS</Text>
            <Text style={{ alignSelf: 'center', color: "#fff", fontSize: 22, fontWeight: 'bold' }}>UGS</Text>
          </View>
          <View style={{ width: "100%", flexDirection: 'row', height: 70, justifyContent: 'center', marginTop: 70, }}>

            <View style={{flex:0.5,flexDirection:'column',height:70,}}>
              <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                <TouchableNativeFeedback onPress={()=>{this.decreaseagsCount()}}>
                  <View style={{flex:0.3,backgroundColor:'orange',justifyContent:'space-around'}} onPress={()=>{this.decreaseCount()}} >
                    <Text style={{alignSelf:'center',fontSize:24,color:'white'}}>-</Text>
                  </View>
                </TouchableNativeFeedback>
                <View style={{flex:0.3,justifyContent:'space-around',backgroundColor:'rgba(0,0,0,0.5)'}}>
                  <Text style={{alignSelf:'center',fontSize:24,color:'white'}}>{this.state.agsValue}</Text>
                </View>
                <TouchableNativeFeedback onPress={()=>{this.increaseagsCount()}}>
                  <View style={{flex:0.3,backgroundColor:'orange',justifyContent:'space-around'}} onPress={()=>{this.increaseCount()}}>
                    <Text style={{alignSelf:'center',fontSize:24,color:'white'}}>+</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={{flex:0.5,flexDirection:'column',height:70}}>
              <View style={{flex:1,flexDirection:'row',justifyContent:'center'}} >
              <TouchableNativeFeedback onPress={()=>{this.decreaseugsCount()}}>
                <View style={{flex:0.31,backgroundColor:'orange',justifyContent:'space-around'}}>
                  <Text style={{alignSelf:'center',fontSize:24,color:'white'}}>-</Text>
                </View>
              </TouchableNativeFeedback>
                
                <View style={{flex:0.31,justifyContent:'space-around',backgroundColor:'rgba(0,0,0,0.5)'}}>
                  <Text style={{alignSelf:'center',fontSize:24,color:'white'}}>{this.state.ugsValue}</Text>
                </View>
                <TouchableNativeFeedback onPress={()=>{this.increaseugsCount()}}>
                  <View style={{flex:0.31,backgroundColor:'orange',justifyContent:'space-around'}}>
                    <Text style={{alignSelf:'center',fontSize:24,color:'white'}}>+</Text>
                  </View>
                </TouchableNativeFeedback>
                
              </View>
            </View>
          </View>
          <TouchableNativeFeedback onPress={()=>{this.nextScreen()}}>
            <View style={{ width: "100%",  height: 40, justifyContent: 'center', marginTop: 40, }}>
              <View style={{width:"40%",backgroundColor:'orange',height:40,alignSelf:'center'}}>
              <Text style={{ alignSelf: 'center', color: "#fff", fontSize: 25, fontWeight: 'bold' }}>Done</Text>
              </View>
              
            </View>
          </TouchableNativeFeedback>
          
          <View style={{ width: "100%",  height: 40, justifyContent: 'center', marginTop: 20, }}>
            <View style={{width:"40%",height:40,alignSelf:'center'}}>
            <Text style={{ alignSelf: 'center', color: "#fff", fontSize: 25, fontWeight: 'bold' }}>Back</Text>
            </View>
            
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const poleStyles = StyleSheet.create({
  backImage: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 50
  }
  ,
  column: {
    flex: 0.5,

    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textAgs: {
    padding: 13,
    top: 4,
    height: 30,
    overflow: "hidden",
    borderRadius: 1,
    marginBottom: 25,
    marginRight: 5,
    marginLeft: 6,
    width: 20,
  },
})