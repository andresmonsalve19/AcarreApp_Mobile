import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'; 
import AvailableService from './AvailableService';
import Colors from '../../../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AvailableServicesList = ({carriersNear, selectedItemOut}) => {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? "#58D68D" : Colors.border;
        selectedItemOut(selectedId)
        return (
            <AvailableService
                props={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
            />
        );
    };
    
    return (
        <FlatList
            style={styles.container}
            data={carriersNear}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            extraData={selectedId}
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