three-room three 3d房间
echart 笔记
虚拟滚动-数据量大，校验table



前端PC端页面，适配解决方案
代码正常写，在最下面引入此js代码。完美解决适配问题！

代码如下：

const baseWidth = 1920;
const baseHeight = 1080;
let timer = null;
let calcScale = function () {
    let windowInnerWidth = window.innerWidth;
    let windowInnerHeight = window.innerHeight;
    // let ratioW = baseWidth / windowInnerWidth;
    let ratioW = windowInnerWidth / baseWidth;
    // let ratioH = baseHeight / windowInnerHeight;
    let ratioH = windowInnerHeight / baseHeight;
    console.log(windowInnerWidth, windowInnerHeight)
    document.body.style.width = baseWidth + 'px';
    document.body.style.height = baseHeight + 'px';
    document.body.style.transformOrigin = 'left top';
    document.body.style.transform = `scale(${ratioW})`;
}
calcScale();
window.onresize = function () {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(calcScale, 300)
}
注：(js代码中有用到css3属性，低版本ie可能不支持)
