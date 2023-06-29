import React from "react";
import {
    Text,
    View,
    Animated,
    StyleSheet,
    TouchableHighlight,
} from "react-native";
import * as Haptics from "expo-haptics";
import Colors from "../../constants/Colors";

const GetStartedButton = ({title, navigateTo }) => {
    
    const animatedValue = new Animated.Value(1);

    const onPressIn = () => {
        Animated.spring(animatedValue, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };
    
    const onPressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    
    const animatedStyle = () => {
        transform = [{scale: animatedValue}];
    };
    
    return (
        <TouchableHighlight 
            style={[styles.container, animatedStyle]}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={navigateTo}
        >
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "85%",
        borderRadius: 8,
        marginVertical: 15,
    },
    button: {
        width: "100%",
        height: 57,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.acarreAppLogo,
        borderRadius: 10,
    },
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 16
    }
});
export default GetStartedButton;
