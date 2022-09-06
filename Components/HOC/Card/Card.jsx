import { StyleSheet, Text, View } from "react-native";
import { styles } from "./CardStyle";

export default function Card({ title, content, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
}
