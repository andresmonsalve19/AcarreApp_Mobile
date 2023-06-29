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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignInScreen({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (username, password) => {
        try {
          const response = await axios.post('https://98cb-2800-e2-b680-f83-d943-7ea7-574b-a040.ngrok-free.app/api/token/', { username: username, password: password });
          const token = response.data.access;
      
          // Almacena el token en AsyncStorage u otra forma de almacenamiento persistente
          // para utilizarlo en solicitudes subsiguientes
          // Ejemplo con AsyncStorage:
          await AsyncStorage.setItem('token', token);
          navigation.navigate("Principal");
          return token;
        } catch (error) {
          console.error('Error de autenticación:', error);
          throw error;
        }
      };
      

    const {height} = useWindowDimensions();

    const onPressSingInButton = () => {
        login(username, password);
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
