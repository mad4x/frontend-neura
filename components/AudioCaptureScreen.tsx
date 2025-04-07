import React, { useState } from "react";
import { View, Text } from "react-native";
import AudioRecorder from "@/components/AudioRecorder";
import CustomButton from "@/components/CustomButton";
import { AudioCaptureScreenProps } from "@/types/type";

const AudioCaptureScreen: React.FC<AudioCaptureScreenProps> = ({refreshSentence}) => {
    const [audioUri, setAudioUri] = useState<string | null>(null);

    const handleRecordingFinished = (uri: string) => {
        setAudioUri(uri);
    };

    const handleInvia = () => {
        console.log("Inviando audio all'API:", audioUri);
        // qui fai la fetch o l'upload
    };

    const handleRipeti = () => {
        setAudioUri(null);
        refreshSentence();
    };

    return (
        <View className="items-center">
            {!audioUri ? (
                <AudioRecorder onRecordingFinished={handleRecordingFinished} />
            ) : (
                <View className="gap-y-4 my-8">
                    <Text className="text-white text-xl">Registrazione completata! Vuoi inviarla?</Text>
                    <CustomButton
                        title="✅ Invia"
                        className="bg-green-700 mt-10 py-4 px-10"
                        textStyle="text-white text-xl"
                        onPress={handleInvia}
                    />
                    <CustomButton
                        title="🔁 Rifai"
                        className="bg-red-700 mt-3 py-4 px-10"
                        textStyle="text-white text-xl"
                        onPress={handleRipeti}
                    />
                </View>
            )}
        </View>
    );
};

export default AudioCaptureScreen;
