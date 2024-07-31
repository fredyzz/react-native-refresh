import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { InfoIcon } from "./Icons";

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
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="bg-black"
    >
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>
      <Link asChild href="/about">
        <Pressable className="mb-4">
          <InfoIcon />
        </Pressable>
      </Link>
      {games.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
