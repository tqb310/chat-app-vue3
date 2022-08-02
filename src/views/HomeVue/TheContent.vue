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
            <a-button type="primary" style="margin-right: 20px">
              <template #icon><user-add-outlined /></template>
              <span>Mời</span>
            </a-button>
            <a-tooltip
              placement="top"
              @click="isShowMemberList = !isShowMemberList"
            >
              <template #title>Thành viên nhóm</template>
              <a-button type="primary" shape="circle">
                <template #icon><info-circle-filled /></template>
              </a-button>
            </a-tooltip>
          </div>
        </div>
        <chat-content />
      </div>
    </a-layout-content>
    <a-layout-sider v-if="isShowMemberList"><the-member /> </a-layout-sider>
  </a-layout>
</template>

<script>
import { UserAddOutlined, InfoCircleFilled } from "@ant-design/icons-vue";
import ChatContent from "@/components/ChatContent.vue";
import TheMember from "./TheMember.vue";
import { ref } from "vue";
export default {
  setup() {
    const isShowMemberList = ref(true);
    return { isShowMemberList };
  },
  components: {
    UserAddOutlined,
    ChatContent,
    InfoCircleFilled,
    TheMember,
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
    align-items: center;
    background-color: #fff;
    padding: 1.5rem 3rem;
    border-radius: 30px;
    h1 {
      font-size: 2.2rem;
    }
    h1,
    p {
      margin: 0;
    }
  }
}
</style>
