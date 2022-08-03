<template>
  <div class="signin">
    <div class="signin__wrapper">
      <h1>Đăng nhập</h1>
      <a-button @click="signIn('google')">Đăng nhập với google</a-button>
      <a-button @click="signIn('facebook')">Đăng nhập với facebook</a-button>
    </div>
  </div>
</template>

<script>
import * as authService from "@/services/firebase/auth.service";
import { getAdditionalUserInfo } from "@firebase/auth";
import { ref } from "vue";

export default {
  name: "SignIn",
  setup() {
    const error = ref("");
    async function signIn(provider) {
      try {
        const res = await authService.signIn(provider);
        console.log(res);
        console.log(getAdditionalUserInfo(res));
      } catch (err) {
        error.value = err;
      }
    }
    return { signIn };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles" as *;

.signin {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__wrapper {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    // width: 500px;
    // height: 400px;
    border-radius: 16px;
    padding: 2rem 4rem;
    h1 {
      font-size: 2.5rem;
      color: #555;
      text-align: center;
    }
  }
}
</style>
