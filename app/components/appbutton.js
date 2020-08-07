import React,{ useState } from 'react';
import {View, Text,StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import colors from "../config/colors";



 function AppButton({title,onPress,color="primary"}) {
    return (
        <TouchableOpacity style={[styles.butto,{backgroundColor:colors[color]}]} onPress={onPress}> 
        <View style={{alignItems:"center"}}>
            <Text style={styles.text}>{title}</Text>
            </View>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    butto:{
        backgroundColor:"#fc5c65",
        borderRadius:25,
        justifyContent:'center',
        alignContent:'center',
        elevation:20,
        padding:15,
        width:'100%',
        marginVertical:10

         
       
    },
    text:{

        color:colors.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold',
    }
});

export default AppButton;
/*borderRadius:25,
flex:1,
justifyContent:'center',
alignItems:'center',
padding:'15',
width:'100%',
height:'20%',
position:'relative' */