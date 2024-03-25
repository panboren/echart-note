<template>
  <div class="form-table">
    <div
      ref="formMainRef"
      class="form-table_form"
    >
      <xf-form-list
        ref="formListRef"
        :columns="searchColumns"
        :data="searchData"
        :inline="true"
        :action-but="actionBut"
        :show-total="showFormTotal"
      />
    </div>
    <div
      class="form-table_table"
      :style="{ height: `calc(100% - ${formHeight}px)`}"
    >
      <xf-table-list
        :data="tableData"
        :columns="tableColumns"
        :show-page="true"
        :pages="pages"
        @on-change-page="changePage"
      >
        <!-- 插槽-->
        <template
          v-for="(item,index) in slotOption"
          :key="item+''+index"
          #[item]="scope"
        >
          <slot
            :name="item"
            :scope="scope?.scope"
          />
        </template>
      </xf-table-list>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  searchColumns:{
    type: Array,
    default: ()=>[]
  },
  searchData:{
    type: Object,
    default: ()=> ({})
  },
  showFormTotal:{
    type: Number,
    default: 4
  },
  tableData:{
    type: Array,
    default: ()=>[]
  },
  tableColumns:{
    type: Array,
    default: ()=>[]
  },
  pages: {
    type: Object,
    default: () => {
      return {
        attr: {},
        pageIndex: 1, // 页数
        pageSize: 10, // 条数
        total: 0 // 总条数
      }
    }
  }
})
const emits = defineEmits(['on-search', 'on-reset', 'on-change-more', 'on-change-page'])
const slotOption = computed(()=>{
  return props.tableColumns.map((item)=>item.slot)

})
let actionBut = ref([
  {
    type: 'more',
    label: '更多',
    fn: (data)=>{
      changeMore()
      emits('on-change-more', data)
    }
  },
  {
    type:'primary',
    label: '查询',
    fn: (data)=>{
      emits('on-search', data)
    }
  },
  {
    label: '重置',
    type: 'primary',
    plain: true,
    fn: (data)=>{
      reset()
      emits('on-reset', data)
    }
  }
])
//  form
let formListRef = ref(null)
let formMainRef = ref(null)
let formHeight = ref(60)


// 切换分页
let changePage = (page) => {
  console.log(page)
}
// 出发更多
const changeMore = ()=>{
  nextTick(()=>{
    // 判断 form 的高度
    let {clientHeight} = formMainRef.value || {}
    formHeight.value = clientHeight
  })
}



let reset = () => {
  Object.keys(props.searchData).forEach((key)=>{
    props.searchData[key] = ''
  })
  formListRef.value.reset()
}

onMounted(() => {
  changeMore()
})

</script>
<style scoped lang="scss">
.form-table{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .form-table_form{
    padding-top: 20px;
    box-sizing: border-box;
  }
  .form-table_table{
    flex: 1;
  }
}
</style>
