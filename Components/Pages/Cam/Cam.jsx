//rnfc: React Native Functional Component

import { Camera, CameraType } from "expo-camera";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
const Cam = (props) => {
  //Demander la permission a l'utilisateur

  const { utilisateur, setUtilisateur } = useContext(UserContext);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  //Variables d'etat pour le type de la camera
  const [cameraType, setCameraType] = useState(CameraType.back);

  //Permet de mémoriser la reférence de la Camera
  const cameraRef = useRef();

  const size = useWindowDimensions();

  //Si la permission est null ou indeterminée, on affiche un chargement
  if (!permission || permission.status === "undetermined") {
    requestPermission();
    return <ActivityIndicator size={100} color={globalStyle.color.primaryColor} />;
  }

  //Si la permission est refusée
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.deniedText}>Permission refusée</Text>
        <Feather name='camera-off' size={100} color='red' />
      </View>
    );
  }

  function toggleCameraType() {
    setCameraType(cameraType === CameraType.back ? CameraType.front : CameraType.back);
  }

  async function takePicture() {
    //const ratios = await cameraRef.current.getSupportedRatiosAsync();
    const image = await cameraRef.current.takePictureAsync();
    console.log(image);

    //Utiliser le contexte pour mettre l'image dans user.
    setUtilisateur({ ...utilisateur, avatar: image });
    //Utiliser la navigation recues en props, pour revenir en arriere (Page de profil).
    props.navigation.pop();
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={cameraType}
        ratio='16:9'
        style={{ height: (size.width * 16) / 9, width: size.width }}
      >
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={toggleCameraType}>
            <MaterialIcons
              name='flip-camera-android'
              size={50}
              color={globalStyle.color.primaryColor}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <MaterialIcons name='camera' size={50} color='green' />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deniedText: {
    color: "red",
    fontSize: globalStyle.fonstSize.md,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    width: "80%",
    maxWidth: 300,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 100,
    padding: 10,
    borderRadius: 10,
  },
});

export default Cam;
