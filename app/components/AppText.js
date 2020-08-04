import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

//this file is created for the consistency of text across whole the program so we don't have to rewrite styles all over again

 function Apptext({children}) {
    return (
            <Text style={styles.text}>{children}</Text>       // this is necessary when directly modifying a custom property
    
    )
}

const styles = StyleSheet.create({
    text:{
        color:"tomato",
            ...Platform.select({          //select method returns an object so we have to extend by using three dots by spreading the objects
                ios:{
                    fontFamily:'Avenir',
                    fontSize:20
                },
                android:{
                    fontFamily:'Roboto',
                    fontSize:18
                }
            })
}

})
export default Apptext;
