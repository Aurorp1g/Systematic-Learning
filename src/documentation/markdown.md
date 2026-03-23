# Markdown 标记规范

## 概述

Markdown 是由 John Gruber 和 Aaron Swartz 共同设计的一种轻量级标记语言。它的设计目标是让人们能够使用易于阅读、易于撰写的纯文本格式进行编写，随后可以转换为 HTML 或其他格式。

Markdown 的语法简洁明了，学习成本低，目前已广泛应用于 GitHub、Reddit、Stack Overflow 等平台。

本文档介绍 Markdown 的基本语法规则。


## 章节标题

Markdown 支持六级标题，使用 `#` 符号表示，`#` 的数量表示标题级别。

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

渲染效果：

## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

本章节介绍 Markdown 的章节标题语法。

## 段落与换行

段落之间需要用空行分隔。在一行末尾添加两个或以上空格再加回车，可以实现段内换行。

```markdown
这是第一段。

这是第二段。

这是第一段末尾的换行示例  
实现段内换行
```

---

## 强调与斜体

使用 `*` 或 `_` 包裹文本可实现斜体，使用 `**` 或 `__` 包裹可实现粗体。

| 语法 | 效果 |
|:---|:---|
| `*斜体*` | *斜体* |
| `_斜体_` | _斜体_ |
| `**粗体**` | **粗体** |
| `__粗体__` | __粗体__ |
| `***粗体斜体***` | ***粗体斜体*** |

---

## 删除线与下划线

```markdown
~~删除线~~

<u>下划线</u>
```

渲染效果：

~~删除线~~

<u>下划线</u>

---

## 代码

### 行内代码

使用反引号 `` ` `` 包裹代码。

```markdown
这是行内代码 `console.log('Hello')` 示例
```

### 代码块

使用三个反引号 ``` ` ``` 包裹代码，并指定语言（可选）。

<pre>
```python
def hello():
    print("Hello, World!")
```
</pre>

渲染效果：

```python
def hello():
    print("Hello, World!")
```

---

## 列表

### 无序列表

使用 `-`、`+` 或 `*` 开头。

```markdown
- 第一项
- 第二项
  - 二级列表
- 第三项
```

渲染效果：

- 第一项
- 第二项
  - 二级列表
- 第三项

### 有序列表

使用数字加句点开头。

```markdown
1. 第一项
2. 第二项
3. 第三项
```

渲染效果：

1. 第一项
2. 第二项
3. 第三项

### 任务列表

```markdown
- [x] 已完成任务
- [ ] 未完成任务
- [ ] 另一个任务
```

渲染效果：

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 另一个任务

---

## 链接

### 普通链接

```markdown
[链接文字](https://www.example.com)
```

### 带标题的链接

```markdown
[链接文字](https://www.example.com "可选标题")
```

### 参考式链接

```markdown
[Google][google] 是一个搜索引擎

[google]: https://www.google.com "Google 搜索"
```

---

## 图片

```markdown
![替代文字](图片URL "可选标题")
```

```markdown
![Markdown Logo](https://markdown-here.com/img/logo-2015/austin.png "Markdown Logo")
```

---

## 表格

使用 `-` 分隔表头和表体，使用 `|` 分隔列。

```markdown
| 左对齐 | 居中 | 右对齐 |
|:---|:---:|---:|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |
```

渲染效果：

| 左对齐 | 居中 | 右对齐 |
|:---|:---:|---:|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |

---

## 引用

使用 `>` 开头，可以嵌套使用。

```markdown
> 这是一段引用
> 可以多行

> 嵌套引用
>> 二级嵌套
```

渲染效果：

> 这是一段引用
> 可以多行

> 嵌套引用
>> 二级嵌套

---

## 水平分隔线

使用三个或以上的 `-`、`*`、`_` 来创建水平线。

```markdown
---
***
___
```

渲染效果：

使用 `---` 绘制水平线：

---

使用 `***` 绘制水平线：

***

使用 `___` 绘制水平线：

___

这些是不同符号的水平分隔线。

---

## 转义

使用反斜杠 `\` 转义特殊字符。

```markdown
\* 这不是斜体 \*
\# 这不是标题
```

---

## 脚注

```markdown
这里有脚注[^1]。

[^1]: 这是脚注内容
```

---

## HTML 支持

Markdown 支持嵌入原始 HTML。

```markdown
<div align="center">
  居中文字
</div>

<span style="color:red">红色文字</span>
```

渲染效果：

<div align="center">
  居中文字
</div>

<span style="color:red">红色文字</span>

---

## 扩展语法

部分 Markdown 变体（如 GitHub Flavored Markdown、MyST）支持更多扩展语法。

### 围栏代码块带高亮

````markdown
```javascript {linenos=table}
function hello() {
    console.log("Hello");
}
```
````

### 属性定义

````markdown
:::{note}
这是一条提示
:::
````

---

## 参考资源

- [CommonMark 规范](https://commonmark.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [MyST Parser 文档](https://myst-parser.readthedocs.io/)