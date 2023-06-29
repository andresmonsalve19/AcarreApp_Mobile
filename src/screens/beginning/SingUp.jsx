import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import Input from "../../components/Input";
import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import CustomTitle from "../../components/CustomTitle";
import signup from "../../data/api/signup";
const logo = require("../../../assets/acarreapp_icon.png");

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
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );

    const onPressCreateAccountButton = () => {
        signup(
            fullName,
            usernames,
            documentId,
            email,
            phoneNumber,
            password,
            passwordConfirmation
        );
        navigation.navigate("Signin");
        showAlert;
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
    },
});
