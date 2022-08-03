<template>
  <router-view />
</template>

<script>
import { onUnmounted } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase/config";
import authProvider from "./contexts/authProvider";

export default {
  inject: ["authProvider"],
  setup() {
    const unsubcribe = onAuthStateChanged(auth, userData => {
      if (userData) authProvider.setUser(userData);
      else userData = null;
    });

    //Clean up
    onUnmounted(unsubcribe);
  },
};
</script>

<style lang="scss">
nav {
}
</style>
