import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Auth from "./Components/Pages/Auth/Auth";
import Profil from "./Components/Pages/Profil/Profil";
export default function App() {
  const [user, setUser] = useState(null);
  return (
    <View style={styles.container}>
      {user ? <Profil /> : <Auth />}
      <StatusBar style='auto' />
    </View>
  );
}
//HOC: HIGH ORDER COMPONENTS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  text: {
    fontSize: 50,
  },
});
//false: null, '', 0, undefined
//true: 1,3, 1000, 'dfdfd', {name:"test"}, [], ['sdfsd']

//HOC: High Order Component
