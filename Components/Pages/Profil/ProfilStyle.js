import { StyleSheet } from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";

export const styles = StyleSheet.create({
  infosContainer: {
    backgroundColor: globalStyle.color.lightColor,
    padding: 20,
    alignSelf: "center",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: globalStyle.color.primaryColor,
  },
  infoContainer: {
    padding: 5,
    borderBottomWidth: 2,
    borderColor: "gray",
  },
  label: {
    fontWeight: "bold",
    fontSize: globalStyle.fonstSize.xs,
  },
  info: {
    fontSize: 18,
  },
});
