import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchAcarreoMap from "../../components/search_acarreo/SearchAcarreoMap";
import WarningMessage from "../../components/search_acarreo/WarningMessage";
import SearchAddress from "../../components/search_acarreo/SearchAddress";

export default function SearchAcarreoScreen({ navigation }) {
  const goToSearch = () => {
    navigation.navigate("Seguimiento");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Mapa */}
      <SearchAcarreoMap />
      {/* Mensaje de alerta */}
      <WarningMessage />
      <SearchAddress navigateTo={goToSearch} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
