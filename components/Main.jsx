import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";

export default function Main() {
  const insets = useSafeAreaInsets();
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getLatestGames();
      setGames(games);
    };

    fetchGames();
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <View style={{marginBottom: 20}}>
            <Logo/>
        </View>
      {games.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
        />
      )}
    </View>
  );
}
