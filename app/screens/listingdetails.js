import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'

import Apptext from '../components/AppText';
import colors from "../config/colors";


export default function List({ix}) {
    return (
        <View>
            <Image style={styles.image} source={{uri:ix}} />
            <View style={{padding:20}}>
            <Apptext style={styles.title}>Red Jacket For Sale </Apptext>
            <Apptext style={styles.price}>$100</Apptext>
            </View>
        </View>
    );
}

const styles= StyleSheet.create(
    {
   image:{
       height:300,
       width:"100%"
   },
   title:{
       fontSize:24,
       fontWeight:"500"
   },
   price:{
       color:colors.secondary,
       fontWeight:"bold",
       fontSize:20,
       marginVertical:10,

   }
    }
)
