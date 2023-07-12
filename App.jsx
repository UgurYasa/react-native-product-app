import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Products from "./src/pages/Products";
import AddProduct from "./src/pages/AddProduct";
import ProductDetail from "./src/pages/ProductDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
