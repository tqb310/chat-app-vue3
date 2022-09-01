<template>
  <router-view />
</template>

<script>
import { onUnmounted, watch } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase/config";
import authProvider from "./contexts/authProvider";

export default {
  inject: ["authProvider"],
  setup() {
    const unsubcribe = onAuthStateChanged(auth, userData => {
      if (userData) authProvider.setUser(userData);
      else authProvider.setUser(null);
    });

    //Clean up
    onUnmounted(unsubcribe);

    watch(authProvider.auth, value => console.log(value));
  },
};
</script>

<style lang="scss"></style>
