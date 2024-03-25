<template>
  <el-select
    :model-value="modelValue"
    placeholder="placeholder"
    @update:modelValue="input"
  >
    <el-option
      v-for="item in optionsList"
      :key="item[valueKey]"
      :label="item[labelKey]"
      :value="item[valueKey]"
    />
  </el-select>
</template>
<script setup>
const props = defineProps({
  modelValue:{
    type: [String,Number],
    default:''
  },
  labelKey:{
    type: String,
    default: 'label'
  },
  valueKey:{
    type: String,
    default: 'value'
  },
  api:{
    type: Function,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])
let optionsList = ref([])


const input = (value)=>{
  console.log(value)
  emits('update:modelValue', value)
}

onMounted(async ()=>{
  let api = props.api
  if(api) {
    let res = await api()
    optionsList.value = res?.data || []
  }

})
</script>

<style scoped lang="scss">

</style>
