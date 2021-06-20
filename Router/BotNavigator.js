import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import Create from "./Create";
import Login from "./Login";
import Search from "./Search";

const Tab = createMaterialBottomTabNavigator();
const naviColor = "#77ACF1";

export default function BotNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        activeColor="rgba(255,255,255,1)"
        inactiveColor="rgba(255,255,255,0.7)"
        barStyle={{ backgroundColor: naviColor }}
      >
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={Create}
          options={{
            tabBarLabel: "Create",
            tabBarIcon: ({ color }) => (
              <AntDesign name="pluscircleo" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-circle-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
