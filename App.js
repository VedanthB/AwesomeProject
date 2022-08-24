import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";
import { createStackNavigator } from "@react-navigation/stack";
import FrontendMasters from "./screens/FrontendMasters";
import Rainbow from "./screens/Rainbow";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen
          name="FrontendMasters"
          component={FrontendMasters}
          options={{ title: "Frontend Masters" }}
        />
        <Stack.Screen
          name="Rainbow"
          component={Rainbow}
          options={{ title: "Rainbow" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
