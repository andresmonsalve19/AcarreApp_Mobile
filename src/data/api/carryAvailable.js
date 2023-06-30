import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import serverDirection from "./server_direction";

const carryAvailable = async (lat, long) => {
    try {
        let token = await AsyncStorage.getItem("token");
        let bearerToken = `Bearer ${token}`;
        let config = {
            headers: {
                Authorization: bearerToken,
                "content-type": "application/json",
            },
        };
        
        const response = await axios.get(
            `${serverDirection}/api/carriers/carry/availables/?lat=${lat}&long=${long}`, config
        );
        
        return response.data;
    } catch (error) {
        console.error("Error de autenticación:", error);
        throw error;
    }
};

export default carryAvailable;
