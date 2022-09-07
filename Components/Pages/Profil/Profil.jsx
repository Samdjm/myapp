import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { styles } from "./ProfilStyle";
const Profil = () => {
  const { utilisateur: user } = useContext(UserContext);

  return (
    <View>
      <View style={styles.infosContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Pseudo</Text>
          <Text style={styles.info}>{user.username}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.info}>
            {user.description ? user.description : "Veuillez entrer une description..."}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profil;
