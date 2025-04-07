import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Audio } from "expo-av";
import CustomButton from "@/components/CustomButton";
import { AudioRecordingProps } from "@/types/type";

const AudioRecorder: React.FC<AudioRecordingProps> = ({ onRecordingFinished }) => {
    const [recording, setRecording] = useState<Audio.Recording | null>(null);

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
        if (uri) onRecordingFinished(uri);
        else Alert.alert("Errore", "URI non disponibile");
        setRecording(null);
    };

    return (
        <View className="items-center">
            <CustomButton
                title={recording ? "ferma registrazione" : "avvia registrazione"}
                onPress={recording ?
                    () => stopRecording() :
                    () => startRecording()}
                className={recording ? "bg-red-700 py-8 px-10" : "bg-green-700 py-8 px-10"}
                textStyle="text-white text-xl"
            />
        </View>
    );
};

export default AudioRecorder;
