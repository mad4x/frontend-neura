import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function LoadingScreen() {
    return (
        <View className="bg-white flex flex-1 justify-center items-center z-50 mt-5">
            <LottieView
                source={require("@/assets/animations/loading-animation.json")} // Sostituisci con il percorso della tua animazione Lottie
                autoPlay
                loop
                style={styles.animation}
            />
            <Text className="my-1">Caricamento...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    animation: {
        width: 150,
        height: 150,
    },
    text: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
});
