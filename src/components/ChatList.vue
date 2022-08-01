<template>
  <div class="chatlist">
    <div class="chatlist__header">
      <h1 class="chatlist__header-title">Chats</h1>
      <a-button shape="round">
        <template #icon><usergroup-add-outlined /></template>
        Tạo nhóm
      </a-button>
    </div>
    <div>
      <a-input-search
        placeholder="Tìm kiếm..."
        enter-button
        style="margin-top: 1rem"
      />
    </div>
    <div class="chatlist__content">
      <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
          <ChatListItem
            :username="item.username"
            :latestMsg="item.latestMsg"
            :time="item.time"
          />
        </template>
      </a-list>
    </div>
  </div>
</template>

<script>
import { UsergroupAddOutlined } from "@ant-design/icons-vue";
import ChatListItem from "./ChatListItem.vue";

const data = [
  {
    latestMsg: "Ant Design Title 1",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 2",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 3",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
  {
    latestMsg: "Ant Design Title 4",
    username: "Truong Quoc Bao",
    time: "9:53",
  },
];
export default {
  setup() {
    return { data };
  },
  components: {
    UsergroupAddOutlined,
    ChatListItem,
  },
};
</script>

<style lang="scss" scoped>
.chatlist {
  padding: 2rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 0;
      font-size: 2.5rem;
    }
  }
  &__content {
    overflow: auto;
    max-height: 480px;
    margin-top: 20px;
  }
}
</style>
