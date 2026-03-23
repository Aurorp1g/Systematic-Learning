===================================
复变函数与积分变换
===================================


0. 要点汇总
====================

本篇文章的要点整理如下

 - 复数：形如 :math:`z = x + iy` 的数，其中 :math:`x` 为实部，:math:`y` 为虚部，:math:`i^2 = -1`
 - 复平面：用二维平面表示复数，横轴为实轴，纵轴为虚轴
 - 复数的模： :math:`|z| = \sqrt{x^2 + y^2}`，表示复数到原点的距离
 - 辐角： :math:`\arg(z)` 表示复数与正实轴的夹角，主值范围为 :math:`(-\pi, \pi]`
 - 欧拉公式： :math:`e^{i\theta} = \cos\theta + i\sin\theta`
 - 共轭复数： :math:`\bar{z} = x - iy`，与原复数关于实轴对称
 - 复变函数：自变量和因变量都是复数的函数
 - 柯西-黎曼方程：复变函数可微的必要条件，:math:`\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}`，:math:`\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}`
 - 解析函数：在区域内处处可微的复变函数
 - 柯西积分定理：解析函数沿闭曲线的积分为零
 - 柯西积分公式： :math:`f(z_0) = \frac{1}{2\pi i}\oint_C \frac{f(z)}{z - z_0}dz`
 - 泰勒级数：解析函数可以展开为幂级数
 - 洛朗级数：在环形区域内展开的级数，包含正幂和负幂项
 - 奇点：函数不可导的点，包括可去奇点、极点、本性奇点
 - 留数：洛朗级数中 :math:`(z - z_0)^{-1}` 项的系数
 - 留数定理： :math:`\oint_C f(z)dz = 2\pi i \times \text{(所有奇点留数之和)}`
 - 傅里叶级数：将周期函数展开为正弦和余弦的级数
 - 傅里叶变换：将时域函数转换到频域
 - 拉普拉斯变换：一种广义的傅里叶变换，用于求解微分方程
 - 卷积定理：两个函数卷积的傅里叶变换等于各自傅里叶变换的乘积
 - 采样定理：带限信号可以由采样值完全恢复


1. 复数与复平面
===================================

1.1 复数的基本概念
---------------------

**复数的定义**

复数是实数的扩展，形式为 :math:`z = x + iy` ，其中 :math:`x` 称为实部（记作 :math:`\text{Re}(z)` ）， :math:`y` 称为虚部（记作 :math:`\text{Im}(z)` ）， :math:`i` 称为虚数单位，满足 :math:`i^2 = -1` 。

当y = 0时，复数退化为实数；当x = 0时，称为纯虚数。

**复数的四则运算**

 - **加法**：(a + ib) + (c + id) = (a + c) + i(b + d)
 - **减法**：(a + ib) - (c + id) = (a - c) + i(b - d)
 - **乘法**：:math:`(a + ib)(c + id) = (ac - bd) + i(ad + bc)`
 - **除法**：:math:`(a + ib)/(c + id) = \frac{(a + ib)(c - id)}{(c + id)(c - id)} = \frac{(ac + bd) + i(bc - ad)}{c^2 + d^2}`

**共轭复数**

复数 :math:`z = x + iy` 的共轭复数记作 :math:`\bar{z} = x - iy` 。

重要性质：

.. math::
    - z + \bar{z} = 2x \\
    - z - \bar{z} = 2iy \\
    - z \cdot \bar{z} = x^2 + y^2 = |z|^2 \\
    - \bar{\bar{z}} = z

1.2 复平面与极坐标表示
------------------------

**复平面**

复数可以用二维平面上的点表示，横轴为实轴（Re轴），纵轴为虚轴（Im轴）。复数 :math:`z = x + iy` 对应点 :math:`(x, y)` 。

**复数的模**

复数z = x + iy的模定义为：

.. math::

    |z| = \sqrt{x^2 + y^2}

表示复数z到原点的距离。

**辐角**

复数 :math:`z = x + iy` 的辐角 :math:`\arg(z)` 表示复数与正实轴的夹角。

.. math::

    \arg(z) = \arctan\left(\frac{y}{x}\right)

辐角的多值性：如果 :math:`\theta` 是 :math:`z` 的辐角，则 :math:`\theta + 2k\pi` （ :math:`k` 为整数）都是 :math:`z` 的辐角。

**主辐角**

辐角的主值记作Arg(z)，范围限制在(-π, π]内。

**极坐标表示**

复数可以用极坐标表示：

.. math::

    z = r(\cos\theta + i\sin\theta) = re^{i\theta}

    其中 :math:`r = |z|` 是模，:math:`\theta = \arg(z)` 是辐角。

**欧拉公式**

欧拉公式是复变函数理论的基础：

.. math::

    e^{i\theta} = \cos\theta + i\sin\theta

由此可得：

.. math::

    \cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}

.. math::

    \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}

**棣莫弗公式**

对于任意整数n：

.. math::

    (\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)

或写成指数形式： :math:`(e^{i\theta})^n = e^{in\theta}`


1.3 复数的幂与根
---------------------

**复数的幂**

使用指数形式计算复数的幂最为方便：

.. math::

    z^n = (re^{i\theta})^n = r^ne^{in\theta} = r^n[\cos(n\theta) + i\sin(n\theta)]

**复数的根**

复数 :math:`z = re^{i\theta}` 的n次根有n个不同的值：

.. math::

    \sqrt[n]{z} = \sqrt[n]{r}e^{i(\theta + 2k\pi)/n}, \quad k = 0, 1, 2, \ldots, n-1

这n个根均匀分布在以原点为中心、半径为r^(1/n)的圆上。

.. container:: example-box
        
    **例题**

    求1 + i的三次方根。

    首先转换为极坐标形式： :math:`1 + i = \sqrt{2}e^{i\pi/4}`

    三次方根为：

    :math:`z_k = (\sqrt{2})^{1/3} e^{i(\pi/4 + 2k\pi)/3} = 2^{1/6} e^{i(\pi/12 + 2k\pi/3)}, k = 0, 1, 2`

    即：

    :math:`z_0 = 2^{1/6}e^{i\pi/12}`

    :math:`z_1 = 2^{1/6}e^{i3\pi/4}`

    :math:`z_2 = 2^{1/6}e^{i17\pi/12}`



2. 复变函数
===================================

2.1 复变函数的基本概念
------------------------

**复变函数的定义**

复变函数f(z)是将复数z映射到复数w的映射：w = f(z)

如果 :math:`z = x + iy` ， :math:`w = u + iv` ，则复变函数可以表示为：

f(z) = u(x, y) + iv(x, y)

其中u(x, y)称为实部函数，v(x, y)称为虚部函数。

**常见的复变函数**

 - **幂函数**： :math:`f(z) = z^n` （n为正整数）
 - **指数函数**： :math:`f(z) = e^z = e^{x+iy} = e^x(\cos y + i\sin y)`
 - **对数函数**： :math:`f(z) = \ln z = \ln|z| + i\arg(z)`
 - **三角函数**：

    .. math::

        \sin z = \frac{e^{iz} - e^{-iz}}{2i}

    .. math::

        \cos z = \frac{e^{iz} + e^{-iz}}{2}

    .. math::

        \tan z = \frac{\sin z}{\cos z}

 - **双曲函数**：

    .. math::

        \sinh z = \frac{e^z - e^{-z}}{2}

    .. math::

        \cosh z = \frac{e^z + e^{-z}}{2}


2.2 复变函数的极限与连续
--------------------------

**极限的定义**

设函数f(z)在点 :math:`z_0` 的去心邻域内有定义。如果存在复数A，使得对于任意 :math:`\varepsilon > 0` ，存在 :math:`\delta > 0` ，当 :math:`0 < |z - z_0| < \delta` 时，有 :math:`|f(z) - A| < \varepsilon` ，则称A为f(z)当z趋向于 :math:`z_0` 时的极限，记作：

.. math::

    \lim_{z \to z_0} f(z) = A

**连续的定义**

如果 :math:`\lim_{z\to z_0} f(z) = f(z_0)` ，则称 :math:`f(z)` 在点 :math:`z_0` 处连续。

**复变函数极限的性质**

复变函数极限存在的充分必要条件是其实部和虚部的极限都存在：

.. math::

    \lim_{z \to z_0} f(z) = A \Leftrightarrow
    \lim_{(x,y) \to (x_0,y_0)} u(x,y) = \text{Re}(A) \text{ 且 }
    \lim_{(x,y) \to (x_0,y_0)} v(x,y) = \text{Im}(A)

2.3 复变函数的导数
---------------------

**导数的定义**

复变函数 :math:`f(z)` 在点 :math:`z_0` 处的导数定义为：

.. math::

    f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}

如果该极限存在且与 :math:`\Delta z` 趋向于0的方式无关，则称 :math:`f(z)` 在点 :math:`z_0` 处可导。

**柯西-黎曼方程**

设 :math:`f(z) = u(x, y) + iv(x, y)` ，如果 :math:`f(z)` 在点 :math:`z = x + iy` 处可导，则：

.. math::

    \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}

.. math::

    \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}

这称为柯西-黎曼方程（Cauchy-Riemann equations）。

**导数的计算**

如果满足柯西-黎曼方程，则：

.. math::

    f'(z) = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x}
    = \frac{\partial v}{\partial y} - i\frac{\partial u}{\partial y}

.. container:: example-box

    **例题**

    验证 :math:`f(z) = z^2` 是否满足柯西-黎曼方程。

    :math:`f(z) = z^2 = (x + iy)^2 = x^2 - y^2 + i(2xy)`

    因此：:math:`u(x, y) = x^2 - y^2` ， :math:`v(x, y) = 2xy`

    计算偏导数：

    :math:`\frac{\partial u}{\partial x} = 2x` ， :math:`\frac{\partial u}{\partial y} = -2y`

    :math:`\frac{\partial v}{\partial x} = 2y` ， :math:`\frac{\partial v}{\partial y} = 2x`

    验证：:math:`\frac{\partial u}{\partial x} = 2x = \frac{\partial v}{\partial y}` ， :math:`\frac{\partial u}{\partial y} = -2y = -\frac{\partial v}{\partial x}`

    柯西-黎曼方程成立，因此 :math:`f(z) = z^2` 在复平面上处处可导。

    导数：:math:`f'(z) = 2z`



3. 解析函数
===================================

3.1 解析函数的定义
---------------------

**解析的概念**

如果复变函数f(z)在区域D内处处可导，则称f(z)在D内是解析的（或全纯的、正则的）。

如果 :math:`f(z)` 在点 :math:`z_0` 的某个邻域内解析，则称 :math:`f(z)` 在点 :math:`z_0` 处解析。

**解析与可导的关系**

 - 在某点可导：只要求在该点导数存在
 - 在某点解析：要求在该点的某个邻域内处处可导

因此，解析比可导的条件更强。

**解析函数的例子**

 - 多项式函数：:math:`f(z) = a_0 + a_1z + a_2z^2 + \cdots + a_nz^n` 在整个复平面上解析
 - 指数函数：:math:`f(z) = e^z` 在整个复平面上解析
 - 三角函数：:math:`\sin z, \cos z` 在整个复平面上解析
 - 有理函数：:math:`f(z) = P(z)/Q(z)` 在 :math:`Q(z) \neq 0` 的区域解析

**非解析函数的例子**

 - f(z) = z̄（共轭函数）处处不可导
 - :math:`f(z) = |z|^2` 仅在 :math:`z = 0` 处可导，处处不解析

3.2 调和函数
---------------------

**调和函数的定义**

如果二元函数φ(x, y)满足拉普拉斯方程：

.. math::

    \frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0

则称φ(x, y)为调和函数。

**解析函数与调和函数的关系**

如果f(z) = u(x, y) + iv(x, y)是解析函数，则：

 - u(x, y)和v(x, y)都是调和函数
 - u和v称为共轭调和函数

**证明**

对柯西-黎曼方程求导：

:math:`\frac{\partial^2 u}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial v}{\partial y}\right) = \frac{\partial}{\partial y}\left(\frac{\partial v}{\partial x}\right)`

:math:`\frac{\partial^2 u}{\partial y^2} = \frac{\partial}{\partial y}\left(-\frac{\partial v}{\partial x}\right) = -\frac{\partial^2 v}{\partial x \partial y}`

因此：:math:`\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0`

同理可证：:math:`\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0`

**应用**

利用调和函数可以求解边值问题，如拉普拉斯方程的解。


3.3 初等解析函数
---------------------

**指数函数**

f(z) = e^z = e^x(cos y + i sin y)

性质：

 - e^z在整个复平面解析
 - (e^z)' = e^z
 - :math:`e^{z_1 + z_2} = e^{z_1} \cdot e^{z_2}`
 - e^(z + 2πi) = e^z（周期为2πi）

**对数函数**

f(z) = ln z = ln|z| + i arg(z)

性质：

 - ln z是多值函数（因为arg(z)是多值的）
 - 主值记作 :math:`\ln z = \ln|z| + i\arg(z)` ， :math:`\arg(z) \in (-\pi, \pi]`
 - (ln z)' = 1/z（在割去负实轴的复平面内）

**幂函数**

f(z) = z^α = e^(α ln z)

性质：

 - 当α为整数时，z^α是单值函数
 - 当α为有理数时，z^α是有限多值函数
 - 当α为无理数时，z^α是无限多值函数

**三角函数**

 - :math:`\sin z = \frac{e^{iz} - e^{-iz}}{2i}`
 - :math:`\cos z = \frac{e^{iz} + e^{-iz}}{2}`
 - tan z = sin z/cos z

性质：

 - sin z和cos z在整个复平面解析
 - sin(z + 2π) = sin z，cos(z + 2π) = cos z
 - sin(z + π) = -sin z，cos(z + π) = -cos z
 - :math:`\sin^2z + \cos^2z = 1`

**反三角函数**

 - :math:`\arcsin z = -i \ln(iz + \sqrt{1 - z^2})`
 - :math:`\arccos z = -i \ln(z + \sqrt{z^2 - 1})`
 - :math:`\arctan z = \frac{i}{2} \ln\frac{i + z}{i - z}`


4. 复变函数的积分
===================================

4.1 复积分的概念
---------------------

**复积分的定义**

设C是复平面上的一条有向曲线，f(z)在C上有定义。将C分割成n小段，取每段上的点ζ_k，作和式：

.. math::

    S_n = \sum_{k=1}^{n} f(\zeta_k)\Delta z_k

其中 :math:`\Delta z_k = z_k - z_{k-1}` 是第k段的弦。当分割无限细密时，如果 :math:`S_n` 趋向于确定的极限，则称该极限为 :math:`f(z)` 沿曲线C的积分，记作：

.. math::

    \int_C f(z)dz = \lim_{n \to \infty} \sum_{k=1}^{n} f(\zeta_k)\Delta z_k

**复积分的计算**

设 :math:`f(z) = u(x, y) + iv(x, y)` ，曲线C的参数方程为 :math:`z(t) = x(t) + iy(t)` ， :math:`a \leq t \leq b` ，则：

.. math::

    \int_C f(z)dz = \int_a^b f(z(t))z'(t)dt

.. math::

    = \int_a^b [u(x(t), y(t)) + iv(x(t), y(t))][x'(t) + iy'(t)]dt

.. math::

    = \int_a^b [u x' - v y']dt + i\int_a^b [v x' + u y']dt

.. container:: example-box

    **例题**

    计算 :math:`\int_C z dz` ，其中C是从0到 :math:`1 + i` 的直线段。

    参数方程：:math:`z(t) = t + it` ， :math:`0 \leq t \leq 1`

    :math:`z'(t) = 1 + i`

    :math:`\int_C z dz = \int_0^1 (t + it)(1 + i)dt = (1 + i)\int_0^1 (t + it)dt`

    :math:`= (1 + i)[t^2/2 + it^2/2]_0^1 = (1 + i)(1/2 + i/2) = (1 + i)(1 + i)/2 = (1 + 2i - 1)/2 = i`


4.2 柯西积分定理
---------------------

**柯西积分定理（柯西-古萨定理）**

如果f(z)在单连通区域D内解析，C是D内任意一条简单闭曲线，则：

.. math::

    \oint_C f(z)dz = 0

**推论**

如果f(z)在单连通区域D内解析，则f(z)在D内的积分只与起点和终点有关，与路径无关。

**变形**

如果 :math:`f(z)` 在由 :math:`C_1` 和 :math:`C_2` 围成的环形区域内解析（ :math:`C_1` 在外， :math:`C_2` 在内），则：

.. math::

    \oint_{C_1} f(z)dz = \oint_{C_2} f(z)dz

**物理意义**

柯西积分定理表明，解析函数沿闭曲线的积分为零，这意味着解析函数的积分路径无关性。


4.3 柯西积分公式
---------------------

**柯西积分公式**

设 :math:`f(z)` 在区域D内解析，C是D内包围点 :math:`z_0` 的正向简单闭曲线，则：

.. math::

    f(z_0) = \frac{1}{2\pi i}\oint_C \frac{f(z)}{z - z_0}dz

**高阶导数的柯西积分公式**

f(z)在区域D内解析，则f(z)的n阶导数存在且：

.. math::

    f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_C \frac{f(z)}{(z - z_0)^{n+1}}dz

这表明解析函数的任意阶导数都存在且解析。

**应用**

柯西积分公式可以用来计算某些实积分和复积分。

.. container:: example-box

    **例题**

    计算 :math:`\oint_C \frac{e^z}{z - 1}dz` ，其中C是 :math:`|z - 1| = 1` 的正向圆周。

    根据柯西积分公式：

    :math:`f(1) = \frac{1}{2\pi i}\oint_C \frac{e^z}{z - 1}dz`

    因此：:math:`\oint_C \frac{e^z}{z - 1}dz = 2\pi i \cdot f(1) = 2\pi i \cdot e^1 = 2\pi ie`



5. 级数展开
===================================

5.1 复数项级数
---------------------

**复数项级数的定义**

复数项级数是指形如 :math:`\sum z_n = z_1 + z_2 + \cdots + z_n + \cdots` 的级数，其中 :math:`z_n` 是复数。

**收敛的定义**

如果部分和 :math:`S_n = z_1 + z_2 + \cdots + z_n` 当 :math:`n \to \infty` 时趋向于确定的极限S，则称级数 :math:`\sum z_n` 收敛于S。

**收敛的判别法**

复数项级数 :math:`\sum z_n` 收敛的充分必要条件是其实部级数和虚部级数都收敛：

**绝对收敛**

如果级数 :math:`\sum |z_n|` 收敛，则称级数 :math:`\sum z_n` 绝对收敛。绝对收敛的级数一定收敛。

5.2 幂级数
---------------------

**幂级数的定义**

形如 :math:`\sum a_n(z - z_0)^n = a_0 + a_1(z - z_0) + a_2(z - z_0)^2 + \cdots` 的级数称为幂级数。

**收敛半径**

幂级数的收敛范围是一个圆盘 :math:`|z - z_0| < R` ，其中R称为收敛半径。

收敛半径的计算：

.. math::

    R = \lim_{n \to \infty} \left|\frac{a_n}{a_{n+1}}\right|

或使用根值判别法：

.. math::

    R = \lim_{n \to \infty} \frac{1}{\sqrt[n]{|a_n|}}

**收敛的性质**

幂级数在收敛圆内绝对收敛，可以逐项求导和逐项积分。

5.3 泰勒级数
---------------------

**泰勒级数的展开**

如果 :math:`f(z)` 在圆盘 :math:`|z - z_0| < R` 内解析，则 :math:`f(z)` 可以展开为泰勒级数：

.. math::

    f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!}(z - z_0)^n

.. math::

    = f(z_0) + f'(z_0)(z - z_0) + \frac{f''(z_0)}{2!}(z - z_0)^2 + \cdots

**常见函数的泰勒展开**

 - :math:`e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \cdots = \sum_{n=0}^{\infty} \frac{z^n}{n!}` ， :math:`R = \infty`
 - :math:`\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \cdots = \sum_{n=0}^{\infty} (-1)^n \frac{z^{2n+1}}{(2n+1)!}` ， :math:`R = \infty`
 - :math:`\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \cdots = \sum_{n=0}^{\infty} (-1)^n \frac{z^{2n}}{(2n)!}` ， :math:`R = \infty`
 - :math:`\frac{1}{1 - z} = 1 + z + z^2 + z^3 + \cdots = \sum_{n=0}^{\infty} z^n` ， :math:`R = 1`
 - :math:`\ln(1 + z) = z - \frac{z^2}{2} + \frac{z^3}{3} - \cdots = \sum_{n=1}^{\infty} (-1)^{n+1}\frac{z^n}{n}` ， :math:`R = 1`

**应用**

泰勒级数用于函数近似、数值计算、微分方程求解等。


5.4 洛朗级数
---------------------

**洛朗级数的定义**

如果f(z)在环形区域r < :math:`|z - z_0|` < R内解析，则f(z)可以展开为洛朗级数：

.. math::

    f(z) = \sum_{n=-\infty}^{\infty} a_n(z - z_0)^n

.. math::

    = \cdots + \frac{a_{-2}}{(z - z_0)^2} + \frac{a_{-1}}{z - z_0} + a_0 + a_1(z - z_0) + a_2(z - z_0)^2 + \cdots

其中：

.. math::

    a_n = \frac{1}{2\pi i}\oint_C \frac{f(z)}{(z - z_0)^{n+1}}dz

**洛朗级数的两部分**

 - **正则部分**：:math:`n \geq 0` 的项，在圆内收敛
 - **主要部分**：n < 0的项，在圆外收敛

**与泰勒级数的关系**

当洛朗级数没有负幂项时，洛朗级数退化为泰勒级数。

**应用**

洛朗级数用于研究函数在奇点附近的行为，是留数理论的基础。



6. 留数理论
===================================

6.1 孤立奇点
---------------------

**奇点的定义**

函数f(z)不可导的点称为奇点。

**孤立奇点**

如果 :math:`z_0` 是 :math:`f(z)` 的奇点，且存在 :math:`z_0` 的某个邻域，在该邻域内除 :math:`z_0` 外 :math:`f(z)` 解析，则称 :math:`z_0` 为孤立奇点。

**孤立奇点的分类**

1. **可去奇点**

洛朗级数没有主要部分（没有负幂项），:math:`\lim_{z\to z_0} f(z)` 存在且有限。

例如：:math:`f(z) = \sin(z)/z` 在 :math:`z = 0` 处有可去奇点。

2. **极点**

洛朗级数的主要部分只有有限项。如果最高负幂项是 :math:`(z - z_0)^{-m}` ，则称 :math:`z_0` 为m阶极点。

特征： :math:`\lim_{z \to z_0} |f(z)| = \infty`

例如：f(z) = 1/(z - 1)在z = 1处有一阶极点。

3. **本性奇点**

洛朗级数的主要部分有无穷多项。函数在本性奇点附近的行为极其复杂。

特征：:math:`\lim_{z\to z_0} f(z)` 不存在（既不是有限值，也不是无穷大）。

例如：:math:`f(z) = e^{1/z}` 在 :math:`z = 0` 处有本性奇点。


6.2 留数的定义
---------------------

**留数的定义**

设 :math:`z_0` 是 :math:`f(z)` 的孤立奇点， :math:`f(z)` 在 :math:`z_0` 的洛朗展开为：

.. math::

    f(z) = \sum_{n=-\infty}^{\infty} a_n(z - z_0)^n

则系数 :math:`a_{-1}` 称为 :math:`f(z)` 在 :math:`z_0` 处的留数，记作：

.. math::

    \text{Res}[f(z), z_0] = a_{-1}

**留数的计算**

1. **可去奇点**：留数为0

2. **m阶极点**：

.. math::

    \text{Res}[f(z), z_0] = \frac{1}{(m-1)!}\lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^mf(z)]

特别地，对于一阶极点：

.. math::

    \text{Res}[f(z), z_0] = \lim_{z \to z_0} (z - z_0)f(z)

3. **本性奇点**：直接展开洛朗级数求a_(-1)

.. container:: example-box

    **例题**

    求 :math:`f(z) = \frac{1}{z(z - 1)^2}` 在 :math:`z = 0` 和 :math:`z = 1` 处的留数。

    在 :math:`z = 0` 处：一阶极点

    :math:`\text{Res}[f(z), 0] = \lim_{z\to 0} z \cdot \frac{1}{z(z - 1)^2} = \lim_{z\to 0} \frac{1}{(z - 1)^2} = 1`

    在 :math:`z = 1` 处：二阶极点

    :math:`\text{Res}[f(z), 1] = \frac{1}{1!} \lim_{z\to 1} \frac{d}{dz}\left[(z - 1)^2 \cdot \frac{1}{z(z - 1)^2}\right] = \lim_{z\to 1} \frac{d}{dz}\left[\frac{1}{z}\right] = \lim_{z\to 1}\left(-\frac{1}{z^2}\right) = -1`

6.3 留数定理
---------------------

**留数定理**

设 :math:`f(z)` 在区域D内除有限个孤立奇点 :math:`z_1, z_2, \ldots, z_n` 外处处解析，C是D内包围这些奇点的正向简单闭曲线，则：

.. math::

    \oint_C f(z)dz = 2\pi i \sum_{k=1}^{n} \text{Res}[f(z), z_k]

**应用**

留数定理是计算复积分的强大工具，也可以用来计算某些实积分。

.. container:: example-box

    **例题**

    计算 :math:`\oint_C \frac{e^z}{z - 1}dz` ，其中C是 :math:`|z| = 2` 的正向圆周。

    :math:`f(z) = \frac{e^z}{z - 1}` 在 :math:`|z| < 2` 内只有一个奇点 :math:`z = 1` （一阶极点）。

    :math:`\text{Res}[f(z), 1] = \lim_{z\to 1} (z - 1) \cdot \frac{e^z}{z - 1} = \lim_{z\to 1} e^z = e`

    根据留数定理：:math:`\oint_C \frac{e^z}{z - 1}dz = 2\pi i \cdot e = 2\pi ie`

    这与之前用柯西积分公式得到的结果一致。


6.4 应用：实积分的计算
---------------------------

**第一类实积分**

计算形如 :math:`\int_0^{2\pi} R(\cos \theta, \sin \theta) d\theta` 的积分。

令 :math:`z = e^{i\theta}` ，则：

:math:`\cos \theta = \frac{z + z^{-1}}{2}` ，:math:`\sin \theta = \frac{z - z^{-1}}{2i}` ，:math:`d\theta = \frac{dz}{iz}`

积分转化为沿单位圆的复积分。

.. container:: example-box

    **例题**

    计算 :math:`I = \int_0^{2\pi} \frac{d\theta}{2 + \cos \theta}`

    令 :math:`z = e^{i\theta}` ：

    :math:`\cos \theta = \frac{z + z^{-1}}{2} = \frac{z^2 + 1}{2z}`

    :math:`d\theta = \frac{dz}{iz}`

    :math:`I = \oint_{|z|=1} \frac{dz}{iz} / \left[2 + \frac{z^2 + 1}{2z}\right] = \oint_{|z|=1} \frac{2z}{iz(4z + z^2 + 1)} dz`

    :math:`= \frac{2}{i} \oint_{|z|=1} \frac{dz}{z^2 + 4z + 1}`

    被积函数的奇点：:math:`z^2 + 4z + 1 = 0`

    :math:`z = \frac{-4 \pm \sqrt{16 - 4}}{2} = -2 \pm \sqrt{3}`

    在单位圆内只有 :math:`z = -2 + \sqrt{3}` （因为 :math:`|-2 + \sqrt{3}| \approx 0.268 < 1` ）

    留数：:math:`\text{Res}\left[\frac{1}{z^2 + 4z + 1}, -2 + \sqrt{3}\right] = \frac{1}{2(-2 + \sqrt{3}) + 4} = \frac{1}{2\sqrt{3}}`

    因此：:math:`I = \frac{2}{i} \cdot 2\pi i \cdot \frac{1}{2\sqrt{3}} = \frac{2\pi}{\sqrt{3}}`

**第二类实积分**

计算形如 :math:`\int_{-\infty}^{\infty} f(x) dx` 的积分。

构造适当的围道，应用留数定理和约当引理。

**约当引理**

如果f(z)在上半平面满足 :math:`|f(z)| \to 0`（当:math:`|z| \to \infty`），则：

.. math::

    \lim_{R \to \infty} \int_{C_R} f(z)e^{iaz}dz = 0 \quad (a > 0)

其中C_R是上半平面的半圆弧。


7. 傅里叶级数与傅里叶变换
===================================

7.1 傅里叶级数
---------------------

**周期函数的傅里叶级数展开**

设f(t)是以2π为周期的函数，满足狄利克雷条件，则f(t)可以展开为傅里叶级数：

.. math::

    f(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} [a_n\cos(nt) + b_n\sin(nt)]

其中：

.. math::

    a_0 = \frac{1}{\pi}\int_{-\pi}^{\pi} f(t)dt

.. math::

    a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\cos(nt)dt

.. math::

    b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\sin(nt)dt

**复数形式的傅里叶级数**

.. math::

    f(t) = \sum_{n=-\infty}^{\infty} c_n e^{int}

其中：

.. math::

    c_n = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(t)e^{-int}dt

**频谱**

cₙ表示频率为n的谐波分量的幅度和相位。

.. container:: example-box

    **例题**

    将方波函数展开为傅里叶级数。

    f(t) = 1（-π < t < 0），f(t) = -1（0 < t < π），f(t + 2π) = f(t)

    由于 :math:`f(t)` 是奇函数， :math:`a_n = 0`

    :math:`b_n = \frac{1}{\pi}\left[\int_{-\pi}^0 1 \cdot \sin(nt)dt + \int_0^{\pi} (-1) \cdot \sin(nt)dt\right]`

    :math:`= \frac{1}{\pi}\left[-\frac{\cos(nt)}{n}\right]_{-\pi}^0 + \frac{1}{\pi}\left[\frac{\cos(nt)}{n}\right]_0^{\pi}`

    :math:`= \frac{2}{n\pi}[1 - \cos(n\pi)]`

    因此：:math:`f(t) = \sum_{n=1}^{\infty} \frac{2}{n\pi}[1 - (-1)^n] \sin(nt)`

    :math:`= \frac{4}{\pi}\left[\sin t + \frac{1}{3}\sin 3t + \frac{1}{5}\sin 5t + \cdots\right]`

7.2 傅里叶变换
---------------------

**傅里叶变换的定义**

对于非周期函数f(t)，其傅里叶变换定义为：

.. math::

    F(\omega) = \int_{-\infty}^{\infty} f(t)e^{-i\omega t}dt

**傅里叶逆变换**

.. math::

    f(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} F(\omega)e^{i\omega t}d\omega

**傅里叶变换的性质**

1. **线性性**：L{af(t) + bg(t)} = aF(ω) + bG(ω)

2. **时移特性**： :math:`L\{f(t - t_0)\} = e^{-i\omega t_0}F(\omega)`

3. **频移特性**： :math:`L\{e^{i\omega_0 t}f(t)\} = F(\omega - \omega_0)`

4. **尺度变换**： :math:`L\{f(at)\} = \frac{1}{|a|}F(\omega/a)`

5. **微分性质**：L{f'(t)} = iωF(ω)

6. **积分性质**：:math:`L\left\{\int_{-\infty}^t f(\tau)d\tau\right\} = \frac{1}{i\omega}F(\omega)`

7. **卷积定理**：:math:`L\{f * g\} = F(\omega)G(\omega)`

**常见函数的傅里叶变换**

 - **矩形脉冲**：f(t) = 1（\|t\| < T/2），f(t) = 0（其他）
   F(ω) = 2 sin(ωT/2)/ω

 - **高斯函数**：:math:`f(t) = e^{-\alpha t^2}`
   :math:`F(\omega) = \sqrt{\pi/\alpha} e^{-\omega^2/(4\alpha)}`

 - **指数函数**：f(t) = e^(-αt)u(t)（α > 0，u(t)为单位阶跃函数）
   F(ω) = 1/(α + iω)


7.3 离散傅里叶变换（DFT）
--------------------------

**DFT的定义**

对于有限序列x[n]（n = 0, 1, ..., N-1），其离散傅里叶变换为：

.. math::

    X[k] = \sum_{n=0}^{N-1} x[n]e^{-i2\pi kn/N}, \quad k = 0, 1, \ldots, N-1

**逆DFT**

.. math::

    x[n] = \frac{1}{N}\sum_{k=0}^{N-1} X[k]e^{i2\pi kn/N}

**快速傅里叶变换（FFT）**

FFT是计算DFT的高效算法，时间复杂度为 :math:`O(N \log N)` ，而直接计算DFT的时间复杂度为 :math:`O(N^2)` 。

FFT是数字信号处理、图像处理等领域的基础算法。



8. 拉普拉斯变换
===================================

8.1 拉普拉斯变换的定义
--------------------------

**拉普拉斯变换**

对于函数 :math:`f(t)` （ :math:`t \geq 0` ），其拉普拉斯变换定义为：

.. math::

    L\{f(t)\} = F(s) = \int_{0}^{\infty} e^{-st}f(t)dt

其中s = σ + iω是复数。

**存在条件**

如果 :math:`f(t)` 分段连续，且存在常数M和 :math:`\alpha` 使得 :math:`|f(t)| \leq Me^{\alpha t}` ，则拉普拉斯变换在 :math:`\Re(s) > \alpha` 时存在。

**常用函数的拉普拉斯变换**

 - :math:`1 \to 1/s`
 - :math:`t \to 1/s^2`
 - :math:`t^n \to n!/s^{n+1}`
 - :math:`e^{at} \to 1/(s - a)`
 - :math:`\sin(\omega t) \to \omega/(s^2 + \omega^2)`
 - :math:`\cos(\omega t) \to s/(s^2 + \omega^2)`
 - :math:`\sinh(\omega t) \to \omega/(s^2 - \omega^2)`
 - :math:`\cosh(\omega t) \to s/(s^2 - \omega^2)`

**拉普拉斯变换的性质**

1. **线性性**： :math:`L\{af(t) + bg(t)\} = aF(s) + bG(s)`

2. **时移特性**： :math:`L\{f(t - a)u(t - a)\} = e^{-as}F(s)`

3. **频移特性**： :math:`L\{e^{at}f(t)\} = F(s - a)`

4. **尺度变换**： :math:`L\{f(at)\} = (1/a)F(s/a)`

5. **微分性质**：:math:`L\{f'(t)\} = sF(s) - f(0)`
   :math:`L\{f''(t)\} = s^2F(s) - sf(0) - f'(0)`

6. **积分性质**：:math:`L\left\{\int_0^t f(\tau)d\tau\right\} = F(s)/s`

7. **卷积定理**：:math:`L\{f * g\} = F(s)G(s)`


8.2 拉普拉斯逆变换
---------------------

**部分分式分解**

将F(s)分解为简单的分式，然后逐项进行逆变换。

**逆变换公式**

.. math::

    f(t) = L^{-1}\{F(s)\} = \frac{1}{2\pi i}\int_{\gamma - i\infty}^{\gamma + i\infty} e^{st}F(s)ds

这个积分是沿平行于虚轴的直线进行的，γ是大于所有奇点实部的实数。

**留数法**

利用留数定理计算拉普拉斯逆变换：

.. math::

    f(t) = \sum \text{Res}[e^{st}F(s), \text{奇点}]

.. container:: example-box

    **例题**

    求 :math:`L^{-1}\left\{\frac{1}{s(s + 1)(s + 2)}\right\}`

    部分分式分解：

    :math:`\frac{1}{s(s + 1)(s + 2)} = \frac{A}{s} + \frac{B}{s + 1} + \frac{C}{s + 2}`

    解得：:math:`A = \frac{1}{2}` ， :math:`B = -1` ， :math:`C = \frac{1}{2}`

    因此：:math:`L^{-1}\left\{\frac{1}{s(s + 1)(s + 2)}\right\} = \frac{1}{2} - e^{-t} + \frac{1}{2}e^{-2t}`

8.3 拉普拉斯变换的应用
---------------------------

**求解微分方程**

将微分方程转化为代数方程，求解后再进行逆变换。

.. container:: example-box

    **例题**

    求解y'' + 3y' + 2y = e^(-t)，y(0) = 0，y'(0) = 1

    拉普拉斯变换：

    :math:`s^2Y(s) - sy(0) - y'(0) + 3[sY(s) - y(0)] + 2Y(s) = \frac{1}{s + 1}`

    :math:`(s^2 + 3s + 2)Y(s) - 1 = \frac{1}{s + 1}`

    :math:`Y(s) = \frac{1 + \frac{1}{s + 1}}{s^2 + 3s + 2} = \frac{s + 2}{(s + 1)^2(s + 2)} = \frac{1}{(s + 1)^2}`

    逆变换：:math:`y(t) = te^{-t}`

**电路分析**

利用拉普拉斯变换分析电路的瞬态响应。

**控制系统**

传递函数就是系统的拉普拉斯变换。


9. Z变换
===================================

9.1 Z变换的定义
---------------------

**Z变换**

对于离散序列x[n]，其Z变换定义为：

.. math::

    X(z) = \sum_{n=-\infty}^{\infty} x[n]z^{-n}

**单边Z变换**

.. math::

    X(z) = \sum_{n=0}^{\infty} x[n]z^{-n}

**收敛域（ROC）**

使级数收敛的z的集合称为收敛域。

**常见序列的Z变换**

 - :math:`\delta[n] \to 1`
 - :math:`u[n] \to \frac{1}{1 - z^{-1}}` ，收敛域: :math:`|z| > 1`
 - :math:`a^n u[n] \to \frac{1}{1 - az^{-1}}` ，收敛域: :math:`|z| > |a|`
 - :math:`na^n u[n] \to \frac{az^{-1}}{(1 - az^{-1})^2}` ，收敛域: :math:`|z| > |a|`

9.2 Z变换的性质
---------------------

1. **线性性**：:math:`Z\{ax[n] + by[n]\} = aX(z) + bY(z)`

2. **时移特性**：:math:`Z\{x[n - k]\} = z^{-k}X(z)`

3. **Z域尺度变换**：:math:`Z\{a^n x[n]\} = X(z/a)`

4. **卷积定理**：:math:`Z\{x[n] * y[n]\} = X(z)Y(z)`

5. **初值定理**：:math:`x[0] = \lim_{z\to\infty} X(z)`

6. **终值定理**：:math:`\lim_{n\to\infty} x[n] = \lim_{z\to 1} (z - 1)X(z)`

9.3 Z变换的应用
---------------------

**差分方程求解**

将差分方程转化为代数方程。

**数字滤波器设计**

Z变换是数字滤波器设计的基础。

**离散控制系统**

离散系统的传递函数就是Z变换。


10. 应用领域
===================================

10.1 信号处理
---------------------

**信号分析**

傅里叶变换用于分析信号的频谱成分。

**滤波器设计**

拉普拉斯变换和Z变换用于设计模拟和数字滤波器。

**调制与解调**

傅里叶变换用于理解调制和解调过程。


10.2 控制理论
---------------------

**系统分析**

传递函数描述系统的输入输出关系。

**稳定性分析**

通过极点的位置判断系统稳定性。

**控制器设计**

根轨迹法、频域分析法等都基于复变函数理论。

10.3 电磁场理论
---------------------

**波动方程**

电磁波的传播可以用波动方程描述。

**复数表示法**

电磁场常用复数表示，简化计算。

**传输线理论**

传输线上的电压和电流可以用复数表示。

10.4 量子力学
---------------------

**薛定谔方程**

量子系统的基本方程。

**波函数的复数性质**

波函数是复数函数，其模的平方表示概率密度。

**算符理论**

量子力学的算符理论基于线性代数和复变函数。


11. 总结与展望
===================================

复变函数与积分变换是现代数学和工程科学的重要基础，为信号处理、控制理论、电磁场理论、量子力学等领域提供了强有力的数学工具。

**核心价值**

 - 提供了处理复杂系统的数学语言
 - 建立了时域与频域之间的转换关系
 - 发展了求解微分方程的有效方法
 - 形成了完整的复分析理论

**学习建议**

 - 熟练掌握复数运算和复平面表示
 - 深刻理解柯西-黎曼方程和解析函数
 - 熟练使用留数定理计算复积分
 - 掌握各种积分变换及其应用
 - 重视物理意义的理解

**进阶方向**

 - 复动力系统
 - 共形映射
 - 希尔伯特空间理论
 - 小波变换
 - 分数阶傅里叶变换

复变函数与积分变换不仅是数学理论，更是连接理论与工程实践的桥梁，掌握它将为你的学习和研究提供强大的支持。