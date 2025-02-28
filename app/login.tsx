import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Navigate to home.tsx when login button is pressed
    router.push('./home');
  };

  return (
    <SafeAreaView className="flex flex-col align-center h-screen mx-12">
      {/* Title */}
      <View className="flex flex-col justify-center items-left my-10">
        <View className="gap-y-2">
          <Text className="text-4xl font-normal tracking-wide uppercase">Benvenuto su</Text>
          <Text className="text-6xl font-extrabold tracking-widest uppercase">Neura</Text>
        </View>
      </View>

      {/* Login field */}
      <View className="flex flex-col justify-center items-left my-8 gap-y-3.5">
        <View>
          <Text className="text-3xl font-normal tracking-wide uppercase mx-2">Accedi</Text>
        </View>

        <View className="border rounded-xl bg-neutral-100 px-3 ">
          <TextInput placeholder="email" />
        </View>

        <View className="border rounded-xl bg-neutral-100 px-3 ">
          <TextInput placeholder="password" />
        </View>

        <Link className="text-md text-right font-normal tracking-wide uppercase underline" href="/">
          Password dimenticata?
        </Link>

        <TouchableOpacity
          className="bg-black rounded-[20px] px-[29px] py-[9px] shadow-black elevation-xl self-start"
          onPress={handleLogin} // Call the handleLogin function when the button is pressed
        >
          <Text className="text-white font-bold uppercase tracking-widest">Login</Text>
        </TouchableOpacity>
      </View>

      <View className="flex flex-col bg-black h-[1.5px]" />

      <View className="flex flex-col justify-center items-center my-3">
        <Text className="text-md tracking-wide uppercase ">
          login con altro
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
