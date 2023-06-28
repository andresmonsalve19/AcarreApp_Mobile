import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const SearchAcarreoMap = () => {
  return (
    <View style={styles.container}>
      <Text>I am map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: Colors.mapBackGround,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchAcarreoMap;
