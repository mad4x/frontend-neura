import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from "@/components/Background";
import AudioCaptureScreen from "@/components/AudioCaptureScreen";

const frasi = [
    "Il sassolino canta una canzone al concerto del fiume.",
    "Sono stato al supermercato e ho comprato il latte e i biscotti.",
    "Porta a porta mi dice la torta mentre cerca di non essere mangiata.",
    "Faccia a faccia mi dice la pancia, che la fame non vuole affrontare."
]


const GetAudio = () => {

    const [frase, setFrase] = useState('');

    const generateSentence = () => {
        let randomIndex = frasi.indexOf(frase);
        while(randomIndex == frasi.lastIndexOf(frase)) {
            randomIndex = Math.floor(Math.random() * frasi.length);
            setFrase(frasi[randomIndex]);
        }
    };

    useEffect(() => {
        generateSentence();
    }, []);

    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

            <View className="z-10 my-16 mx-10 gap-y-4">
                <Text className="text-6xl font-normal tracking-wide uppercase text-white">Leggi la frase</Text>

                <View className="mt-2 mb-8">
                    <View className="bg-neutral-100 p-5 rounded-xl mb-8">
                        <Text className="text-blackr text-xl font-semibold">{frase}</Text>
                    </View>

                    <AudioCaptureScreen refreshSentence={generateSentence} />
                </View>
            </View>

        </Background>
    )
}
export default GetAudio
