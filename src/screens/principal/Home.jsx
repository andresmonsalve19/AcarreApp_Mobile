import React from "react";
import {StyleSheet, Text, View, Image, ScrollView} from "react-native";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/GetStartedButton";
import CustomTitle from "../../components/CustomTitle";
import GetStartedButton from "../../components/GetStartedButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

const image = require("../../../assets/acarreapp_icon.png");

export default function HomeScreen({navigation}) {
    const onPressGetStartButton = () => {
        navigation.navigate("Contrata");
    };

    const onPressLogOutButton = async() => {
        await AsyncStorage.removeItem('token');
        navigation.navigate("Signin");
    };

    return (
            <ScrollView contentContainerStyle={{alignItems: "center"}}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={image}
                />
                <CustomTitle title="Bienvenido a AcarreApp!" />
                <GetStartedButton title="Comenzar" navigateTo={onPressGetStartButton} />
                <GetStartedButton title="Cerrar sesión" navigateTo={onPressLogOutButton} />
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start"
    },
    logo: {
        marginTop: 80,
        height: 150,
        width: "70%",
        maxWidth: 300,
        maxHeight: 300,
    },
});
