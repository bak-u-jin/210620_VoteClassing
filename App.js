import * as React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import BotNavigator from "./Router/BotNavigator";
import store from "./store";

const statusBarColor = "#c0c0c0";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={statusBarColor} />
      <BotNavigator />
    </Provider>
  );
}
