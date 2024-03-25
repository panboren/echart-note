<script lang="ts" setup>
//
//let activeName = ref('')
let unreadCount = 10
defineOptions({ name: 'Message' })
</script>
<template>
  <div class="message">
    <ElPopover :width="400" placement="bottom" trigger="click">
      <template #reference>
        <ElBadge :is-dot="unreadCount > 0" class="item">
          <Icon :size="18" class="cursor-pointer" icon="ep:bell" />
        </ElBadge>
      </template>
<!--      <ElTabs v-model="activeName">
        <ElTabPane label="我的站内信" name="notice">
          <el-scrollbar class="message-list">
            <template>
              <div class="message-item">
                <img alt="" class="message-icon" src="@/assets/imgs/avatar.gif" />
                <div class="message-content">
                  <span class="message-title">
                    nihao
                  </span>
                  <span class="message-date">
                  55
                  </span>
                </div>
              </div>
            </template>
          </el-scrollbar>
        </ElTabPane>
      </ElTabs>
      &lt;!&ndash; 更多 &ndash;&gt;
      <div style="margin-top: 10px; text-align: right">
        <XButton preIcon="ep:view" title="查看全部" type="primary" />
      </div>-->
    </ElPopover>
  </div>
</template>
<style lang="scss" scoped>
.message-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 260px;
  line-height: 45px;
}

.message-list {
  display: flex;
  height: 400px;
  flex-direction: column;

  .message-item {
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid var(--el-border-color-light);

    &:last-child {
      border: none;
    }

    .message-icon {
      width: 40px;
      height: 40px;
      margin: 0 20px 0 5px;
    }

    .message-content {
      display: flex;
      flex-direction: column;

      .message-title {
        margin-bottom: 5px;
      }

      .message-date {
        font-size: 12px;
        color: var(--el-text-color-secondary);
      }
    }
  }
}
</style>
