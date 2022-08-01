<template>
  <a-layout>
    <a-layout-sider><the-sidebar /></a-layout-sider>
    <a-layout-content><the-content /></a-layout-content>
  </a-layout>
</template>

<script>
import TheContent from "./TheContent.vue";
import TheSidebar from "./TheSidebar.vue";

export default {
  name: "HomeView",
  components: {
    TheContent,
    TheSidebar,
  },
};
</script>

<style lang="scss" scoped></style>
