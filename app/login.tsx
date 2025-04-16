import {View, Text, TextInput, Image} from 'react-native'
import React from 'react'
import {Link, router} from "expo-router";
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import {icons} from "@/constants"


const Login = () => {
  return (
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
        <View className="flex flex-col justify-center items-left my-8 gap-y-3.5">

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

          <Link className="text-md text-right font-normal tracking-wide uppercase underline text-white" href="/">Password dimenticata?</Link>

          <CustomButton title="Login" className="bg-black" textStyle="text-white tracking-widest"/>

          <Text
              className="text-md text-right font-normal tracking-wide uppercase underline mt-4 color-black"
              onPress={() => router.push('/sign-in')}
          >
            Non hai un account? Registrati!
          </Text>

        </View>

        <View className="flex flex-col bg-black h-[1.5px]" />

        <View className="flex flex-col justify-center items-center my-3">

          <Text className="text-md tracking-wide uppercase text-black">
            login con altro
          </Text>

          <View className="flex flex-row justify-center items-center mt-8 gap-x-14">

            <CustomButton title="Google" className="bg-white" textStyle="text-black tracking-wide" IconLeft={<Image source={icons.google} className="w-5 h-5" />} />
            <CustomButton title="Spid" className="bg-blue-400"/>

          </View>
        </View>



      </View>
    </Background>
  )
}
export default Login
