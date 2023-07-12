import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../pages/Home";
import ProductsScreen from "../pages/Products";
import AddProductScreen from "../pages/AddProduct";

const Tabs = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Products") {
            iconName = "list";
          } else if (route.name === "AddProduct") {
            iconName = "add";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Products" component={ProductsScreen} />
      <Tabs.Screen name="AddProduct" component={AddProductScreen} />
    </Tabs.Navigator>
  );
};

export { TabsNavigation };
