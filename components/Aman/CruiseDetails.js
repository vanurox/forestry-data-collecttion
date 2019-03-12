import React, { Component } from 'react';
import {View, Text, ImageBackground, Button, StyleSheet, ScrollView,Dimensions} from 'react-native';
import BaseUrl from '../../helpers/BaseUrl';
import styles from './Styles'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


class CruiseDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            existingCruiseId:this.props.navigation.state.params.existingCruiseId, 
            tableCruiseHead:['CRUISE DETAILS'],
            tableCruiseTitle:[],
            tableCruiseData:[],

            tablePlotHead:['PLOT'],
            tablePlotTitle:[],
            tablePlotData:[],

            tableSweepHead:['SWEEP'],
            tableSweepTitle:[],
            tableSweepData:[]
        }
    }
    static navigationOptions = {
        header:null
    }
    fetchCruiseDetails=()=>{
        let data = new FormData;
        data.append('fulldetail',this.state.existingCruiseId);
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
            if(res.msg===1){
              if(res.cruise!==null){
                  Object.keys(res.cruise[0]).forEach(key=>{
                      this.state.tableCruiseTitle.push(key);
                      this.setState({
                          tableCruiseTitle:this.state.tableCruiseTitle
                      })
                      this.state.tableCruiseData.push(res.cruise[0][key]);
                      this.setState({
                          tableCruiseData:this.state.tableCruiseData
                      })
                  })
              }
              if(res.plots.length!==0){
                  res.plots.forEach(objectInPlot => {
                    Object.keys(objectInPlot).forEach(key=>{
                        this.state.tablePlotTitle.push(key);
                        this.setState({
                            tablePlotTitle:this.state.tablePlotTitle
                        })
                        this.state.tablePlotData.push(objectInPlot[key]);
                        this.setState({
                            tablePlotData:this.state.tablePlotData
                        })
                    })
                  })
                  
              }
              if(res.sweeps.length!==0){
                res.plots.forEach(objectInPlot => {
                    Object.keys(objectInPlot).forEach(key=>{
                        this.state.tableSweepTitle.push(key);
                        this.setState({
                            tableSweepTitle:this.state.tableSweepTitle
                        })
                        this.state.tableSweepData.push(objectInPlot[key]);
                        this.setState({
                            tableSweepData:this.state.tableSweepData
                        })
                    })
                  })
              }
            }
            else{
              Alert.alert('No record found')
            }
          })
          .catch((err)=>{
            console.log(`Error while fetching data from the database ${err}`);
          })
    }
    componentDidUpdate(){
        console.log(this.state.tableCruiseData,this.state.tableCruiseTitle)
    }
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground
                source={require("./bg.jpg")}
                style={styles.backgroundImage}
                >
                <ScrollView>
                    <View style={stylesForTable.container}>
                        <Table>
                        <Row data={this.state.tableCruiseHead} flexArr={[1, 1]} style={stylesForTable.head} textStyle={stylesForTable.text}/>
                        <TableWrapper style={stylesForTable.wrapper}>
                            <Col data={this.state.tableCruiseTitle} style={stylesForTable.title} heightArr={[28,28,28,28,28]} textStyle={stylesForTable.text}/>
                            <Col data={this.state.tableCruiseData} style={stylesForTable.title} heightArr={[28,28,28,28,28]} textStyle={stylesForTable.text}/>
                        </TableWrapper>
                        </Table>

                        <Table>
                        <Row data={this.state.tablePlotHead} flexArr={[1, 1]} style={stylesForTable.head} textStyle={stylesForTable.text}/>
                        <TableWrapper style={stylesForTable.wrapper}>
                            <Col data={this.state.tablePlotTitle} style={stylesForTable.title} textStyle={stylesForTable.text}/>
                            <Col data={this.state.tablePlotData} style={stylesForTable.title} textStyle={stylesForTable.text}/>
                        </TableWrapper>
                        </Table>

                        <Table>
                        <Row data={this.state.tableSweepHead} flexArr={[1, 1]} style={stylesForTable.head} textStyle={stylesForTable.text}/>
                        <TableWrapper style={stylesForTable.wrapper}>
                            <Col data={this.state.tableSweepTitle} style={stylesForTable.title} textStyle={stylesForTable.text}/>
                            <Col data={this.state.tableSweepData} style={stylesForTable.title} textStyle={stylesForTable.text}/>
                        </TableWrapper>
                        </Table>
                    </View>
                </ScrollView>
                </ImageBackground>
            </View>
        )
    }
    componentDidMount=()=>{
        this.fetchCruiseDetails();
    }
}

const stylesForTable = StyleSheet.create({
    container: { flex: 1, paddingTop: 30, backgroundColor: 'transparent', width:Dimensions.get('window').width},
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });

export default CruiseDetails;