import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    paddingHorizontal: 10,
    marginVertical: 20,
    padding: 30,
    alignItems: "center",
    color: "black",
    justifyContent: "center",
  },
});
