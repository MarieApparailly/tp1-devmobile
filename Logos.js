import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://www.bpesquet.fr/images/ENSC_2022.jpg" }}
        style={styles.logo}
      />
      <Image
        source={{ uri: "https://www.bpesquet.fr/images/ENSC_2022.jpg" }}
        style={styles.logo}
      />
      <Image
        source={{ uri: "https://www.bpesquet.fr/images/ENSC_2022.jpg" }}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  logo: {
    width: 143,
    height: 45,
  },
});
