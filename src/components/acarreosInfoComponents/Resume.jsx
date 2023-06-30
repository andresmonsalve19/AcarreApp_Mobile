import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 
import CarrierSelectedInfo from './CarrierSelectedInfo';
import GetStartedButton from '../home/GetStartedButton';
import Colors from '../../constants/Colors';

const Resume = () => {
    const onPressButton = () => {
        alert("Acarreo Cancelado")
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.acarreoOnGoing}>Acarreo en camino</Text>
            <View style={styles.arriveHour}>
                <Text style={styles.hour}>3:00 PM</Text>
                <Text style={styles.hour2}>Hora aproximada de llegada</Text>
            </View>
            <CarrierSelectedInfo />
            <Text style={styles.problemText}>¿Tienes algún inconveniente</Text>
            <GetStartedButton title="Cancelar Acarreo" navigateTo={onPressButton} />
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 10,
    },
    acarreoOnGoing: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 5,
    },
    arriveHour: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: "center"
    },
    problemText: {
        color: Colors.primary,
        marginTop: 20,
        marginBottom: 10
    },
    hour: {
        fontWeight: "bold",
        fontSize: 40,
    },
    hour2: {
        fontWeight: "bold",
        fontSize: 16,
    }
}); 

export default Resume;