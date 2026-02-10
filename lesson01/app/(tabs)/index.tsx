import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable onPress={() => router.push("/profile")}>
        <Text>Go to Profile</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/modal")}>
        <Text>Open Modal</Text>
      </Pressable>
    </View>
  );
}
