import { useEffect, useRef } from "react";
import { Animated, View, Text, Image, StyleSheet } from "react-native";
import Score from "./Score";

export default GameCard = ({ game }) => {
  return (
    <View
    key={game.slug}
    className={"flex-row mb-8 p-4 rounded-xl gap-4 bg-slate-800/10"}
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore={100} />
        <Text 
        className="mt-2 flex-shrink"
        style={styles.description}>{game.description.slice(0,100)}...</Text>
      </View>
    </View>
  );
};

export const AnimatedGameCard = ({ game, index }) => {
 const opacity = useRef(new Animated.Value(0)).current;

 useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
 }, [opacity, index]);

 return(
    <Animated.View key={game.slug} style={{ opacity }}>
        <GameCard game={game} />
    </Animated.View>
 )
}



const styles = StyleSheet.create({
  image: {
    width: 104,
    height: 147,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    fontSize: 16,
  },
  score: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
