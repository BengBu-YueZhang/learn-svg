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

#### 基本形状
