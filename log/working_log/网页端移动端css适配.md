## 分辨率

*宽度 × 高度*<br/>
*屏幕一定的情况下，分辨率越大，单个像素所占的屏幕面积越小*

## （1）手机的分辨率

手机屏幕像素一般比电脑还要多，<br/>
因此如果手机按照原始分辨率来显示网页，<br/>
那么网页在手机上会显得非常的小，不适合阅读

**乔布斯：给手机设置一个视口宽度 `980px`**<br/>
因此手机端显示浏览器的宽度一般是 `980px`

在谈及手机分辨率时，我们一般用 **设备像素（分辨率）** 和 **设备独立像素** 来衡量<br/>
[链接：设备像素（分辨率）和设备独立像素](https://learnku.com/articles/7309/what-is-the-independent-pixel-resolution-and-device-pixel-of-the-device-for-a-mobile-phone)

## （2）如何在获取浏览器视口参数？

### 视口宽度
`console.log(XXX.document.documentElement.clientWidth)`

### 手机像素比 dpr（device pixel ratio）
*设备像素比（dpr） = 设备像素（分辨率）/设备独立像素（屏幕尺寸）*
`console.log(window.devicePixelRatio)`

## （3）自定义移动端浏览器视口

在 html 文件中，向 `head` 标签中加入 `meta` 标签

`<meta name="viewport content="width:"300px">`<br/>
// 将视口宽度固定为300px

`<meta name="viewport content="width=device-width, initial-scale=1.0">`<br/>
// width=device-width 约束视口宽度<br/>
// initial-scale=1.0 初视口宽度是1.0倍<br/>
// minimum-scale=1.0 最小缩放比例为1.0倍<br/>
// maximum-scale=10.0 最大缩放比例为10.0倍<br/>
// user-scalable=no 不允许用户进行缩放（默认为yes）