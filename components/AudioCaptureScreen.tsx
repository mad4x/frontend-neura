import React, { useState } from "react";
import { View, Text } from "react-native";
import AudioRecorder from "@/components/AudioRecorder";
import CustomButton from "@/components/CustomButton";
import { AudioCaptureScreenProps } from "@/types/type";
import {api} from "@/constants";
import {getToken} from "@/utils/secureStorage";
import LoadingComponent from "@/components/LoadingComponent";
import {router} from "expo-router";
import useUserName from "@/hooks/useUserName";
import {refreshToken} from "@/utils/authUtils";

const AudioCaptureScreen: React.FC<AudioCaptureScreenProps> = ({refreshSentence}) => {
    const [audioUri, setAudioUri] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const userName = useUserName();

    const handleRecordingFinished = (uri: string) => {
        setAudioUri(uri);
    };

    const handleInvia = async () => {
        if (!audioUri) {
            console.log("Nessun audio da inviare.");
            return;
        }

        setIsSubmitting(true); // Imposta lo stato di caricamento
        console.log("Inviando audio all'API:", audioUri);

        // Crea un oggetto FormData per inviare il file
        const formData = new FormData();

        // Determina il tipo di file in base all'estensione dell'URI
        // Assumiamo che l'URI termini con l'estensione del file (es. ".mp3", ".m4a")
        const uriParts = audioUri.split('/');
        const fileName = uriParts[uriParts.length - 1];
        const fileParts = fileName.split('.');
        const fileType = fileParts[fileParts.length - 1];

        formData.append('name', userName);
        formData.append('audio_file', { // 'file' è il nome del campo che l'API si aspetta
            uri: audioUri,
            name: fileName,
            type: `audio/${fileType}`, // Es. 'audio/mp3' o 'audio/x-m4a' per .m4a
        } as any); // 'as any' è usato qui perché la definizione di tipo standard potrebbe non corrispondere perfettamente


        await refreshToken();
        const token = await getToken("jwtAccessToken");

        await api.post("/api/audio-create/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            // Puoi aggiungere un timeout se necessario
            // timeout: 10000, // 10 secondi
            // onUploadProgress: (progressEvent) => {
            //     if (progressEvent.total) {
            //        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            //        console.log(`Upload Progress: ${percentCompleted}%`);
            //     }
            // }
        }).then(response => {
            setIsSubmitting(false);
            return router.replace("/home");
        }).catch(error => {
            setIsSubmitting(false);
            console.log(error.message);
            return router.replace("/home");
        });
    }


    const handleRipeti = () => {
        setAudioUri(null);
        refreshSentence();
    };

    if (isSubmitting) {
        return (
            <View className="z-50 flex items-center justify-center rounded-xl">
                <LoadingComponent />
            </View>
        );
    }

    return (
        <View className="items-center">
            {!audioUri ? (
                <AudioRecorder onRecordingFinished={handleRecordingFinished} />
            ) : (
                <View className="gap-y-4 my-8 items-center">
                    <Text className="text-white text-xl">Registrazione completata! Vuoi inviarla?</Text>
                    <CustomButton
                        title="✅ Invia"
                        className="bg-green-700 mt-10 py-4 px-32"
                        textStyle="text-white text-xl"
                        onPress={handleInvia}
                    />
                    <CustomButton
                        title="🔁 Rifai"
                        className="bg-red-700 mt-3 py-4 px-32"
                        textStyle="text-white text-xl"
                        onPress={handleRipeti}
                    />
                </View>
            )}
        </View>
    );
};

export default AudioCaptureScreen;
