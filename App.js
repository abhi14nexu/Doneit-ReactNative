import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/welcomescreen";
// import Apptext from "./app/components/AppText";
import AppButton from "./app/components/appbutton";

// import { AntDesign } from '@expo/vector-icons'; 


export default function App() {
  // useDimensions.console.log();
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  // const {landscape} =useDeviceOrientation();
  return (
    <WelcomeScreen>
    </WelcomeScreen>
    
  //   <View style={{alignItems:"center",flex:1,justifyContent:"center"}}>
  //     <AntDesign name="upcircleo" size={100} color="dodgerblue" />
  // <Apptext>This is just for testing</Apptext>    
  // <AntDesign name="downcircleo" size={100} color="darkviolet"/>
  // </View>
  );
}


//  <View style={{flex:1}}>
//    <ImageBackground style={{
//     flex: 9}}  resizeMode='cover' source={{ width: '100%',
//     height: '100%',uri:"https://images.unsplash.com/photo-1556593825-c11de986cb0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}></ImageBackground>
//     <View style={{backgroundColor:"#F1948A",flex:1}}/>
//     <View style={{backgroundColor:"#17A589",flex:1}}/>

//  </View>

// <View style={{height: landscape ?"100%":"30%",width:"100%",backgroundColor:'dodgerblue'}}>
//   <Text>this is a text</Text>
// </View>
//   <View >
//  <Image  source={{ height:"90%",width:"100%",uri:"https://images.unsplash.com/photo-1556593825-c11de986cb0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}/>
// <View style={{backgroundColor:"#F1948A",flex:1}}/>
// <View style={{backgroundColor:"#17A589",flex:1}}/>

//   </View>

// <View style={{backgroundColor: "#fff",flex:1,flexDirection:'row', // horizontal
// justifyContent:'center', //main
// alignItems:'center' //column
// }}>
// <View style={{backgroundColor: "gold",width:100,height:100}} />
// <View style={{backgroundColor: "cyan",width:100,height:100}} />
// <View style={{backgroundColor: "tomato",width:100,height:100}} />
// <View style={{backgroundColor: "dodgerblue",width:100,height:100}} />

// </View>
