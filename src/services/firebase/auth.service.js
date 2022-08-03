import { auth } from "./config";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export async function signIn(provider) {
  switch (provider) {
    case "google": {
      const googleAuthProvider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, googleAuthProvider);
      return response;
    }
    case "facebook": {
      const facebookAuthProvider = new FacebookAuthProvider();
      const response = await signInWithPopup(auth, facebookAuthProvider);
      return response;
    }
    default:
      return false;
  }
}
