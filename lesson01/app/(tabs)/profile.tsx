import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>

      <Pressable onPress={() => router.back()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
}
