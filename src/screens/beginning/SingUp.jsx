import React, {useState} from "react";
import {StyleSheet, View, Alert} from "react-native";
import Input from "../../components/Input";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import CustomTitle from "../../components/CustomTitle";
const logo = require("../../../assets/acarreapp_icon.png");
import axios from 'axios';

export default function SignupScreen({navigation}) {
    const [usernames, setUsernames] = useState("");
    const [fullName, setFullName] = useState("");
    const [documentType, setDocumentType] = useState("");
    const [documentId, setDocumentId] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const showAlert = () =>
        Alert.alert(
            'Cuenta creada correctamente',
            'Se envió un email de verificación',
            [
            {
                text: 'Ok',
                style: 'cancel',
            },
            ],
        );

    // /accounts/signup/
    const signup = async(fullName, usernames, documentId, email, phoneNumber, password, passwordConfirmation) => {
        try {
            const response = await axios.post('http://192.168.0.10:8000/api/accounts/signup/', 
            {   name: fullName, 
                email: email,
                username: usernames,
                password1: password,
                password2: passwordConfirmation,
                client: {
                    doc_type: "CC",
                    doc_number: documentId,
                    phone: phoneNumber,
                }
            });
            console.log(response.data);
            
            navigation.navigate("Signin");
            showAlert();
        } catch (error) {
            //console.log(error.data);
            const data = error.response.data;
            console.error("request data", data);
            console.error('Error de registro:', error);
            throw error;
        }
    }

    const onPressCreateAccountButton = () => {
        signup(fullName, usernames, documentId, email, phoneNumber, password, passwordConfirmation);
    };
    
    const onPressAlreadyHaveAnAccountButton = () => {
        navigation.navigate("Signin");
    };

    return (
        <View style={styles.container}>
            <CustomTitle title="Crear una cuenta" />
            <View style={styles.getData}>
                <Input
                    placeholder="Nombre de usuario"
                    value={usernames}
                    setValue={setUsernames}
                />
                <Input
                    placeholder="Nombre completo"
                    value={fullName}
                    setValue={setFullName}
                />
                
                {/* <Input
                    placeholder="Tipo de documento"
                    value={documentType}
                    setValue={setDocumentType}
                    defaultValue="CC"
                /> */}
                
                <Input
                    placeholder="Nro. Documento"
                    value={documentId}
                    setValue={setDocumentId}
                />
                <Input placeholder="Correo" value={email} setValue={setEmail} />
                <Input
                    placeholder="Teléfono"
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                />
                <Input
                    placeholder="Contraseña"
                    value={password}
                    setValue={setPassword}
                />
                <Input
                    placeholder="Confirmar Contraseña"
                    value={passwordConfirmation}
                    setValue={setPasswordConfirmation}
                />
            </View>
            <View style={styles.createAccountButton}>
                <CustomButton
                    onPress={onPressCreateAccountButton}
                    name="Crear cuenta"
                    type="PRIMARY"
                />
                <CustomButton
                    onPress={onPressAlreadyHaveAnAccountButton}
                    name="Ya tienes una cuenta? Ingresa"
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
    createAccountButton: {
        width: "100%",
        marginTop: 32,
    },
    getData: {
        width: "100%",
        marginTop: 32,
    }
});
