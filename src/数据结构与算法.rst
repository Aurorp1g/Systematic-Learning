===================================
数据结构与算法
===================================


0. 要点汇总
====================

本篇文章的要点整理如下

 - 数据结构：计算机存储、组织数据的方式，是高效访问和修改数据的基础
 - 算法：解决特定问题的一系列明确指令，具有输入、输出、有穷性、确定性和可行性
 - 抽象数据类型(ADT)：数据结构的逻辑定义，与具体实现分离
 - 时间复杂度：算法执行时间与输入规模的关系，常用大O表示法描述
 - 空间复杂度：算法执行过程中所需存储空间与输入规模的关系
 - 渐近记号：大O、大Ω、大Θ，用于描述算法复杂度的上界、下界和紧确界
 - 数组：连续存储的元素集合，支持随机访问，插入删除效率低
 - 链表：通过指针连接的节点序列，插入删除效率高，访问效率低
 - 栈：后进先出(LIFO)的数据结构
 - 队列：先进先出(FIFO)的数据结构
 - 树：层次化的非线性数据结构，包括二叉树、搜索树、平衡树等
 - 图：由顶点和边组成的数据结构，表示复杂关系网络
 - 哈希表：通过哈希函数实现快速查找的数据结构
 - 排序算法：将数据按特定顺序排列的算法，如冒泡、插入、快速、归并等
 - 查找算法：在数据集中查找特定元素的算法，如顺序查找、二分查找等
 - 分治法：将问题分解为子问题递归求解的算法设计策略
 - 贪心算法：每步选择局部最优解以期达到全局最优的算法设计策略
 - 动态规划：通过存储子问题解避免重复计算的算法设计策略
 - 回溯法：通过系统地搜索解空间找到所有解的算法设计策略
 - 分支限界法：在回溯法基础上引入限界函数优化搜索的算法设计策略


1. 数据结构基础
===================================

1.1 基本概念
---------------------

**数据与数据结构**

数据是对客观事物的符号表示。

数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。

**逻辑结构与物理结构**

逻辑结构：数据元素之间的逻辑关系，与计算机无关
 - 线性结构：一对一关系
 - 树形结构：一对多关系
 - 图状结构：多对多关系

物理结构：数据在计算机中的存储方式
 - 顺序存储：连续存储
 - 链式存储：非连续存储

**抽象数据类型(ADT)**

抽象数据类型是指一个数学模型以及定义在该模型上的一组操作。

ADT的特点：
 - 数据抽象：隐藏数据表示细节
 - 操作封装：通过操作访问和修改数据

**算法的五个特征**

1. **有穷性**：算法在有限步骤后终止
2. **确定性**：每步指令含义明确
3. **输入**：有零个或多个输入
4. **输出**：有一个或多个输出
5. **可行性**：每步操作都可以在有限时间内完成


1.2 算法复杂度分析
---------------------

**时间复杂度**

时间复杂度是算法执行时间随输入规模增长的渐近增长率。

**大O记号**

f(n) = O(g(n))表示存在正常数c和n₀，使得当n ≥ n₀时，\|f(n)\| ≤ c\|g(n)\|

常见时间复杂度（按效率从高到低）：
 - O(1)：常数时间
 - O(log n)：对数时间
 - O(n)：线性时间
 - O(n log n)：线性对数时间
 - O(n²)：平方时间
 - O(n³)：立方时间
 - O(2ⁿ)：指数时间
 - O(n!)：阶乘时间

**空间复杂度**

空间复杂度是算法所需存储空间随输入规模增长的渐近增长率。

**复杂度分析示例**

.. code-block:: python
    
    # 时间复杂度O(n)，空间复杂度O(1)
    def sum_array(arr):
        total = 0
        for x in arr:
            total += x
        return total

    # 时间复杂度O(n²)，空间复杂度O(1)
    def bubble_sort(arr):
        n = len(arr)
        for i in range(n):
            for j in range(0, n-i-1):
                if arr[j] > arr[j+1]:
                    arr[j], arr[j+1] = arr[j+1], arr[j]
        return arr


**最优、最坏、平均情况**

最优情况：算法执行的最快情况
最坏情况：算法执行的最慢情况
平均情况：算法执行的平均情况（需要概率分布）

通常我们关注最坏情况的时间复杂度。


1.3 渐近记号
---------------------

**大O记号（上界）**

f(n) = O(g(n))表示f(n)的增长速度不超过g(n)

**大Ω记号（下界）**

f(n) = Ω(g(n))表示f(n)的增长速度不低于g(n)

**大Θ记号（紧确界）**

f(n) = Θ(g(n))表示f(n)的增长速度与g(n)相同

**小o记号**

f(n) = o(g(n))表示f(n)的增长速度严格小于g(n)

**小ω记号**

f(n) = ω(g(n))表示f(n)的增长速度严格大于g(n)

**渐近记号的性质**

 - 传递性：若f(n) = O(g(n))且g(n) = O(h(n))，则f(n) = O(h(n))
 - 反射性：f(n) = O(f(n))
 - 对称性：f(n) = Θ(g(n))当且仅当g(n) = Θ(f(n))
 - 移位性：若f(n) = O(g(n))，则f(n)/k = O(g(n)/k)


2. 线性数据结构
===================================

2.1 数组
---------------------

**数组的定义**

数组是存储在连续内存空间中的相同类型元素的集合。

**数组的特性**

 - 随机访问：通过下标直接访问元素，时间复杂度O(1)
 - 连续存储：元素在内存中连续排列
 - 固定大小：数组创建后大小固定（某些语言支持动态数组）
 - 类型相同：所有元素类型相同

**基本操作**

 - 访问：O(1)
 - 搜索：O(n)
 - 插入：O(n)（需要移动元素）
 - 删除：O(n)（需要移动元素）

**多维数组**

二维数组：矩阵，用于存储表格数据
三维数组：立方体，用于存储立体数据

**数组的应用**

 - 矩阵运算
 - 图的邻接矩阵表示
 - 动态规划

**动态数组**

支持动态扩容的数组实现，如：
 - C++的std::vector
 - Java的ArrayList
 - Python的list

扩容策略：通常按2倍扩容，均摊时间复杂度O(1)

2.2 链表
---------------------

**链表的定义**

链表是由节点组成的线性序列，每个节点包含数据和指向下一个节点的指针。

**链表的类型**

1. **单链表**：每个节点只有一个指向后继的指针
2. **双向链表**：每个节点有两个指针，分别指向前驱和后继
3. **循环链表**：尾节点的指针指向头节点
4. **双向循环链表**：结合双向链表和循环链表的特点

**链表的特性**

 - 非连续存储：节点可以在内存中任意位置
 - 动态大小：可以动态添加或删除节点
 - 插入删除效率高：在已知位置插入或删除只需O(1)时间
 - 访问效率低：需要从头开始遍历，访问第k个元素需要O(k)时间

**基本操作**

 - 头插/头删：O(1)
 - 尾插/尾删：O(1)（对于双向链表）或O(n)（对于单链表）
 - 按位置插入/删除：O(k)（k是位置）
 - 搜索：O(n)

**链表的应用**

 - 实现栈和队列
 - 实现图的邻接表表示
 - 内存管理

**链表 vs 数组**

+-------------+--------+-------------------+
| 特性        | 数组   | 链表              |
+=============+========+===================+
| 访问        | O(1)   | O(n)              |
+-------------+--------+-------------------+
| 插入/删除   | O(n)   | O(1)（已知位置）  |
+-------------+--------+-------------------+
| 内存连续    | 是     | 否                |
+-------------+--------+-------------------+
| 空间开销    | 小     | 大（需要指针）    |
+-------------+--------+-------------------+


2.3 栈
---------------------

**栈的定义**

栈是一种后进先出(LIFO)的线性数据结构。

**栈的基本操作**

 - push(x)：将元素x压入栈顶
 - pop()：弹出栈顶元素
 - top()：返回栈顶元素
 - isEmpty()：判断栈是否为空
 - size()：返回栈中元素个数

**栈的实现**

1. **数组实现**:

.. code-block:: python
    
    class ArrayStack:
        def __init__(self):
            self.data = []

        def push(self, x):
            self.data.append(x)

        def pop(self):
            return self.data.pop()

        def top(self):
            return self.data[-1]

2. **链表实现**:

.. code-block:: python
    
    class Node:
        def __init__(self, val):
            self.val = val
            self.next = None

    class LinkedListStack:
        def __init__(self):
            self.top = None

        def push(self, x):
            node = Node(x)
            node.next = self.top
            self.top = node

        def pop(self):
            if self.top is None:
                raise Exception("Stack is empty")
            val = self.top.val
            self.top = self.top.next
            return val

**栈的应用**

 - 函数调用栈
 - 表达式求值
 - 括号匹配
 - 撤销操作
 - 浏览器历史记录


2.4 队列
---------------------

**队列的定义**

队列是一种先进先出(FIFO)的线性数据结构。

**队列的基本操作**

 - enqueue(x)：将元素x加入队尾
 - dequeue()：从队头取出元素
 - front()：返回队头元素
 - isEmpty()：判断队列是否为空
 - size()：返回队列中元素个数

**队列的类型**

1. **普通队列**：标准的FIFO队列
2. **循环队列**：通过模运算实现，避免假溢出
3. **优先队列**：元素按优先级出队
4. **双端队列**：两端都可以插入和删除

**队列的实现**

1. **数组实现（循环队列）**:

.. code-block:: python
    
    class CircularQueue:
        def __init__(self, capacity):
            self.capacity = capacity
            self.data = [None] * capacity
            self.front = 0
            self.rear = 0
            self.size = 0

        def enqueue(self, x):
            if self.size == self.capacity:
                raise Exception("Queue is full")
            self.data[self.rear] = x
            self.rear = (self.rear + 1) % self.capacity
            self.size += 1

        def dequeue(self):
            if self.size == 0:
                raise Exception("Queue is empty")
            val = self.data[self.front]
            self.front = (self.front + 1) % self.capacity
            self.size -= 1
            return val

2. **链表实现**:

.. code-block:: python
    
    class LinkedListQueue:
        def __init__(self):
            self.front = None
            self.rear = None
            self.size = 0

        def enqueue(self, x):
            node = Node(x)
            if self.rear is None:
                self.front = self.rear = node
            else:
                self.rear.next = node
                self.rear = node
            self.size += 1

        def dequeue(self):
            if self.front is None:
                raise Exception("Queue is empty")
            val = self.front.val
            self.front = self.front.next
            if self.front is None:
                self.rear = None
            self.size -= 1
            return val

**队列的应用**

 - 操作系统的任务调度
 - 打印机任务队列
 - 广度优先搜索(BFS)
 - 缓冲区
 - 消息队列



3. 树形数据结构
===================================

3.1 树的基本概念
---------------------

**树的定义**

树是由n(n ≥ 0)个节点组成的有限集合。

**树的基本术语**

 - 根节点：树的最顶层节点
 - 叶子节点：没有子节点的节点
 - 内部节点：非叶子节点
 - 父节点：直接前驱节点
 - 子节点：直接后继节点
 - 兄弟节点：同一父节点的子节点
 - 路径：从一个节点到另一个节点的节点序列
 - 路径长度：路径上边的数量
 - 深度：根节点到某节点的路径长度
 - 高度：某节点到最远叶子节点的最长路径长度
 - 度：节点的子节点个数
 - 树的度：树中节点的最大度数

**树的表示方法**

1. **双亲表示法**：每个节点存储其父节点的下标
2. **孩子表示法**：每个节点存储其所有孩子节点
3. **孩子兄弟表示法**：每个节点存储其第一个孩子和右兄弟


3.2 二叉树
---------------------

**二叉树的定义**

二叉树是每个节点最多有两个子节点（左子节点和右子节点）的树。

**二叉树的性质**

1. 第i层最多有2^(i-1)个节点
2. 深度为k的二叉树最多有2^k - 1个节点
3. 对于任意二叉树，叶子节点数n₀ = 度为2的节点数n₂ + 1

**二叉树的类型**

1. **满二叉树**：除最后一层外，每层节点数都达到最大，最后一层节点全部靠左
2. **完全二叉树**：除最后一层外，每层节点数都达到最大，最后一层节点从左到右填充
3. **平衡二叉树**：任意节点的左右子树高度差不超过1
4. **二叉搜索树(BST)**：左子树所有节点值 < 根节点值 < 右子树所有节点值

**二叉树的遍历**

1. **前序遍历**：根 - 左 - 右
2. **中序遍历**：左 - 根 - 右
3. **后序遍历**：左 - 右 - 根
4. **层序遍历**：按层从上到下，从左到右

.. code-block:: python
    
    class TreeNode:
        def __init__(self, val):
            self.val = val
            self.left = None
            self.right = None

    def preorder(root):
        if root is None:
            return
        print(root.val)
        preorder(root.left)
        preorder(root.right)

    def inorder(root):
        if root is None:
            return
        inorder(root.left)
        print(root.val)
        inorder(root.right)

    def postorder(root):
        if root is None:
            return
        postorder(root.left)
        postorder(root.right)
        print(root.val)

    def level_order(root):
        if root is None:
            return []
        queue = [root]
        result = []
        while queue:
            node = queue.pop(0)
            result.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return result

**二叉树的应用**

 - 哈夫曼编码
 - 表达式树
 - 决策树
 - 堆


3.3 二叉搜索树
---------------------

**二叉搜索树的定义**

二叉搜索树(BST)是一种特殊的二叉树，满足：
 - 左子树所有节点值 < 根节点值
 - 右子树所有节点值 > 根节点值
 - 左右子树本身也是BST

**BST的操作**

1. **查找**：O(h)，h是树的高度

.. code-block:: python
    
    def search(root, val):
        if root is None or root.val == val:
            return root
        if val < root.val:
            return search(root.left, val)
        else:
            return search(root.right, val)




2. **插入**：O(h)

.. code-block:: python
    
    def insert(root, val):
        if root is None:
            return TreeNode(val)
        if val < root.val:
            root.left = insert(root.left, val)
        elif val > root.val:
            root.right = insert(root.right, val)
        return root


3. **删除**：O(h)

.. code-block:: python
    
    def delete(root, val):
        if root is None:
            return root
        if val < root.val:
            root.left = delete(root.left, val)
        elif val > root.val:
            root.right = delete(root.right, val)
        else:
            # 节点有一个子节点或无子节点
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left
            # 节点有两个子节点
            temp = min_value_node(root.right)
            root.val = temp.val
            root.right = delete(root.right, temp.val)
        return root


**BST的效率**

最优情况（平衡）：O(log n)
最坏情况（退化成链表）：O(n)


3.4 平衡二叉树
---------------------

**平衡二叉树的定义**

平衡二叉树是一种自平衡的二叉搜索树，保证树的高度始终为O(log n)。

**AVL树**

AVL树是最早提出的平衡二叉树，满足：
 - 任意节点的左右子树高度差（平衡因子）的绝对值不超过1
 - 每次插入或删除后，通过旋转恢复平衡

旋转操作：
 - 左旋
 - 右旋
 - 左右旋
 - 右左旋

**红黑树**

红黑树是一种高效的自平衡二叉搜索树，满足：
 - 每个节点是红色或黑色
 - 根节点是黑色
 - 所有叶子节点是黑色
 - 红色节点的两个子节点都是黑色
 - 从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点

红黑树通过颜色标记和旋转操作保证平衡。

**平衡二叉树的应用**

 - C++的std::map和std::set
 - Java的TreeMap和TreeSet
 - Linux内核的调度器


3.5 堆
---------------------

**堆的定义**

堆是一种特殊的完全二叉树，满足：
 - 大顶堆：每个节点的值 >= 其子节点的值
 - 小顶堆：每个节点的值 <= 其子节点的值

**堆的性质**

 - 堆总是一棵完全二叉树
 - 堆中某个节点的值总是不大于或不小于其父节点的值

**堆的操作**

1. **插入**：O(log n)

.. code-block:: python
    
    def insert(heap, val):
        heap.append(val)
        sift_up(heap, len(heap) - 1)

    def sift_up(heap, i):
        parent = (i - 1) // 2
        if i > 0 and heap[i] > heap[parent]:
            heap[i], heap[parent] = heap[parent], heap[i]
            sift_up(heap, parent)

2. **删除堆顶**：O(log n)

.. code-block:: python
    
    def extract_max(heap):
        if len(heap) == 0:
            raise Exception("Heap is empty")
        max_val = heap[0]
        heap[0] = heap[-1]
        heap.pop()
        sift_down(heap, 0)
        return max_val

    def sift_down(heap, i):
        n = len(heap)
        while True:
            left = 2 * i + 1
            right = 2 * i + 2
            largest = i
            if left < n and heap[left] > heap[largest]:
                largest = left
            if right < n and heap[right] > heap[largest]:
                largest = right
            if largest == i:
                break
            heap[i], heap[largest] = heap[largest], heap[i]
            i = largest

3. **建堆**：O(n)

**堆的应用**

 - 堆排序
 - 优先队列
 - 求Top K问题
 - 合并K个有序链表



4. 图数据结构
===================================

4.1 图的基本概念
---------------------

**图的定义**

图是由顶点集合V和边集合E组成的数据结构，记为G = (V, E)。

**图的基本术语**

 - 顶点(Vertex)：图中的节点
 - 边(Edge)：连接顶点的线
 - 无向图：边没有方向的图
 - 有向图：边有方向的图
 - 加权图：边有权重的图
 - 度(Degree)：与顶点相连的边的数量
 - 入度(Indegree)：指向顶点的边的数量
 - 出度(Outdegree)：从顶点指出的边的数量
 - 路径：从一个顶点到另一个顶点的顶点序列
 - 环：起点和终点相同的路径
 - 连通图：任意两个顶点之间都有路径的图
 - 完全图：每对顶点之间都有边的图

**图的表示方法**

1. **邻接矩阵**：

.. code-block:: python
    
    # 无向图的邻接矩阵
    adj_matrix = [
        [0, 1, 1, 0],
        [1, 0, 1, 1],
        [1, 1, 0, 0],
        [0, 1, 0, 0]
    ]


优点：
 - 判断两个顶点是否相邻：O(1)
 - 适合稠密图

缺点：
 - 空间复杂度：O(V²)
 - 遍历所有邻接顶点：O(V)

2. **邻接表**：

.. code-block:: python
    
    # 无向图的邻接表
    adj_list = {
        0: [1, 2],
        1: [0, 2, 3],
        2: [0, 1],
        3: [1]
    }


优点：
 - 空间复杂度：O(V + E)
 - 遍历所有邻接顶点：O(degree)

缺点：
 - 判断两个顶点是否相邻：O(degree)


4.2 图的遍历
---------------------

**深度优先搜索(DFS)**

DFS从起始顶点开始，尽可能深地搜索图的分支。

.. code-block:: python
    
    def dfs(graph, start, visited=None):
        if visited is None:
            visited = set()
        visited.add(start)
        print(start)
        for neighbor in graph[start]:
            if neighbor not in visited:
                dfs(graph, neighbor, visited)

时间复杂度：O(V + E)
空间复杂度：O(V)

**广度优先搜索(BFS)**

BFS从起始顶点开始，逐层向外扩展。

.. code-block:: python
    
    from collections import deque

    def bfs(graph, start):
        visited = set([start])
        queue = deque([start])
        while queue:
            vertex = queue.popleft()
            print(vertex)
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)


时间复杂度：O(V + E)
空间复杂度：O(V)


4.3 最短路径算法
---------------------

**Dijkstra算法**

Dijkstra算法用于求单源最短路径，适用于非负权重的有向图。

.. code-block:: python
    
    import heapq

    def def dijkstra(graph, start):
        distances = {vertex: float('infinity') for vertex in graph}
        distances[start] = 0
        priority_queue = [(0, start)]

        while priority_queue:
            current_distance, current_vertex = heapq.heappop(priority_queue)

            if current_distance > distances[current_vertex]:
                continue

            for neighbor, weight in graph[current_vertex].items():
                distance = current_distance + weight
                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    heapq.heappush(priority_queue, (distance, neighbor))

        return distances


时间复杂度：O((V + E)log V)
空间复杂度：O(V)

**Floyd-Warshall算法**

Floyd-Warshall算法用于求所有顶点对之间的最短路径。

.. code-block:: python
    
    def floyd_warshall(graph):
        n = len(graph)
        dist = [[graph[i][j] for j in range(n)] for i in range(n)]

        for k in range(n):
            for i in range(n):
                for j in range(n):
                    if dist[i][k] + dist[k][j] < dist[i][j]:
                        dist[i][j] = dist[i][k] + dist[k][j]

        return dist


时间复杂度：O(V³)
空间复杂度：O(V²)


4.4 最小生成树
---------------------

**最小生成树的定义**

最小生成树是连通图的生成树中，边权之和最小的树。

**Prim算法**

Prim算法从任意顶点开始，逐步扩展生成树。

.. code-block:: python
    
    def prim(graph):
        n = len(graph)
        mst = []
        visited = set()
        # 初始化距离
        min_edge = [(float('infinity'), None, i) for i in range(n)]
        min_edge[0] = (0, None, 0)

        while len(visited) < n:
            # 找到最小边
            weight, _, u = min((min_edge[i] for i in range(n) if i not in visited), key=lambda x: x[0])
            visited.add(u)
            if weight != float('infinity'):
                mst.append((u, weight))

            # 更新邻接点的距离
            for v, w in graph[u].items():
                if v not in visited and w < min_edge[v][0]:
                    min_edge[v] = (w, u, v)

        return mst


时间复杂度：O(V²)（使用优先队列可优化为O((V + E)log V)）

**Kruskal算法**

Kruskal算法按边的权重从小到大排序，逐步选择边。

.. code-block:: python
    
    def kruskal(graph):
        edges = []
        for u in graph:
            for v, weight in graph[u].items():
                edges.append((weight, u, v))
        edges.sort()

        parent = {v: v for v in graph}

        def find(v):
            if parent[v] != v:
                parent[v] = find(parent[v])
            return parent[v]

        def union(v1, v2):
            root1 = find(v1)
            root2 = find(v2)
            if root1 != root2:
                parent[root1] = root2

        mst = []
        for weight, u, v in edges:
            if find(u) != find(v):
                union(u, v)
                mst.append((u, v, weight))

        return mst


时间复杂度：O(E log E)



5. 哈希表
===================================

5.1 哈希函数
---------------------

**哈希函数的定义**

哈希函数将任意长度的输入映射到固定长度的输出。

**好的哈希函数的性质**

 - 确定性：相同输入产生相同输出
 - 高效性：计算快速
 - 均匀性：输出分布均匀
 - 雪崩效应：输入的微小变化导致输出的巨大变化

**常见的哈希函数**

1. **除法哈希**：

.. math::
    h(k) = k \bmod m

其中m是哈希表的大小，通常选择素数。

2. **乘法哈希**：

.. math::
    h(k) = \lfloor m(kA \bmod 1) \rfloor

其中A = (√5 - 1)/2 ≈ 0.618

3. **MurmurHash**：非加密型哈希函数，速度快，分布均匀
4. **SHA**：安全哈希算法，用于加密和完整性校验

5.2 哈希冲突解决
---------------------

**哈希冲突的定义**

不同的键映射到相同的哈希值。

**冲突解决方法**

1. **开放寻址法**：
当冲突发生时，寻找下一个可用的位置。

 - 线性探测：h(k, i) = (h'(k) + i) mod m
 - 二次探测：h(k, i) = (h'(k) + c₁i + c₂i²) mod m
 - 双重哈希：h(k, i) = (h₁(k) + i·h₂(k)) mod m

2. **链地址法**：
每个哈希桶维护一个链表，冲突的元素添加到链表中。

3. **再哈希法**：
使用多个哈希函数，当冲突时尝试下一个哈希函数。

**装载因子**

装载因子 = 元素个数 / 哈希表大小

当装载因子超过阈值时，需要扩容（通常扩容为原来的2倍）。

5.3 哈希表的操作
---------------------

**基本操作**

1. **插入**：平均O(1)，最坏O(n)
2. **查找**：平均O(1)，最坏O(n)
3. **删除**：平均O(1)，最坏O(n)

.. code-block:: python
    
    class HashTable:
        def __init__(self, size=16):
            self.size = size
            self.count = 0
            self.table = [[] for _ in range(size)]

            def hash(self, key):
                return hash(key) % self.size

            def insert(self, key, value):
                index = self.hash(key)
                for i, (k, v) in enumerate(self.table[index]):
                    if k == key:
                        self.table[index][i] = (key, value)
                        return
                self.table[index].append((key, value))
                self.count += 1

                if self.count / self.size > 0.7:
                    self.resize()

            def get(self, key):
                index = self.hash(key)
                for k, v in self.table[index]:
                    if k == key:
                        return v
                raise KeyError(key)

            def remove(self, key):
                index = self.hash(key)
                for i, (k, v) in enumerate(self.table[index]):
                    if k == key:
                        self.table[index].pop(i)
                        self.count -= 1
                        return
                raise KeyError(key)

            def resize(self):
                old_table = self.table
                self.size *= 2
                self.count = 0
                self.table = [[] for _ in range(self.size)]

                for bucket in old_table:
                    for key, value in bucket:
                        self.insert(key, value)


**哈希表的应用**

 - 缓存
 - 符号表
 - 数据库索引
 - 去重



6. 排序算法
===================================

6.1 基本排序算法
---------------------

**冒泡排序**

重复遍历数组，比较相邻元素并交换位置。

.. code-block:: python
    
    def bubble_sort(arr):
        n = len(arr)
        for i in range(n):
            for j in range(0, n - i - 1):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
        return arr

时间复杂度：O(n²)
空间复杂度：O(1)
稳定性：稳定

**插入排序**

将元素逐个插入到已排序序列的适当位置。

.. code-block:: python
    
    def insertion_sort(arr):
        for i in range(1, len(arr)):
            key = arr[i]
            j = i - 1
            while j >= 0 and arr[j] > key:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key
        return arr


时间复杂度：O(n²)
空间复杂度：O(1)
稳定性：稳定

**选择排序**

每次选择最小元素放到已排序序列末尾。

.. code-block:: python
    
    def selection_sort(arr):
        n = len(arr)
        for i in range(n):
            min_idx = i
            for j in range(i + 1, n):
                if arr[j] < arr[min_idx]:
                    min_idx = j
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
        return arr


时间复杂度：O(n²)
空间复杂度：O(1)
稳定性：不稳定


6.2 高级排序算法
---------------------

**快速排序**

选择基准元素，将数组分为两部分，递归排序。

.. code-block:: python
    
    def quick_sort(arr):
        if len(arr) <= 1:
            return arr
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quick_sort(left) + middle + quick_sort(right)


时间复杂度：平均O(n log n)，最坏O(n²)
空间复杂度：O(log n)
稳定性：不稳定

**归并排序**

分治法，将数组分成两半，分别排序后合并。

.. code-block:: python
    
    def merge_sort(arr):
        if len(arr) <= 1:
            return arr

        mid = len(arr) // 2
        left = merge_sort(arr[:mid])
        right = merge_sort(arr[mid:])

        return merge(left, right)

    def merge(left, right):
        result = []
        i = j = 0
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1
        result.extend(left[i:])
        result.extend(right[j:])
        return result


时间复杂度：O(n log n)
空间复杂度：O(n)
稳定性：稳定

**堆排序**

利用堆数据结构进行排序。

.. code-block:: python
    
    def heap_sort(arr):
        n = len(arr)

        # 建堆
        for i in range(n // 2 - 1, -1, -1):
            sift_down(arr, n, i)

        # 排序
        for i in range(n - 1, 0, -1):
            arr[0], arr[i] = arr[i], arr[0]
            sift_down(arr, i, 0)

        return arr

    def sift_down(arr, n, i):
        while True:
            left = 2 * i + 1
            right = 2 * i + 2
            largest = i
            if left < n and arr[left] > arr[largest]:
                largest = left
            if right < n and arr[right] > arr[largest]:
                largest = right
            if largest == i:
                break
            arr[i], arr[largest] = arr[largest], arr[i]
            i = largest


时间复杂度：O(n log n)
空间复杂度：O(1)
稳定性：不稳定


6.3 特殊排序算法
---------------------

**计数排序**

适用于范围有限的整数排序:

.. code-block:: python
    
    def counting_sort(arr):
        max_val = max(arr)
        min_val = min(arr)
        range_val = max_val - min_val + 1

        count = [0] * range_val
        for num in arr:
            count[num - min_val] += 1

        result = []
        for i in range(range_val):
            result.extend([i + min_val] * count[i])

        return result

时间复杂度：O(n + k)，k是数值范围
空间复杂度：O(k)

**桶排序**

将元素分配到不同的桶中，每个桶单独排序。

.. code-block:: python
    
    def bucket_sort(arr, bucket_size=5):
        if len(arr) == 0:
            return arr

        min_val, max_val = min(arr), max(arr)
        bucket_count = (max_val - min_val) // bucket_size + 1
        buckets = [[] for _ in range(bucket_count)]

        for num in arr:
            buckets[(num - min_val) // bucket_size].append(num)

        result = []
        for bucket in buckets:
            result.extend(insertion_sort(bucket))

        return result

时间复杂度：平均O(n + k)，最坏O(n²)
空间复杂度：O(n + k)

**基数排序**

按数位从低位到高位排序。

.. code-block:: python
    
    def radix_sort(arr):
        max_val = max(arr)
        exp = 1
        while max_val // exp > 0:
            counting_sort_by_digit(arr, exp)
            exp *= 10
        return arr

    def counting_sort_by_digit(arr, exp):
        n = len(arr)
        output = [0] * n
        count = [0] * 10

        for num in arr:
            index = (num // exp) % 10
            count[index] += 1

        for i in range(1, 10):
            count[i] += count[i - 1]

        for i in range(n - 1, -1, -1):
            index = (arr[i] // exp) % 10
            output[count[index] - 1] = arr[i]
            count[index] -= 1

        for i in range(n):
            arr[i] = output[i]

时间复杂度：O(d·n)，d是最大数字的位数
空间复杂度：O(n + k)



7. 查找算法
===================================

7.1 顺序查找
---------------------

**顺序查找**

从头到尾遍历数组，直到找到目标元素或遍历完整个数组。

.. code-block:: python
    
    def linear_search(arr, target):
        for i, val in enumerate(arr):
            if val == target:
                return i
        return -1

时间复杂度：O(n)
空间复杂度：O(1)

7.2 二分查找
---------------------

**二分查找**

在有序数组中查找元素，每次将搜索范围缩小一半。

.. code-block:: python
    
    def binary_search(arr, target):
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1

时间复杂度：O(log n)
空间复杂度：O(1)

**条件**

数组必须有序。

7.3 插值查找
---------------------

**插值查找**

在均匀分布的有序数组中，插值查找比二分查找更高效。

.. code-block:: python
    
    def interpolation_search(arr, target):
        left, right = 0, len(arr) - 1
        while left <= right and target >= arr[left] and target <= arr[right]:
            if left == right:
                if arr[left] == target:
                    return left
                return -1

            pos = left + ((target - arr[left]) * (right - left)) // (arr[right] - arr[left])

            if arr[pos] == target:
                return pos
            elif arr[pos] < target:
                left = pos + 1
            else:
                right = pos - 1

        return -1

时间复杂度：平均O(log log n)，最坏O(n)
空间复杂度：O(1)

**条件**

数组必须有序且均匀分布。

7.4 哈希查找
---------------------

**哈希查找**

通过哈希函数快速定位元素。

.. code-block:: python
    
    def hash_search(hash_table, key):
        index = hash(key) % len(hash_table)
        for k, v in hash_table[index]:
            if k == key:
                return v
        return None

时间复杂度：平均O(1)，最坏O(n)
空间复杂度：O(n)



8. 算法设计策略
===================================

8.1 分治法
---------------------

**分治法的思想**

将问题分解为更小的子问题，递归求解子问题，然后合并子问题的解。

**分治法的步骤**

1. 分解：将问题分解为更小的子问题
2. 解决：递归求解子问题
3. 合并：合并子问题的解

**典型应用**

 - 归并排序
 - 快速排序
 - 二分查找
 - 大整数乘法
 - 矩阵乘法

**大整数乘法（Karatsuba算法）**

将n位数分解为两个n/2位数。

.. math::
    X = A \cdot 10^{n/2} + B

.. math::
    Y = C \cdot 10^{n/2} + D

.. math::
    XY = AC \cdot 10^n + (AD + BC) \cdot 10^{n/2} + BD

只计算3次乘法：
 - Z₁ = A·C
 - Z₂ = (A - B)(D - C)
 - Z₃ = B·D

.. math::
    XY = Z_1 \cdot 10^n + (Z_1 + Z_2 + Z_3) \cdot 10^{n/2} + Z_3

时间复杂度：O(n^(log₂3)) ≈ O(n^1.585)


8.2 贪心算法
---------------------

**贪心算法的思想**

每步选择局部最优解，期望得到全局最优解。

**贪心算法的性质**

1. 贪心选择性质：每一步的贪心选择最终能得到全局最优解
2. 最优子结构：问题的最优解包含其子问题的最优解

**典型应用**

 - 活动选择问题
 - 霍夫曼编码
 - 最小生成树（Prim、Kruskal算法）
 - 最短路径（Dijkstra算法）

**活动选择问题**

给定n个活动，每个活动有开始时间和结束时间，选择尽可能多的不冲突活动::

.. code-block:: python
    
    def activity_selection(activities):
        activities.sort(key=lambda x: x[1])  # 按结束时间排序
        selected = []
        prev_end = float('-inf')

        for start, end in activities:
            if start >= prev_end:
                selected.append((start, end))
                prev_end = end

        return selected

时间复杂度：O(n log n)


8.3 动态规划
---------------------

**动态规划的思想**

将问题分解为重叠子问题，存储子问题的解避免重复计算。

**动态规划的步骤**

1. 定义子问题
2. 建立状态转移方程
3. 确定初始条件和边界条件
4. 计算最优解

**斐波那契数列**

.. code-block:: python
    
    def fibonacci(n):
        if n <= 1:
            return n

        dp = [0] * (n + 1)
        dp[1] = 1

        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]

        return dp[n]


时间复杂度：O(n)
空间复杂度：O(n)（可优化为O(1)）

**背包问题**

0-1背包问题：给定n个物品，每个物品有重量和价值，背包容量为W，选择物品使总价值最大:

.. code-block:: python
    
    def knapsack(weights, values, W):
        n = len(weights)
        dp = [[0] * (W + 1) for _ in range(n + 1)]

        for i in range(1, n + 1):
            for w in range(W + 1):
                if weights[i - 1] <= w:
                    dp[i][w] = max(dp[i - 1][w],
                                  dp[i - 1][w - weights[i - 1]] + values[i - 1])
                else:
                    dp[i][w] = dp[i - 1][w]

        return dp[n][W]

时间复杂度：O(nW)
空间复杂度：O(nW)


8.4 回溯法
---------------------

**回溯法的思想**

通过系统地搜索解空间找到所有解，当搜索不满足条件时回溯到上一步。

**回溯法的步骤**

1. 定义解空间
2. 选择搜索路径
3. 判断是否满足条件
4. 回溯或继续搜索

**典型应用**

 - N皇后问题
 - 排列组合
 - 子集问题
 - 数独

**N皇后问题**

在n×n的棋盘上放置n个皇后，使得每个皇后不在同一行、同一列或同一斜线上:

.. code-block:: python
    
    def solve_n_queens(n):
        def is_safe(row, col):
            for i in range(row):
                if board[i] == col or abs(board[i] - col) == row - i:
                    return False
            return True

        def backtrack(row):
            if row == n:
                solutions.append(board[:])
                return

            for col in range(n):
                if is_safe(row, col):
                    board[row] = col
                    backtrack(row + 1)
                    board[row] = -1

        solutions = []
        board = [-1] * n
        backtrack(0)
        return solutions

时间复杂度：O(n!)


8.5 分支限界法
---------------------

**分支限界法的思想**

在回溯法基础上引入限界函数，剪掉不可能得到最优解的分支。

**分支限界法的步骤**

1. 定义限界函数
2. 选择搜索策略（广度优先、最佳优先）
3. 生成子节点
4. 计算下界
5. 剪枝或继续搜索

**典型应用**

 - 旅行商问题
 - 装箱问题
 - 调度问题



9. 应用领域
===================================

9.1 操作系统
---------------------

**内存管理**
 - 分区分配、分页、分段
 - 使用链表、树等数据结构管理内存块

**进程调度**
 - 使用队列实现进程调度
 - 使用堆实现优先级调度

**文件系统**
 - 使用树结构组织文件和目录

9.2 数据库系统
---------------------

**索引**
 - B树、B+树索引
 - 哈希索引

**查询优化**
 - 排序算法
 - 哈希连接

**事务管理**
 - 使用日志和锁实现并发控制

9.3 网络编程
---------------------

**路由算法**
 - Dijkstra算法
 - 距离矢量算法

**数据包处理**
 - 使用队列实现缓冲
 - 使用哈希表实现连接管理

9.4 图形学
---------------------

**几何算法**
 - 凸包算法
 - 线段相交检测

**渲染**
 - 使用树结构（BSP树、四叉树、八叉树）组织场景
 - 使用图结构表示网格


10. 总结与展望
===================================

数据结构与算法是计算机科学的基石，是编写高效、可靠程序的基础。从数组到图，从排序到动态规划，掌握数据结构与算法将极大提升你的编程能力。

**核心价值**

 - 提高程序效率
 - 优化资源使用
 - 解决复杂问题
 - 提升代码质量

**学习建议**

 - 理解基本概念和原理
 - 多动手实现数据结构和算法
 - 分析算法的时间和空间复杂度
 - 解决实际问题
 - 参加算法竞赛

**进阶方向**

 - 高级数据结构（并查集、线段树、树状数组、后缀数组等）
 - 算法优化技巧
 - 并行算法
 - 随机算法
 - 机器学习算法

数据结构与算法是程序员必备的核心技能，掌握它们将让你在编程道路上走得更远。
