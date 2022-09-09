import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export async function signupUser(email, username, password) {
  const data = await createUserWithEmailAndPassword(auth, email, password);

  const usersRef = doc(db, "users", data.user.uid);
  const addedData = await setDoc(usersRef, {
    email: email,
    username: username,
    avatar: null,
    description: null,
  });
  console.log(addedData);
  return {
    uid: data.user.uid,
    email: email,
    username: username,
    avatar: null,
    description: null,
  };
}
