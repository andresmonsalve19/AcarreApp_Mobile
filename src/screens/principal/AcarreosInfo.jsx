import React, {useState} from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import {useRoute} from "@react-navigation/native";
import {acarreoRoute} from "../secondary/ServiceView";
import MapViewAcarreo from "../../components/search_view/MapViewAcarreo";
import MapView, {Marker} from "react-native-maps";
import Resume from "../../components/acarreosInfoComponents/Resume";

export default function AcarreoInfoScreen({navigation}) {
    const [origin, setOrigin] = useState({
        latitude: 6.177969,
        longitude: -75.596061,
    });

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                }}
            >
                <Marker coordinate={origin} />
            </MapView>
            <Resume />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: StatusBar.currentHeight,
    },
    map: {
        width: "100%",
        height: "50%",
    },
});
