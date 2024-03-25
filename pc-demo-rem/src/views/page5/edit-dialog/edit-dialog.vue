<template>
  <el-dialog
    :model-value="modelValue"
    center
    width="950px"
    :show-close="false"
    @update:modelValue="close"
  >
    <template #header="{ close }">
      <div class="edit-dialog-header">
        <div class="edit-dialog-title">
          编辑表单
        </div>
        <i-ep-close
          class="edit-dialog-icon"
          @click="close"
        />
      </div>
    </template>
    <div class="edit-dialog-body">
      <xf-form-list
        ref="formListRef"
        :columns="formColumn"
        :data="formData"
        :inline="true"
        label-width="150px"
      />
    </div>
    <template #footer>
      <div class="edit-dialog-body-footer">
        <el-button
          type="primary"
          @click="save"
        >
          提交
        </el-button>
        <el-button @click="reset">
          重置
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import {useMethods} from '@views/page5/edit-dialog/methods'

let props = defineProps({
  modelValue:{
    type: Boolean,
    default: false
  }
})

let emits = defineEmits(['update:modelValue', 'on-save'])
let {
  formListRef,
  formColumn,
  formData
} = useMethods()

const close = ()=>{
  emits('update:modelValue', false)
}
// 提交
const save = async()=>{
  if (!formListRef.value) return
  await formListRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', formData)
    } else {
      console.log('error submit!', fields)
    }
  })
  emits('on-save', formData)
}
// 重置
let reset = () => {
  if (!formListRef.value) return
  formListRef.value.reset()
}
</script>

<style scoped lang="scss">
.edit-dialog-header{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .edit-dialog-title{
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
  .edit-dialog-icon{
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #efefef;
    border-radius: 50%;
    color: #ccc;
    cursor: pointer;
    &:hover{
      color: #409EFF;
    }
  }
}
.edit-dialog-body{
  width: 100%;
}
.edit-dialog-body-footer{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
