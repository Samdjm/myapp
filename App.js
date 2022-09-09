import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import GlobalDrawer from "./Components/Drawers/GlobalDrawer";
import Auth from "./Components/Pages/Auth/Auth";
import { UserContext } from "./contexts/UserContext";
export default function App() {
  const fauxUser = { email: "john@doe.com", username: "John" };
  const [user, setUser] = useState(fauxUser);

  return (
    <UserContext.Provider value={{ utilisateur: user, setUtilisateur: setUser }}>
      <View style={styles.container}>
        <NavigationContainer>{user ? <GlobalDrawer /> : <Auth />}</NavigationContainer>
        <StatusBar style='auto' />
      </View>
    </UserContext.Provider>
  );
}
//HOC: HIGH ORDER COMPONENTS
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
  },
});
//false: null, '', 0, undefined
//true: 1,3, 1000, 'dfdfd', {name:"test"}, [], ['sdfsd']

//HOC: High Order Component

// A voire:
//Formik et Yup: Formulaire et teste rapidement
//Firebase: authentifications et Base de données
//Nextjs: Framework react pour le SEO

//Docker: Gestionnaires container (machines virtuelle)
