<template>
  <el-container style="height: 100%">
    <el-main>
      <div class="table-box">
        <!-- table-box 最外层定义好宽高，里面会自适应       -->
        <xf-table-list
          :data="tableData"
          :columns="columns"
          :show-page="true"
          :pages="pages"
          @on-change-page="changePage"
        >
          <!--  插槽        -->
          <template #value2Slot="{ scope }">
            <el-button type="primary">
              {{ scope.row[scope.item.prop] }}
            </el-button>
          </template>
        </xf-table-list>
      </div>
    </el-main>
  </el-container>
</template>
<script setup>
// 分页
let pages = ref({
  attr: {},
  pageIndex: 1, // 页数
  pageSize: 10, // 条数
  total: 100 // 总条数
})
// 列数据
let columns = ref([
  {
    type: 'index',
    label: '序号',
    width: 100,
    align: 'center',
    headerAlign: 'center'
  },
  {
    label: '姓名',
    prop: 'value1',
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
    width: 200
  },
  {
    label: '身高',
    prop: 'value2',
    align: 'center',
    headerAlign: 'center',
    width: 200,
    slot: 'value2Slot' // 插槽
  },
  {
    label: '体重',
    prop: 'value3',
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
    width: 200
  },
  {
    label: '血型',
    prop: 'value4',
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
    width: 200
  },
  {
    label: '性别',
    prop: 'value5',
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
    width: 200
  },
  {
    label: '爱好',
    prop: 'value6',
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
    width: 300
  },
  {
    label: '住址',
    prop: 'value7',
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center'
  }
])
// data数据
let tableData = ref([])
// 切换分页
let changePage = (page) => {
  console.log(page)
}
onMounted(() => {
  for (let i = 0; i < 100; i++) {
    let item = {
      id: i,
      value1: '小明' + i,
      value2: '120cm',
      value3: '120kg',
      value4: 'O',
      value5: '男',
      value6: '篮球，足球,爬山。看书',
      value7: '深圳市南山区粤海大道18号'
    }
    tableData.value.push(item)
  }
})
</script>
<style scoped>
.table-box {
  width: 100%;
  height: 800px;
}
</style>
