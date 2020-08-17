import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  TouchableHighlight,
  Fragment,
  Alert
} from "react-native";
import { Formik } from "formik";
import { Entypo } from "@expo/vector-icons";
import * as yup from "yup";

export default function App() {
  const [firstname, setfirstname] = useState("");
  return (
    <View style={{ alignItems: "center", top: 200 }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email()
            .required(),
          password: yup
            .string()
            .min(6)
            .required(),
        })}
      >
        {({
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldTouched,
          touched,
          isValid,
        }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              value={values.email}
              keyboardType="email-address"
              placeholder="Email Address"
            />
            {touched.email && errors.email && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.email}</Text>
            )}
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              value={values.password}
              placeholder="password here"
              keyboardAppearance="default"
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.password}
              </Text>
            )}
            <Button onPress={handleSubmit} disabled={!isValid} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({});
// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// export default function App() {
//   return (
//     <View>
//       <Text></Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

// a game to see who taps faster ...different count for that one

// <View>
//   <TextInput
//   style={{ height: 40, borderBottomColor: 'red', borderWidth: 1,justifyContent:"center",alignItems:"center",top:100 }}
//   placeholder="Your Name"
//   onChangeText={text => setfirstname(text)}
//       maxLength={10}
//       clearButtonMode="always"

// />kjl
// <Text>{firstname}</Text>
// </View>

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView } from "react-native";
// // import {
// //   useDimensions,
// //   useDeviceOrientation,
// // } from "@react-native-community/hooks";
// import WelcomeScreen from "./app/screens/welcomescreen";
// // import Apptext from "./app/components/AppText";
// import AppButton from "./app/components/appbutton";

// import Card from "./app/components/AppCard";
// // import List from "./app/screens/listingdetails";
// import ListItem from "./app/components/ListItem";
// import Messagescreen from "./app/screens/messagescreen";
// // import { AntDesign } from '@expo/vector-icons';
// // import Constants from 'expo-constants';
// import input from './app/components/input';
//  import FlatListDemo from './app/components/listflat';

// export default function App() {

//   // console.log(Constants);
//   // useDimensions.console.log();
//   // console.log(useDimensions());
//   // console.log(useDeviceOrientation());
//   // const {landscape} =useDeviceOrientation();
//   return (

//     // <messagescreen />
//     // <View>

//     // <List ix={"https://images.unsplash.com/photo-1520183802803-06f731a2059f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}
//     // ></List>
//     // <Listitem title="hey this is something!!yujyyja" subtitle="subtuasksnfkjds" image={"https:images.unsplash.com/photo-1520183802803-06f731a2059f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"} />
//     // </View>
//     // <View style={{backgroundColor:'#f8f4f4',padding:20,paddingTop:100 }}>
//     //   <Card
//     //   title="Red Jacket For Sale"
//     //   subtitle="$100"
//     //   image={"https://images.unsplash.com/photo-1520183802803-06f731a2059f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}
//     //       ></Card>
//     // </View>
//     // <FlatListDemo />
// <Messagescreen />

// // {/* <WelcomeScreen /> */}

//     );
//   }

//   // <View style={{alignItems:"center",flex:1,backgroundColor:"whitesmoke",justifyContent:"center",paddingVertical:20}}>
//   //   <View style={{backgroundColor:"#fff",width:"90%",height:'30%',flex:0.5,borderRadius:20,elevation:20}} >
//   //     <Image style={{borderTopLeftRadius:20,borderTopRightRadius:30}} source={{ height:"80%",width:"100%",uri:"https://images.unsplash.com/photo-1588588256702-3441828c6d56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}} />
//   //     <Text>Red Jacket For Sale!</Text>
//   //     </View>

//   // </View>
// //   <View style={{alignItems:"center",flex:1,justifyContent:"center"}}>
// //     <AntDesign name="upcircleo" size={100} color="dodgerblue" />
// // <Apptext>This is just for testing</Apptext>
// // <AntDesign name="downcircleo" size={100} color="darkviolet"/>
// // </View>
//   //  <View style={{flex:1}}>
// //    <ImageBackground style={{
// //     flex: 9}}  resizeMode='cover' source={{ width: '100%',
// //     height: '100%',uri:"https://images.unsplash.com/photo-1556593825-c11de986cb0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}></ImageBackground>
// //     <View style={{backgroundColor:"#F1948A",flex:1}}/>
// //     <View style={{backgroundColor:"#17A589",flex:1}}/>

// //  </View>

// // <View style={{height: landscape ?"100%":"30%",width:"100%",backgroundColor:'dodgerblue'}}>
// //   <Text>this is a text</Text>
// // </View>
// //   <View >
// //  <Image  source={{ height:"90%",width:"100%",uri:"https://images.unsplash.com/photo-1556593825-c11de986cb0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}/>
// // <View style={{backgroundColor:"#F1948A",flex:1}}/>
// // <View style={{backgroundColor:"#17A589",flex:1}}/>

// //   </View>

// // <View style={{backgroundColor: "#fff",flex:1,flexDirection:'row', // horizontal
// // justifyContent:'center', //main
// // alignItems:'center' //column
// // }}>
// // <View style={{backgroundColor: "gold",width:100,height:100}} />
// // <View style={{backgroundColor: "cyan",width:100,height:100}} />
// // <View style={{backgroundColor: "tomato",width:100,height:100}} />
// // <View style={{backgroundColor: "dodgerblue",width:100,height:100}} />

// // </View>
