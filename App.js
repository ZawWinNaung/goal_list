import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={(title = "Welcoome")}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={(title = "Profile")}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
