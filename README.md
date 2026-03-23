# Systematic-Learning

<!-- 项目徽章 -->
<div align="center">
  
  [![Website](https://img.shields.io/badge/🌐_在线预览-Live_Demo-2ea44f?style=for-the-badge)](https://Aurorp1g.github.io/Systematic-Learning/)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
  [![Node](https://img.shields.io/badge/Node-%3E%3D%2018.0.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](package.json)
  [![Python](https://img.shields.io/badge/Python-%3E%3D%203.8-3776AB?style=for-the-badge&logo=python&logoColor=white)](requirements.txt)
  
</div>

<br>

## 🎯 项目简介

> **Systematic-Learning** 是一个精心构建的系统性学习知识库，涵盖数学基础、物理学和计算机科学三大核心领域。
> 
> 从微积分到量子力学，从线性代数到编译原理 —— 这里是你技术成长的完整路线图。

<br>

<!-- 目录导航 -->
## 📚 知识图谱

| 分类 | 知识点 |
|:---:|:---|
| **🔢 数学基础** | 单变量微积分 · 多变量微积分 · 线性代数 · 概率论与数理统计 · 常微分方程 · 复变函数与积分变换 · 数值分析 · 拓扑学 · 离散数学 |
| **⚛️ 物理学** | 力学 · 电磁学 · 热力学与统计物理 · 量子力学 · 狭义相对论 |
| **💻 计算机基础** | 数据结构与算法 · 操作系统 · 计算机网络 · 编译原理 · 数据库原理 |

<br>

<!-- 技术栈展示 -->
## 🛠️ 技术架构

| 类别 | 技术栈 |
|:---:|:---|
| **文档生成** | ![Sphinx](https://img.shields.io/badge/Sphinx-000000?style=flat&logo=sphinx&logoColor=white) ![reStructuredText](https://img.shields.io/badge/reStructuredText-336791?style=flat) ![Markdown](https://img.shields.io/badge/Markdown-083FA1?style=flat) |
| **Markdown支持** | ![MyST](https://img.shields.io/badge/MyST_Parser-4B76D6?style=flat) |
| **构建工具** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white) |
| **部署** | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=github-pages&logoColor=white) |
| **CI/CD** | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white) |


<br>

<!-- 快速开始 -->
## 🚀 快速开始

```bash
# 1. 安装python虚拟环境
python -m venv .venv

# 2. 安装Python依赖
pip install -r requirements.txt

# 3. 安装Node.js依赖
npm install

# 4. 启动开发服务器
npm run dev
```

支持的命令：
- `npm run dev`：启动开发服务器，监听文件变化并自动重新构建。
- `npm run build`：构建生产版本，生成静态文件。

开发服务器将在 `http://localhost:4000` 启动，支持热重载。

<br>

<!-- 贡献指南 -->
## 🤝 参与贡献

欢迎为本项目贡献内容！以下是完整的贡献流程：

### 1. Fork 仓库

点击 GitHub 仓库页面右上角的 "Fork" 按钮，将仓库复制到你的 GitHub 账户。

### 2. 克隆 Fork 的仓库

```bash
git clone https://github.com/YOUR_USERNAME/Systematic-Learning.git
cd Systematic-Learning
```

### 3. 添加上游仓库

```bash
git remote add upstream https://github.com/Aurorp1g/Systematic-Learning.git
```

### 4. 创建功能分支

```bash
git checkout -b feature/your-feature-name
# 或者修复bug
git checkout -b fix/your-fix-name
```

### 5. 进行修改

本项目支持 **RST** 和 **Markdown** 两种文档格式。

| 格式 | 优势 | 适用场景 | 文档指南 |
|:---:|:---|:---|:---|
| **reStructuredText (RST)** | 功能强大、支持复杂指令、表格、元数据 | 复杂文档结构、需要 Sphinx 扩展功能 | [RST 文档指南](https://aurorp1g.github.io/Systematic-Learning/reStructuredText.html) |
| **Markdown (MD)** | 语法简洁、生态广泛、易于上手 | 快速笔记、通用文档、喜欢简洁语法 | [Markdown 文档指南](https://aurorp1g.github.io/Systematic-Learning/Markdown.html) |

> 💡 **建议**：新内容优先使用 Markdown（更舒适），复杂结构使用 RST（更强大）。

在 `src/` 目录下添加或修改 `.rst` 或 `.md` 文件。

注意，如果添加了新的目录或文件，请确保在 `index.rst` 文件中添加相应的目录条目。

### 6. 提交修改

```bash
git add .
git commit -m "feat: 添加xxx内容"
```

提交信息格式建议：
- `feat:` 新功能
- `fix:` 修复bug
- `docs:` 文档更新
- `refactor:` 代码重构

### 7. 同步上游更新

```bash
git fetch upstream
git rebase upstream/master
```

如果有冲突，解决冲突后继续：

```bash
git add .
git rebase --continue
```

### 8. 推送分支

```bash
git push origin feature/your-feature-name
```

### 9. 创建 Pull Request

1. 在 GitHub 上访问你的 Fork 仓库
2. 点击 "Compare & pull request" 按钮
3. 填写 PR 标题和描述
4. 点击 "Create pull request"

### 10. 等待审核

维护者会审核你的 PR，可能会提出修改建议。请及时响应并做出相应的调整。

<br>

<!-- 推荐资源 -->
## 📖 推荐学习资源

<details>
<summary><b>点击展开精选资源列表</b></summary>

1. **[《Machine Learning for Humans》](https://github.com/Aurorp1g/Systematic-Learning/tree/main/reference/Machine%20Learning%20for%20Humans.pdf)** - 机器学习科普读物，用精致的语言描述基本概念
2. **[Machine Learning Mindmap](https://github.com/Aurorp1g/Systematic-Learning/tree/main/reference/Machine%20Learning.pdf)** - 机器学习概念脑图
3. **[Python Data Science Cheat Sheets](https://github.com/Aurorp1g/Systematic-Learning/tree/main/reference/Python%20datascience%20Cheat%20Sheets.pdf)** - Python 数据科学速查表
4. **[Calculus Cheat Sheet](https://github.com/Aurorp1g/Systematic-Learning/tree/main/reference/Calculus_Cheat_Sheet_All_Reduced.pdf)** - 微积分知识精炼总结

*所有电子版资料均已放置在 `/reference` 目录下*

</details>

<br>

<!-- 页脚 -->
<div align="center">
  
  **⭐ 如果这个项目对你有帮助，请给它一个 Star！**
  

</div>