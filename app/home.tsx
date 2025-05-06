import { View, Text } from 'react-native';
import React, {Component} from 'react';
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import {Redirect, router} from "expo-router";

const Home = () => {
    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

            <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-6xl font-extrabold tracking-wide uppercase text-white">Home</Text>
                        <Text className="text-3xl font-extrabold tracking-wide uppercase text-white">Ciao,</Text>
                        <Text className="text-3xl font-extrabold tracking-wide uppercase text-white">Antoooo</Text>
                    </View>
                </View>

                <View className="items-center my-8 gap-y-10">
                    <CustomButton
                        title="Quiz - Giochi"
                        className="bg-blue-900 px-20 py-10 w-85 justify-center self-center"
                        textStyle="text-white text-xl tracking-widest"
                        onPress={
                            () => {
                                router.push("//gameChoice")
                            }
                        }
                    />
                    <CustomButton
                        title="Progressi"
                        className="bg-blue-900 px-20 py-10 w-80 justify-center self-center"
                        textStyle="text-white text-xl tracking-widest"
                        onPress={
                            () => {
                                router.push("/progress")
                            }
                        }
                    />
                    <CustomButton
                        title="Logout"
                        className="bg-red-500 px-20 py-10 w-80 justify-center self-center"
                        textStyle="text-white text-xl tracking-widest"
                        onPress={
                            () => {
                                if (confirm("Sei sicuro di voler uscire?")) {
                                    router.dismissAll();
                                    return <Redirect href="/login"/>
                                }
                            }
                        }
                    />
                </View>
            </View>

        </Background>
    );
};

export default Home;