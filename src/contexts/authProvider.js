import { readonly, reactive } from "vue";

const authProvider = reactive({
  user: null,
  isLoggedIn: false,
});

const setUser = user => {
  if (user) {
    authProvider.user = user;
    authProvider.isLoggedIn = true;
  }
};

export default { auth: readonly(authProvider), setUser };
