import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Login from "../../Container/Login/Login";
import Signup from "../../Container/Signup/Signup";
import Card from "../../HOC/Card/Card";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  function toggleIsLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <View>
      <Card
        title='Bienvenue!'
        content={isLogin ? "Veuillez vous connecter" : "Veuillez vous inscrire"}
      >
        {isLogin ? <Login /> : <Signup />}
        <TouchableOpacity onPress={toggleIsLogin}>
          <Text style={styles.link}>
            {isLogin
              ? "Vous n'êtes pas encore membre ? Inscrivez-vous!"
              : "Deja membre ? Connectez vous!"}
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "royalblue",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
