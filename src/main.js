import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./main.scss";
import authProvider from "./contexts/authProvider";

const app = createApp(App);
app.use(router);
app.use(Antd);
app.provide("authProvider", authProvider);
app.mount("#app");
