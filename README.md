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

