import { createStackNavigator } from "@react-navigation/stack";
import { globalStyle } from "../../styles/GlobalStyle";
import Cam from "../Pages/Cam/Cam";
import EditInfos from "../Pages/EditInfos/EditInfos";
import Profil from "../Pages/Profil/Profil";

const Stack = createStackNavigator();
export default function ProfilStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: globalStyle.color.primaryColor },
        headerTitleStyle: { color: globalStyle.color.lightColor },
        headerTintColor: globalStyle.color.lightColor,
      }}
    >
      <Stack.Screen
        name='profil'
        component={Profil}
        options={{
          title: "Votre page de profil",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='camera'
        component={Cam}
        options={{
          title: "Prenez une photo",
        }}
      />
      <Stack.Screen
        name='editInfos'
        component={EditInfos}
        options={{
          title: "Modifier vos informations",
        }}
      />
    </Stack.Navigator>
  );
}
