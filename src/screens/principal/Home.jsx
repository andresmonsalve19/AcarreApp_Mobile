import React from "react";
import {StyleSheet, Text, View, Image, ScrollView} from "react-native";
import Colors from "../../constants/Colors";
import CustomTitle from "../../components/CustomTitle";
import GetStartedButton from "../../components/home/GetStartedButton";
import LogoutButton from "../../components/home/LogoutButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const image = require("../../../assets/acarreapp_icon.png");

export default function HomeScreen({navigation}) {
    const goToRequestAcarreo = () => {
        navigation.navigate("Contrata");
    };

    const onPressLogOutButton = async() => {
        await AsyncStorage.removeItem('token');
        navigation.navigate("Signin");
    };

    return (
        <ScrollView contentContainerStyle={{alignItems: "center"}}>
            <Image style={styles.logo} resizeMode="contain" source={image} />
            <CustomTitle title="Bienvenido a AcarreApp!" />
            <GetStartedButton navigateTo={goToRequestAcarreo} title="Comenzar" />
            <LogoutButton title="Cerrar sesión" onPress={onPressLogOutButton} />
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
