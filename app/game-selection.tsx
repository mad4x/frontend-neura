import {View, Text, Image} from 'react-native'
import React from 'react'
import Background from "@/components/Background";
import CustomCard from "@/components/CustomCard";
import {icons} from "@/constants";

const GameSelection = () => {
    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

            <View className="flex flex-col z-10 mx-10 text-white">

                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-6xl font-normal tracking-widest uppercase text-white">Selezione</Text>
                        <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">Giochi</Text>
                    </View>
                </View>

                <View className="items-center align-items gap-4">
                    <CustomCard
                    title={"Ripeti La Frase!"}
                    description={"Un gioco di memoria e attenzione: ascolta una frase e ripetila esattamente.\n " +
                        "Sembra facile, ma diventa sempre più difficile! Allena la mente e sfida i tuoi riflessi verbali."}
                    buttonTitle={"Giochiamo!"}
                    iconRight={<Image source={icons.lips} className="w-auto h-auto"/>}
                    onPress={() => {console.log("bottone cliccato")}}
                    />
                </View>
            </View>

        </Background>
    )
}
export default GameSelection