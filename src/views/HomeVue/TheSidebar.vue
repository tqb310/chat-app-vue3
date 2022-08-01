<template>
  <div class="sidebar">
    <div class="sidebar__profile">
      <a-avatar :size="48">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <span class="uname">Truong Quoc Bao</span>
      <a-button type="primary" style="margin-left: auto">
        <template #icon><logout-outlined /></template>
        Đăng xuất
      </a-button>
    </div>
    <ChatList />
    <div style="padding: 0 1rem">
      <a-button
        type="primary"
        style="
          margin-left: auto;
          width: 97%;
          padding: 0.5rem 0;
          box-sizing: content-box;
        "
      >
        <template #icon><user-add-outlined /></template>
        Tìm kiếm người trò chuyện
      </a-button>
    </div>
  </div>
</template>

<script>
import {
  UserOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons-vue";
import ChatList from "@/components/ChatList.vue";

export default {
  components: {
    UserOutlined,
    LogoutOutlined,
    UserAddOutlined,
    ChatList,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  &__profile {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    .uname {
      margin-left: 1rem;
    }
  }
}
</style>
