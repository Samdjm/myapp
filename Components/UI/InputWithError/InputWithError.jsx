import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { globalStyle } from "../../../styles/GlobalStyle";
export default function InputWithError({
  holder,
  action,
  valeur,
  type,
  isPassword,
  errorMessage,
}) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  function togglePassword() {
    setIsPasswordHidden(!isPasswordHidden);
  }

  return (
    <>
      <View
        style={[
          styles.inputContainer,
          {
            borderBottomColor:
              errorMessage == "" ? globalStyle.color.primaryColor : "red",
          },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            { outline: "none", color: errorMessage == "" ? "black" : "red" },
          ]}
          placeholder={holder}
          onChangeText={action}
          value={valeur}
          keyboardType={type}
          secureTextEntry={isPassword && isPasswordHidden}
        />
        <TouchableOpacity onPress={togglePassword} style={styles.icon}>
          {isPassword && (
            <Feather
              name={isPasswordHidden ? "eye" : "eye-off"}
              size={24}
              color={isPasswordHidden ? "green" : "orange"}
            />
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.error}>{errorMessage}</Text>
    </>
  );
}
//Structure - logique - style
const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    border: "none",
    width: "90%",
  },
  error: {
    color: "red",
  },
  icon: {
    width: "10%",
  },
});
