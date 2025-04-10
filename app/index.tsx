import { View } from "react-native";
import {Redirect} from "expo-router";

export default function Index() {
  return (
    <View>
      <Redirect href="/getAudio"></Redirect>
    </View>
  );
}
