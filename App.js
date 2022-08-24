import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ColorBox from "./components/ColorBox";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        <ColorBox hexCode="#2aa198" colorName="Cyan" />

        <ColorBox hexCode="#268bd2" colorName="Blue" />

        <ColorBox hexCode="#d33682" colorName="Magenta" />

        <ColorBox hexCode="#cb4b16" colorName="Orange" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
});

export default App;
