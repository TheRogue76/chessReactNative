import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./src/Routes";
import { LoadAssets } from "./src/components";
import Chess, { assets as chessAssets } from "./src/Chess";

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFPro/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFPro/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFPro/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFPro/SF-Pro-Display-Medium.otf"),
  "Nunito-Bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
  "Nunito-Regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
  "GothamRounded-Medium": require("./assets/fonts/GothamRounded/GothamRounded-Medium.otf"),
  "GothamRounded-Bold": require("./assets/fonts/GothamRounded/GothamRounded-Bold.otf"),
  "GothamRounded-Light": require("./assets/fonts/GothamRounded/GothamRounded-Light.otf"),
};

const assets = [...chessAssets];

const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Chess"
      component={Chess}
      options={{
        title: "♟ Chess",
        header: () => null,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <AppNavigator />
    </LoadAssets>
  );
};

export default App;
