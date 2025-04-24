import {Text, View} from 'react-native'
import React from 'react'
import Background from "@/components/Background";

const RipetiLaFrase = () => {
    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

            <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">Ripeti la frase</Text>
                    </View>
                </View>
            </View>

        </Background>
    )
}
export default RipetiLaFrase
