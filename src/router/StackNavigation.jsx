import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/Login";
import ProductDetailScreen from "../pages/ProductDetail";
import { TabsNavigation } from "./TabsNavigation";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigation} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export { MainStack };
