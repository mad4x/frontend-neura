import {
    View,
    Text,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    Pressable
} from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import {router, useLocalSearchParams} from 'expo-router';
import { api } from "@/constants";
import {saveToken} from "@/utils/secureStorage";

const AccountCreation = () => {
    const { email, password } = useLocalSearchParams();
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [error, setError] = useState('');

    const handleCreateAccount = async () => {
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

        if (!first_name || !last_name || !birthDate) {
            setError('Tutti i campi sono obbligatori.');
            return;
        }

        if (!nameRegex.test(first_name)) {
            setError('Il nome può contenere solo lettere.');
            return;
        }

        if (!nameRegex.test(last_name)) {
            setError('Il cognome può contenere solo lettere.');
            return;
        }

        const response = api.post('/auth/register-patient/', {
            email,
            first_name,
            last_name,
            password,
            birth_date: birthDate.toLocaleDateString('it-IT')
        }).then(response => {
            console.log('Registrazione avvenuta', response.data);
            api.post('/auth/login/', {
                email,
                password
            })
                .then(async response => {
                    console.log('login avvenuto', response.data);
                    await saveToken("jwtAccessToken", response.data.access);
                    await saveToken("jwtRefreshToken", response.data.refresh);
                    router.replace("/home")
                })
                .catch(error => {
                    console.error('Errore durante il login', error.response?.data || error.message);
                })
        })
            .catch (error => {
                console.error('Errore durante la registrazione', error.response?.data || error.message);
            })
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex flex-1">
                <Background className="flex flex-1 flex-col align-center h-screen -z-10">
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        className="justify-center"
                    >
                        <View className="flex flex-col z-10 mx-10 text-white">
                            <View className="flex flex-col justify-center items-left mt-16 mb-10">
                                <View className="gap-y-2">
                                    <Text className="text-4xl font-normal tracking-wide uppercase text-white">Crea il tuo account su</Text>
                                    <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">Neura</Text>
                                </View>
                            </View>

                            <View className="flex flex-col justify-center items-left my-8 gap-y-5">
                                <View>
                                    <Text className="text-3xl font-normal tracking-wide uppercase mx-2 text-white">Registrati</Text>
                                </View>

                                <View className="elevation-2xl rounded-xl bg-neutral-100 px-3 py-2.5">
                                    <TextInput
                                        placeholder="Nome"
                                        placeholderTextColor="#404040"
                                        className="color-black"
                                        value={first_name}
                                        onChangeText={setFirst_name}
                                    />
                                </View>

                                <View className="elevation-2xl rounded-xl bg-neutral-100 px-3 py-2.5">
                                    <TextInput
                                        placeholder="Cognome"
                                        placeholderTextColor="#404040"
                                        className="color-black"
                                        value={last_name}
                                        onChangeText={setLast_name}
                                    />
                                </View>


                                <View className="elevation-2xl rounded-xl bg-neutral-100 px-3 py-5">
                                    <Pressable onPress={() => setShowDatePicker(true)}>
                                        <Text style={{ color: birthDate ? 'black' : '#404040' }}>
                                            {birthDate ? birthDate.toLocaleDateString('it-IT') : 'Data di Nascita'}
                                        </Text>
                                    </Pressable>
                                </View>

                                {showDatePicker && (
                                    <DateTimePicker
                                        value={birthDate || new Date()}
                                        mode="date"
                                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                        onChange={(event, selectedDate) => {
                                            setShowDatePicker(false);
                                            if (selectedDate) {
                                                setBirthDate(selectedDate);
                                            }
                                        }}
                                        maximumDate={new Date()}
                                    />
                                )}




                                <CustomButton
                                    title="Crea"
                                    className="bg-black mt-5 px-10 py-3 self-start"
                                    textStyle="text-white tracking-widest"
                                    onPress={handleCreateAccount}
                                />

                                {error ? <Text className="text-red-500 mt-2">{error}</Text> : null}
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Background>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AccountCreation;
