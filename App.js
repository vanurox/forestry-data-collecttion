import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";

import FlemingSENRS from "./components/Aman/FlemingSENRS";
import Cruise from "./components/Aman/Cruise";
import CruiseName from "./components/Aman/CruiseName";
import ExistingCruises from "./components/Aman/ExistingCruises";
import CruiseType from "./components/Aman/CruiseType";
import BasalAreaFactor from "./components/Aman/BasalAreaFactor";
import Sweep from "./components/Aman/Sweep";
import SpeciesPole from "./components/Aman/SpeciesPole";
import Pole from "./components/Aman/Pole";
import SmallSawlog from "./components/Aman/SmallSawlog";
import MediumSawlog from "./components/Aman/MediumSawlog";
import LargeSawlog from "./components/Aman/LargeSawlog";
import Plotdbh from "./components/Aman/Plotdbh";
import CanopyClosure from "./components/Aman/CanopyClosure";
import Organic from "./components/Aman/Organic";
import AdditionalVegetationNotes from "./components/Aman/AdditionalVegetationNotes";
import RenameCruise from './components/Aman/RenameCruise';
import CruiseDetails from './components/Aman/CruiseDetails'


export default class App extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <AppContainer/>;
  }
}

const AppStackNavigator = createStackNavigator({
  FlemingSENRS: FlemingSENRS,
  Cruise: Cruise,
  CruiseName : CruiseName,
  ExistingCruises : ExistingCruises,
  CruiseType : CruiseType,
  BasalAreaFactor : BasalAreaFactor,
  Sweep : Sweep,
  SpeciesPole : SpeciesPole,
  Pole :Pole,
  SmallSawlog : SmallSawlog,
  MediumSawlog :MediumSawlog,
  LargeSawlog :LargeSawlog,
  Plotdbh:Plotdbh,
  CanopyClosure:CanopyClosure,
  Organic:Organic,
  AdditionalVegetationNotes:AdditionalVegetationNotes,
  RenameCruise:RenameCruise,
  CruiseDetails: CruiseDetails
});
const AppContainer = createAppContainer(AppStackNavigator);
const styles = StyleSheet.create({
  
});
