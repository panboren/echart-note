<template>
  <div>
    <el-select
      v-bind="$attrs"
      :model-value="modelValue"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入查询内容"
      :remote-method="remoteMethod"
      :loading="loading"
      @update:modelValue="input"
    >
      <el-option
        v-for="item in options"
        :key="item[valueKey]"
        :label="item[labelKey]"
        :value="item[valueKey]"
      />
    </el-select>
  </div>
</template>

<script setup>
import zpinyin from 'zpinyin'
const props = defineProps({
  modelValue:{ // value
    type: Array,
    default: ()=>[]
  },
  labelKey:{ // label de key
    type: String,
    default: 'label'
  },
  valueKey:{ // value de key
    type: String,
    default: 'value'
  },
  paramKey:{ // 参数 key
    type: String,
    default: 'value'
  },
  api:{ // 用api 获取  不用自己的data数据
    type: Function
  },
  data:{ // 用自己的数据，不用api 获取
    type: Array,
    default: ()=>[]
  },
  formatParam:{ // 过滤参数
    type: Function
  },
  formatData:{ // 过滤数据
    type: Function
  },
  lazy:{ // 是否只请求一次
    type: Boolean,
    default: true
  },
  isPinyin:{ // 是否拼音查询
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:modelValue'])
const list = ref([])
const options = ref([])
const value = ref([])
const loading = ref(false)

// 过滤
const remoteMethod = (query) => {
  if (query) {
    loading.value = true
    if(props.lazy) {

      let timer = setTimeout(() => {
        clearTimeout(timer)
        loading.value = false
        if(props.isPinyin) { // 用拼音模糊查询
          return seacrhPy(query)
        }
        options.value = list.value.filter((item) => {
          if(props.formatData) { // 自己过滤
            return props.formatData(item, query)
          }
          return item[props.labelKey].includes(query)
        })
      }, 200)
    }else{
      getData(query)
    }
  } else {
    options.value = []
  }
}
let userQuery = null
const seacrhPy = (query)=>{
  let keys = [props.labelKey] || ''
  if(!userQuery && list.value && list.value.length > 0) {
    userQuery = new zpinyin(list.value,keys)
  }
  let data = userQuery.query(query)
  options.value = data || []
}

// 获取数据
const getData = async(value)=>{
  // 参数
  let param = {[props.paramKey]: value}
  if(props.formatParam) {
    param = props?.formatParam(value)  || {}
  }
  console.log('param', param)
  let res =  await props.api(param) || {}
  list.value = res.data || []
}

const input = (val)=>{
  emits('update:modelValue', val)
}

onMounted( () => {
  if(props.api) {
    getData()
    return
  }
  if(props.data && props.data.length > 0) {
    list.value =  props.data || []
  }
})
</script>

<style scoped>

</style>
