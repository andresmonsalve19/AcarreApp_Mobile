import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'; 
import AvailableService from './AvailableService';
import carriers from "../../../data/example_data/carriers";

const AvailableServicesList = () => {
    return (
        <FlatList
            style={styles.container}
            data={carriers}
            renderItem={({item: carrier}) => <AvailableService {...carrier} />}
        />
    );
}; 

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderRadius: 10,
        width: "100%"
    },
}); 

export default AvailableServicesList;