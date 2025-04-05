import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import CustomButton from "@/components/CustomButton";

const AudioRecorder = () => {
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [audioUri, setAudioUri] = useState<string | null>(null);

    const startRecording = async () => {
        try {
            const { granted } = await Audio.requestPermissionsAsync();
            if (!granted) {
                alert("Permessi per il microfono negati!");
                return;
            }

            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            const newRecording = new Audio.Recording();
            await newRecording.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
            await newRecording.startAsync();
            setRecording(newRecording);
        } catch (error) {
            console.error("Errore nella registrazione:", error);
            Alert.alert("Errore", "Non è stato possibile avviare la registrazione.");
        }
    };

    const stopRecording = async () => {
        if (!recording) return;

        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();

        if (uri) {
            setAudioUri(uri);
            console.log("Audio salvato in:", uri);
        } else {
            Alert.alert("Errore", "URI non disponibile");
        }

        setRecording(null);
    };

    const inviaAllApi = async () => { console.log("inviaAllApi"); };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: recording ? "red" : "green" }]}
                onPress={recording ? stopRecording : startRecording}
            >
                <Text style={styles.buttonText}>
                    {recording ? "Ferma Registrazione" : "Avvia Registrazione"}
                </Text>
            </TouchableOpacity>

            {audioUri && (
                <View className="justify-center my-5">
                    <Text>Audio salvato in:</Text>
                    <Text selectable>{audioUri}</Text>
                    <CustomButton
                        title="Invia registrazione"
                        className="bg-blue-950"
                        textStyle="text-white"
                        onPress={() => inviaAllApi()}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default AudioRecorder;
