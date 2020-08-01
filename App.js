import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
  // useDimensions.console.log();
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  const {landscape} =useDeviceOrientation();
  return (
    // <View style={{height: landscape ?"100%":"30%",width:"100%",backgroundColor:'dodgerblue'}}>
    //   <Text>this is a text</Text>
    // </View>
 
    <View style={{backgroundColor: "#fff",flex:1,flexDirection:'row', // horizontal
    justifyContent:'center', //main
    alignItems:'center' //column
    }}>
    <View style={{backgroundColor: "gold",width:100,height:100}} />
    <View style={{backgroundColor: "cyan",width:100,height:100}} />
    <View style={{backgroundColor: "tomato",width:100,height:100}} />
    <View style={{backgroundColor: "dodgerblue",width:100,height:100}} />
    
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
