import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          headerTitle: id,
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-white">{id} Game detail</Text>
        <Link href="/" className="text-blue-500">
          <Text className="text-white">Back</Text>
        </Link>
      </View>
    </Screen>
  );
}
