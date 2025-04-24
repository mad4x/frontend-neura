import { Text, View, TextInput, Image } from "react-native";
import Background from "@/components/Background";
import { Link } from "@react-navigation/native";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const PasswordRecovery = () => {
    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">
            <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-4xl font-normal tracking-wide uppercase text-white">benvenuto su</Text>
                        <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">Neura</Text>
                    </View>
                </View>
                {/* Recupera Password field */}
                <View className="flex flex-col justify-center items-left my-8 gap-y-3.5">
                    <View>
                        <Text className="text-3xl font-normal tracking-wide uppercase mx-2 text-white">Recupera Password</Text>
                    </View>
                    <View className="border rounded-xl bg-neutral-100 px-3 py-1.5">
                        <TextInput 
                            placeholder="email"
                            placeholderTextColor="#888"
                            className="text-black"
                        />
                    </View>
                    <View className="rounded-2xl bg-[#133250] px-2 py-1 self-end">
                        <Text 
                            className="text-md text-right font-normal tracking-wide uppercase underline text-white"
                            onPress={() => {router.back()}}
                        >
                            Torna al login</Text>
                    </View>
                    <CustomButton 
                        title="Recupera Password" 
                        className="bg-black px-10 py-3 mt-2" 
                        textStyle="text-white tracking-widest"
                    />

                </View>
            </View>
        </Background>
    )
}
export default PasswordRecovery