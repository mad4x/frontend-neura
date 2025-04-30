import { View, Text } from 'react-native';
import React from 'react';
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";

const Home = () => {
    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

            <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-6xl font-extrabold tracking-wide uppercase text-white">Home</Text>
                        <Text className="text-3xl font-extrabold tracking-wide uppercase text-white">Ciao!</Text>
                        <Text className="text-3xl font-extrabold tracking-wide uppercase text-white">Antoooo</Text>
                    </View>
                </View>

                <View className="items-center my-8 gap-y-10">
                    <CustomButton
                        title="Conversazione"
                        className="bg-blue-900 px-25 py-10 w-80 justify-center self-center"
                        textStyle="text-white text-xl tracking-widest"
                    />
                    <CustomButton
                        title="Quiz - Giochi"
                        className="bg-blue-900 px-20 py-10 w-85 justify-center self-center"
                        textStyle="text-white text-xl tracking-widest"
                    />
                    <CustomButton
                        title="Progressi"
                        className="bg-blue-300 px-20 py-10 w-80 justify-center self-center"
                        textStyle="text-white text-xl tracking-widest"
                    />
                </View>
            </View>

        </Background>
    );
};

export default Home;