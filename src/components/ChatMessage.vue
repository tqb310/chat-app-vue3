<template>
  <a-row :class="{ opposite: isCurrent }">
    <a-col style="width: 60px"
      ><a-avatar class="chat-content__avatar" :size="40"
        ><template #icon><UserOutlined /></template></a-avatar
    ></a-col>
    <a-col style="flex-grow: 1">
      <a-row class="chat-content__msg-wrapper" :gutter="[16, 8]">
        <!-- <a-col>{{ uname.split(" ").pop() }}</a-col> -->
        <a-col v-for="(message, index) in messages" :key="index"
          ><div class="chat-content__msg">{{ message }}</div></a-col
        >
        <a-col class="chat-content__time">{{ time }}</a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
import { UserOutlined } from "@ant-design/icons-vue";

export default {
  props: {
    path: {
      type: String,
      default: "",
    },
    uname: String,
    messages: {
      type: Array,
      default: () => [],
    },
    time: {
      type: String,
      default: "",
    },
    isCurrent: Boolean,
  },
  components: { UserOutlined },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles" as *;

.opposite {
  flex-direction: row-reverse;
  .chat-content__msg-wrapper {
    align-items: flex-end;
  }
  .chat-content__avatar {
    margin-left: auto;
    display: block;
  }
  .chat-content__time {
    margin-right: 10px;
    margin-left: 0;
  }
  .chat-content__msg {
    border-radius: 16px 0 16px 16px;
    background-color: $primary-color;
    color: white;
  }
}
.chat-content__msg-wrapper {
  flex-direction: column;
}
.chat-content__time {
  margin-left: 10px;
  margin-right: 0;
  font-size: 1.3rem;
}
.chat-content__msg {
  background-color: #f3f3f3;
  padding: 1rem;
  display: inline-block;
  border-radius: 0 16px 16px 16px;
  max-width: 500px;
  word-wrap: break-word;
}
</style>
