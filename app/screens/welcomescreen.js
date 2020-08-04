import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
} from "react-native";
import AppButton from "../components/appbutton";

import colors from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
    blurRadius={3}
      style={styles.background}
      source={{
        width: "100%",
        height: "100%",
        uri:
          "https://images.unsplash.com/photo-1556593825-c11de986cb0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/desigual_monogram.png")}
        />
        <Text style={styles.textstyle}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttoncontainer}>
     <AppButton title="Login"/>
     <AppButton title="REgister" color="secondary" />
     </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    
  },
  buttoncontainer:{
      padding:20,
      width:"100%",
      
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute", //to make logo's position relative to image
    top: 70,
    alignItems: "center",
  },
  textstyle:{
      fontSize:23,
      fontWeight:"600",
      fontFamily:"Roboto",
      paddingTop:20,
      color:"white"
      

  }
});
export default WelcomeScreen;
