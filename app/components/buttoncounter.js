import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
export default function counter() {
  const [count,setcount] = useState(0);
  const onPress = () => setcount(prevCount=>prevCount+1)
  return (
    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <TouchableOpacity onPress={onPress}>
      <Entypo name="mail-with-circle" size={104} color="black" />
      </TouchableOpacity>
      <Text>{count}</Text>
    </View>
  )
}