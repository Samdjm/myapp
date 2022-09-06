import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";

export default function Button(props) {
  return (
    <TouchableOpacity onPress={props.action} style={styles.button}>
      <Text style={styles.label}>{props.label}</Text>
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
  },
  label: {
    textAlign: "center",
    color: globalStyle.color.lightColor,
    fontWeight: "500",
    fontSize: globalStyle.fonstSize.xs,
  },
});
