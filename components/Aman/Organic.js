import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";

export default class Organic extends Component {
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
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyleOrganic}>
            Plot
         </Text>
         <Text style = {styles.textStyleOrganic}>
            Organic
         </Text>
         <Text style = {styles.textStyleOrganic}>
           Sand
         </Text>
         <Text style = {styles.textStyleOrganic}>
           Silt
         </Text>
         <Text style = {styles.textStyleOrganic}>
            Clay
         </Text>
         <Text style = {styles.textStyleOrganic}>
           Gravels
         </Text>
         <Text style = {styles.textStyleOrganic}>
           Cobbles
         </Text>
        </View>
        
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle2}>
            1
         </Text>
         <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
               
              
        </View>
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle2}>
           2
         </Text>
         <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              
              
        </View>
        <View style={styles.rowSpeciesStyle}>
        <Text style = {styles.textStyle2}>
            3
         </Text>
         <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style={styles.inputAgsStyleOrganic}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              
              
        </View>
        
          <Button
            containerStyle={styles.buttonStylePole}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("AdditionalVegetationNotes")}
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

