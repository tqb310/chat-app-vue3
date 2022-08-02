<template>
  <a-list-item class="chatlist-item unread" style="padding: 1.2rem">
    <a-list-item-meta :description="'Nhi: ' + latestMsg">
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

<style lang="scss">
.chatlist-item {
  user-select: none;
  cursor: pointer;
  transition: background-color 0.4s;
  &:hover {
    background-color: #f3f3f3;
  }
}
.unread {
  .ant-list-item-meta-description {
    font-weight: bold !important;
    color: #000 !important;
  }
}
</style>
