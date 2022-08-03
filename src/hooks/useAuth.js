import { ref, onUnmounted, computed } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase/config";

export default function useAuth() {
  const user = ref(null);
  const unsubcribe = onAuthStateChanged(auth, userData => {
    if (userData) user.value = userData;
    else userData = null;
  });
  const isLoggedIn = computed(() => Boolean(user));

  //Clean up
  onUnmounted(unsubcribe);
  return { user, isLoggedIn };
}
