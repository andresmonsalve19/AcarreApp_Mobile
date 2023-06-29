import React from "react";
import {StyleSheet, Text, View, Image, ScrollView} from "react-native";
import Colors from "../../constants/Colors";
import CustomTitle from "../../components/CustomTitle";
import GetStartedButton from "../../components/home/GetStartedButton";

const image = require("../../../assets/acarreapp_icon.png");

export default function HomeScreen({navigation}) {
    const goToRequestAcarreo = () => {
        navigation.navigate("Contrata");
    };

    return (
        <ScrollView contentContainerStyle={{alignItems: "center"}}>
            <Image style={styles.logo} resizeMode="contain" source={image} />
            <CustomTitle title="Bienvenido a AcarreApp!" />
            <GetStartedButton navigateTo={goToRequestAcarreo} title="Comenzar" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    logo: {
        marginTop: 80,
        height: 150,
        width: "70%",
        maxWidth: 300,
        maxHeight: 300,
    },
});
