import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, StatusBar, TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Colors from "../../constants/Colors";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import PlacesSuggested from "../../components/search_adress/PlacesSuggested";
import GetStartedButton from "../../components/home/GetStartedButton";
import carryAvailable from "../../data/api/carryAvailable";

const SearchAddress = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerLargeTitle: true,
            headerTitle: "Selecciona tu destino",
        });
    }, [navigation]);

    const [from, setFrom] = useState(null);
    const [destination, setDestination] = useState(null);
    
    const goToServiceView = async () => {
        if (from && destination) {
            const carriersNear = await carryAvailable(
                from.details.geometry.location.lat,
                from.details.geometry.location.lng
            );
            navigation.navigate("RutaAcarreo", {from, destination, carriersNear});
        } else {
            alert("Por favor ingrese su dirección de destino");
        }
    };

    const homePlace = {
        description: "Home",
        geometry: {location: {lat: 6.177986, lng: -75.596059}},
    };

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder="De"
                suppressDefaultStyles
                enablePoweredByContainer={false}
                onPress={(data, details = null) => {
                    setFrom({data, details});
                }}
                styles={{
                    textInput: styles.textInput,
                    container: {
                        position: "absolute",
                        top: 5,
                        left: 10,
                        right: 10,
                    },
                    listView: {
                        position: "absolute",
                        top: 115,
                        marginHorizontal: 10,
                        backgroundColor: "#fff",
                        borderRadius: 10,
                    },
                    separator: {
                        backgroundColor: Colors.border,
                        height: 1,
                    },
                }}
                fetchDetails
                query={{
                    key: "AIzaSyC3VLG-BkkeDV55eJXnzivqPTN1b2DQBUo",
                    language: "es",
                    components: "country:co",
                }}
                renderRow={(data) => <PlacesSuggested data={data} />}
                predefinedPlaces={[homePlace]}
            />
            <GooglePlacesAutocomplete
                placeholder="Hacia"
                suppressDefaultStyles
                enablePoweredByContainer={false}
                styles={{
                    textInput: styles.textInput,
                    container: {
                        position: "absolute",
                        top: 60,
                        left: 10,
                        right: 10,
                    },
                    listView: {
                        position: "absolute",
                        top: 60,
                        marginHorizontal: 10,
                        backgroundColor: "#fff",
                        borderRadius: 10,
                    },
                    separator: {
                        backgroundColor: Colors.border,
                        height: 1,
                    },
                }}
                onPress={(data, details = null) => {
                    setDestination({data, details});
                }}
                fetchDetails
                query={{
                    key: "AIzaSyC3VLG-BkkeDV55eJXnzivqPTN1b2DQBUo",
                    language: "es",
                    components: "country:co",
                }}
                renderRow={(data) => <PlacesSuggested data={data} />}
            />
            <View style={styles.buton}>
                <GetStartedButton
                    title="Siguiente"
                    navigateTo={goToServiceView}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#eee",
        height: "100%",
        alignContent: "center",
        alignItems: "center",
    },
    textInput: {
        padding: 10,
        backgroundColor: "#fff",
        marginVertical: 5,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buton: {
        position: "absolute",
        top: 600,
        left: 40,
        right: 20,
        width: "100%",
    },
});

export default SearchAddress;
