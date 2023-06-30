import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import serverDirection from "./server_direction";
import { Alert } from "react-native";

const signin = async (username, password) => {

    const showAlert = () =>
        Alert.alert(
            'No se pudo iniciar sesión',
            'El usuario o contraseña es incorrecto, o el email no se ha verificado',
            [
            {
                text: 'Ok',
                style: 'cancel',
            },
            ],
        );

    try {
        const response = await axios.post(
            `${serverDirection}/api/accounts/login/`,
            {username: username, password: password}
        );
        const token = response.data.access;

        // Almacena el token en AsyncStorage u otra forma de almacenamiento persistente
        // para utilizarlo en solicitudes subsiguientes
        // Ejemplo con AsyncStorage:
        await AsyncStorage.setItem("token", token);
        return token;
    } catch (error) {
        showAlert();
        console.error("Error de autenticación:", error);
        throw error;
    }
};

export default signin;
