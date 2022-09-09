import { useContext } from "react";
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { styles } from "./ProfilStyle";
import defaultAvatar from "../../../assets/default_avatar.png";
import { MaterialIcons } from "@expo/vector-icons";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import Button from "../../UI/Button/Button";
const Profil = (props) => {
  console.log(props);
  const { utilisateur: user, setUtilisateur } = useContext(UserContext);
  // const size = useWindowDimensions();
  // console.log(size);
  async function pickImage() {
    let image = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!image.cancelled) {
      setUtilisateur({ ...user, avatar: image });
    }
  }

  function goCam() {
    props.navigation.push("camera");
  }

  function goEditInfos() {
    props.navigation.push("editInfos");
  }

  return (
    <View>
      <View>
        <Image
          style={[{ width: "100%", height: 300, resizeMode: "contain" }, styles.avatar]}
          source={user.avatar ? user.avatar : defaultAvatar}
        />
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={pickImage}>
            <MaterialIcons name='photo-library' size={50} color='black' />
          </TouchableOpacity>
          <TouchableOpacity onPress={goCam}>
            <MaterialIcons name='camera-alt' size={50} color='black' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infosContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Pseudo:</Text>
          <Text style={styles.info}>{user.username}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.info}>
            {user.description ? user.description : "Veuillez entrer une description..."}
          </Text>
        </View>

        <Button label='Modifier vos information' action={goEditInfos}></Button>
      </View>
    </View>
  );
};

export default Profil;
