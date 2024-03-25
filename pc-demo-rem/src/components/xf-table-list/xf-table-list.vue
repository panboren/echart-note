<template>
  <el-auto-resizer>
    <template #default="{ height, width }">
      <el-table
        ref="tableRef"
        :data="data"
        :width="width"
        :height="height - pageHeight"
        v-bind="$attrs"
      >
        <el-table-column
          v-for="item in columns"
          v-bind="item"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
        >
          <template #default="{ row = {}, $index }">
            <span v-if="item.type === 'index'">{{
              item?.index ? item?.index($index) : $index + 1
            }}</span>
            <el-input
              v-else-if="isEdit"
              v-model="row[item.prop]"
              style="width: 100%"
              placeholder="请输入"
            />
            <slot
              v-if="item.slot"
              :name="item.slot"
              :scope="{ item, row, $index }"
            />
            <span v-else>{{ row[item.prop] }}</span>
          </template>
        </el-table-column>
        <template #empty>
          <div class="flex items-center justify-center h-100%">
            <el-empty description="没有数据" />
          </div>
        </template>
      </el-table>
      <!--  分页器  -->
      <div
        v-if="showPage"
        class="pagination-main"
        :style="{ height: pageHeight + 'px' }"
      >
        <el-pagination
          v-bind="page.attr"
          v-model:page-size="page.pageSize"
          v-model:current-page="page.pageIndex"
          background
          hide-on-single-page
          layout="prev, pager, next"
          :total="page.total"
          @current-change="handleCurrentChange"
        />
      </div>
    </template>
  </el-auto-resizer>
</template>
<script setup>
let props = defineProps({
  showPage: {
    // 是否显示page
    type: Boolean,
    default: false
  },
  isEdit: {
    // 是否显示编辑
    type: Boolean,
    default: false
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
  },
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  pageHeight: {
    type: Number,
    default: 50
  }
})
let emit = defineEmits(['on-change-page'])
let tableRef = ref(null)
let page = ref(props.pages)
watch(
  () => props.columns,
  (n) => {
    if (n && n.length > 0) {
      nextTick(() => {
        if (tableRef.value) {
          tableRef.value.doLayout()
        }
      })
    }
  }
)
watch(
  () => props.pages,
  (n) => {
    page.value = n
  }
)
function handleCurrentChange() {
  emit('on-change-page', page.value)
}
</script>

<style scoped lang="scss">
.pagination-main {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
