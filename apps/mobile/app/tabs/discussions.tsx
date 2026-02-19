import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>discussions</Text>
        <Text style={styles.subtitle}>Coming soon</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFDF7" },
  content: { padding: 20 },
  title: { fontSize: 28, color: "#1B1B1B", fontFamily: "Georgia" },
  subtitle: { fontSize: 14, color: "#6B7280", marginTop: 4 },
});
