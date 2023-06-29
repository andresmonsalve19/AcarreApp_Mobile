import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import serverDirection from "./server_direction";

const signin = async (username, password) => {
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
        console.error("Error de autenticación:", error);
        throw error;
    }
};

export default signin;
