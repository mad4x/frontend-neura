import {View, Text} from 'react-native'
import React from 'react'
import Background from "@/components/Background";
import CustomCard from "@/components/CustomCard";
import {router} from "expo-router";

const SpeakingGameRules = () => {
    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

            <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-4xl font-normal tracking-wide uppercase text-white">Regole del</Text>
                        <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">Gioco</Text>
                    </View>
                </View>

                <View>
                    <CustomCard
                        title="Leggi la frase"
                        description={<Text>
                            1. Clicca "Avvia registrazione" {"\n"}
                            2. Leggi la frase {"\n"}
                            3. Clicca "Ferma registrazione" {"\n"}
                            4. Se sei soddisfatto fai "Invia" altrimenti rifai
                        </Text>}
                        descriptionStyle="text-white text-start text-xl"
                        buttonTitle="Iniziamo!"
                        onPress={() => {
                            router.push("/getAudio")
                        }}
                    />
                </View>
            </View>
        </Background>
    )
}
export default SpeakingGameRules
