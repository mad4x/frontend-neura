import {View, Text} from 'react-native'
import React from 'react'
import Background from "@/components/Background";
import {LineChart} from "react-native-chart-kit";

const Progress = () => {
    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

            <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-6xl font-extrabold tracking-wide uppercase text-white">I tuoi</Text>
                        <Text className="text-3xl font-extrabold tracking-wide uppercase text-white">Progressi</Text>
                    </View>
                </View>

                <View className="items-center ">
                    <Text className="text-2xl font-bold text-white mb-6">Grafico dei Progressi</Text>
                    <LineChart
                        data={{
                            labels: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
                            datasets: [
                                {
                                    data: [20, 45, 28, 80, 99, 43, 50]
                                }
                            ]
                        }}
                        width={650} // Larghezza del grafico
                        height={350} // Altezza del grafico
                        yAxisLabel=""
                        yAxisSuffix="%"
                        chartConfig={{
                            backgroundColor: "#1E3A8A", // blue-950
                            backgroundGradientFrom: "#1E3A8A", // blue-950
                            backgroundGradientTo: "#1E3A8A", // blue-950
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // bianco
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // bianco
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>
            </View>
        </Background>
    )
}
export default Progress
