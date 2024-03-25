import xss from 'xss'

const myxss = new xss.FilterXSS({
  onIgnoreTagAttr(tag, name, value) {
    if (name === 'style') {
      return `${name}="${xss.escapeAttrValue(value)}"`
    }
    return null
  }
})

// xss 指令   v-xss="html"
const directives = {
  xss: {
    created(el, binding) {
      el.innerHTML = myxss.process(binding.value)
    },
    beforeUpdate(el, binding) {
      el.innerHTML = myxss.process(binding.value)
    }
  }
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.use((Vue) => {
        Vue.directive(key, directives[key])
      })
    })
  }
}
