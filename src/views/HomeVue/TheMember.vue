<template>
  <div class="chat-members">
    <h1 class="chat-members__title">Thành viên trong nhóm</h1>
    <ul class="chat-members__list">
      <li class="chat-members__list-item">
        <a-avatar :size="48"
          ><template #icon><UserOutlined /></template
        ></a-avatar>
        <div style="margin-left: 10px">
          <p class="chat-members__list-item-uname">Nguyễn Thị Bé Nhi</p>
          <p class="chat-members__list-item-role">Chủ phòng</p>
        </div>
        <div class="chat-members__list-item-ib">
          <MessageFilled style="color: #40a9ff" />
        </div>
      </li>
      <li class="chat-members__list-item">
        <a-avatar :size="48"
          ><template #icon><UserOutlined /></template
        ></a-avatar>
        <div style="margin-left: 10px">
          <p class="chat-members__list-item-uname">Nguyễn Thị Bé Nhi</p>
          <p class="chat-members__list-item-role">Thành viên</p>
        </div>
        <div class="chat-members__list-item-ib">
          <MessageFilled style="color: #40a9ff" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { UserOutlined, MessageFilled } from "@ant-design/icons-vue";

export default {
  components: { UserOutlined, MessageFilled },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles" as *;

.chat-members {
  padding: 1.5rem 2rem;
  &__title {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
  }
  &__list {
    &-item {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding: 1.5rem 0;
      p {
        margin: 0;
      }
      &-uname {
        font-size: 1.7rem;
      }
      &-role {
        font-size: 1.4rem;
        color: #555;
      }
      &-ib {
        margin-left: auto;
        padding: 0.5rem 1rem;
        background-color: rgba($primary-color, 0.2);
        border-radius: 8px 8px 8px 0;
        transition: background-color 0.4s;
        cursor: pointer;
        &:hover {
          background-color: rgba($primary-color, 0.4);
        }
      }
    }
  }
}
</style>
