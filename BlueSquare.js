import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.brick}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  brick: {
    width: 200,
    height: 200,
    backgroundColor: "#68C8DE",
    alignItems: "center",
    padding: 10,
    margin: 30,
    borderWidth: 2,
    borderColor: "#218197",
    borderRadius: 20,
  },
});
