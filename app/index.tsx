import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css"
import { Text, View } from "react-native";
import { FlatList } from "react-native";
// import {offer} from "@/constants";

 
export default function index() {
  return (
    <SafeAreaView  className="flex-1 items-center justify-center bg-blue-100">
      <Text className="text-4xl font-bold text-black-500">
        P SWYOM SANJOG
      </Text>
    </SafeAreaView>
  );
}