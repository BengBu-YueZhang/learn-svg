## svg

### 入门

svg渲染顺序是从后往前的，越往后的元素优先级越高

```js

<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
</svg>
```

version, baseProfile指定了svg的版本。xmlns指定了命名空间

#### 坐标

svg的坐标系统同canvas中的坐标类似

![image](https://developer.mozilla.org/@api/deki/files/78/=Canvas_default_grid.png)

#### 像素

svg中的一像素对应屏幕中的一像素, 但是svg的画布可以放大和缩小

```js
// svg画布的尺寸为 200px * 200px
// viewBox 定义显示区域为 100 * 100
// svg会将100 * 100的区域放大成200 * 200的效果显示
// 所以放大了两倍

<svg width="200" height="200" viewBox="0 0 100 100">
</svg>
```

### 基本形状

#### 矩形

x, y 左上角坐标。width, height矩形的高度。rx, ry圆角的半径。

```js

<rect x="10" y="10" width="30" height="30"/>

<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

#### 圆形

cx, cy园心的坐标。r为园的半径

```js

<circle cx="25" cy="75" r="20"/>
```

#### 椭圆

rx长轴半径和ry短轴半径，cx, cy椭圆的中心点

```js

<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

#### 线条

两点的坐标

```js

<line x1="10" x2="50" y1="110" y2="150"/>
```

#### 折线

多组点的坐标的连线

```js

<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
```

#### 多边形

同折线类似，但不同的是多变形会进行自动的闭合处理

```js

<polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>
```

### 路径 path

路径的形状是通过属性d定义的。d的形式为"命令 + 参数"的形式。

例如, M 代表 move to 命令。移动点的坐标。"M 10 10"移动到10, 10的坐标。

命令可以分为大写字母和小写字母。大写字母为绝对定位**相对于原点**。小写字母使用的相对定位, **相对之前的点**

#### 常用属性

##### stroke

描边色

##### stroke-width

描边的宽度

##### stroke-linecap

描边的终点样式

![image](https://developer.mozilla.org/@api/deki/files/355/=SVG_Stroke_Linecap_Example.png)

##### stroke-linejoin

边与边的链接样式

![image](https://developer.mozilla.org/@api/deki/files/356/=SVG_Stroke_Linejoin_Example.png)

##### stroke-dasharray

虚线的样式

##### fill

填充色

#### 路径常用的命令

##### M

类似canvas中的moveTo

```js

<svg width="200px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">

  // 移动到(10, 10)
  <path d="M10 10"/>

</svg>
```

##### L

类似canvas中的lintTo, 之前的位置与L命令指定的坐标画一条线

##### H

H绘制水平线, 只需要x坐标的参数 "H 20", 绘制当前Y轴坐标和x坐标为20的水平线

##### V

V绘制垂直线, 只需要制定Y轴坐标

![image](https://i.loli.net/2019/02/20/5c6c2ecec07fe.png)

```js

// 绘制直角三角形

$('#app').append(`
  <svg width="200" height="200">
    <path d="M10 10 H 100 V 50"/>
  </svg>
`)
```

##### Z z

Z可以闭合路径, Z可以不区分大小写(path会自动的闭合路径)

##### C 三次贝塞尔

C 控制点1x 控制点1y 控制点2x 控制点2y x y

需要三组参数, 终点(指定x, y坐标, 起点为当前点的坐标)。以及两个控制点。**手动一点一点调还是很浪费时间的，可以事先在软件调好后，导出路径**

![image](https://developer.mozilla.org/@api/deki/files/159/=Cubic_Bezier_Curves.png)

##### S

S 命令一般需要跟在C命令和S命令的后面。**S命令的第一个控制点, 将会是C的第二个控制点的对称点**, 所以S命令只需要指定第二个控制点和终点即可

![image](https://developer.mozilla.org/@api/deki/files/363/=ShortCut_Cubic_Bezier.png)

##### Q 二次贝塞尔

Q 控制点1x 控制点1y 终点x 终点y

![image](https://developer.mozilla.org/@api/deki/files/326/=Quadratic_Bezier.png)

##### T

T和S命令类似, T命令需要跟在Q命令后面, T命令的控制点是Q的控制点的对称点。T命令只需要指定终点即可

![image](https://developer.mozilla.org/@api/deki/files/364/=Shortcut_Quadratic_Bezier.png)

##### A 弧形

> 弧形就是绘制椭圆形的一部分, 绘制弧形的需要的参数如下

- 当前的点(圆弧上的点, 可以使用M命令指定圆弧绘制的起始点)
- x轴半径
- y轴半径
- 圆弧的倾斜度
- 0(小角圆弧), 1(大角圆弧)
- 0(逆时方向), 1(顺时方向)
- 圆弧上另一个终点坐标 

###### 逆时针小角与大角的区别

```js
$('#app').append(`
  <svg width="325px" height="325px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="
          M 100 100
          A 45 45, 0, 0, 0, 145 145
          L 145 100
          Z
          "
        fill="blue"
      />
  </svg>
`)
```

![image](https://i.loli.net/2019/02/24/5c7238bc9d551.png)


```js

$('#app').append(`
  <svg width="325px" height="325px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="
          M 100 100
          A 45 45, 0, 1, 0, 145 145
          L 145 100
          Z
          "
        fill="blue"
      />
  </svg>
`)
```

![image](https://i.loli.net/2019/02/24/5c723995a7593.png)

###### 顺时针小角与大角的区别


```js

$('#app').append(`
  <svg width="325px" height="325px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="
          M 100 100
          A 45 45, 0, 0, 1, 145 145
          L 145 100
          Z
          "
        fill="blue"
      />
  </svg>
`)
```

![image](https://i.loli.net/2019/02/24/5c723d0a5179c.png)

```js

$('#app').append(`
  <svg width="325px" height="325px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="
          M 100 100
          A 45 45, 0, 1, 1, 145 145
          L 145 100
          Z
          "
        fill="blue"
      />
  </svg>
`)
```

![image](https://i.loli.net/2019/02/24/5c723ce48c361.png)


### 渐变色

#### 线性渐变 linearGradient

linearGradient标签需要在defs标签的内部, linearGradient默认的方向是水平方向的。可以指定x1，x2，y1, y2指定渐变的方向

```js

$('#app').append(`
  <svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="red"/>
          <stop offset="50%" stop-color="black" stop-opacity="0"/>
          <stop offset="100%" stop-color="blue"/>
        </linearGradient>
    </defs>
    <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient2)"/>
  </svg>
`)
```

#### 径向渐变 radialGradient

cx, cy 取 0 - 1 表示径向渐变的中心点的位置 (默认0.5)

r 半径 (默认为0.5)

fx, fy 为焦点的位置, 如果不设置焦点，默认和cx，cy一样

cx，cy, r 定义了径向渐变的范围

fx, fy 则是渐变的中心

![image](https://developer.mozilla.org/files/727/SVG_Radial_Grandient_Focus_Example.png)

```js

$('#app').append(`
  <svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="Gradient"
            cx="0.5" cy="0.5" >
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
    </defs>
    <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient)"/>
  </svg>
`)
```

![image](https://i.loli.net/2019/02/24/5c724c6921fff.png)

##### spreadMethod

定义尚未被填充的区域的颜色的行为

1. pad，用100%颜色填充剩下的空间

2. reflect, reflect进行反向渐变，100%逐渐过度到0%的颜色

3. repeat，100%直接回到最初的颜色，进行渐变

### 图案 Pattern

pattern定义可以复用用来填充的svg图案。

![image](https://i.loli.net/2019/02/24/5c72542d1bb74.png)

```js

$('#app').append(`
  <svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
        <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
        <circle cx="15" cy="15" r="15" fill="green" fill-opacity="0.5"/>
      </pattern>
    </defs>
    <rect width="120" height="120" fill="url(#Pattern)"/>
  </svg>
`)
```

### 文字

svg内部使用text设置文字, [文档](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Texts), 其他文字样式的属性可以参考。

#### tspan

可以对一大段文字中的一部分文字做特殊的样式处理

#### textPath

文字可以按照特定的路径排列

```js

$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path id="my_path" d="M 20,20 C 40,40 80,40 200,20" fill="rgba(0, 0, 0, 0)" />
  <text>
    <textPath xlink:href="#my_path">This text follows a curve.</textPath>
  </text>
</svg>
`)
```

### 基础变形

#### <g>

g标签可以对一组svg元素进行属性的赋值

```js
// 一组rect都会填充蓝色

$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g fill="blue">
    <rect x="0" y="0" width="10" height="10" />
    <rect x="20" y="0" width="10" height="10" />
  </g>
</svg>
`)
```

#### transform

#### 平移 translate

```js

// 平移到点100, 100

$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g fill="blue" transform="translate(100, 100)">
    <rect x="0" y="0" width="10" height="10" />
  </g>
</svg>
`)
```

#### 旋转 rotate

指定角度旋转svg元素

#### 缩放 scale

#### SVG嵌套SVG

可以形成两套不同的坐标系统

```js

// 内部的svg坐标系统是放大两倍的存在

$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect x="100" y="100" width="50" height="50" />
  <svg width="100" height="100" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" />
  </svg>
</svg>
`)
```

### 剪切和遮罩

#### clipPath

svg将会把clipPath覆盖的内容保存下来，clipPath外面的内容将不会被渲染

![image](https://i.loli.net/2019/02/24/5c7290ecece85.png)

```js
// 只会保留100 * 100 里的内容, 1 / 4 圆

$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="100" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
`)
```

#### 遮罩

mask属性会继承mask的alpha值

```js

$('#app').append(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="white" stop-opacity="0" />
      <stop offset="1" stop-color="white" stop-opacity="1" />
    </linearGradient>
    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="yellow"  />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>
`)
```

#### opacity

- opacity 整体的透明度
- fill-opacity 填充的透明度
- stroke-opacity 描边的透明度

---

*👆 上面就是mdn上svg文档的大致内容, 关于动画, 动态svg, 动画均没有涉及, 接下来是www.w3.org的内容，因为是全[英文的文档](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#filters), 写的时候可能有些偏差, 大家可以直接查看英文文档*

---

### 滤镜

待更新……

### SMIL动画

SMIL动画使用"animate"标签实现

```js
// 水波纹效果

$('#app').append(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <circle cx="50" cy="50" r="10" opacity="1"  fill="grey">
      <animate attributeName="r" fill="freeze" dur="0.4s" 
      values="10; 50;"/>
      <animate attributeName="opacity" fill="freeze" dur="0.4s" 
      values="1; 0;"/>
   </circle>
</svg>
`)

```

1. attributeName, animate将会修改父级
2. dur, 动画持续的时间
3. repeatCount: indefinite 动画将会持续重复执行, 设置成数字表示动画将会执行几次
4. values 动画value的变化
5. begin 动画开始
6. end 动画结束
7. fill: freeze, 动画停在最后位置，而不是恢复到第一个位置

#### 基本的SMIL动画

SVG动画默认在动画结束后会恢复到开始的状态，可以设置fill: freeze, 动画停在最后位置，而不是恢复到第一个位置。

```js

$('#app').append(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <rect x="10%" y="20" height="100" width="50" fill="blue">
      <animate attributeName="x" dur="4" values="10%;30%;90%;30%;10%" />
   </rect>
</svg>
`)
```

##### values的设置

values="10%;90%;10%" 和 values="10%;50%;90%;50%;10%" 是等价的

###### values="10%;90%;10%", values="10%;50%;90%;50%;10%"

1. dur设置为4s, 动画在4s / 2时到达90%的位置, 10% - 90% 花费时间2s
2. 动画在4s / 4 到达50%位置, 50%位置是10% - 90%的中间位置, 所以速度和values="10%;90%;10%"的设置是一样的

###### values="10%;30%;90%;30%;10%"

动画在4s / 4 到达30%位置, 4s / 2到达90%的位置, 所以前1s速度和后1s的速度是不一致的

#### 多个动画和时间

可以设置多个animate标签，同时修改多个svg的属性

#### keyTimes

values值默认对应是均分dur时间的values="10%;90%;10%", 默认对应的时间的时刻是为dur * 0, dur * 0.5, dur * 1

keyTimes可以打破这种均分的dur的间隔

```js

// 5 ~ 95% 花费 dur * 0.1 的时间
// 95% ～ 5% 花费 dur * 0.9 的时间

$('#app').append(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<circle cx="50%" cy="20" r="5%" fill="blue">
   <animate
      attributeName="cx"
      dur="3"
      values="5%; 95%; 5%" 
      repeatCount="indefinite"
      keyTimes="0; .1; 1"
   />
</circle>
</svg>
`)
```

#### keySplines

keySplines可以控制运动的速率, 🐶*这一块我没有太看明白，大概是用贝塞尔曲线的形式控制速率*

#### 多值属性的动画

animate可以对多属性的值添加动画, 比如path中的d属性。但是动画属性中相关联动画属性的值的数量要与path中d属性路径的数量一致。如果路径在动画开头有17个点，则整个动画中应该有17个点。

```js

$('#app').append(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <path d="
      M 100 100
      A 45 45, 0, 1, 1, 190 100
      L 145 100
      Z
      "
      fill="rgba(0, 0, 0, 0)"
      stroke="rgb(0, 0, 0)"
   >
   <animate attributeName="d" dur="10s" repeatCount="indefinite" values=
      "
      M 100 100
      A 45 45, 0, 1, 1, 190 100
      L 145 100
      Z
      ;
      M 100 100
      A 45 45, 0, 1, 1, 145 145
      L 145 100
      Z
      ;
      M 100 100
      A 45 45, 0, 1, 1, 190 100
      L 145 100
      Z
      "
   />
   </path>
</svg>
`)

```

#### 遵循路径运动 animateMotion

使用animateMotion可以实现跟随path的动画

```js

$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <path id="curve" stroke="black" fill="none" stroke-width="5"
   d="M 110,200 C 300,130 400,350 450,150 500,-50 -90,270 110,200" />

   <circle cx="0" cy="-5" r="20"fill="blue">
      <animateMotion dur="2s" rotate="auto" repeatCount="indefinite" >
         <mpath xlink:href="#curve"/>
      </animateMotion>
   </circle>
</svg>
`)
```

mpath中的xlink:href指定具体动画跟随的路径

rotate: auto, 会在绕路径移动的时候，进行旋转， 使其方向与路径的方向平行

值得注意的一点**circle的cx="0",cy="-5", 不在是相对与整个画布的偏移， 而是变为了相对于路径偏移**

#### 转换动画

对于transform的变化，动画标签学习需要使用animateTransform的标签

```js

// rotate需要指定旋转的中心点
$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<ellipse cx="280" cy="175" rx="100" ry="50" fill="blue">
<animateTransform attributeName="transform" type="rotate" dur="2.5" 
 values="360 280 175; 0 280 175" to="0" repeatCount="indefinite"/>
</ellipse>
</svg>
`)
```

##### 设置多个Transform属性的动画

需要为animateTransform标签设置additive="sum", 阻止以前的动画被忽略

```js

$('#app').append(`
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <ellipse cx="216" cy="242" rx="160" ry="219" fill="#964" id="plane">
   </ellipse>
   <animateTransform attributeName="transform" type="translate" dur="4s" 
   values="0,0;-110,-140;0,0" repeatCount="indefinite" xlink:href="#plane"/>
   <animateTransform attributeName="transform" additive="sum" type="scale" 
   dur="4s" values="1;1.5;1" repeatCount="indefinite" xlink:href="#plane"/>
   <animateTransform attributeName="transform" additive="sum" type="rotate" 
   dur="7s" values="0,216 242;360 216 242" repeatCount="indefinite" xlink:href="#plane"/>
</svg>
`)
```


#### 非数字属性的动画

#### 使用时间或事件启动动画

#### 停止动画


### 动态SVG



