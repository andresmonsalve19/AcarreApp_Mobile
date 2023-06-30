import axios from "axios";
import serverDirection from "./server_direction";
import { Alert } from "react-native";

// /accounts/signup/
const signup = async (
    fullName,
    usernames,
    documentId,
    email,
    phoneNumber,
    password,
    passwordConfirmation
) => {
    const showAlert = (title, text) =>
        Alert.alert(
            title,
            text,
            [
            {
                text: 'Ok',
                style: 'cancel',
            },
            ],
        );

    try {
        const response = await axios.post(
            `${serverDirection}/api/accounts/signup/`,
            {
                name: fullName,
                email: email,
                username: usernames,
                password1: password,
                password2: passwordConfirmation,
                client: {
                    doc_type: "CC",
                    doc_number: documentId,
                    phone: phoneNumber,
                },
            }
        );
        console.log(response.data);
        navigation.navigate("Signin");
        showAlert('Cuenta creada correctamente', 'Se envió un email de verificación');
    } catch (error) {
        //console.log(error.data);
        const data = error.response.data;
        console.error("request data", data);
        showAlert('Error al crear la cuenta', 'Verifica los datos ingresados');
        console.error("Error de registro:", error);
        throw error;
    }
};

export default signup