import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import GlobalDrawer from "./Components/Drawers/GlobalDrawer";
import Auth from "./Components/Pages/Auth/Auth";
import { UserContext } from "./contexts/UserContext";
import { auth, db } from "./libs/request/firebase";
export default function App() {
  const fauxUser = { email: "john@doe.com", username: "John" };
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const usersRef = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(usersRef);
      const userData = userSnapshot.data();
      setUser({ ...userData, uid: user.uid });
    } else {
      setUser(null);
    }
  });

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
