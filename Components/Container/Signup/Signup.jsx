import { useContext, useState } from "react";
import { Text, View } from "react-native";
import InputWithError from "../../UI/InputWithError/InputWithError";
import Button from "../../UI/Button/Button";
import { UserContext } from "../../../contexts/UserContext";
export default function Signup() {
  const context = useContext(UserContext);

  //Etape 1: Les variables d'états pour les inputs et les erreurs:
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //Etape 2: Créer les handle, fonctions qui modifient les variables avec les entrées de l'utilisateur:
  function handleEmail(text) {
    setEmailInput(text);
    setEmailError("");
  }

  function handleUsername(text) {
    setUsernameInput(text);
    setUsernameError("");
  }

  function handlePassword(value) {
    setPasswordInput(value);
    setPasswordError("");
  }

  function handleConfirmPassword(value) {
    setConfirmPasswordInput(value);
    setConfirmPasswordError("");
  }

  function signup() {
    if (
      emailInput.includes("@") &&
      usernameInput.length >= 3 &&
      usernameInput.length <= 12 &&
      passwordInput.length >= 6 &&
      confirmPasswordInput === passwordInput
    ) {
      //Envoyer les données a la backend
      //Recu JWT token
      //Decode JWT: {uid:xxxx, email:xxxx@xxx.com, username:xxxx, avatar:xxxx.png}
      context.setUtilisateur({ email: emailInput, username: usernameInput });
    } else {
      setEmailError(!emailInput.includes("@") ? "Email incorrect" : "");

      setUsernameError(
        usernameInput.length < 3
          ? "Username trop court!"
          : usernameInput.length > 12
          ? "username trop long"
          : ""
      );
      setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court!" : "");

      setConfirmPasswordError(
        passwordInput !== confirmPasswordInput
          ? "Les mots de passes ne sont pas identiques"
          : ""
      );
    }
  }

  return (
    <View>
      <InputWithError
        holder='Email'
        valeur={emailInput}
        action={handleEmail}
        type='email-address'
        errorMessage={emailError}
      />
      <InputWithError
        holder='Username'
        valeur={usernameInput}
        action={handleUsername}
        type='default'
        errorMessage={usernameError}
      />
      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        type='default'
        errorMessage={passwordError}
        isPassword
      />
      <InputWithError
        holder='Confirmez votre mot de passe'
        valeur={confirmPasswordInput}
        action={handleConfirmPassword}
        type='default'
        errorMessage={confirmPasswordError}
        isPassword
      />
      <Button label='Valider' action={signup}></Button>
    </View>
  );
}
