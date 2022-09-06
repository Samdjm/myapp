import { useState } from "react";
import { Text, View } from "react-native";

export default function Login() {
  //Etape 1: Les variables d'état pour les inputs et les erreurs:
  const [emailInput, setEmailInput] = useState("");
  const [emailerror, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passworderror, setPasswordError] = useState("");

  //Two way binding: Lier dans les deux sens
  return (
    <View>
      <Text>Login Form</Text>
    </View>
  );
}
//Utilise le console log dans button
