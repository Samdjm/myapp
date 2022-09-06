import { Text, TextInput, View } from "react-native";

export default function InputWithError(props) {
  console.log(props);
  return (
    <View>
      <TextInput
        placeholder={props.holder}
        onChangeText={props.action}
        value={props.valeur}
        keyboardType={props.type}
        secureTextEntry={props.isPassword}
      />
      <Text>{props.errorMessage}</Text>
    </View>
  );
}
