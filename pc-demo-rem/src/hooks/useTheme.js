
/*
*  更改切换主题
*   theme  =  dark light
* */
export function useTheme() {
  let theme = ref('')
  const change = (newTheme = 'light', oldTheme)=>{
    localStorage.setItem('theme-color', newTheme)
    document.documentElement.setAttribute('theme', newTheme)
    document.querySelector('html')?.classList.remove(oldTheme)
    document.querySelector('html')?.classList.add(newTheme)
    theme.value = newTheme
  }
  watch(()=>theme.value, (newTheme,oldTheme)=>{
    nextTick(()=>{
      let localTheme = localStorage.getItem('theme-color')
      if(!oldTheme && localTheme) {
        change(localTheme)
      }else{
        change(newTheme,oldTheme)
      }
    })
  }, {
    immediate: true
  })
  // 通过返回值暴露所管理的状态
  return {
    theme
  }
}
