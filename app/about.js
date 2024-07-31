import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function About() {
  return (
    <ScrollView className="bg-black">
      <Link asChild href="/">
        <Pressable className="mt-24">
          <Entypo name="home" size={24} color="white" />
        </Pressable>
      </Link>
      <Text className="text-white font-bold text-2xl mb-8">About</Text>
      <Text className="text-white mb-8">
        This is a simple game review app built with React Native. The app
        fetches data from the RAWG API and displays it in a list. The app is
        built with Tailwind CSS for styling and React Navigation for navigation.
      </Text>
      <Text className="text-white mb-8">
        This is a simple game review app built with React Native. The app
        fetches data from the RAWG API and displays it in a list. The app is
        built with Tailwind CSS for styling and React Navigation for navigation.
      </Text>
      <Text className="text-white mb-8">
        This is a simple game review app built with React Native. The app
        fetches data from the RAWG API and displays it in a list. The app is
        built with Tailwind CSS for styling and React Navigation for navigation.
      </Text>
      <Text className="text-white mb-8">
        This is a simple game review app built with React Native. The app
        fetches data from the RAWG API and displays it in a list. The app is
        built with Tailwind CSS for styling and React Navigation for navigation.
      </Text>
    </ScrollView>
  );
}
