import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

import Apptext from "../components/AppText";


export default function ListItem({title,subtitle,image }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image}source={{uri:image}} />
            <View>
           {/* //one view for row and another one for colum horizonal and then vertical */}
    <Apptext>{title}</Apptext>
    <Apptext>{subtitle}</Apptext>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"row",
        paddingVertical:50
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    }
})
