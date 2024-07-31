import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Screen } from "./Screen";

export default function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getLatestGames();
      setGames(games);
    };

    fetchGames();
  }, []);

  return (
    <Screen>
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
    </Screen>
  );
}
