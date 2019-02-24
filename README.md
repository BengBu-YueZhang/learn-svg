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



