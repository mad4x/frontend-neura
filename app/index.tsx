import { View } from "react-native";
import {Redirect} from "expo-router";

export default function Index() {
  return (
    <View>
      <Redirect href="/login"></Redirect>
    </View>
  );
}
