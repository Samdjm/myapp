import { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import Button from "../../UI/Button/Button";
import InputWithError from "../../UI/InputWithError/InputWithError";
import Card from "../../HOC/Card/Card";
const EditInfos = (props) => {
  const { utilisateur, setUtilisateur } = useContext(UserContext);
  //Etape 1: Les variables d'états pour les inputs et les erreurs:
  const [emailInput, setEmailInput] = useState(utilisateur.email);
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState(utilisateur.username);
  const [usernameError, setUsernameError] = useState("");

  const [descriptionInput, setDescriptionInput] = useState(
    utilisateur.description ? utilisateur.description : ""
  );
  const [descriptionError, setDescriptionError] = useState("");

  //Etape 2: Créer les handle, fonctions qui modifient les variables avec les entrées de l'utilisateur:
  function handleEmail(text) {
    setEmailInput(text);
    setEmailError("");
  }

  function handleUsername(text) {
    setUsernameInput(text);
    setUsernameError("");
  }

  function handleDescription(text) {
    setDescriptionInput(text);
    setDescriptionError("");
  }

  function edit() {
    if (
      emailInput.includes("@") &&
      usernameInput.length >= 3 &&
      usernameInput.length <= 12 &&
      descriptionInput !== "" &&
      descriptionInput.length <= 120
    ) {
      //envoyer les données a la back end
      setUtilisateur({
        ...utilisateur,
        email: emailInput,
        username: usernameInput,
        description: descriptionInput,
      });
      props.navigation.pop();
    } else {
      setEmailError(!emailInput.includes("@") ? "Email incorrect" : "");

      setUsernameError(
        usernameInput.length < 3
          ? "Username trop court!"
          : usernameInput.length > 12
          ? "username trop long"
          : ""
      );
      setDescriptionError(
        descriptionInput === ""
          ? "Entrez une description!"
          : descriptionInput.length > 120
          ? "Description trop longue!"
          : ""
      );
    }
  }

  return (
    <View style={styles.container}>
      <Card title='Modifier' content='vos informations'>
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
          holder='Description'
          valeur={descriptionInput}
          action={handleDescription}
          type='default'
          errorMessage={descriptionError}
        />
        <Button label='Valider' action={edit}></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EditInfos;
