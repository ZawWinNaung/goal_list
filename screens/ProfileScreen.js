import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  let screen = route.params.screen;
  let greeting = screen === "profile" ? "This is profile screen" : "Hello";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{greeting}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
