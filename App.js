import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  // TouchableHighlight,
  View,
} from "react-native";

// you can use import o require, require is more common for imanges in RN
// this is only for local images
const icon = require("./assets/icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      {/* Local image example
      <Image source={icon} style={{ width: 100, height: 100 }} /> */}
      {/* Remote image example */}
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{ width: 100, height: 100 }}
      />
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      {/* Button can't be styled, it will render the native button depending the platform */}
      <Button
        title="Click me"
        onPress={() => {
          alert("Button pressed");
        }}
      />
      {/* TouchableHighlight and TouchableOpacity can be used as a button, and
      is completely customizable and accepts children.

      <TouchableHighlight
        underlayColor={"orange"}
        onPress={() => {
          alert("TouchableHighlight pressed");
        }}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight> */}
      {/* Pressable is the new component for handling touch events, 
      it's the recommended way to handle touch events */}
      <Pressable
        onPress={() => {
          alert("Pressable pressed");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "orange" : "red",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          },
        ]}
      >
        <Text>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
