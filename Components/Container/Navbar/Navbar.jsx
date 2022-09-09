import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyle } from "../../../styles/GlobalStyle";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../libs/request/firebase";
const Navbar = (props) => {
  const { setUtilisateur } = useContext(UserContext);
  console.log(props);
  function logout() {
    //Enleve les cookies
    signOut(auth);
  }

  console.log(Platform);
  return (
    <View style={[styles.container, { paddingTop: Platform.OS === "web" ? 15 : 50 }]}>
      <TouchableOpacity onPress={props.navigation.toggleDrawer}>
        <AntDesign name='menu-fold' size={24} color={globalStyle.color.lightColor} />
      </TouchableOpacity>

      <Text style={styles.title}>{props.options.title}</Text>

      <TouchableOpacity onPress={logout}>
        <AntDesign name='logout' size={24} color={globalStyle.color.lightColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.color.primaryColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  title: {
    color: globalStyle.color.lightColor,
    fontSize: 18,
  },
});
export default Navbar;
