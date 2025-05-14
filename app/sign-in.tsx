import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView
} from 'react-native'
import React, { useState } from 'react'
import { router } from "expo-router"
import Background from "@/components/Background"
import CustomButton from "@/components/CustomButton"
import { api, icons } from "@/constants"
import { saveToken } from "@/utils/secureStorage"

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  const handleLogin = () => {
    api.post('/auth/login/', {
      email,
      password
    })
        .then(async response => {
          console.log('login avvenuto', response.data);
          await saveToken("jwtAccessToken", response.data.access);
          await saveToken("jwtRefreshToken", response.data.refresh);
          setError("");
          router.replace("/home")
        })
        .catch(error => {
          if (error.response) {
            const status = error.response.status;
            const data = error.response.data;

            if (status === 401) {
              setError("Credenziali non valide. Riprova.");
            } else if (status === 500) {
              setError("Errore interno del server. Riprova più tardi.");
            } else {
              setError(data.message || "Si è verificato un errore. Riprova.");
            }
          } else {
            setError("Impossibile connettersi al server. Controlla la tua connessione.");
          }
        })
  }

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex flex-1">
          <Background className="flex flex-1 flex-col align-center h-screen -z-10">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="justify-center"
            >
              <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                  <View className="gap-y-2">
                    <Text className="text-4xl font-normal tracking-wide uppercase text-white">
                      Benvenuto su
                    </Text>
                    <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">
                      Neura
                    </Text>
                  </View>
                </View>

                {/* SignIn field */}
                <View className="flex flex-col justify-center items-left my-4 gap-y-3.5">
                  <Text className="text-3xl font-normal tracking-wide uppercase mx-2 text-white">
                    Accedi
                  </Text>

                  <View className="rounded-xl bg-neutral-100 px-3 py-3">
                    <TextInput
                        placeholder="email"
                        placeholderTextColor="#404040"
                        className="text-black"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                  </View>

                  <View className="rounded-xl bg-neutral-100 px-3 py-3">
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="#404040"
                        className="text-black"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                  </View>

                  <View className="rounded-2xl bg-white elevation-2xl px-2 py-1 self-end">
                    <Text
                        className="text-md text-right tracking-wide uppercase text-primary-dark font-semibold underline"
                        onPress={handleLogin}
                    >
                      Password dimenticata?
                    </Text>
                  </View>

                  <CustomButton
                      title="Accedi"
                      className="bg-black px-10 py-3 self-start"
                      textStyle="text-white tracking-widest"
                      onPress={handleLogin}
                  />

                  {error &&
                      <Text className="text-md tracking-wide text-red-600">{error}</Text>
                  }

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
                        IconLeft={
                          <Image source={icons.google} className="w-5 h-5" />
                        }
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
                      onPress={() => router.push("/sign-up")}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </Background>
        </View>
      </TouchableWithoutFeedback>
  )
}

export default SignIn
