import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'

import colors from "../config/colors";
import Apptext from "../components/AppText";


export default function Card({title,subtitle,image}) {
    return (
        <View style={styles.card}>
        <Image style={styles.image}  source={{uri:image}} />
        <View style={styles.container}>
        <Apptext style={styles.title}>{title}</Apptext>
        <Apptext style={styles.subtitle}>{subtitle}</Apptext>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({

    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow:'hidden',
        //this hides any changes that are overflowing from the prescribed position
        elevation:20
    },
    image:{
        width:'100%',
        height:200,
    },
    container:{
        padding:20
    },
    title:{
        marginBottom:7
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:"bold"
    }
})
