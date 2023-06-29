import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";
import MapView, {Marker} from "react-native-maps";
import {
    getCurrentPositionAsync,
    requestForegroundPermissionsAsync,
} from "expo-location";

const SearchAcarreoMap = ({height}) => {
    const [origin, setOrigin] = useState({
        latitude: 6.26119,
        longitude: -75.57886,
    });

    useEffect(() => {
        getLocationPermission();
    }, []);

    async function getLocationPermission() {
        let {status} = await requestForegroundPermissionsAsync();
        if (status !== "granted") {
            alert("Permiso Denegado - No será posible obtener su ubicación");
            return;
        }
        location = await getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };
        setOrigin(current);
    }
    
    return (
        <View style={[styles.container, {height: height}]}>
            <MapView
                style={styles.map}
                region={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker coordinate={origin} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.mapBackGround,
        justifyContent: "center",
        alignItems: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default SearchAcarreoMap;
