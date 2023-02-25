import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView persistentScrollbar={true}>
      <View style={styles.container}>
        <View style={[styles.brick, styles.blue1]} />
        <ScrollView horizontal={true} persistentScrollbar={true}>
          <View style={[styles.brick, styles.blue2]} />
          <View style={[styles.brick, styles.blue2]} />
          <View style={[styles.brick, styles.blue2]} />
        </ScrollView>
        <View style={[styles.brick, styles.blue1]} />
        <View style={[styles.brick, styles.blue2]} />
        <View style={[styles.brick, styles.blue1]} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //marginTop: 50,
    alignItems: "flex-start",
    //justifyContent: "space-between",
    //marginBottom: 10,
  },

  brick: {
    width: 500,
    height: 500,
  },

  blue1: {
    backgroundColor: "#3B83BA",
  },
  blue2: {
    backgroundColor: "#73AAD3",
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    width: 250,
    height: 250,
  },
});
