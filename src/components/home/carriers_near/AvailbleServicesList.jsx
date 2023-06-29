import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'; 
import AvailableService from './AvailableService';

const AvailableServicesList = ({carriersNear}) => {
    
    return (
        <FlatList
            style={styles.container}
            data={carriersNear}
            renderItem={({item: carrier}) => (
                <AvailableService {...carrier} />
            )}
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