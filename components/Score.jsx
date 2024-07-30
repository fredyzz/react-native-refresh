import React from "react";
import { Text, View } from "react-native";

const Score = ({ score, maxScore }) => {
    const getColor = (score) => {
      const percentage = (score / maxScore) * 100;

      if (percentage > 80) {
        return "bg-green-500";
      } else if (percentage > 60) {
        return "bg-yellow-500";
      } else if (percentage > 40) {
        return "bg-orange-500";
      } else {
        return "bg-red-500";
      }
    }

    return (
        <View className={`${getColor(score)}  w-8 h-8 rounded-full justify-center items-center`}>
            <Text className="text-lg font-bold text-white">{score}</Text>
        </View>
    );
};

export default Score;
