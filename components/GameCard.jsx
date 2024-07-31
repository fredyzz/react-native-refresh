import { useEffect, useRef } from "react";
import { Animated, View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";
import Score from "./Score";

const StyledPressable = styled(Pressable);

export default GameCard = ({ game }) => {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className="active:opacity-70 border-black active:border-white/50">
        <View
        key={game.slug}
        className={"flex-row mb-8 p-4 rounded-xl bg-slate-800/80"}
        >
          <Image source={{ uri: game.image }} style={styles.image} className="mr-4"/>
          <View className="flex-shrink">
            <Text style={styles.title} className="mb-2">{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text 
            className="mt-2 flex-shrink"
            style={styles.description}>{game.description.slice(0,100)}...</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
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
