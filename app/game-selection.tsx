import {View, Text} from 'react-native'
import React from 'react'
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";

const GameSelection = () => {
    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

            <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-6xl font-normal tracking-widest uppercase text-white">Selezione</Text>
                        <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">Giochi</Text>
                    </View>
                </View>

                <View className="items-center gap-4">
                    {/* Card */}
                    <View className="border rounded-xl bg-neutral-100 p-4 w-3/4 h-48">
                        <Text className="text-2xl font-bold text-black">Gioco Visivo</Text>
                        <Text className="text-md text-black mt-2"></Text>
                        <CustomButton title="Giochiamo!" className="text-center" textStyle="text-black tracking-widest" />
                    </View>
                </View>

            </View>
        </Background>
    )
}
export default GameSelection