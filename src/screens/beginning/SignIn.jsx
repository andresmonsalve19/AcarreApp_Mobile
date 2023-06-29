import React, {useState} from "react";
import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
} from "react-native";
import Input from "../../components/Input";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
const logo = require("../../../assets/acarreapp_icon.png");
import axios from 'axios';
//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignInScreen({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        const response = await fetch('http://192.168.0.10:8000/api/token/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            "username": "user1",
            "password": "user1user1"
          },
        });
      
        try { 
          const data = await response.json();
          if(data != null){
            console.log(JSON.Parse(data));
          }
          const accessToken = data.access;
          // Guardar el token de acceso en AsyncStorage o en el lugar de tu elección
          console.log('Token de acceso:', accessToken);
          navigation.navigate("Principal");
        } catch (error) {
          console.log('Error al autenticar', error);
        }
      };
      

    const {height} = useWindowDimensions();

    const onPressSingInButton = () => {
        login();
    };

    const onPressForgotPasswordButton = () => {
        console.warn("Olvidó su contraseña");
    };

    const onPressSingUpButton = () => {
        navigation.navigate("Signup");
    };

    return (
        <View style={styles.container}>
            <Image
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
                source={logo}
            />
            <Input
                placeholder="Usuario"
                value={username}
                setValue={setUsername}
            />
            <Input
                placeholder="Contraseña"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomButton
                onPress={onPressSingInButton}
                name="Iniciar Sesion"
                type="PRIMARY"
            />
            <CustomButton
                onPress={onPressForgotPasswordButton}
                name="Olvidó su contraseña?"
                type="TERTIARY"
            />
            <View style={styles.signup}>
                <CustomButton
                    onPress={onPressSingUpButton}
                    name="No tienes una cuenta? Crea una"
                    type="TERTIARY"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20,
        alignItems: "center",
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 300,
    },
    signup: {
        marginTop: 40,
    }
});
