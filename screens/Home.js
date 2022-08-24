import React, { useCallback, useEffect, useState } from "react";

import {
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Text,
} from "react-native";

import PalettePreview from "../components/PalettePreview";

const URL = "https://color-palette-api.kadikraman.now.sh/palettes";

const Home = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [colorPalette, setColorPalette] = useState();

  const handleFetchColorPallets = useCallback(async () => {
    const result = await fetch(URL);

    if (result.ok) {
      const pallettes = await result.json();

      setColorPalette(pallettes);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchColorPallets();
    setIsRefreshing(false);
  });

  setTimeout(() => {
    setIsRefreshing(false);
  }, 1000);

  useEffect(() => {
    handleFetchColorPallets();
  }, [handleFetchColorPallets]);

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddNewPalette")}
      >
        <Text style={styles.buttonText}>Add a color scheme</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={colorPalette}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() => navigation.push("ColorPalette", item)}
            palette={item}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
