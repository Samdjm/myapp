import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";

export default function Button({ action, label, children }) {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      {children}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: globalStyle.color.primaryColor,
    alignSelf: "center",
    minWidth: 150,
    borderRadius: 10,
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  label: {
    textAlign: "center",
    color: globalStyle.color.lightColor,
    fontWeight: "500",
    fontSize: globalStyle.fonstSize.xs,
    marginHorizontal: 10,
  },
});
