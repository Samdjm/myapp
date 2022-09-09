import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../UI/Button/Button";
import InputWithError from "../../UI/InputWithError/InputWithError";
import { AntDesign } from "@expo/vector-icons";
import { globalStyle } from "../../../styles/GlobalStyle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../libs/request/firebase";
export default function Login() {
  const emailFromCookie = "sam@sam.com";
  //Etape 1: Les variables d'états pour les inputs et les erreurs:
  const [emailInput, setEmailInput] = useState(emailFromCookie);
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //Etape 2: Créer les handle, fonctions qui modifient les variables avec les entrées de l'utilisateur:
  function handleEmail(text) {
    setEmailInput(text);
    setEmailError("");
  }

  function handlePassword(value) {
    setPasswordInput(value);
    setPasswordError("");
  }

  //Etape 3: La fonction qui valide le formulaire:
  async function login() {
    //Tester les entrées de l'utilisateur:
    if (emailInput.includes("@") && passwordInput.length >= 6) {
      //Envoyer les données a la backend
      await signInWithEmailAndPassword(auth, emailInput, passwordInput);
    } else {
      setEmailError(!emailInput.includes("@") ? "Email incorrect!" : "");
      setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court!" : "");
      setPasswordInput("");
    }
  }

  function checkEmailError() {
    setEmailError(!emailInput.includes("@") ? "Email incorrect!" : "");
  }

  //Etape 4: Ajouter les composants et de les lier avec les variables et les fonctions
  //Two Way Binding: liaison dans les deux sens
  return (
    <View style={{ width: "100%" }}>
      <InputWithError
        holder='Email'
        valeur={emailInput}
        action={handleEmail}
        errorMessage={emailError}
        type='email-address'
      />

      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type='default'
        isPassword
      />

      <Button label='Se connecter' action={login}>
        <AntDesign name='login' size={24} color={globalStyle.color.lightColor} />
      </Button>
    </View>
  );
}
//Utilise le console log dans button
