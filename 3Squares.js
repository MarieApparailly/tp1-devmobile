import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.brickRed}></View>
      <View style={styles.brickYellow}></View>
      <View style={styles.brickGreen}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    // alignés à gauche :
    //marginTop: 50,
    //flexDirection: "row",

    // OU en colonne au centre et espacés
    justifyContent: "space-around",
    alignItems: "center",
  },

  text: {
    fontSize: 50,
  },

  brickRed: {
    width: 100,
    height: 100,
    backgroundColor: "#ff0000",
    //alignItems: "center",
  },

  brickYellow: {
    width: 100,
    height: 100,
    backgroundColor: "#ffd100",
    //alignItems: "center",
  },

  brickGreen: {
    width: 100,
    height: 100,
    backgroundColor: "#00B450",
    //alignItems: "center",
  },
});
