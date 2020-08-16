import React from "react";
import { View, Text, FlatList } from "react-native";
import ListItem from "./app/components/ListItem";

const message = [
  {
    id: "1",
    title: "First Item",
    subtitle: "second",
  },
  {
    id: "2",
    title: "First Item",
    subtitle: "second",
  },
  {
    id: "3",
    title: "First Item",
    subtitle: "second",
  },
];

export default function Messagescreen() {
  return (
    <FlatList
      data={message}
      keyExtractor={(abhi) => abhi.id.toString()}
      renderItem={({ item }) => (
        <ListItem title={item.title} subtitle={ item.subtitle}/>
      )}
    />
  );
}

// const styles = StyleSheet.create({});
