import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet, ImageBackground } from "react-native";
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./Styles";

export default class SpeciesPole extends Component {
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
        <Text style = {styles.textSpeciesStyle}>
            Species
         </Text>
        <Text style = {styles.textStyle1Pole}>
            Pole {"\n"}
            AGS       UGS
         </Text>
         <Text style = {styles.textStyle1Pole}>
            Small Sawlog {"\n"}
            AGS        UGS
         </Text>
         <Text style = {styles.textStyle1Pole}>
            Medium Sawlog {"\n"}
            AGS        UGS
         </Text>
         <Text style = {styles.textStyle1Pole}>
            Large Sawlog {"\n"}
            AGS        UGS
         </Text>
        </View>
        
        <View style={styles.rowSpeciesStyle}>
        <TextInput
                style={styles.inputAgsStyle}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
              <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("Pole")}
          >
          </Button>
            
              <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("Pole")}
          >
          </Button>
             <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("SmallSawlog")}
          >
          </Button>
              <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("SmallSawlog")}
          >
          </Button>
              <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("MediumSawlog")}
          >
          </Button>
               <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("MediumSawlog")}
          >
          </Button>
               <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("LargeSawlog")}
          >
          </Button>
              <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("LargeSawlog")}
          >
          </Button>
              
        </View>
        <View style={styles.rowSpeciesStyle}>
        <TextInput
                style={styles.inputAgsStyle}
                placeholder=""
                onChangeText={(text) => this.setState({text})}
              />
             <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("Pole")}
          >
          </Button>
              <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("Pole")}
          >
          </Button>
              <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("SmallSawlog")}
          >
          </Button>
              <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("SmallSawlog")}
          >
          </Button>
              <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("MediumSawlog")}
          >
          </Button>
               <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("MediumSawlog")}
          >
          </Button>
               <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("LargeSawlog")}
          >
          </Button>
               <Button
            containerStyle={styles.buttonAgs}
            style={styles.buttonStyleText1}
            onPress={() => this.props.navigation.navigate("LargeSawlog")}
          >
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
            onPress={() => this.props.navigation.navigate("Sweep")}
          >
            Done
          </Button>
          
       
               <Button
            style={styles.backButtonStylePole}
            onPress={() => this.props.navigation.navigate("Sweep")}
          >
            Back 
          </Button>
          
        </ImageBackground>        
      </View>
    );
  }
}

