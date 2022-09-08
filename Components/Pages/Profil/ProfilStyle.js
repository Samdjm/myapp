import { StyleSheet } from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";

export const styles = StyleSheet.create({
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    maxWidth: 300,
    justifyContent: "space-around",
    backgroundColor: "rgba(10,10,10,0.1)",
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },

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
