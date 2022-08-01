<template>
  <a-list-item style="padding: 1.2rem">
    <a-list-item-meta :description="latestMsg">
      <template #title>
        <span>{{ username }}</span>
      </template>
      <template #avatar>
        <a-avatar :size="40">
          <template #icon><UserOutlined /></template>
        </a-avatar>
      </template>
    </a-list-item-meta>
    <div>{{ time }}</div>
  </a-list-item>
</template>

<script>
import { UserOutlined } from "@ant-design/icons-vue";

export default {
  props: {
    username: String,
    latestMsg: String,
    time: String,
  },
  components: {
    UserOutlined,
  },
};
</script>

<style></style>
