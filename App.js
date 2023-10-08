import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Student";
import { Login, Register } from "./screens/Auth";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Stack = createStackNavigator();

export default function App() {
  const queryClient = new QueryClient();
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </PaperProvider>
  );
}
