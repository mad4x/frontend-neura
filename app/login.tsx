import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Background from "@/components/Background";

const Login = () => {
  return (
    <Background>

      <View className="flex flex-row justify-center border m-5 gap-20">

        <View className="border">
          <Text className="text-6xl text-left">Benvenuti</Text>
        </View>
        <View className="border">
          <Text className="text-6xl text-right">su</Text>
        </View>

      </View>

    </Background>
  )
}
export default Login
