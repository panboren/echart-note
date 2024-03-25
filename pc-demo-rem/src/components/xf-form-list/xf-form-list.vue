<template>
  <!--     v-on="$listeners"-->
  <el-form
    ref="formRef"
    :model="data"
    label-width="120px"
    v-bind="$attrs"
  >
    <el-form-item
      v-for="(item, index) in columns"
      v-show="showTotal <=0 ? true : isMore || showTotal && index < showTotal "
      v-bind="item.attrs"
      :key="item.key + '-' + index"
      :label="item.label"
    >
      <el-select
        v-if="item?.component?.name === 'ElSelect' || item.component === 'el-select'"
        v-model="data[item.key]"
        v-bind="item.attrs"
        v-on="item.listeners || {}"
      >
        <el-option
          v-for="it in item.options"
          v-bind="item.attrs"
          :key="it.value"
          :label="it.label"
          :value="it.value"
        />
      </el-select>
      <!--  插槽    -->
      <slot
        v-else-if="item.slot"
        :name="item.slot"
        :scope="{ item, data }"
      />
      <component
        :is="componentOption[item.component] || item.component"
        v-else-if="item.children && item.children.length > 0"
        v-model="data[item.key]"
        :data="data"
        v-bind="item.attrs"
        v-on="item.listeners || {}"
      >
        <component
          :is="componentOption[child.component] || child.component"
          v-for="(child, cIndex) in item.children || []"
          v-bind="child"
          :key="'child-' + cIndex"
          :data="data"
        />
      </component>
      <component
        :is="componentOption[item.component] || item.component"
        v-else
        v-model="data[item.key]"
        :data="data"
        v-bind="item.attrs"
        v-on="item.listeners || {}"
      />
    </el-form-item>
    <!--  按钮模块  -->
    <el-form-item v-if="actionBut&&actionBut.length>0">
      <template
        v-for="(item,index) in actionBut"
        :key="item.id+'_'+index"
      >
        <div
          v-if="item.type==='more'"
          class="more"
          @click="showMore(item)"
        >
          <i class="more-icon" />
          <span class="more-label">{{ item.label }}</span>
        </div>
        <el-button
          v-else
          v-bind="item"
          @click="item?.fn(data)"
        >
          {{ item.label }}
        </el-button>
      </template>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { componentOption } from './config'
const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  },
  data: {
    type: Object,
    default: () => ({})
  },
  showTotal: {
    type: Number,
    default: 0
  },
  actionBut:{
    type: Array,
    default: () => []
  }
})
let emits = defineEmits(['on-change-more', 'on-search'])
let formRef = ref(null)

// 展示更多
let isMore = ref(false)
const showMore = (item)=>{
  isMore.value = !isMore.value
  item?.fn(props.data)
  emits('on-change-more')
}
const validate = (cb) => {
  return formRef.value?.validate(cb)
}
const reset = () => {
  console.log('reset')
  formRef.value?.resetFields()
}
onMounted(() => {
  reset()
})
defineExpose({
  validate, // 验证
  reset // 重置
})
</script>

<style scoped lang="scss">
.more {
  width: 60px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    .more-label {
      color: #0ebbfa;
    }
  }
  .more-icon {
    margin-right: 5px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('./image/right.png') no-repeat;
    background-size: 100% 100%;
  }
  .more-label {
    font-size: 12px;
    color: #626262;
  }
}
</style>
