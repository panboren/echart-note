
/*
*  更改切换主题
*   theme  =  dark light
* */
export function useMethods() {

  let searchColumns = [
    {
      id: 1,
      label: '姓名', // label
      key: 'value1', // 对应的属性名称
      component: 'el-input', // is 绑定的组件名称
      listeners: {
        // 事件
        input: (value) => {
          console.log('事件', value)
        }
      },
      attrs: {
        // 对应的v-bind= attrs
        clearable: true,
        placeholder: '请输入姓名',
        style: {
          width: '300px'
        }
      }
    },
    {
      id: 2,
      label: '兴趣',
      key: 'value2',
      component: 'el-select',
      options: [
        {
          label: '篮球',
          value: 1
        },
        {
          label: '排球',
          value: 2
        }
      ],
      listeners: {
        // 事件
        change: (value) => {
          console.log('change事件', value)
        }
      },
      attrs: {
        style: {
          width: '300px'
        },
        clearable: true,
        placeholder: '请选择兴趣'
      }
    },
    {
      id: 3,
      label: '身高', // label
      key: 'value3', // 对应的属性名称
      component: 'el-input', // is 绑定的组件名称
      listeners: {
        // 事件
        input: (value) => {
          console.log('事件', value)
        }
      },
      attrs: {
        // 对应的v-bind= attrs
        clearable: true,
        placeholder: '请输入身高',
        style: {
          width: '300px'
        }
      }
    },
    {
      id: 4,
      label: '体重',
      key: 'value4',
      component: 'el-input',
      listeners: {
        // 事件
        input: (value) => {
          console.log('change事件', value)
        }
      },
      attrs: {
        style: {
          width: '300px'
        },
        clearable: true,
        placeholder: '请输入体重'
      }
    },
    {
      id: 5,
      label: '生日', // label
      key: 'value5', // 对应的属性名称
      component: 'el-date-picker', // is 绑定的组件名称
      listeners: {
        // 事件
        change: (value) => {
          console.log('事件', value)
        }
      },
      attrs: {
        // 对应的v-bind= attrs
        clearable: true,
        placeholder: '请选择生日',
        type: 'date',
        style: {
          width: '300px'
        }
      }
    },
    {
      id: 6,
      label: '技能',
      key: 'value6',
      component: 'el-select',
      options: [
        {
          label: '技能1',
          value: 1
        },
        {
          label: '技能2',
          value: 2
        }
      ],
      listeners: {
        // 事件
        change: (value) => {
          console.log('change事件', value)
        }
      },
      attrs: {
        style: {
          width: '300px'
        },
        clearable: true,
        placeholder: '请选择技能'
      }
    },
    {
      id: 7,
      label: '上班时间', // label
      key: 'value7', // 对应的属性名称
      component: 'el-time-picker', // is 绑定的组件名称
      listeners: {
        // 事件
        change: (value) => {
          console.log('事件', value)
        }
      },
      attrs: {
        // 对应的v-bind= attrs
        clearable: true,
        placeholder: '请选择上班时间',
        arrowControl: true,
        style: {
          width: '300px'
        }
      }
    },
    {
      id: 8,
      label: '级联选择器',
      key: 'value8',
      component: 'el-cascader',
      attrs: {
        style: {
          width: '300px'
        },
        'show-all-levels':false,
        clearable: true,
        options: [
          {
            value: '第一层',
            label: '第一层',
            children: [
              {
                value: '第一层2',
                label: '第一层2',
                children: [
                  {
                    value: '第一层3',
                    label: '第一层3'
                  }
                ]
              },
              {
                value: '第一层22',
                label: '第一层22'
              }
            ]
          },
          {
            value: '第二层',
            label: '第二层',
            children: [
              {
                value: '第二层1',
                label: '第二层1',
                children: [
                  {
                    value: '第二层2',
                    label: '第二层2'
                  },
                  {
                    value: '第二层22',
                    label: '第二层22'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
  // 数据源
  let searchData = ref({
    value1: '',
    value2: '',
    value3: [],
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: ''
  })
  // data数据
  let tableData = ref([])

  // 列数据
  let tableColumns = ref([
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
      width: 500
    },
    {
      label: '爱好',
      prop: 'value6',
      showOverflowTooltip: true,
      align: 'center',
      headerAlign: 'center',
      width: 500
    },
    {
      label: '住址',
      prop: 'value7',
      showOverflowTooltip: true,
      align: 'center',
      headerAlign: 'center',
      width: 500
    },
    {
      label: '操作',
      fixed: 'right',
      prop: 'value8',
      align: 'center',
      headerAlign: 'center',
      slot: 'butSlot', // 插槽
      width: 300
    }
  ])
  // 分页
  let pages = ref({
    attr: {},
    pageIndex: 1, // 页数
    pageSize: 10, // 条数
    total: 100 // 总条数
  })
  let isShowEditDialog = ref(false)
  //  查询
  const search = (value)=>{
    console.log('search',value)
  }
  //  重置
  const reset = (value)=>{
    console.log('reset',value)
  }
  // 编辑
  const edit = (data)=>{
    isShowEditDialog.value = true
    let option = {
      'value1': '7477',
      'value2': 1,
      'value3': [
        '北京'
      ],
      'value4': '男',
      'value5': [
        '第一层',
        '第一层2',
        '第一层3'
      ],
      'value6': '2023-11-08T16:00:00.000Z',
      'value7': 'rgba(242, 10, 10, 1)',
      'value8': 2,
      'value9': 3,
      'value10': 14,
      'value11': true,
      'value12': ''
    }
    console.log(data)
  }
  // 查看
  const read = (data)=>{
    isShowEditDialog.value = true
    console.log('read',data)
  }
  // 删除
  const remove = (data)=>{
    isShowEditDialog.value = true
    console.log('remove',data)
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
  return {
    searchColumns,
    searchData,
    tableData,
    tableColumns,
    pages,
    edit,
    search,
    reset,
    read,
    remove,
    isShowEditDialog
  }
}
