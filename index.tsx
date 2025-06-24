import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <View style={styles.middleContainer}>
        <Link href="/shop" style={styles.button}>
          Go to Marketplace
        </Link>
        <Link href="/news" style={styles.button}>
          Or News
        </Link>
        <Link href="/settings" style={styles.button}>
          Or Settings
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
  },
  middleContainer: {
    flex: 1 ,
    justifyContent: "center",
  },
  text: {
    color: "#000000",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#000000",
    justifyContent: "center"
  },
});
