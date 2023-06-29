import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import MapView, {Marker, Polyline} from "react-native-maps";
import {useNavigation} from "@react-navigation/native";
import MapViewDirections from "react-native-maps-directions";
import { useRoute } from "@react-navigation/native";
import SelectVehicle from "../../components/search_view/SelectVehicle";

const ServiceView = (props) => {
    const route = useRoute();

    const [origin, setOrigin] = useState({
        latitude: route.params.from.data.geometry.location.lat,
        longitude: route.params.from.data.geometry.location.lng,
    });

    const [destination, setDestination] = useState({
        latitude: route.params.destination.details.geometry.location.lat,
        longitude: route.params.destination.details.geometry.location.lng,
    });
    
    const goToConfirmAcarreo = () => {
        console.warn("Acarreo confirmado")
    }

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
                <Marker
                    draggable
                    coordinate={destination}
                    onDragEnd={(direction) =>
                        setDestination(direction.nativeEvent.coordinate)
                    }
                />
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={"AIzaSyC3VLG-BkkeDV55eJXnzivqPTN1b2DQBUo"}
                    strokeColor="black"
                    strokeWidth={6}
                />
            </MapView>
            <SelectVehicle navigateTo={goToConfirmAcarreo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    map: {
        width: "100%",
        height: "50%",
    },
});

export default ServiceView;
