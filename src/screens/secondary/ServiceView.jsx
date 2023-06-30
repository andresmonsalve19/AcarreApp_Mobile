import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import { useRoute } from "@react-navigation/native";
import NearToYouCarriers from "../../components/home/carriers_near/NearToYouCarriers";
import MapViewAcarreo from "../../components/search_view/MapViewAcarreo";

export let acarreoRoute;

const ServiceView = ({navigation}) => {
    const route = useRoute();
    acarreoRoute = route;
    
    return (
        <View style={styles.container}>
            <MapViewAcarreo route={route} height={400} />
            <NearToYouCarriers navigation={navigation} carriersNear={route.params.carriersNear} route={route} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    }
});

export default ServiceView;
