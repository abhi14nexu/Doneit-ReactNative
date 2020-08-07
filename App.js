import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView } from "react-native";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/welcomescreen";
// import Apptext from "./app/components/AppText";
import AppButton from "./app/components/appbutton";

import Card from "./app/components/AppCard";
// import List from "./app/screens/listingdetails";
import Listitem from "./app/components/ListItem";
import messagescreen from "./app/screens/messagescreen";
// import { AntDesign } from '@expo/vector-icons'; 
import Constants from 'expo-constants';
 

export default function App() {

  console.log(Constants);
  // useDimensions.console.log();
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  // const {landscape} =useDeviceOrientation();
  return (

    // <messagescreen />
    // <View>
      
    // <List ix={"https://images.unsplash.com/photo-1520183802803-06f731a2059f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}
    // ></List>
    <Listitem title="motherfucin' titafsjbakjsbfl" subtitle="subtuasksnfkjds" image={"https:images.unsplash.com/photo-1520183802803-06f731a2059f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"} />
    // </View>
    // <View style={{backgroundColor:'#f8f4f4',padding:20,paddingTop:100 }}>
    //   <Card 
    //   title="Red Jacket For Sale"
    //   subtitle="$100"
    //   image={"https://images.unsplash.com/photo-1520183802803-06f731a2059f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}
    //       ></Card>
    // </View>





    );
  }
  
  
  // <View style={{alignItems:"center",flex:1,backgroundColor:"whitesmoke",justifyContent:"center",paddingVertical:20}}>
  //   <View style={{backgroundColor:"#fff",width:"90%",height:'30%',flex:0.5,borderRadius:20,elevation:20}} >
  //     <Image style={{borderTopLeftRadius:20,borderTopRightRadius:30}} source={{ height:"80%",width:"100%",uri:"https://images.unsplash.com/photo-1588588256702-3441828c6d56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}} />
  //     <Text>Red Jacket For Sale!</Text>
  //     </View>

  // </View>
//   <View style={{alignItems:"center",flex:1,justifyContent:"center"}}>
//     <AntDesign name="upcircleo" size={100} color="dodgerblue" />
// <Apptext>This is just for testing</Apptext>    
// <AntDesign name="downcircleo" size={100} color="darkviolet"/>
// </View>
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
