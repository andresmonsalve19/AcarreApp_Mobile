import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native'; 
import MapView, {Marker, Polyline} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_API_KEY = "AIzaSyC3VLG-BkkeDV55eJXnzivqPTN1b2DQBUo";

const MapViewAcarreo = ({route, height}) => {
    const [origin, setOrigin] = useState({
        latitude: route.params.from.details.geometry.location.lat,
        longitude: route.params.from.details.geometry.location.lng,
    });

    const [destination, setDestination] = useState({
        latitude: route.params.destination.details.geometry.location.lat,
        longitude: route.params.destination.details.geometry.location.lng,
    });
    
    return (
        <View style={styles.container}>
            <MapView
                style={[styles.map, {height: height}]}
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
                    apikey={GOOGLE_API_KEY}
                    strokeColor="black"
                    strokeWidth={6}
                />
            </MapView>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    },
    map: {
        width: "100%",
    },
}); 

export default MapViewAcarreo;