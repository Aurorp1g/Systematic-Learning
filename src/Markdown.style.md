# Markdown 效果展示

## 概述

本文展示 Markdown 各种语法元素的实际渲染效果，帮助你直观了解 Markdown 的呈现方式。

---

## 章节标题

一级标题 `#` 
二级标题 `##`
三级标题 `###`
四级标题 `####`
五级标题 `#####`
六级标题 `######`

---

## 段落

这是第一段。

这是第二段，段落之间需要空行分隔。

这是第一段末尾的换行示例  
实现段内换行（行末加两个空格）

---

## 强调

*斜体（单个星号）*

_斜体（单个下划线）_

**粗体（双星号）**

__粗体（双下划线）__

***粗体斜体（三星号）***

~~删除线~~

---

## 代码

### 行内代码

这是行内代码 `const fn = () => {}` 示例，代码在句子中间也能正常使用。

### 代码块

**Python：**
```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# 计算前10个斐波那契数
for i in range(10):
    print(fibonacci(i))
```

**JavaScript：**
```javascript
const arr = [1, 2, 3, 4, 5];

const doubled = arr.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

**HTML：**
```html
<div class="container">
    <h1>Hello World</h1>
    <p>这是一个段落</p>
</div>
```

---

## 列表

### 无序列表

- 苹果
- 香蕉
- 橙子
  - 脐橙
  - 血橙
  - 夏橙
- 葡萄

### 有序列表

1. 第一步
2. 第二步
3. 第三步

### 任务列表

- [x] 安装 Node.js
- [x] 安装 Python
- [ ] 配置环境变量
- [ ] 运行示例项目

---

## 链接

[百度](https://www.baidu.com)

[Google](https://www.google.com "Google 搜索引擎")

参考式链接：[GitHub][github] 是一个代码托管平台

[github]: https://github.com "GitHub 首页"

---

## 图片

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Markdown Logo")

---

## 表格

### 简单表格

| 语言 | 年份 | 设计者 |
|:---|:---:|:---|
| Python | 1991 | Guido van Rossum |
| JavaScript | 1995 | Brendan Eich |
| Rust | 2010 | Graydon Hoare |

### 对齐方式

| 左对齐 | 居中 | 右对齐 |
|:---|:---:|---:|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |

---

## 引用

> 这是一段引用
> 可以包含多行

> 嵌套引用
>> 二级嵌套
>>> 三级嵌套

> 鲁迅说过：
> 
> "真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。"

---

## 水平线

上面是内容

---

下面也是内容

---

## 脚注

Markdown[^1] 是一种轻量级标记语言。

[^1]: 由 John Gruber 和 Aaron Swartz 于 2004 年创建

---

## HTML 嵌入

<div align="center">
  <h3>这是 HTML 居中标题</h3>
  <p>可以嵌入任意 HTML</p>
</div>

<span style="color: #2196F3">蓝色文字</span>

<span style="color: #4CAF50">绿色文字</span>

---

## 任务列表（进阶）

### 项目进度

- [x] 需求分析
- [x] 系统设计
  - [x] 数据库设计
  - [x] API 设计
- [ ] 编码实现
- [ ] 测试
- [ ] 部署

### 购物清单

- [ ] 水果
  - [ ] 苹果 5斤
  - [ ] 香蕉 3斤
- [ ] 蔬菜
  - [ ] 西红柿 2斤
  - [ ] 黄瓜 3根

---

## 代码高亮示例

### 行号显示

```javascript {linenos=table}
function calculate_sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(calculate_sum([1, 2, 3, 4, 5]));
```

### 强调行

```python {highlight=3}
def process_data(data):
    result = []  # 这行会被高亮
    for item in data:
        result.append(item * 2)
    return result
```

---

## Emoji 表情

基础表情：:smile: :heart: :thumbsup: :rocket:

动物：:cat: :dog: :bird: :fish:

食物：:apple: :pizza: :coffee: :cake:

> 注：部分平台可能需要启用 Emoji 支持

---

## 参考

- 更多语法请参考 [Markdown 标记规范](./Markdown 标记规范.html)
- [CommonMark 规范](https://commonmark.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)