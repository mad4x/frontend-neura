import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
        return passwordRegex.test(password);
    };

    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            setError('Tutti i campi sono obbligatori.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Email non valida.');
            return;
        }
        if (!validatePassword(password)) {
            setError('La password deve avere almeno 7 caratteri, una lettera maiuscola, un numero e un carattere speciale.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Le password non coincidono.');
            return;
        }
        setError('');
        router.push('/account-creation');
    };

    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">
            <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-4xl font-normal tracking-wide uppercase text-white">Registrati su</Text>
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
                            placeholder="email"
                            placeholderTextColor="#404040"
                            className="color-black"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View className="border rounded-xl bg-neutral-100 px-3 py-3">
                        <TextInput
                            placeholder="password"
                            placeholderTextColor="#404040"
                            className="color-black"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <View className="border rounded-xl bg-neutral-100 px-3 py-3">
                        <TextInput
                            placeholder="conferma password"
                            placeholderTextColor="#404040"
                            className="color-black"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>

                    <CustomButton
                        title="Registrati"
                        className="bg-black mt-5"
                        textStyle="text-white tracking-widest"
                        onPress={handleRegister}
                    />

                    {error ? <Text className="text-red-500 mt-2">{error}</Text> : null}

                    <Text
                        className="text-md text-right font-normal tracking-wide uppercase underline mt-4 color-black"
                        onPress={() => router.push('/login')}
                    >
                        Hai già un account? Accedi!
                    </Text>
                </View>
            </View>
        </Background>
    );
};

export default SignIn;