import {View, Text, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform} from 'react-native';
import React, { useState } from 'react';
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";

const AccountCreation = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [error, setError] = useState('');



    const handleCreateAccount = () => {
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;

        if (!firstName || !lastName || !birthDate) {
            setError('Tutti i campi sono obbligatori.');
            return;
        }

        if (!nameRegex.test(firstName)) {
            setError('Il nome può contenere solo lettere.');
            return;
        }

        if (!nameRegex.test(lastName)) {
            setError('Il cognome può contenere solo lettere.');
            return;
        }

        if (!dateRegex.test(birthDate)) {
            setError('La data di nascita deve essere nel formato gg/mm/aaaa.');
            return;
        }

        const [day, month, year] = birthDate.split('/').map(Number);
        const birthDateObj = new Date(year, month - 1, day);

        if (
            birthDateObj.getDate() !== day ||
            birthDateObj.getMonth() !== month - 1 ||
            birthDateObj.getFullYear() !== year
        ) {
            setError('La data di nascita non è valida.');
            return;
        }

        setError('');

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
                                {/* Title */}
                                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                                    <View className="gap-y-2">
                                        <Text className="text-4xl font-normal tracking-wide uppercase text-white">Crea il tuo account su</Text>
                                        <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">Neura</Text>
                                    </View>
                                </View>

                                {/* Sign-in fields */}
                                <View className="flex flex-col justify-center items-left my-8 gap-y-3.5">
                                    <View>
                                        <Text className="text-3xl font-normal tracking-wide uppercase mx-2 text-white">Registrati</Text>
                                    </View>

                                    <View className="border rounded-xl bg-neutral-100 px-3 py-3">
                                        <TextInput
                                            placeholder="Nome"
                                            placeholderTextColor="#404040"
                                            className="color-black"
                                            value={firstName}
                                            onChangeText={setFirstName}
                                        />
                                    </View>

                                    <View className="border rounded-xl bg-neutral-100 px-3 py-3">
                                        <TextInput
                                            placeholder="Cognome"
                                            placeholderTextColor="#404040"
                                            className="color-black"
                                            value={lastName}
                                            onChangeText={setLastName}
                                        />
                                    </View>

                                    <View className="border rounded-xl bg-neutral-100 px-3 py-3">
                                        <TextInput
                                            placeholder="Data Di Nascita (gg/mm/aaaa)"
                                            placeholderTextColor="#404040"
                                            className="color-black"
                                            textContentType="birthdate"
                                            value={birthDate}
                                            onChangeText={setBirthDate}
                                        />
                                    </View>

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