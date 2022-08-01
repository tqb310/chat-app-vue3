<template>
  <a-layout horizontal style="height: 100%">
    <a-layout-content>
      <div class="chat-panel">
        <div class="chat-panel__header">
          <div>
            <h1>Bé Nhi</h1>
            <p>Đây là phòng bí mật</p>
          </div>
          <div>
            <a-button type="primary">
              <template #icon><user-add-outlined /></template>
              <span>Mời</span>
            </a-button>
          </div>
        </div>
        <chat-content />
      </div>
    </a-layout-content>
    <a-layout-sider> Members </a-layout-sider>
  </a-layout>
</template>

<script>
import { UserAddOutlined } from "@ant-design/icons-vue";
import ChatContent from "@/components/ChatContent.vue";

export default {
  components: {
    UserAddOutlined,
    ChatContent,
  },
};
</script>

<style lang="scss" scoped>
.chat-panel {
  padding: 1.5rem;
  background-color: #f6f6f6;
  height: 100%;
  &__header {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 16px;
    h1 {
      font-size: 2.5rem;
    }
    h1,
    p {
      margin: 0;
    }
  }
}
</style>
