<template>
  <a-grid :cols="24" :row-gap="16" class="panel">
    <a-grid-item
      v-for="(item, index) in dataCount"
      :key="index"
      class="panel-col"
      :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 6 }"
    >
      <a-space>
        <a-avatar :size="54" class="col-avatar">
          <img alt="avatar" :src="item.avatar" />
        </a-avatar>
        <a-statistic
          :title="$t('workplace.onlineContent')"
          :value="item.value"
          :precision="2"
          :value-from="333"
          animation
          show-group-separator
        >
          <template #suffix>
            W+ <span class="unit">{{ $t('workplace.pecs') }}</span>
          </template>
        </a-statistic>
      </a-space>
    </a-grid-item>

    <a-grid-item :span="24">
      <a-divider class="panel-border" />
    </a-grid-item>
  </a-grid>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue';
  import { DataCountList } from '@/api/dashboard';
  // import { MessageRecord, MessageListType } from '@/api/message';
  const props = defineProps({
    dataCount: {
      type: Array as PropType<DataCountList>,
      required: true,
    },
  });
</script>

<style lang="less" scoped>
  .arco-grid.panel {
    margin-bottom: 0;
    padding: 16px 20px 0 20px;
  }
  .panel-col {
    padding-left: 43px;
    border-right: 1px solid rgb(var(--gray-2));
  }
  .col-avatar {
    margin-right: 12px;
    background-color: var(--color-fill-2);
  }
  .up-icon {
    color: rgb(var(--red-6));
  }
  .unit {
    margin-left: 8px;
    color: rgb(var(--gray-8));
    font-size: 12px;
  }
  :deep(.panel-border) {
    margin: 4px 0 0 0;
  }
</style>
