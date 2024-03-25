/*
 * 保存小数xxx位
 * param
 * num 当前值  123
 * to 保持多少位  默认2位小数
 * dep 不是数字时候的默认值  '-'
 * */

export function toFixed(num, to = 2, dep = '-') {
  if (num === null || num === undefined || num === '--' || num === '-') return dep
  num = parseFloat(num)
  const n = 10 ** to
  if (isNaN(num)) {
    return dep
  }
  return Math.floor(num * n) / n
}

/*
 * 获取image url
 * param
 * name 图片名称
 * type 图片类型
 * 当前文件夹
 * const getImageUrl = (name, type = 'png')=> {
  return new URL(`./image/${name}.${type}`, import.meta.url).href
}
* */
export function getImageUrl(name, type = 'png') {
  return new URL(`../assets/image/${name}.${type}`, import.meta.url).href
}

/*
 *  获取数组总数
 *   ary 当前数组
 *   key ary数组的属性值
 * */
export function getTotal(ary = [], key) {
  if (!key || ary.length <= 0) {
    return 0
  }
  return ary.reduce((pre, next) => {
    let num = next[key] || 0
    num = parseFloat(num)
    if (isNaN(num)) {
      num = 0
    }
    return pre + num
  }, 0)
}

/*
 *  防抖
 *
 * */
export function debounce(fn, wait) {
  let timer = null
  // eslint-disable-next-line func-names
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments)
    }, wait)
  }
}
