import { Stack } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Screen } from "../components/Screen";
import { getGameDetails } from "../lib/metacritic";
import Score from "../components/Score";

export default function Detail() {
  const [gameInfo, setGameInfo] = useState(null);
  const { gameSlug } = useLocalSearchParams();

  useEffect(() => {
    if (gameSlug) {
      const fetchGameInfo = async () => {
        const gameInfo = await getGameDetails(gameSlug);
        console.log(gameInfo);
        if (gameInfo) setGameInfo(gameInfo);
      };

      fetchGameInfo();
    }
  }, [gameSlug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          headerTitle: gameSlug,
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View className="flex-1 items-center justify-center bg-black">
        {gameInfo === null ? (
          <ActivityIndicator size="large" color="yellow" />
        ) : (
          <ScrollView>
            <View className="items-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white font-bold text-2xl mb-4">
                {gameInfo.title}
              </Text>
              <Text className="text-white font-bold text-l">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
