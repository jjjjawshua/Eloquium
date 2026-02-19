import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.logo}>Eloquium</Text>
          <Text style={styles.greeting}>Good morning</Text>
          <Text style={styles.subtitle}>Here's what's trending today</Text>
        </View>
        {/* TODO: Feed cards */}
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Feed content will render here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFDF7" },
  header: { padding: 20, backgroundColor: "#FEF9E7" },
  logo: { fontSize: 22, fontWeight: "800", color: "#1B1B1B", fontFamily: "Georgia" },
  greeting: { fontSize: 24, color: "#1B1B1B", marginTop: 12, fontFamily: "Georgia" },
  subtitle: { fontSize: 14, color: "#6B7280", marginTop: 4 },
  placeholder: { padding: 40, alignItems: "center" },
  placeholderText: { color: "#6B7280", fontSize: 16 },
});
