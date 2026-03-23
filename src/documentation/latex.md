# LaTeX教程

## LaTeX 基础

<span
  class="summary">本课解释了 LaTeX 的基本概念以及它与常见文字处理器（如Microsoft Word或LibreOffice Writer）的不同之处。</span>

与常见的文字处理器（如Microsoft Word或LibreOffice Writer）不同，LaTeX 通常不提供所见即所得（WYSIWYG）。使用 LaTeX 时，你需要将纯文本与标记结合使用。这些标记告诉 LaTeX 文本中某些元素的逻辑意义，类似于HTML的工作方式。

例如，HTML文档中的`<h2>`元素表示一个新章节。LaTeX 也有一个命令用于此目的；在这里你可以使用`\section`命令。

### LaTeX 工作流程

因为 LaTeX 文件不是文档本身，而是关于文档各部分应该是什么的指令，你通常不会直接将 LaTeX 文件发送给他人。相反，在编写完 LaTeX 源文件后，你需要使用 LaTeX （通常使用一个名为`pdflatex`的程序）来生成PDF文件。然后，你将这个PDF文件发送给他人。

不同的人对这个过程有不同的描述。由于使用 LaTeX 有点像编程，它通常被称为“编译”文档，尽管“排版”更为准确。

### 多次运行 LaTeX 

对于简单的文件，你只需排版一次即可获得完整的PDF。但一旦你开始添加更复杂的内容，如交叉引用、引用、图形和目录，你可能需要多次运行 LaTeX。我们会告诉你何时需要这样做。

### LaTeX 或 pdfLaTeX 或其他

在下一节中，我们将看到 LaTeX 不是一个单一的程序。为了简化，我们将专注于一个特定的 LaTeX 程序 pdfLaTeX（本课程的中文版使用XeLaTeX 以获得更好的中文支持，但是 pdfLaTeX 仍然是最常用的 LaTeX 程序）来创建你的PDF。我们将在课程后面讨论其他程序以及为什么你可能想要使用它们。
## 使用LaTeX

<span
  class="summary">本课解释了什么是TeX系统以及最常见的系统有哪些，列出了一些通常与 LaTeX 一起使用的文本编辑器，以及集成编辑器的在线系统。</span>

与许多计算机程序不同，LaTeX 不是一个包含“所有内容”的单一应用程序。相反，有多个程序协同工作。我们可以将其分为两个你实际需要的部分：

- 一个 _TeX系统_
- 一个文本编辑器（通常是专门为 LaTeX 设计的）

### LaTeX系统

使用 LaTeX 的核心是拥有一个可用的TeX系统。TeX系统是一组“幕后”程序和文件，它们是使 LaTeX 正常工作的必要条件，但大多数时候你不会直接“运行”它。

目前有两个主要的TeX系统，[MiKTeX](https://miktex.org/)和 [TeX Live](https://tug.org/texlive)。它们都可以在 Windows、macOS 和 Linux 上使用。MiKTeX 在 Windows 上有很强的背景；在 macOS上 ，TeX Live 被捆绑到一个更大的集合中，称为 [MacTeX](http://www.tug.org/mactex/)。每个系统都有其[优点](https://tex.stackexchange.com/questions/20036)，你可能想查看[LaTeX 项目的更多建议](https://www.latex-project.org/get/)。

由于 TeX Live 在所有常见平台上都可用，并且具有一些性能优势，我们建议如果你不确定要安装哪个系统，请选择 TeX Live。

### 编辑器

LaTeX 文件只是纯文本，因此可以用任何文本编辑器编辑。然而，使用专门为 LaTeX 设计的编辑器最为方便，因为它们提供了一键编译文件、内置PDF查看器和语法高亮等功能。所有现代LaTeX编辑器中一个非常有用的功能是 SyncTeX：可以点击源文件直接跳转到PDF，或反向跳转。

LaTeX 编辑器比我们在这里列出的要多得多：在 [StackExchange 上有一个全面的列表](https://tex.stackexchange.com/questions/339/latex-editors-ides)。一个基本的编辑器，[TeXworks](https://tug.org/texworks)，在 Windows 和 Linux 上的 TeX Live 和 MiKTeX 中都包含了，[TeXShop](https://pages.uoregon.edu/koch/texshop/)则包含在 MacTeX 中。（我个人比较喜欢使用另一个优秀的编辑器 [TexStudio](https://www.texstudio.org/)。）

<p 
  class="hint">无论你选择哪个编辑器，我们建议你在安装TeX系统<i>之后</i>安装它，以便编辑器可以“找到”TeX系统并正确设置。</p>

### 在线工作

有几个强大的在线网站可以让你避免安装TeX系统和 LaTeX 编辑器的需要。这些网站通过让你在网页中编辑文件，然后在后台运行 LaTeX，并显示生成的PDF。

其中一些网站将 LaTeX 与类似于文字处理器的功能结合在一起，而另一些则更专注于让你查看 LaTeX 代码，因此更接近于本地安装。

有些系统允许你在不登录的情况下运行 LaTeX，我们使用其中一个，[TeXLive.net](https://texlive.net)，让你编辑和测试我们提供的示例。对于更完整的工作，最好的在线系统要求你在使用前注册。这可以让你保存工作，也有助于网站不被过载。我们已经设置了链接，你可以使用 [Overleaf](https://www.overleaf.com)编辑我们的示例，这是 LaTeX 在线的主要网站之一。当然还有其他的：[Papeeria](https://papeeria.com/)就是一个例子。

### 与他人合作

如果你计划将 LaTeX 源文件发送到处理它们的目的地，例如出版商、会议组织者或预印本服务器（例如 arXiv），你应该检查他们施加的限制。

### 练习

为自己设置一个本地 LaTeX 安装 _或_ 一个在线 LaTeX 服务的账户。如果你使用本地安装，你还需要选择一个编辑器：我们建议从 TeXworks， TexStuio 或TeXShop（见上文）开始，然后在你了解自己如何最好地使用 LaTeX 后再查看其他编辑器。

## LaTeX文档结构

<span
  class="summary">本课展示了 LaTeX 文档的基本结构，以及如何将其构建为PDF文件，还介绍了用于控制 LaTeX 的主要特殊字符。</span>

你的第一个 LaTeX 文档将非常简单：目的是向你展示文档的外观以及如何成功排版。这也是你第一次看到如何在`learnlatex.org`上使用示例。

如果你使用的是本地 LaTeX 安装，请在编辑器中创建一个名为`first.tex`的新文件，并复制粘贴下面的文本或手动输入。

如果你使用的是在线系统，只需点击示例中的“在 TeXLive.net 运行”或“在 Overleaf 中打开”按钮即可试用！

<p
  class="hint">我们建议你即使已经在本地设置了 LaTeX，也尝试在线选项；这是一个了解不同选项如何工作的好机会。</p>

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\begin{document}
Hello, world!

这是一个简单的中英文混排文档。
\end{document}
```

<p class="hint">当你使用 ctexart（或其他ctex文档类）时，无需加载 xeCJK 宏包（`\usepackage{xeCJK}`）。现代TeX引擎会根据需要自动加载对应的CJK宏包，简单的 ctexart 文档应该在所有引擎上都能正常工作。在编译 LaTeX 文档时最好使用 LuaLaTeX 引擎，不仅因为它在处理大型文档时更快，而且它是被推荐的编译引擎(https://www.texdev.net/2024/11/05/engine-news-from-the-latex-project)。</p>

保存文件并将其排版为PDF文档；如果你使用的是本地 LaTeX 安装，具体的按钮取决于你选择的编辑器。你应该会得到一个包含上述文本 _加上_ 页码的PDF文件；LaTeX 会自动添加页码。

使用你喜欢的PDF查看程序查看输出`first.pdf`。看起来不错，恭喜！


### 处理错误

错误是难免的。检查你是否准确输入了文本文件中的每一行。有时看似微小的输入更改会导致结果发生巨大变化，包括导致文档无法工作。如果你遇到困难，请尝试擦除文档并从上面的行中重新复制。

如果你的 LaTeX 排版运行以问号结束，你可以通过输入`x`和`<Enter>`退出。

LaTeX 的错误消息试图提供帮助，但它们与文字处理器中的消息不同。有些编辑器也使得很难看到错误的“完整”文本，这可能会隐藏关键细节。LaTeX 总是会创建一个以`.log`结尾的日志文件，记录它正在做的事情。你总是可以在那里看到完整的错误消息，如果你遇到问题，LaTeX 专家通常会要求你提供日志文件的副本。


### 你已经掌握的知识

- 第一个文档展示了基础知识。LaTeX 文档是文本和命令的混合。命令以反斜杠开头， 有时在大括号中有参数，（有时在方括号中有可选参数）。然后通过告诉 LaTeX 排版你的文件来获得输出PDF。

- 每个 LaTeX 文档都有一个`\begin{document}`和一个匹配的`\end{document}`。这两者之间是*文档主体*，你的内容放在这里。这里的主体有两段（在 LaTeX 中，你可以通过一个或多个空行分隔段落）。
- 在`\begin{document}`之前是*文档前言*，其中有设置文档布局的代码。`\usepackage`命令在后面中描述，在本网站的大多数示例中使用它来设置字体编码。

- LaTeX 还有其他的`\begin{...}`和`\end{...}`对；这些被称为*环境*。你必须匹配它们，以便每个`\begin{x}`都有一个`\end{x}`。如果你嵌套它们，那么你必须有`\end{y} ... \end{x}`来匹配`\begin{x} ... \begin{y}`，即`begin`和`end`语句按顺序匹配。

我们可以通过以`%`开头在 LaTeX 文件中添加注释；让我们看个例子：

```latex
% !TEX program=lualatex

\documentclass{ctexart} % 带选项的文档类
% 前言中的注释
\begin{document}
% 这是一个注释
这是一个简单的文档\footnote{带有脚注}。

这是一个新段落。
\end{document}
```

你可以在上面看到我们有两段：注意使用空行来实现这一点。还要注意多个空格被视为一个空格。

你可能还希望有时使用“硬”空格，不会在行间断开：在 LaTeX 中，我们可以使用`~`来创建，将两个文本片段“绑”在一起。这在我们稍后开始创建交叉引用时特别有用。

### 特殊字符

你可能已经注意到``\``、`{`和`}`对 LaTeX 有特殊意义。
``\``开始一个LaTeX指令：一个“命令”。大括号字符`{`和`}`用于表示_必需参数_：命令所需的信息。

还有一些其他字符具有特殊意义；我们刚刚看到`~`是一个“硬”空格。例如。几乎所有这些字符在普通文本中都非常不常见，这就是为什么它们被选择为特殊含义的原因。

### 练习

尝试使用在线编辑和排版系统；点击按钮排版内容，然后在网页中编辑并重新排版。

尝试向你的第一个文档添加文本，排版并查看PDF中的更改。制作一些不同的段落并添加可变空格。探索你的编辑器如何工作；点击你的源文件并找到如何在PDF中转到同一行。尝试添加一些硬空格并查看它们如何影响换行。
## 逻辑结构

<span
  class="summary">本课展示了一些基本的格式化命令，并将其与使用分节命令和列表的语义格式化进行比较。</span>

LaTeX 提供了专注于文档逻辑结构的方法，以及直接设置外观的能力。大多数情况下，使用专注于结构的方法要好得多，因为这样可以在需要时轻松重用或更改外观。

### 结构和视觉呈现

我们将从一个例子开始，对比 LaTeX 中最常见的逻辑标记命令之一`\emph`与简单地将某些内容斜体化（在印刷中，这通常是强调的方式）。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一些含有 \emph{强调 和\emph{嵌套} 的内容}。

一些含有 \textit{斜体 和\textit{嵌套} 的内容}。
\end{document}
```

你可能猜到`\textit`是一个将文本斜体化的命令，但它_总是_将内容斜体化，因此不适用于嵌套材料。看看`\emph`如何知道嵌套。还有一些地方，强调与斜体不同；例如，在演示中，颜色通常是更好的选择。使用逻辑标记，我们不必担心文档正文中的细节。

目前我们将`\textbf`添加到我们知道的命令中：它使文本加粗。

### 分节命令

你可能使用过文字处理器，在那里大多数人通过输入标题文本然后简单地将其变大和加粗，并在其后跟一个新行来开始一个部分。在LaTeX中，使用逻辑标记实际上比手动格式化更容易；我们可以使用`\section`命令。这可以处理字体更改、垂直空间等，并在整个文档中保持输出一致。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
你好！

这是你的第一份文档。

\section{第一节}

第一小节内容

第一小节第二段

\subsection{第一小节}

小节内容

\section{第二节}

第二节内容

\end{document}
```

为了演示中文使用，我们使用了`ctexart`文档类，LaTeX 对节和小节进行编号，并以粗体显示标题。

LaTeX 可以将文档划分为多个级别

- `\chapter`（但我们需要`\documentclass{book}`或`\documentclass{report}`来实现），对应中文的“章”。
- `\section`，对应中文的“节”。
- `\subsection`，对应中文的“小节”。
- `\subsubsection`，对应中文的“小小节”。

我们可以进一步划分：下一个“下一级”是`\paragraph`，但几乎总是太多“细节”在部分中。（是的，`\paragraph`是一个分节命令，而不是开始新段落的方法！）


### 列表

你最常需要逻辑标记的另一个地方是编写列表。
LaTeX 中内置了两种常见类型的列表。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}

有序列表
\begin{enumerate}
  \item 一个条目
  \item 另一个条目
  \item 第三个条目
\end{enumerate}

无序列表
\begin{itemize}
  \item 一个条目
  \item 另一个条目
  \item 第三个条目
\end{itemize}

\end{document}
```

请注意，我们使用`\item`来开始每个条目，并且每种类型的列表使用的标记是自动添加的。

### 练习

尝试使用不同的分节级别。尝试使用`\documentclass{report}`而不是`\documentclass{article}`并添加`\chapter`命令。它们看起来如何？尝试使用`\paragraph`和（甚至）`\subparagraph`来查看它们的工作方式：默认情况下，它们_不_添加编号。

制作一些列表，并在一个列表中嵌套另一个列表。数字或标记的格式如何变化？使用标准 LaTeX，你最多可以嵌套四级列表，但超过四个嵌套列表往往是一个不好的信号！
## 文档类

<span
  class="summary">本课解释了什么是文档类以及它如何影响文档布局和设计。它列出了在 TeX 发行版中可以找到的主要文档类。</span>

你可能已经注意到，到目前为止我们创建的所有 LaTeX 文档都以`\documentclass`行开始，而且
`\documentclass{article}`是最常见的选择。
`\documentclass{report}`来尝试`\chapter`命令。）这行是所有 LaTeX 文档都必需的，而且几乎总是应该是文档中的第一个命令。

**注意**：在本课程中，我们将使用`ctexart`类来创建包含中文的文档，这是一个中文文档类，可以自动处理中文的排版问题。

### 文档类的作用

文档类设置文档的整体布局，例如：

- 设计：页边距、字体、间距等
- 是否可以使用章节
- 标题是否应该在单独的页面上

文档类也可以更普遍地添加新命令；这在特殊情况下尤其如此，比如创建演示幻灯片。

文档类行也可以设置_全局选项_：应用于整个文档的内容。这些选项在方括号中给出：
`\documentclass[<选项>]{<名称>}`。这种语法，即在方括号中首先给出可选信息，在许多 LaTeX 命令中都使用。

### 基础文档类

LaTeX 自带一组标准文档类，它们的外观相似但有一些变化：

- `article`  
  没有章节的短文档
- `report`  
  有章节的较长文档，单面打印
- `book`  
  有章节的较长文档，双面打印，带前言和后记（例如索引）
- `letter`  
  没有分节的信件
- `slides`  
  用于演示（请参见下文）
- `beamer`  
  用于制作幻灯片

这些类都有自己的选项，可以用来调整布局和功能。`article`、`report`和`book`类有非常相似的可用命令，正如我们已经看到的。

与之相对，CTex包提供了一些中文文档类：

- `ctexart`  
  适用于中文文章的文档类
- `ctexrep`  
  适用于中文报告的文档类
- `ctexbook`  
  适用于中文书籍的文档类
- `ctexbeamer`  
  适用于中文幻灯片的文档类

如果某种标准文档类未发现对应的`ctex`版本，可以在文档类定义后添加`ctex`包来调用中文文档类。引用格式为：

```latex
\documentclass{<标准文档类名>}
\usepackage{ctex}
```
{: .norun :}

选择不同的文档类，可能会有一些可用命令与环境的细微差别。例如，当写信时，可用的命令有点不同：

```latex
% !TEX program=lualatex

\documentclass{letter}
\usepackage{ctex}
\begin{document}

\begin{letter}{某某地址\\某某街道\\某某城市}

\opening{亲爱的先生或女士，}

信件正文在这里

\closing{此致，}

\end{letter}

\end{document}
```


标准的`article`、`report`和`book`类接受`10pt`、`11pt`和`12pt`选项来改变字体大小，以及`twocolumn`选项来使文档成为双栏。

### 功能丰富的类


美国数学学会提供标准类的变体（`amsart`、`amsbook`），设计风格更传统，更接近数学期刊出版物中使用的风格。

两个最大和最流行的"扩展"类是KOMA-Script包和memoir类。KOMA-Script提供了一组与标准类"平行"的类：`scrartcl`、`scrreprt`、`scrbook`和`scrlttr2`，而memoir类则是一个单一的类，最像是`book`的扩展。

这些扩展类有很多定制钩子，我们将在练习中探索一些。你可能想知道我们如何了解它们提供的钩子；我们将在后面中介绍这一点，但你总是可以提前了解！

### 演示文稿

`slides`类是为制作20世纪80年代中期的物理幻灯片而开发的，因此没有任何功能来创建基于PDF的交互式演示文稿。有现代的类可以做到这一点：它们相对于一般的 LaTeX 文档来说比较特殊。

### 练习

探索如何在标准类、KOMA包和`memoir`之间更改文档类如何影响文档的外观。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}

\section{简介}

这是一个示例文档，带有一些虚拟文本\footnote{和一个脚注}。这段文字相当长，
因为我们可能想看看让文档成为双栏的效果。

\end{document}
```

添加类选项`twocolumn`，看看布局如何变化。

将`\section`改为`\chapter`，找出使用`scrreprt`类时以下类选项有什么效果：

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
## 扩展LaTeX

<span
  class="summary">本课展示了如何通过使用不同的宏包来扩展 LaTeX 以满足你的需求并进一步更改其布局，还展示了如何定义自己的命令。</span>

在声明了文档类之后，在导言区中你可以通过添加一个或多个*宏包*来修改 LaTeX 的功能。这些宏包可以：

- 改变 LaTeX 某些部分的工作方式
- 为 LaTeX 添加新命令
- 改变文档设计

### 改变LaTeX的工作方式

LaTeX 的"内核"（LaTeX 的核心部分）在用户自定义方面相当有限，因此一些附加宏包处理了一些非常常见的需求。首先是改变 LaTeX 如何处理特定语言的排版（断字、标点、引号、本地化等）。不同的语言有不同的规则，所以告诉 LaTeX 使用哪种语言很重要。这由`babel`宏包处理。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

% 加载babel宏包，并选择语言，中文无须加载
%\usepackage[french]{babel}

\usepackage[width = 6cm]{geometry} % 为了在这里强制断字

\begin{document}

这是一些填充文字，用来演示 LaTeX 如何断字处理材料，并且能够给我们至少一个断字点。
这是一些填充文字，用来演示 LaTeX 如何断字处理材料，并且能够给我们至少一个断字点。

\end{document}
```

如果你在编写西文文档时遇到断字问题，请尝试使用`babel`宏包。

<p class="hint">你可以将文件内容改为西文，并尝试取消注释那行（显然有误导性的）加载`babel`的行，看看效果。（默认的断字规则是美式英语。）</p>


### 改变设计

能够独立于文档类调整某些设计方面是很有用的。最明显的一个是页边距。我们刚才在上面的例子中使用了`geometry`宏包，但让我们现在专门讨论页边距。

```latex
% !TEX program=lualatex

% 请注意，为了演示\chapter命令，我们使用ctexbook文档类
\documentclass{ctexbook} 
\usepackage[margin=1in]{geometry}

\begin{document}
嗨，世界！

这是一个第一个文档。


% ================
\chapter{第一章}
第一章的介绍。


\section{第一节的标题}
第一节中的材料文本

第二段。

\subsection{第一节的小节}

小节中的材料文本。


% ================
\section{第二节}

第二节的文本。

\end{document}
```

你可以将上述代码中对`geometry`宏包引用注释掉，比较注释前后的效果。

`geometry`宏包除了可以调整文档的页边距，还可以修改页眉和页脚的高度、宽度、位置等。

### 添加新功能

LaTeX 的优势之一是你可以从成千上万的宏包中选择，包括用于写数学文本的宏包、用于超链接的宏包、用于复杂颜色处理的宏包等。我们将在后面的课程中看到一些更常见的宏包。

### 定义命令

有时你需要特定于文档的命令，可能是一些在可用宏包中找不到的功能，或者只是一个用于输入多次使用的常见表达式的命令。

以下示例展示了一个用于以特定样式输出关键词的命令。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

% 定义一个命令\kw，用于输出加粗的斜体文字
\newcommand\kw[1]{\textbf{\itshape #1}}

\begin{document}

关于\kw{苹果}和\kw{橙子}的一些内容。

\end{document}
```

在定义中，`[1]`表示参数的数量（这里是一个），`#1`表示提供的第一个参数（这个例子中是`苹果`或`橙子`）。你最多可以有九个参数，但通常最好只有一个参数，或者有时根本没有参数。

定义命令不仅可以减少编写文档所需的输入，还有助于分离样式信息。如果决定使用不同的样式来表示关键词，不必编辑整个文档，只需要更改定义即可。这里我们加载`xcolor`宏包来提供颜色，并在格式化中使用蓝色代替粗体。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{xcolor}

% 定义一个命令\kw，用于输出加粗的斜体文字，并着色为蓝色
\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

关于\kw{苹果}和\kw{橙子}的一些内容。

\end{document}
```

注意，定义太多命令或定义多参数的命令可能会使文档源代码更难理解，因为它使用了不熟悉的语法。定义特定于文档的命令的能力应该谨慎使用。

### 练习

尝试用其他欧洲语言编写一些文本，看看`babel`如何影响断字：你可能可以在网上找到一些文本，并猜测正确的选项。

尝试更改`geometry`示例中的页边距。你可以使用逗号分隔列表分别设置`top`、`bottom`、`left`和`right`边距。

尝试加载`lipsum`宏包，然后在文档中添加命令`\lipsum`。你能猜到为什么这个宏包对制作示例很有用吗？

尝试更改`\kw`的定义以获得不同的样式。
## 包含图片和定位

<span
  class="summary">本课展示了如何在文档中包含外部图片文件，如何更改它们的外观，以及如何让它们自动定位或浮动到合适的位置。</span>

要在 LaTeX 中引入外部图片，请使用`graphicx`宏包，它为LaTeX添加了`\includegraphics`命令。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}

\begin{document}
这张图片
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
是导入包含外部图片的PDF。
\end{document}
```

你可以包含EPS、PNG、JPG和PDF格式的文件。如果你有一个图片的多个版本，那么你可以写成`example-image.png`这样的形式。（如果你没有给出扩展名，`graphicx`宏包会尝试猜测扩展名。）

你会注意到我们在这里使用了一个新的环境`center`，用于将图片在页面上水平居中。稍后，我们将更多地讨论间距和定位。

### 修改图片外观

`\includegraphics`命令有许多选项来控制图片的大小和形状，以及裁剪掉不需要的部分。其中一些选项使用很多，所以值得了解。

最明显的设置是设置图片的`width`（宽度）或`height`（高度），这些通常相对于`\textwidth`或`\linewidth`以及`\textheight`来设置。`\textwidth`和`\linewidth`的区别很微妙，通常结果是相同的。`\textwidth`是物理页面上文本块的宽度，而`\linewidth`是_当前_宽度，这可能在局部上有所不同（这种差异在使用`twocolumn`类选项时最为明显）。LaTeX 会自动缩放图片以保持宽高比。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
一些文本
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

你还可以`scale`（缩放）图片，或者通过`angle`（角度）旋转它们。另一个你可能想要做的是`clip`（裁剪）和`trim`（修剪）图片。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

### 让图片浮动

在排版中，特别是技术文档时，图片可能会移动到文档的其他位置。这称为 *浮动*。图片通常作为浮动体包含，这样它们不会在页面中留下大片空白。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}
\usepackage{zhlipsum}  % 生成填充文本

\begin{document}
\zhlipsum*[1-5] % 几个填充段落

测试浮动位置
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{一个示例图片}
\end{figure}

\zhlipsum*[6-10] % 几个填充段落
\end{document}
```

这里LaTeX将图片和标题从`测试位置`文本处移到了第二页的顶部，因为第一页底部没有足够的空间。`ht`影响 LaTeX 可以放置浮动体的位置；这两个字母表示它可以放在源代码所在位置（在`测试位置`旁边）或页面顶部。你最多可以使用四个位置说明符：

- `h` "这里"（如果可能）
- `t` 页面顶部
- `b` 页面底部
- `p` 专门用于浮动体的页面

稍后，我们将看到如何交叉引用浮动体，这样你就可以在文本中指向它们。

你可能注意到我们在这里使用了`\centering`而不是`center`环境来居中图片。在浮动体内部，如果你想要水平居中内容，应该使用`\centering`；这可以避免浮动体和`center`环境都添加额外的垂直空间。

### 练习

尝试包含你创建的图片，替换我们在演示中使用的"标准"图片。

探索使用`height`、`width`、`angle`和`scale`键可以做什么。

使用`width`键将一个图片的大小设置为相对于`\textwidth`，另一个图片相对于`\linewidth`。尝试它们在有或没有`twocolumn`选项时的表现。

使用`lipsum`制作一个相当长的演示，然后尝试使用不同的位置说明符来放置浮动体。不同的说明符如何相互作用？（本文中的示例代码使用了另一个中文的占位字符生成包`zhlipsum`。）
## 表格

<span
  class="summary">本课展示了如何在 LaTeX 中创建表格，如何影响单元格的对齐，如何添加表格线条，以及如何合并单元格。</span>

LaTeX 中的表格使用`tabular`环境来创建。本课假设你已加载`array`宏包，它为LaTeX表格添加了更多功能。这个宏包之所以不是 LaTeX 内核的一部分，仅仅是出于历史原因。因此，请在导言区添加以下内容，我们就可以开始了：

```latex
\usepackage{array}
```
{: .noedit :}

要排版`tabular`环境，我们需要告诉 LaTeX 需要多少列以及它们应该如何对齐。这是通过一个必需的参数（通常被称为表格导言）来完成的，在这个参数中，你使用单字母名称（称为导言标记）来指定列。可用的列类型有：

<!-- don't line wrap this table, markdown seems to not support this -->

| 类型            | 描述                                                                                      |
| --------------- | :---------------------------------------------------------------------------------------- |
| `l`             | 左对齐列                                                                                  |
| `c`             | 居中对齐列                                                                                |
| `r`             | 右对齐列                                                                                  |
| `p{宽度}`       | 固定宽度为`宽度`的列；文本将自动换行并完全对齐                                            |
| `m{宽度}`       | 与`p`类似，但相对于行的其余部分垂直居中                                                   |
| `b{宽度}`       | 与`p`类似，但底部对齐                                                                     |
| `w{对齐}{宽度}` | 以固定`宽度`打印内容，如果内容过大则静默溢出。你可以使用`l`、`c`或`r`来选择水平对齐方式。 |
| `W{对齐}{宽度}` | 与`w`类似，但如果内容过宽，这将发出溢出框警告。                                           |

此外，还有一些其他可用的导言标记，它们不定义列但可能也很有用：

<!-- don't line wrap this table, markdown seems to not support this -->

| 类型              | 描述                                                                     |
| ----------------- | :----------------------------------------------------------------------- |
| `*{数量}{字符串}` | 在导言中重复`字符串` `数量`次。通过这种方式，你可以定义多个相同的列。    |
| `>{声明}`         | 在每个单元格内容之前将`声明`放在下一列中（这对于设置不同的字体等很有用） |
| `<{声明}`         | 在前一列的每个单元格内容之后放置`声明`                                   |
| <span>`           | `</span>                                                                 | 添加垂直线 |
| `@{声明}`         | 用`声明`替换列之间的空格                                                 |
| `!{声明}`         | 在现有空格的中心添加`声明`                                               |

这两个表格列出了 LaTeX 和`array`宏包提供的所有可用列类型。

列`l`、`c`和`r`的宽度将是其最宽单元格的自然宽度。每个列都必须声明，因此如果你想要三个居中对齐的列，你需要在表格导言中使用`ccc`。空格会被忽略，所以`c c c`是一样的。

在表格主体中，列使用`&`分隔，新行使用`\\`开始。

我们已经有了创建第一个表格所需的一切。在下面的代码中，`&`和`\\`是对齐的。这在 LaTeX 中不是必需的，但有助于阅读源代码。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  动物  & 食物  & 大小   \\
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
\end{tabular}
\end{document}
```

如果表格列包含大量文本，仅使用`l`、`c`和`r`会出现问题。看看下面的例子会发生什么：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  动物 & 描述 \\
  狗   & 狗是犬属的成员，属于狼形犬科，是最广泛分布的陆地食肉动物。 \\
  猫   & 猫是一种小型食肉目家养动物。它是猫科中唯一的家养物种，通常被称为家猫，以区别于该科的野生成员。 \\
\end{tabular}
\end{document}
```

问题在于`l`类型列会以其自然宽度排版其内容，即使有页面边界也不会换行。要解决这个问题，你可以使用`p`列。这会将其内容作为段落排版，并指定宽度作为参数。将上面的结果与以下内容进行比较：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  动物 & 描述 \\
  狗   & 狗是犬属的成员，属于狼形犬科，是最广泛分布的陆地食肉动物。 \\
  猫   & 猫是一种小型食肉目家养动物。它是猫科中唯一的家养物种，通常被称为家猫，以区别于该科的野生成员。 \\
\end{tabular}
\end{document}
```

如果你的表格有许多相同类型的列，在导言中输入那么多列定义会很麻烦。你可以使用`*{num}{string}`来简化，它会重复`string` `num`次。所以`*{6}{c}`等同于`cccccc`。为了证明它确实有效，这里是本课的第一个表格，使用新学到的语法：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  动物  & 食物  & 大小   \\
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
\end{tabular}
\end{document}
```

### 添加线条

在介绍线条之前，先提一个建议：线条在表格中应该谨慎使用，通常垂直线看起来不够专业。事实上，对于专业的表格，你不应该使用任何标准线条；相反，你应该熟悉`booktabs`宏包的功能，这就是为什么我们先在这里介绍它。

`booktabs`提供了四种不同类型的线条。每个这些命令都必须作为行中的第一个内容使用，或紧跟在另一个线条之后。
三个线条命令是：`\toprule`、`\midrule`和`\bottomrule`。从它们的名称就可以清楚地知道它们的使用位置：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  动物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```

`booktabs`提供的第四个线条命令是`\cmidrule`。它可以用来绘制一条不跨越整个表格宽度的线条，而是只跨越指定的列范围。列范围作为数字范围输入：`{`_数字_`-`_数字_`}`。即使你只想为单个列绘制线条，也需要将其指定为范围（两个数字相同）。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  动物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  \cmidrule{1-2}
  马    & 干草  & 大     \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  青蛙  & 苍蝇  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```

你可以使用`\cmidrule`的短版本，在任一端添加一个可选参数，括号中的`r`和`l`分别表示规则在 **右** 和 **左** 端缩短：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  动物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  \cmidrule{1-2}
  马    & 干草  & 大     \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  青蛙  & 苍蝇  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```

你可能已经猜到，`r`和`l`分别表示规则在**右**和**左**端缩短。

有时，线条会将两行分隔得太开，但为了更清楚地表达含义，你仍需要通过某种方式将它们分开，这时使用`\addlinespace`来插入一个小分隔。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  动物 & 描述 \\
  \midrule
  狗   & 狗是犬属的成员，属于狼形犬科，是最广泛分布的陆地食肉动物。 \\
  \addlinespace
  猫   & 猫是一种小型食肉目家养动物。它是猫科中唯一的家养物种，通常被称为家猫，以区别于该科的野生成员。 \\
  \bottomrule
\end{tabular}
\end{document}
```

### 合并单元格

在 LaTeX 中，你可以使用`\multicolumn`命令来水平合并单元格。它必须作为单元格中的第一个内容使用。`\multicolumn`需要三个参数：

1. 应该合并的单元格数量
2. 合并单元格的对齐方式
3. 合并单元格的内容

对齐方式可以包含任何在`tabular`导言中合法的内容，但**只能包含单个列类型**。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  动物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
  fuath  & \multicolumn{2}{c}{未知} \\
  \bottomrule
\end{tabular}
\end{document}
```

你还可以使用`\multicolumn`在一个单元格上，以防止应用表格导言中为当前列定义的任何内容。以下内容使用这种方法来居中表格的标题行：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{动物} & \multicolumn{1}{c}{食物} & \multicolumn{1}{c}{大小} \\
  \midrule
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
  fuath  & \multicolumn{2}{c}{未知} \\
  \bottomrule
\end{tabular}
\end{document}
```

垂直合并单元格在 LaTeX 中不受支持。通常，只需留空单元格即可让读者正确的理解，而无需明确地使单元格跨越多行。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  组    & 动物  & 大小   \\
  \midrule
  草食动物 & 马    & 大     \\
          & 鹿    & 中等   \\
          & 兔子  & 小     \\
  \addlinespace
  肉食动物 & 狗    & 中等   \\
          & 猫    & 小     \\
          & 狮子  & 大     \\
  \addlinespace
  杂食动物 & 乌鸦  & 小     \\
          & 熊    & 大     \\
          & 猪    & 中等   \\
  \bottomrule
\end{tabular}
\end{document}
```

### 练习

使用简单的表格示例开始尝试表格。尝试使用`l`、`c`和`r`列类型进行不同的对齐。如果你在表格行中缺少项目会发生什么？如果你在表格行中添加太多项目会发生什么？尝试使用`\multicolumn`命令跨越多列。
## 交叉引用

<span
  class="summary">本课展示了如何在文档中引用编号的元素，如图片、表格和章节。</span>

当你在写长文档时，你会需要引用编号的元素，如图片、表格或章节。幸运的是，LaTeX 可以自动添加正确的编号；我们只需要设置好一些事情。

### `\label`和`\ref`机制

要让 LaTeX 记住文档中的某个位置，你需要给它一个标签，然后在其他地方引用它。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
嗨，世界！

这是一个第一个文档。

\section{标题}

这是第一节的材料文本。


\subsection{第一节的小节}
\label{subsec:labelone}

第一小节的材料文本。
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

在小节~\ref{subsec:labelone}中有公式~\ref{eq:labeltwo}。
\end{document}
```

- 这里有两个`\label{...}`命令，一个在小节之后，一个在公式环境内。
- 它们与最后一句中的`\ref{...}`命令相关联。
- 当你运行 LaTeX 时，它会将标签的信息保存到辅助文件中。
- 对于`\label{subsec:labelone}`，LaTeX 知道它现在在一个小节中，所以它保存了小节的编号。
- 对于`\label{eq:labeltwo}`，LaTeX 知道最近感兴趣的环境是一个公式，所以它保存了该公式的信息。
- 当你请求引用时，LaTeX 从辅助文件中获取信息。
- `subsec:`和`eq:`不会被 LaTeX 使用；相反，它只是跟踪它最近处理的内容。但当你在写作时，这些帮助你记住标签的含义。

- 你可能会看到引用在PDF输出中显示为粗体双问号，**??**。这是因为由于使用辅助文件的工作方式，第一次编译文档时标签尚未保存。再运行一次 LaTeX 就可以了。（通常在写作时你会多次运行 LaTeX，所以在实践中这不是一个问题。）

- 注意引用前的波浪号（`~`）字符。
你不希望在"小节"和其编号之间，或"公式"和其编号之间出现换行。使用波浪号意味着 LaTeX 不会在那里断行。

### `\label`的位置

`\label`命令总是引用前一个编号的实体：一个节、一个公式、一个浮动体等。这意味着`\label`总是要放在你想要引用的东西_之后_。特别是，当你创建浮动体时，`\label`必须放在_后面_（或最好放在）`\caption`命令之内，但在浮动环境内。

### 练习

尝试在测试文档中添加新的编号部分（节、小节、枚举列表），看看需要多少次运行才能让`\label`命令正常工作。

添加一些浮动体，看看当你把`\label`放在`\caption`_之前_而不是之后时会发生什么；你能预测结果吗？

如果你把一个公式的`\label`放在`\end{equation}`_之后_会发生什么？
## 数学

<span
  class="summary">本课介绍了 LaTeX 的数学模式以及如何输入行内和显示公式，`amsmath`宏包提供的扩展功能，以及如何在数学模式中更改字体。</span>

排版复杂的数学公式是 LaTeX 最强大的功能之一。你可以在所谓的"数学模式"中以逻辑方式标记数学内容。

### 数学模式

在数学模式中，空格会被忽略，并且会自动应用正确的字符间距（几乎总是正确的）。

数学模式有两种形式：

* 行内模式
* 显示模式

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一个包含行内数学公式的句子：$y = mx + c$。
另一个包含行内数学公式的句子：$5^{2}=3^{2}+4^{2}$。

第二段包含显示数学公式。
\[
  y = mx + c
\]
看看段落如何在显示公式后继续。
\end{document}
```

你可能会在其他地方看到"类 LaTeX"的数学输入，例如在网页上使用MathJax系统来放置公式。这些系统通常接受 LaTeX 语法的轻微变体，因为它们实际上并没有在"后台"使用 LaTeX。

<p
  class="hint">我们的示例都是<i>正确的</i> LaTeX。如果你在其他上下文中看到不同的内容，可能是因为该示例实际上并没有使用 LaTeX。</p>

#### 行内数学模式和数学符号

如上所示，行内数学模式用一对美元符号（`$...$`）标记。也可以使用`\( ... \)`符号。简单的表达式无需任何特殊标记就可以输入，你会看到数学内容被适当地排版，并且字母以斜体显示。

行内数学模式会限制公式的垂直大小，以尽可能不影响段落的行距。

注意，_所有_数学内容都应该标记为数学，即使是单个字符：使用`... $2$ ...`而不是`... 2 ...`。否则，例如，当你需要负数并需要数学来获得减号时，`... $-2$ ...`可能会使用与文本数字不同的数学字体（这取决于文档类）。相反，要注意从其他地方复制的文本中出现的数学结构，如使用`$`的货币值或文件名中使用的`_`（可以分别标记为`\$`和`\_`）。

我们可以轻松添加上标和下标；这些用`^`和`_`标记。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
上标 $a^{b}$ 和下标 $a_{b}$。
\end{document}
```

（你可能会看到简单的上下标不使用大括号的例子，但这不是官方语法，可能会出错；最佳实践是始终使用大括号。）

有 _很多_ 专门的数学模式命令。其中一些相当简单，例如`\sin`和`\log`分别表示正弦和对数，或者`\theta`表示希腊字母。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一些数学：$y = 2 \sin \theta^{2}$。
\end{document}
```

我们不能在这里介绍所有标准的 LaTeX 数学模式命令，但有许多在线资源列出了标准集合。你可以使用 [Detexify](https://detexify.kirelabs.org/classify.html)工具查找数学模式符号的命令。

#### 显示数学

你可以在显示数学模式中使用与行内工作完全相同的命令。显示数学模式默认居中，用于较大的公式，这些公式是"段落的一部分"。注意，显示数学环境不允许段落在数学内部结束，因此你不能在源代码中有空行。

段落应该总是在显示之前 _开始_，所以不要在显示数学环境之前留空行。如果你需要多行数学内容，不要使用连续的显示数学环境（这会产生不一致的间距）；而是使用`amsmath`宏包提供的多行显示环境之一，我们稍后会介绍。

它对于积分特别有用，例如：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一个关于较大公式的段落
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

注意这里如何使用下标和上标符号来设置积分限。

我们在这里添加了一个手动间距：`\,`在`dx`之前创建一个细空格。
微分算子的格式有所不同：一些出版商使用直立的"d"，而其他人使用斜体的"_d_"。一种编写源代码的方法是创建一个可以根据需要调整的命令`\diff`，
[例子](http://www.tug.org/TUGboat/tb41-1/tb127gregorio-math.pdf)

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\newcommand{\diff}{\mathop{}\!d}            % 斜体
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % 直立
\begin{document}
一个关于较大公式的段落
\[
\int_{-\infty}^{+\infty} e^{-x^2} \diff x
\]
\end{document}
```

你经常需要一个带编号的公式，这可以使用`equation`环境创建。让我们用同样的例子试试：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一个关于较大公式的段落
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

公式编号会自动递增，可以是简单的数字，如本例所示，也可以带有节号前缀，如第2节的第5个公式为(2.5)。具体的格式由文档类设置，这里不详细介绍。

### `amsmath`宏包

数学符号非常丰富，这意味着 LaTeX 内核提供的工具不能涵盖所有内容。`amsmath`宏包扩展了核心支持，涵盖了更多的想法。[`amsmath`用户指南](http://texdoc.org/pkg/amsmath)包含了比我们在这里能展示的更多示例。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmath}

\begin{document}
对于$n,k\geq 0$，求解以下递推关系：
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{对于 $n$，$k>0$。}
\end{align*}
\end{document}
```

`align*`环境使公式在`&`符号处对齐，就像表格一样。注意我们如何使用`\quad`插入一些空格，以及`\text`在数学模式中插入一些普通文本。我们还使用了另一个数学模式命令`\binom`来表示二项式系数。

注意这里我们使用了`align*`，公式没有编号。大多数数学环境默认会给公式编号，带星号的变体（带`*`）则禁用编号。

该宏包还有几个其他方便的环境，例如用于矩阵的环境。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmath}
\begin{document}
AMS矩阵。
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```

### 数学模式中的字体

与普通文本不同，数学模式中的字体变化通常传达非常特定的含义。因此，它们通常被显式写出。有一组你需要的命令：

- `\mathrm`：罗马体（直立）
- `\mathit`：像"文本"那样间距的斜体
- `\mathbf`：粗体
- `\mathsf`：无衬线体
- `\mathtt`：等宽（打字机）字体
- `\mathbb`：双线（黑板粗体）（由`amsfonts`宏包提供）

这些都以拉丁字母为参数，所以例如我们可以这样写一个矩阵：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
矩阵$\mathbf{M}$。
\end{document}
```

注意，默认的数学斜体会分隔字母，以便它们可以用来表示变量的乘积。使用`\mathit`来使字母斜体。

`\math..`字体命令使用为数学使用而指定的字体。有时你需要插入一个属于外部句子结构的词，需要当前的文本字体，为此你可以使用`\text{...}`（由`amsmath`宏包提供）或特定的字体样式如`\textrm{..}`。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmath}
\begin{document}

$\text{坏用法 } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{坏用法 } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```

### 练习

尝试一些基本的数学模式工作：取示例并在行内和显示数学模式之间切换。你能看出这有什么效果吗？

尝试添加其他希腊字母，包括大小写。你应该能够猜出它们的名称。

尝试字体更改命令：当你尝试嵌套它们时会发生什么？

显示数学默认居中；尝试添加文档类选项`[fleqn]`（左对齐公式）到上面的一些示例，看看不同的布局。同样，公式编号通常在右边。尝试添加`[leqno]`（左边公式编号）文档类选项。
## 字体和间距

<span
  class="summary">本课展示了如何更改文档中的间距元素以及如何在 LaTeX 源代码中添加显式的格式化指令。</span>

我们已经看到，在输入中的空行会在 LaTeX 中生成新段落。这表现为段落会以缩进开始。

### 段落间距

一种常见的样式是段落之间不缩进，而是在段落之间添加"空行"。我们可以使用`parskip`宏包来实现这一点。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[parfill]{parskip}
\usepackage{zhlipsum} % 仅用于生成填充文本
\begin{document}
\zhlipsum
\end{document}
```

### 强制换行

大多数情况下，你不应该在 LaTeX 中强制换行：你几乎肯定是想要一个新段落或者使用`parskip`（如我们刚才看到的）在段落之间添加"空行"。

有_少数_地方你需要使用`\\`来开始新行而不开始新段落：

- 在表格行末尾
- 在`center`环境内
- 在诗歌中（`verse`环境）

几乎总是，如果你不在这些特殊的地方，你就_不应该_使用`\\`。

### 添加显式空格

我们可以使用`\,`插入一个细空格（约为正常厚度的一半）。在数学模式中，还有其他命令：`\.`、`\:`和`\;`，以及一个用于负空格的命令：`\!`。

很少情况下，例如在创建标题页时，你可能需要添加显式的水平或垂直空格。我们可以使用`\hspace`和`\vspace`来实现。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一些文本 \hspace{1cm} 更多文本。

\vspace{10cm}

更多的文本。
\end{document}
```

### 显式文本格式化

大多数情况下逻辑结构是更好的选择。但有时你想要让文本变为粗体、斜体、等宽等。有两种类型的命令用于此：一种用于短文本片段，另一种用于"运行"的材料。

对于短文本片段，我们使用`\textbf`、`\textit`、`\textrm`、`\textsf`、`\texttt`和`\textsc`。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
让我们玩玩字体：\textbf{粗体}、\textit{斜体}、\textrm{罗马体}、
\textsf{无衬线体}、\texttt{等宽体}和\textsc{小型大写}。
\end{document}
```

对于运行文本，我们使用改变字体设置的命令；这里的命令例如是`\bfseries`和`\itshape`。因为这些命令不会"停止"，我们需要将它们放在一个_组_中，以防止它们影响整个文档。LaTeX 环境是组，表格单元格也是，或者我们可以使用`{...}`来创建一个显式的组。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
正常文本。

{\itshape

这段文本是斜体的。

这段也是：效果不限于一个段落。

}
\end{document}
```

我们可以用类似的方式设置字体大小；这些命令都是持续性的。字体大小是相对的：`\huge`、`\large`、`\normalsize`、`\small`和`\footnotesize`是常见的。重要的是要在改变字体大小回来之前结束段落；看看我们这里如何添加一个显式的`\par`（段落结束）。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
正常文本。

\begin{center}
{\itshape\large 一些文本\par}
正常文本
{\bfseries\small 更小的文本\par}
\end{center}

\end{document}
```

### 练习

尝试手动格式化：创建一个`titlepage`环境并尝试插入不同的空格和字体更改。当我们组合字体更改时会发生什么？这与数学模式相比如何？

如果你更改一个大段落的字体大小（尝试用`\tiny`然后用`\huge`）但在关闭组之前不发出最后的`\par`会发生什么？
## 引用和参考文献

<script>
runlatex.preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

<span
  class="summary">本课展示了参考文献数据库的基础知识。学习如何建立自己的数据库以及如何使用两种主要的工作流程在文档中使用它们。</span>

对于参考文献引用，虽然你可以直接在文档中包含参考源，但通常你会从一个或多个外部文件获取这些信息。这些文件是参考文献数据库，包含以处理友好的格式存储的信息。使用一个或多个参考文献数据库可以让你重复使用信息并避免手动格式化。

### 参考文献数据库

参考文献数据库通常被称为"BibTeX 文件"，扩展名为`.bib`。它们包含一个或多个条目，每个条目对应一个参考文献，每个条目中有一系列字段。让我们看一个例子：

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->


这是一个文章条目和一本书的条目；这是最常见的类型。每个数据库条目类型都以`@`开头，如所示，所有信息都在一对大括号内。

除了被称为"键"的引用"名称"之外，各个字段都以键值格式给出：这只是一个标签，所以你可以使用任何你喜欢的内容，但在上面我们选择使用作者名加年份：这是一种常见的方法。

具体需要给出哪些字段取决于条目类型，但大多数都很明显。你可能注意到在`author`字段中，每个条目都用`and`分隔。这是_必需的_：输出格式需要知道哪个作者是哪个。你可能还注意到在文章标题中，一些条目用了额外的大括号；这些是为了防止改变大小写。

手动编辑`.bib`文件相当繁琐，所以大多数人使用专门的编辑器。[JabRef](https://www.jabref.org) 被广泛使用，而且是跨平台的，但还有几个其他的界面可用。如果参考文献包含 DOI（数字对象标识符），你可能想尝试 [doi2bib](https://doi2bib.org)来轻松获取 BibTeX 条目。但请确保检查条目是否正确！

在这里，我们将使用上面的简短示例数据库进行演示：我们已经将其"保存"为`learnlatex.bib`。

### 从数据库传输信息

要将信息从数据库传输到文档中，需要三个步骤。首先，使用 LaTeX 编译文档，这会创建一个包含文档引用的参考文献列表的文件。第二，运行一个程序从参考文献数据库中提取信息，选择你使用的那些参考文献，并按顺序排列。最后，再次编译文档，这样 LaTeX 就可以使用这些信息来解析你的引用。通常需要至少编译两次才能解析所有引用。

对于第二步，有两个广泛使用的系统：BibTeX 和 Biber。Biber 只能与 LaTeX 宏包`biblatex`一起使用，而 BibTeX 可以不使用任何宏包，或者与`natbib`一起使用。

不同的编辑器以不同的方式处理运行 LaTeX 之外的第二个工具。对于我们的在线示例，有一些"幕后"脚本可以一次完成所有操作。你的编辑器可能有一个"做事情"按钮，或者你可能需要在 LaTeX 运行之间手动选择运行 BibTeX 或 Biber。

引用和参考文献的格式独立于你的 BibTeX 数据库，由所谓的"样式"设置。我们将看到这在 BibTeX 工作流程和`biblatex`中工作方式略有不同，但一般思路保持不变：我们可以选择引用的显示方式。

### 使用`natbib`的BibTeX工作流程

虽然可以在不加载任何宏包的情况下在 LaTeX 文档中插入引用，但这相当有限。相反，我们将使用`natbib`宏包，它允许我们创建不同类型的引用，并且有很多可用的样式。

我们输入的基本结构如下例所示：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{natbib}

\begin{document}
数学展示来自\citet{Graham1995}，而
化学内容在\citet{Thomas2008}中。

一些括号引用：\citep{Graham1995}
然后\citep[p.~56]{Thomas2008}。

\citep[参见][pp.~45--48]{Graham1995}

一起引用\citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

你可以看到我们可以通过给出它们的键来引用数据库中的不同条目。`natbib`宏包同时提供了文本和括号引用样式，分别是`\citet`和`\citep`。参考文献样式由`\bibliographystyle`行选择；这里我们使用了`plainnat`样式。参考文献实际上是由`\bibliography`行插入的，它也选择要使用的数据库；这是一个逗号分隔的列表。

可以通过可选参数向引用添加页码引用。如果给出两个可选参数，第一个会出现在引用标签之前作为简短说明，第二个出现在标签之后作为页码引用。

上面的设置使用作者-年份样式，但我们可以使用数字引用。这是通过向`natbib`行添加`numbers`选项来完成的。

### `biblatex`工作流程

`biblatex`宏包的工作方式与`natbib`略有不同，因为我们在导言区选择数据库，但在文档正文中打印它。还有一些新的命令。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % 参考文献信息文件

\begin{document}
数学展示来自\autocite{Graham1995}。

一些更复杂的引用：\parencite{Graham1995}或
\textcite{Thomas2008}或可能是\citetitle{Graham1995}。

\autocite[56]{Thomas2008}

\autocite[参见][45-48]{Graham1995}

一起引用\autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

注意`\addbibresource` _需要_ 完整的数据库文件名，而我们在`natbib`中使用`\bibliography`时省略了`.bib`。还要注意`biblatex`使用更长的命令名称，但这些都很容易猜到。

同样，可以在引用前后插入简短文本，使用可选参数。注意这里页码不需要加前缀`p.~`或`pp.~`，`biblatex`可以自动添加适当的前缀。

在`biblatex`中，参考文献样式是在加载宏包时选择的。这里我们使用了`authoryear`，但还有`numeric`样式和许多其他可用的样式。

### 在 BibTeX 工作流程和`biblatex`之间选择

尽管 BibTeX 工作流程和`biblatex`都通过 BibTeX 文件获取输入，并且可以产生在文档中结构上相似的输出，但它们使用完全不同的方式来产生这个结果。这意味着这两种方法之间存在一些差异，这可能帮助你选择哪种方法最适合你。

在 BibTeX 工作流程中，参考文献样式最终由一个`.bst`文件决定，你通过`\bibliographystyle`命令选择它。`biblatex`不使用`.bst`文件，使用了一个不同的系统。如果你使用的是一个带有`.bst`文件的模板，或者你的项目给了你一个`.bst`文件，你必须使用 BibTeX 工作流程，不能使用`biblatex`。

`biblatex`采用的不同方法意味着你可以直接从文档导言区使用基于 LaTeX 的命令修改参考文献和引用命令的输出。相比之下，BibTeX 的`.bst`样式的修改通常需要处理这些外部文件，并且需要了解 BibTeX 编程语言。一般来说，`biblatex`被认为比 BibTeX 工作流程更容易定制。

在`biblatex`中，实现更复杂的引用样式通常更容易，它提供了更广泛的不同引用命令。它还提供更多上下文相关的功能。粗略地说，这对于在许多STEM学科中常见的样式来说不太有趣，但对于一些人文学科领域中更复杂的样式来说变得相关。

BibTeX 只能正确排序 US-ASCII 字符，并依赖变通方法为非 US-ASCII 字符提供基于 US-ASCII 的排序。通过Biber，`biblatex`提供了完整的 Unicode 排序功能。因此，如果你想要以非 ASCII/非英语顺序对参考文献进行排序，`biblatex`通常是更好的选择。

由于存在的时间比`biblatex`更长，BibTeX 工作流程比`biblatex`更为成熟，这意味着许多出版商和期刊期望使用 BibTeX 工作流程生成的参考文献。这些出版商不能或通常不接受使用`biblatex`的投稿。

结论是：检查作者/投稿指南，如果你要投稿给期刊或出版商。如果你得到了一个`.bst`文件，你必须使用 BibTeX 工作流程。如果你需要一个相对简单的参考文献和引用样式，并且只需要基于英语 US-ASCII 的排序，BibTeX 工作流程就足够了。如果你需要更复杂的引用样式，非英语排序，或者想要更容易访问引用和参考文献样式的自定义功能，你会想要研究使用`biblatex`。

### 练习

尝试`natbib`和`biblatex`的示例。对于`natbib`，你需要运行 LaTeX、BibTeX、LaTeX、LaTeX；对于`biblatex`，是 LaTeX、Biber、LaTeX。找出如何在你的编辑器中做到这一点，或者尝试 Overleaf 和 TeXLive.net 的自动化功能。

看看当你创建新的数据库条目和新的引用时会发生什么。添加一个不在数据库中的引用，看看它如何显示。尝试`natbib`的`numeric`选项和`biblatex`的`style=numeric`选项。
## 长文档结构

<script>
runlatex.preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<span
  class="summary">本课展示了如何将 LaTeX 源文件分割成更小、更易管理的文件，以及这如何使构建长文档更容易和更快速。</span>

当你在写一个较长的文档时，你可能想要将源文件分割成多个文件。例如，对于一本书或论文，通常会有一个"主"/"根"文件，然后每章一个源文件（对于书或论文），或每个重要章节一个源文件（对于长文章）。

### 结构化源文件

LaTeX 允许我们以可控的方式分割源文件。有两个重要的命令：`\input`和`\include`。我们可以使用`\input`让一个文件"就像它被输入在这里一样"工作，所以它可以用于（基本上）任何材料。`\include`命令只能用于章节：它开始新的一页并进行一些内部调整。但它有一个很大的优势：它允许我们选择性地包含章节，所以你可以处理文档的一部分而不是整个文档。

因此，一个较长的文档可能看起来像这样：

<!-- pre0 {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexbook}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{一本示例书}
\author{约翰·多伊 \and 乔·布洛格斯}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  front,
%  chap1,
  chap2,
%  append
  }
}
{
% 初始时做一个完整的文档以生成
% 所有的辅助文件
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

我们将在下面查看这个文件的各个方面。（各个支持文件在本页底部。）

### 使用`\input`

`\input`命令适用于不是独立章节的长文件的部分。在示例中，我们用它来分离出前封面和后封面，保持主文件简短明了，同时也意味着我们可以在另一个文档中重用这些封面。我们也用它来处理文档开头的"非章节"部分：像前言这样的内容。这同样是为了帮助保持主文件清晰。

### 使用`\include`和`\includeonly`

`\include`命令适用于章节，所以我们对每个完整的章节都使用了它；它总是开始新的一页。我们已经使用`\includeonly`选择了实际要排版的章节，如你所见，它接受一个逗号分隔的文件名列表。当你使用`\includeonly`时，你可以缩短排版时间并生成一个用于校对的"选择性"PDF。此外，`\includeonly`的关键优势是 LaTeX 将使用其他包含文件的`.aux`文件中的所有交叉引用信息。

### 创建目录

`\tableofcontents`命令使用章节命令中的信息来填充目录。它有自己的辅助文件，扩展名为`.toc`，所以你可能需要运行 LaTeX 两次来解析信息。目录是自动从章节标题生成的。还有类似的命令用于`\listoffigures`和`\listoftables`，它们分别从浮动环境的标题工作，并使用扩展名为`.lof`和`.lot`的文件。

### 将文档分成部分

`\frontmatter`、`\mainmatter`和`\backmatter`命令影响格式。例如，`\frontmatter`将页码改为罗马数字。`\appendix`命令将编号改为`A`、`B`等，所以例如在`\appendix`之后的第一章中，页眉显示"附录A"。

### 练习

尝试演示文档的基本结构，尝试添加和删除`\includeonly`的条目，看看效果。

添加一些浮动体并生成图表和表格列表。如果使用本地安装的 LaTeX，你能看到需要多少次 LaTeX 运行吗？（在线系统在"幕后"重新运行 LaTeX，所以额外需要的运行不那么明显。）

----

#### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```
<!-- {% endraw %} -->

##### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{前言}
前言文本。参见\cite{doody}。
```
<!-- {% endraw %} -->

##### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{引言}
第一章文本。
```
<!-- {% endraw %} -->

##### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{其他内容}
第二章文本。
```
<!-- {% endraw %} -->

#####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{附录}
第一个附录文本。
```
<!-- {% endraw %} -->

##### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
前封面
\end{center}
```
<!-- {% endraw %} -->

##### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
献给 \ldots
\end{center}
```
<!-- {% endraw %} -->

##### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
版权所有 2020 learnlatex。
\end{center}
```
<!-- {% endraw %} -->

##### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
后封面
\end{center}
```
<!-- {% endraw %} -->

----
## 字体和Unicode引擎

<span
  class="summary">本课介绍了 LaTeX 如何解释 Unicode 输入以及这如何影响你的输入内容和使用的字体。了解 Unicode 和 OpenType 字体支持。</span>

当 TeX 和 LaTeX 最初开始被广泛使用时，它们基本上只能直接处理欧洲语言，尽管也有一些使用其他字母（如希腊语和俄语）的能力。

### 重音和带重音的字母

最初，重音和带重音的字母是使用控制序列或宏来输入的，比如`\c{c}`表示'ç'，`\'e`表示'é'。虽然有些人继续使用这些输入方法因为它们可能更容易输入，但其他人希望能够直接使用键盘上的键来输入这些符号。

在 Unicode 之前，LaTeX 为许多类型的 *文件编码* 提供了支持，这些编码允许以本地方式编写各种语言的文本 — 例如，使用`latin1`编码，法语用户可以写'`déjà vu`'，LaTeX 会在内部将带重音的字母转换为 TeX 命令以产生正确的输出。

这种方法在使用`pdflatex`引擎的现代 LaTeX 中仍在使用。默认情况下，所有文件都被假定为 Unicode（UTF-8 编码），除非另有指定。尽管这个引擎限于8位字体，但大多数欧洲语言都可以得到支持。

### 字体选择

使用`pdflatex`的字体选择使用了健壮的 LaTeX 字体选择方案，如今在标准 LaTeX 发行版中有许多可直接使用的字体。例如，TeX Gyre 字体是一套基于大多数人熟悉的常见字体的高质量字体，如 Times、Helvetica、Palatino 等。要加载这些字体，只需加载一个具有适当名称的宏包。对于 Times 的替代品，TeX Gyre 的名称是 Termes：

```latex
\usepackage{tgtermes}
```
{: .noedit :}

对于`pdflatex`，大多数字体都可以通过宏包访问。你可以查看 [LaTeX字体目录](https://www.tug.org/FontCatalogue/)或 [CTAN上的'字体'主题](https://www.ctan.org/topic/font)来了解一些选项。你也可以在互联网上搜索你想要的字体，并寻找`pdflatex`兼容的宏包版本。如果你想使用专有字体，你可以搜索合适的克隆版本，对于大多数应用来说，这与原版足够相似。

### Unicode时代

由于`pdflatex`限于8位文件编码和8位字体，它不能原生使用现代 OpenType 字体，也不能轻松地在使用不同字母（或脚本，用技术术语来说）的多种语言之间切换。有两个替代 pdfTeX 的引擎，它们原生使用 Unicode 输入和现代字体：XeTeX 和 LuaTeX。对于 LaTeX，这些通常在你的编辑器中分别使用`xelatex`和`lualatex`引擎来调用。

<p class="hint">例如，本教程的中文版本就指定 XeLaTeX 为编译引擎，并使用`xeCJK`宏包来支持中文。</p>

在这些引擎中，字体选择由`fontspec`宏包完成，对于简单的文档可以像这样简单：
```latex
% !TEX program=lualatex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

这选择了 TeX Gyre Termes 字体，就像在`pdflatex`示例中一样。值得注意的是，这种方法适用于 _任何_ OpenType 字体。一些可用于`pdflatex`的字体也可以通过它们各自的宏包用于`xelatex`和`lualatex`，或者通过使用`fontspec`如上所示加载你计算机上安装的任何字体。

[LaTeX字体目录](https://www.tug.org/FontCatalogue/)也显示了有 OpenType 格式可用的字体，所以你可以用它作为查找字体的资源，以及前面提到的 [CTAN页面](https://www.ctan.org/topic/font)。

选择字体后，现在可以直接在源文档中用纯 Unicode 输入文本。这里是一个示例，显示了一些拉丁字母和希腊字母以及一些 CJK 表意文字：

```latex
% !TEX program=lualatex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<p 
  class="hint">在切换语言时，通常也需要更改断字模式等内容，`babel`和`polyglossia`宏包都提供了强大的功能来做这些事情。</p>
## 处理错误

<span
  class="summary">本课展示了 LaTeX 文档中的一些常见错误，它们的含义，以及如何解决它们。</span>

与典型的文字处理系统不同，LaTeX 有一个类似于编程语言编译器的编辑/运行/查看循环，就像在编程中一样，用户可能会在输入中出错，因此需要处理系统报告的错误信息。

### 常见错误

本页给出了几个常见错误的示例。每个错误示例都有一些关于错误信息形式的讨论。

尝试这些示例可能会有所启发，同时也可以使用编辑功能来尝试修复文档并测试你是否能够解决这些错误。

#### 找不到pdflatex

人们在开始时看到的一个常见错误，在 Windows 操作系统中，可能是：

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

而在Linux系统中，则可能是：

```
bash: pdflatex: command not found
```
{: .noedit :}

这不是 TeX 错误，而是操作系统错误，说明TeX没有安装或找不到。一个常见的错误是安装了一个 _编辑器_，如 TeXworks 或 TeXShop，但没有安装 TeX 系统，如 TeX Live 或 MiKTeX。

#### TeX错误信息的剖析

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

这里使用自定义命令 \mycommand。

\end{document}
```

这会在日志文件中产生一个多行消息。

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 这里使用自定义命令 \mycommand
                                  .
? 
```
{: .noedit :}

* 第一行，以`!`标记，给出了错误的一般性质（未定义的命令）。
* 第二对行显示 TeX 正在处理的行，在 TeX 已经到达的点处有一个换行标记。未定义的命令是最后一个被读取的标记，所以是换行前的最后一个词，这里是`\textbold`。换行后是`{hmmm}`，这些标记可能已经作为参数被读取，但尚未被 TeX 执行。
* 在这一点上，可能会有一些额外的行显示错误消息的更多上下文。
* 最后一行以`l.`开头，后面是行号，然后是源文件中检测到错误的行。

* 最后一行是一个`?`。如果交互式使用 TeX，可以在这一点向 TeX 输入指令，但大多数编辑器和在线系统在错误时运行 TeX 的模式是不停止而是继续尝试处理剩余的文档。如果你在交互式工作，输入`s`到提示符会指示 TeX 以这种模式继续。

注意，TeX 并不在定义被创建的点看到错误；事实上，如果`\mycommand`被定义但未使用，就不会报错。所以虽然错误在第8行被报告，但"真正的"错误在第4行的定义中，因此看到完整的错误消息很重要。

要注意，一些编辑器显示错误日志的一行"摘要"。这可能特别具有误导性，如果显示为

`行 8: 未定义的命令: ...\mycommand`

因为它使得看起来像是`\mycommand`未定义。

#### 不匹配的花括号

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

这里的错误是一个用于结束可选参数的不匹配的`}`。结束花括号导致 LaTeX 的选项解析失败，你得到一个内部的且不太有帮助的错误：

```
! \@fileswith@ptions 参数包含额外的 }.
```
{: .noedit :}

虽然错误描述不太有帮助，但接下来的两行通过使用换行准确地显示了错误的位置：

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}

#### 缺失文件

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmathz}

\begin{document}

\end{document}
```

这会产生错误

```
! LaTeX 错误: 文件 `amsmathz.sty' 未找到.
```
{: .noedit :}

注意：同样的错误可能由两种不同的原因引起；这里是一个简单的拼写错误，可以通过修正宏包名称来纠正，或者文件确实缺失，需要在当前系统上安装。

#### 显示数学中的空行

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}

一些文本
\begin{equation}

  1=2

\end{equation}

\end{document}
```

产生了一个有点神秘的错误

```
! 插入未知 $ .
```
{: .noedit :}

但修复很简单，数学环境中的空行是不允许的，应该删除。

### 练习

尝试修复提供的示例中的错误。

生成包含不同错误的文档，并注意错误信息的形式。

<script>
  window.addEventListener('load', function(){
  rlselectline('pre2',4);
  rlselectline('pre4',4);
  rlselectline('pre7',4);
  rlselectline('pre9',8);
  }, false);
</script>
## 获取文档和寻求帮助

<span
  class="summary">本课展示了 LaTeX 相关软件和宏包的主要文档来源，以及当你遇到困难时如何寻求帮助。</span>

有几种方式可以访问宏包或文档类的文档。

### `texdoc`

如果你已经安装了 TeX 发行版（如 TeX Live 或 MiKTeX），并且在安装时包含了文档，你可以使用`texdoc`命令行工具访问本地保存的文档。使用：

`texdoc` < _pkg_ >

将打开宏包`<pkg>`的文档。该工具会搜索可用的文档，并打开它认为最接近你搜索词的结果。你可以使用以下命令列出并选择所有可行的结果：

`texdoc -l` < _pkg_ >

### texdoc.org

这是一个[网站](https://texdoc.org/)，其工作方式类似于`texdoc`工具。你可以像使用`texdoc -l`那样搜索他们提供的文档，然后从结果中选择。

### CTAN

[CTAN](https://www.ctan.org)是综合 TeX 档案网络（Comprehensive TeX Archive Network）。大多数 LaTeX 宏包都发布在这里。你可以在网站上搜索宏包来访问其文档。通常宏包保存在`ctan.org/pkg/<pkg-name>`中，你可以在那里访问 CTAN 上存储的宏包的 README 和文档。

### LaTeX 相关书籍

有几本可以帮助你学习更多关于 LaTeX 的书籍。作为初学者，你会从结构化的入门指南中获益良多，因为这些指南可以提供比我们在这里介绍的更多细节。你可能还想要一个更详细的参考手册。

LaTeX 团队维护了一个[书籍列表](https://www.latex-project.org/help/books/)，其中大部分是由团队成员编写的。最著名的是 [Lamport 的官方指南](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)和全面的 [LaTeX Companion 第3版](https://www.informit.com/store/latex-companion-parts-i-ii-3rd-edition-9780138166489)。

其他面向学习 LaTeX 的书籍包括：

- [_Guide to LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) 作者：Helmut Kopka和Patrick Daly：提供电子书版本
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) 作者：Nicola Talbot：提供免费电子书或低价印刷版本
- [_Using LaTeX to write a PhD thesis_](https://www.dickimaw-books.com/latex/thesis/) 作者：Nicola Talbot：提供免费电子书或低价印刷版本
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide) 作者：Stefan Kottwitz：提供电子书和印刷版本
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) 作者：Marc van Dongen：提供电子书和印刷版本

### 获取帮助

有多个在线论坛可以询问 LaTeX 问题；也许现今最受欢迎的是 [TeX - LaTeX StackExchange](https://tex.stackexchange.com)。每当你提问时，最好先把示例弄清楚：通常被称为"最小工作示例"（MWE）。这并不意味着代码能工作（否则你就不会提问了！），而是说你已尽最大努力使其清晰、自包含且最小化。后者意味着只包含足够展示问题的内容。

#### 如何创建最小工作示例（MWE）

如何构建 MWE？通常最简单的是从：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
文本
\end{document}
```

开始，然后一行一行地添加内容，直到展示出问题。你也可以尝试"缩减"你的实际文件，但这可能是一个很长的过程。

<p 
  class="hint">如果你需要更多文本来展示分页和其他效果，可以使用`lipsum`或者`zhlipsum`等宏包生成无意义的段落文本，同时保持测试文件较小。</p>

#### 日志文件

每次运行 LaTeX 时都会创建一个日志文件，它与你的输入文件同名但扩展名为`.log`。

<p 
  class="hint">根据你的桌面界面，你可能需要"显示扩展名"才能确定是哪个文件。</p>

在日志文件中，你总是可以看到完整的错误消息。LaTeX 的错误消息试图提供帮助，但它们不像文字处理器中的消息那样。

<p 
  class="hint">一些编辑器也使得很难看到错误的"完整"文本，这可能隐藏了关键细节。</p>

如果你遇到问题，LaTeX 专家通常会要求一份你的日志文件副本。