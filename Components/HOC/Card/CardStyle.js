import { StyleSheet } from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.color.primaryColor,
    borderRadius: 5,
    maxWidth: 500,
    alignSelf: "center",
    width: "100%",
  },
  title: {
    color: globalStyle.color.lightColor,
    textAlign: "center",
    fontSize: globalStyle.fonstSize.xl,
    fontWeight: "bold",
    padding: 5,
  },
  content: {
    color: globalStyle.color.lightColor,
    textAlign: "center",
    fontSize: globalStyle.fonstSize.md,
    padding: 5,
  },
  childrenContainer: {
    backgroundColor: globalStyle.color.lightColor,
    padding: 10,
  },
});
