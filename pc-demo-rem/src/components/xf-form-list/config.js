/*
 * @ description:
 * @ author: panboren
 * @ created_at: 2023/11/18 12:47
 * @ QQ: 3248874747
 */
import {
  ElUpload,
  ElTransfer,
  ElTimeSelect,
  ElTimePicker,
  ElSelectV2,
  ElRadioButton,
  ElAutocomplete,
  ElInputNumber,
  ElColorPicker,
  ElDatePicker,
  ElCascader,
  ElRadio,
  ElRadioGroup,
  ElInput,
  ElSwitch,
  ElSlider,
  ElSelect,
  ElCheckboxGroup,
  ElCheckbox,
  ElRate
} from 'element-plus'
import XfSelectGet from '@components/xf-select-get/xf-select-get.vue'

export let componentOption = {
  'xf-select-get': XfSelectGet,
  'el-autocomplete': ElAutocomplete,
  'el-cascader': ElCascader,
  'el-checkbox': ElCheckbox,
  'el-checkbox-group': ElCheckboxGroup,
  'el-color-picker': ElColorPicker,
  'el-radio-group': ElRadioGroup,
  'el-radio-button': ElRadioButton,
  'el-date-picker': ElDatePicker,
  'el-input': ElInput,
  'el-input-number': ElInputNumber,
  'el-radio': ElRadio,
  'el-rate': ElRate,
  'el-select': ElSelect,
  'el-select-v2': ElSelectV2,
  'el-slider': ElSlider,
  'el-switch': ElSwitch,
  'el-time-picker': ElTimePicker,
  'el-time-select': ElTimeSelect,
  'el-transfer': ElTransfer,
  'el-upload': ElUpload
}
