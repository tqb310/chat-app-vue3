<template>
  <div class="chat-panel__content">
    <div class="chat-panel__content-msg">
      <chat-message
        v-for="(item, index) in data"
        :key="index"
        :uname="item.uname"
        :messages="item.msg"
        :time="item.time"
        :isCurrent="item.isCurrent"
      />
    </div>
    <div class="chat-panel__content-reply">
      <div class="chat-panel__content-reply-input">
        <smile-outlined style="font-size: 2rem" />
        <textarea type="text" placeholder="Abc..." rows="1" />
      </div>
      <div class="chat-panel__content-reply-send">
        <a-button shape="circle" size="large" style="border-color: #40a9ff">
          <template #icon><send-outlined style="color: #40a9ff" /></template>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage.vue";
import { SmileOutlined, SendOutlined } from "@ant-design/icons-vue";

const content = [
  {
    id: 1,
    room: 123,
    uid: 1,
    msg: ["Bạn ăn cơm chưa??"],
    time: "9:23",
    uname: "Trương Quốc Bảo",
    isCurrent: false,
  },
  {
    id: 2,
    room: 123,
    uid: 2,
    msg: ["Mình ăn rồi.", "Còn bạn?"],
    time: "9:24",
    uname: "Trương Yến Nhi",
    isCurrent: true,
  },
  {
    id: 3,
    room: 123,
    uid: 2,
    msg: [
      "Mình cũng ăn rồi luôn.",
      "Ngày mai bạn rãnh k?",
      "Bạn có dự tính đi đâu vào ngày lễ sắp tới chưa?",
    ],
    time: "9:26",
    uname: "Trương Quốc Bảo",
    isCurrent: false,
  },
  {
    id: 4,
    room: 123,
    uid: 2,
    msg: [
      "Bạn có dự tính đi đâu vào ngày lễ sắp tới chưa?mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
    ],
    time: "9:26",
    uname: "Trương Yến Nhi",
    isCurrent: true,
  },
];
export default {
  computed: {
    data() {
      return content;
    },
  },
  components: { ChatMessage, SmileOutlined, SendOutlined },
};
</script>

<style lang="scss" scoped>
.chat-panel__content {
  background-color: #fff;
  margin-top: 20px;
  border-radius: 16px;
  position: relative;
  &-msg {
    height: 535px;
    overflow-y: auto;
    padding: 2rem;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #ddd;
    }
    &::-webkit-scrollbar-track {
      background-color: #fafafa;
      border-radius: 4px;
    }
  }
  &-reply {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    &-input {
      padding: 1rem 2rem;
      background-color: #efefef;
      border-radius: 24px;
      flex-grow: 1;
      display: flex;
      align-items: center;
      textarea {
        outline: none;
        border: none;
        background-color: #efefef;
        margin-left: 20px;
        flex-grow: 1;
      }
    }
    &-send {
      margin-left: 30px;
    }
  }
}
</style>
