import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const WarningMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        No te olvides de revisar tus objetos al finalizar
      </Text>
      <Text style={styles.body}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        eligendi earum recusandae tempore tenetur asperiores exercitationem!
        Voluptatum explicabo mollitia dolorum magni molestiae? Non delectus
        labore, beatae nemo aperiam quis! Quaerat.
      </Text>
      <Text style={styles.learnMore}>Conoce más</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b80ff",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  body: {
    color: "#bed9ff",
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default WarningMessage;
