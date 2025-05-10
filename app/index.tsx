import { Redirect } from "expo-router"
import { isAuthenticated } from "@/utils/authUtils"
import {useEffect, useState} from "react";
import {ActivityIndicator, View} from "react-native";

export default function Index() {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        isAuthenticated().then(value => (setAuthenticated(value)));
    })

    if (authenticated === null) {
       return (
           <View className="flex flex-1 justify-center items-center">
               <ActivityIndicator size="large"/>
           </View>
        );
    }

    return authenticated ? <Redirect href="/home" /> : <Redirect href="/sign-in" />
}
