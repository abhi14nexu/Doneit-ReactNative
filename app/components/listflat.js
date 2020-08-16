import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList, RefreshControl,Image } from "react-native";

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
export default function listflat() {
  const [people, setPeople] = useState([
    { name: "shaunabhi", key: "1",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },
    { name: "dawn", key: "2",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },
    { name: "ronny", key: "3",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },
    { name: "honney", key: "4",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },
    { name: "money", key: "5",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },
    { name: "shauny", key: "6",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },
    { name: "shaunfskj", key: "11",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },

    { name: "shaunyfsd", key: "7",i:"https://images.unsplash.com/photo-1561016696-094e2baeab5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" },

    { name: "shaudsny", key: "8",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },

    { name: "shaudssny", key: "9",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },

    { name: "shausdsdssd", key: "10",i:"https://images.unsplash.com/photo-1504519733529-35b35d10eee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },
  ]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressBackgroundColor='gold'/> }
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ flex: 1 }}>{item.name}</Text>
            <Image source={{ height:200,width:300,uri:item.i }}/>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width:'100%',height:2,marginTop:10,position:"absolute",backgroundColor:"gray"}}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "dodgerblue",
    fontSize: 24,
  },
});