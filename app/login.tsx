import {View, Text, TextInput, Image, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React from 'react'
import {router} from "expo-router";
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import {icons} from "@/constants"

const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex flex-1">
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

          <View className="flex flex-col z-10 mx-10 text-white">
            {/* Title */}
            <View className="flex flex-col justify-center items-left mt-16 mb-10">
              <View className="gap-y-2">
                <Text className="text-4xl font-normal tracking-wide uppercase text-white">Benvenuto su</Text>
                <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">Neura</Text>
              </View>
            </View>

            {/* Login field */}
            <View className="flex flex-col justify-center items-left my-4 gap-y-3.5">

              <View>
                <Text className="text-3xl font-normal tracking-wide uppercase mx-2 text-white">Accedi</Text>
              </View>

              <View className="border rounded-xl bg-neutral-100 px-3 py-3">
                <TextInput placeholder="email" placeholderTextColor="#404040" className="text-black">
                </TextInput>
              </View>

              <View className="border rounded-xl bg-neutral-100 px-3 py-3">
                <TextInput placeholder="password" placeholderTextColor="#404040" className="text-black">
                </TextInput>
              </View>

              <View className="rounded-2xl bg-[#133250] px-2 py-1 self-end">
                <Text
                    className="text-md text-right font-normal tracking-wide uppercase underline text-white"
                    onPress={() => {}}
                >
                  Password dimenticata?
                </Text>
              </View>

              <CustomButton
                title="Login"
                className="bg-black px-10 py-3 self-start"
                textStyle="text-white tracking-widest"
              />

            </View>

            <View className="flex flex-col bg-black h-[1.5px]" />

            <View className="flex flex-col justify-center items-center my-3">
              <Text className="text-md tracking-wide uppercase text-black">
                login con altro
              </Text>

              <View className="flex flex-row justify-center items-center my-3 gap-x-10">

              <CustomButton
                title="Google"
                className="bg-white px-10 py-3"
                textStyle="text-black tracking-wide"
                IconLeft={<Image source={icons.google}
                className="w-5 h-5" />}
              />
              <CustomButton
                title="Spid"
                className="bg-blue-400 px-10 py-3"
              />

              </View>
            </View>

            <View className="flex flex-col bg-black h-[1.5px]" />

            <View className="items-center my-4">
              <Text className="text-md tracking-wide uppercase text-black">
                Non hai un account?
              </Text>

              <CustomButton
                title="Registrati"
                className="my-3 bg-black py-3 px-10"
                textStyle="text-white tracking-widest"
                onPress={() => router.push("/sign-in")}
              />
            </View>

          </View>
        </Background>
      </View>
    </TouchableWithoutFeedback>
  )
}
export default Login
