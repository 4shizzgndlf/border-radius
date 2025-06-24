import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF5200",
        headerStyle: {
          backgroundColor: "#FBFBFB",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#FBFBFB",
        },
        tabBarShowLabel: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home"}
              color={color}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "card" : "card"
              }
              color={color}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "newspaper" : "newspaper"
              }
              color={color}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "settings" : "settings"
              }
              color={color}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
