import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function LoadingComponent() {
    return (
        <View className="bg-white justify-center items-center mt-5 rounded-lg">
            <LottieView
                source={require("@/assets/animations/loading-animation.json")} // Sostituisci con il percorso della tua animazione Lottie
                autoPlay
                loop
                style={styles.animation}
            />
            <Text className="my-1 text-lg font-bold">Caricamento...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    animation: {
        width: 150,
        height: 150,
    }
});
