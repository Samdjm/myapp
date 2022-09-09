import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilStack from "../Stacks/ProfilStack";
import Navbar from "../Container/Navbar/Navbar";
import GOT from "../Pages/GOT/GOT";
const Drawer = createDrawerNavigator();

export default function GlobalDrawer() {
  function test() {
    console.log("test");
  }
  return (
    <Drawer.Navigator
      screenListeners={test}
      screenOptions={{
        header: (props) => {
          return <Navbar {...props} />;
        },
      }}
    >
      <Drawer.Screen
        name='got'
        component={GOT}
        options={{ title: "personnages de Game of thrones" }}
      />
      <Drawer.Screen
        name='profilstack'
        component={ProfilStack}
        options={{ title: "Page de Profil" }}
      />
    </Drawer.Navigator>
  );
}
