import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function ModalScreen() {
  return (
    <View>
      <Text>Modal Screen</Text>

      <Pressable onPress={() => router.back()}>
        <Text>Close Modal</Text>
      </Pressable>
    </View>
  );
}
