import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Counter from "./Components/Container/Counter";
import Auth from "./Components/Pages/Auth/Auth";
import Profil from "./Components/Pages/Profil/Profil";
export default function App() {
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View style={styles.container}>
      {isVisible ? <Counter /> : null}
      <Text
        onPress={() => {
          setIsVisible(!isVisible);
        }}
      >
        Show/Hide
      </Text>
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

// A voire:
//Formik et Yup
//Firebase
//Nextjs

//Docker
