===================================
常微分方程
===================================


0. 要点汇总
====================

本篇文章的要点整理如下

 - 微分方程：含有未知函数及其导数的方程
 - 常微分方程：自变量只有一个的微分方程
 - 偏微分方程：自变量有两个或以上的微分方程
 - 阶数：微分方程中出现的最高阶导数的阶数
 - 线性微分方程：未知函数及其导数都是一次的微分方程
 - 齐次方程：不显含自变量或不含非零项的微分方程
 - 通解：包含任意常数的解，常数的个数等于方程的阶数
 - 特解：满足特定初始条件的解
 - 初值问题：求满足初始条件的特解的问题
 - 可分离变量方程：可以将x和y分别放到等式两边的方程
 - 一阶线性方程：形如 :math:`y' + P(x)y = Q(x)` 的方程
 - 积分因子：用于求解一阶线性方程的函数 :math:`\mu(x) = e^{\int P(x)dx}`
 - 恰当方程：存在二元函数 :math:`u(x,y)` 使得 :math:`M dx + N dy = du` 的方程
 - 二阶常系数线性方程：形为 :math:`y'' + ay' + by = f(x)` 的方程
 - 特征方程：用于求解二阶齐次线性方程的辅助方程
 - 齐次解：对应齐次方程的通解
 - 特解：非齐次方程的特解
 - 待定系数法：根据f(x)的形式猜测特解的方法
 - 变参数法：将齐次解中的常数视为变量来求特解的方法
 - 幂级数解法：用幂级数的形式求解微分方程
 - 拉普拉斯变换：将微分方程转化为代数方程的积分变换
 - 稳定性：解在长期行为上的性质，包括渐近稳定、不稳定等
 - 平衡点：导数为零的点，也称为奇点或临界点
 - 相图：在相平面上描绘解的几何行为的图形
 - 李雅普诺夫稳定性：通过李雅普诺夫函数判断稳定性的方法


1. 微分方程的基本概念
===================================

1.1 微分方程的定义
---------------------

**微分方程的引入**

微分方程是数学建模的核心工具，用于描述物理、工程、生物、经济等领域中的变化规律。凡是涉及变化率的问题，都可以用微分方程来描述。

**基本定义**

含有未知函数及其导数（或微分）的方程称为微分方程。如果未知函数是一元函数（自变量只有一个），则称为常微分方程（Ordinary Differential Equation, ODE）；如果未知函数是多元函数，则称为偏微分方程（Partial Differential Equation, PDE）。

**阶数**

微分方程中出现的最高阶导数的阶数，称为微分方程的阶数。

例如：

.. math::

    y' + 2y = 0 \text{ 是一阶常微分方程}

.. math::

    y'' + 3y' + 2y = \sin(x) \text{ 是二阶常微分方程}

.. math::

    \frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2} \text{ 是二阶偏微分方程}

**线性与非线性**

如果微分方程中未知函数及其各阶导数都是一次的，且系数不含未知函数，则称为线性微分方程；否则称为非线性微分方程。

**齐次与非齐次**

如果微分方程中不显含自变量，或者等于零的项不含未知函数，则称为齐次方程；否则称为非齐次方程。


1.2 解的基本概念
---------------------

**解的定义**

满足微分方程的函数称为微分方程的解。

**通解**

包含n个独立的任意常数的解称为n阶微分方程的通解。

**特解**

确定任意常数后的解称为特解。

**初值问题**

求解微分方程并满足初始条件的问题称为初值问题（Cauchy问题）。

例如：求 :math:`y' = y` 满足 :math:`y(0) = 1` 的解。

**边值问题**

求解微分方程并满足边界条件的问题称为边值问题。

例如：求 :math:`y'' + y = 0` 满足 :math:`y(0) = 0` ，:math:`y(\pi) = 1` 的解。


2. 一阶微分方程
===================================

2.1 可分离变量方程
---------------------

**标准形式**

形如 :math:`\frac{dy}{dx} = f(x)g(y)` 或 :math:`M(x)dx + N(y)dy = 0` 的方程称为可分离变量方程。

**求解方法**

1. 将方程分离变量：:math:`\frac{dy}{g(y)} = f(x)dx`
2. 两边积分：:math:`\int \frac{dy}{g(y)} = \int f(x)dx + C`
3. 解出y得到通解

.. container:: example-box

    **例题**

    求解dy/dx = x/y

    分离变量：y dy = x dx

    积分：∫y dy = ∫x dx

    得到：y²/2 = x²/2 + C

    化简：y² - x² = 2C = C'（新常数）


**物理应用**

放射性衰变：:math:`\frac{dN}{dt} = -\lambda N`

分离变量：:math:`\frac{dN}{N} = -\lambda dt`

积分：:math:`\ln|N| = -\lambda t + C`

得到：:math:`N = Ce^{-\lambda t}`


2.2 一阶线性微分方程
---------------------

**标准形式**

形如 :math:`\frac{dy}{dx} + P(x)y = Q(x)` 的方程称为一阶线性微分方程。

**积分因子法**

积分因子 :math:`\mu(x) = e^{\int P(x)dx}`

乘以积分因子后：

:math:`\frac{d}{dx}(\mu y) = \mu Q(x)`

积分得：:math:`\mu y = \int \mu Q(x)dx + C`

因此：:math:`y = \frac{1}{\mu}\left(\int \mu Q(x)dx + C\right)`

.. container:: example-box

    **例题**

    求解dy/dx + y/x = x

    这里P(x) = 1/x，Q(x) = x

    积分因子：μ(x) = e^(∫1/x dx) = e^(ln\|x\|) = \|x\|

    取x > 0，则μ(x) = x

    乘以积分因子：x dy/dx + y = x²

    左边是d/dx(xy)：d/dx(xy) = x²

    积分：xy = ∫x² dx = x³/3 + C

    因此：y = x²/3 + C/x

**应用实例**

RL电路：:math:`L\frac{dI}{dt} + RI = E(t)`

化为标准形式：:math:`\frac{dI}{dt} + \frac{R}{L}I = \frac{E(t)}{L}`

积分因子：:math:`\mu(t) = e^{\int \frac{R}{L} dt} = e^{Rt/L}`

求解得到电流I(t)的表达式。

2.3 恰当方程
---------------------

**恰当方程的定义**

形如 :math:`M(x,y)dx + N(x,y)dy = 0` 的方程，如果存在函数 :math:`u(x,y)` 使得 :math:`\frac{\partial u}{\partial x} = M` 且 :math:`\frac{\partial u}{\partial y} = N`，则称该方程为恰当方程。

**恰当方程的条件**

:math:`\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}`

**求解方法**

1. 验证 :math:`\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}`
2. 由 :math:`\frac{\partial u}{\partial x} = M` 积分得 :math:`u(x,y) = \int M dx + \phi(y)`
3. 对y求导：:math:`\frac{\partial u}{\partial y} = \frac{\partial}{\partial y}\left(\int M dx\right) + \phi'(y) = N`
4. 解出φ'(y)并积分得到φ(y)
5. 通解为u(x,y) = C

**积分因子**

如果方程不是恰当的，可以尝试乘以积分因子μ使其成为恰当方程。

 - 仅依赖于x的积分因子：:math:`\mu(x) = \exp\left(\int \frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N} dx\right)`
 - 仅依赖于y的积分因子：:math:`\mu(y) = \exp\left(\int \frac{\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}}{M} dy\right)`

.. container:: example-box

    **例题**

    求解(2xy + y²)dx + (x² + 2xy)dy = 0

    验证：∂M/∂y = 2x + 2y，∂N/∂x = 2x + 2y

    ∂M/∂y = ∂N/∂x，所以是恰当方程。

    由∂u/∂x = 2xy + y²积分得：

    u(x,y) = x²y + xy² + φ(y)

    对y求导：∂u/∂y = x² + 2xy + φ'(y)

    由∂u/∂y = x² + 2xy得：φ'(y) = 0，因此φ(y) = C₁

    通解：x²y + xy² = C

2.4 齐次方程
---------------------

**齐次方程的定义**

形如 :math:`\frac{dy}{dx} = f\left(\frac{y}{x}\right)` 的方程称为齐次方程。

**求解方法**

令 :math:`u = \frac{y}{x}` ，则 :math:`y = xu` ，:math:`\frac{dy}{dx} = u + x\frac{du}{dx}`

代入原方程：u + x(du/dx) = f(u)

分离变量：du/(f(u) - u) = dx/x

积分求解，最后将u = y/x代回。

.. container:: example-box

    **例题**

    求解dy/dx = (y/x) + tan(y/x)

    令u = y/x，则dy/dx = u + x(du/dx)

    代入得：u + x(du/dx) = u + tan(u)

    化简：x(du/dx) = tan(u)

    分离变量：du/tan(u) = dx/x

    积分：∫cos(u)/sin(u) du = ∫dx/x

    ln|sin(u)| = ln|x| + C

    sin(u) = Cx

    代回u = y/x：sin(y/x) = Cx


3. 高阶线性微分方程
===================================

3.1 二阶常系数齐次线性方程
----------------------------------------------

**标准形式**

:math:`y'' + ay' + by = 0` ，其中a, b为常数。

**特征方程法**

假设解的形式为 :math:`y = e^{rx}` ，代入得：

:math:`r^2 e^{rx} + ar e^{rx} + b e^{rx} = 0`

:math:`r^2 + ar + b = 0` （特征方程）

**三种情况**

1. **两个不同的实根** :math:`r_1, r_2`

通解：:math:`y = C_1 e^{r_1 x} + C_2 e^{r_2 x}`

2. **重根** :math:`r`

通解：:math:`y = (C_1 + C_2 x)e^{rx}`

3. **共轭复根** :math:`\alpha \pm i\beta`

通解：:math:`y = e^{\alpha x}(C_1 \cos(\beta x) + C_2 \sin(\beta x))`

.. container:: example-box

    **例题**

    求解y'' - 3y' + 2y = 0

    特征方程：r² - 3r + 2 = 0

    因式分解：(r - 1)(r - 2) = 0

    根：r₁ = 1，r₂ = 2

    通解：y = C₁e^x + C₂e^(2x)

    **例题（重根）**

    求解y'' - 4y' + 4y = 0

    特征方程：r² - 4r + 4 = 0

    (r - 2)² = 0

    重根：r = 2（二重）

    通解：y = (C₁ + C₂x)e^(2x)

    **例题（复根）**

    求解y'' + 2y' + 5y = 0

    特征方程：r² + 2r + 5 = 0

    r = (-2 ± √(4 - 20))/2 = (-2 ± 4i)/2 = -1 ± 2i

    通解：y = e^(-x)(C₁cos(2x) + C₂sin(2x))

3.2 二阶常系数非齐次线性方程
----------------------------------------------

**标准形式**

:math:`y'' + ay' + by = f(x)`

**解的结构**

通解 = 齐次解 + 特解

:math:`y(x) = y_h(x) + y_p(x)`

其中 :math:`y_h(x)` 是对应齐次方程的通解， :math:`y_p(x)` 是非齐次方程的特解。

**待定系数法**

根据f(x)的形式猜测特解的形式：

1. :math:`f(x) = P_n(x)` （多项式）

特解形式：:math:`y_p = Q_n(x)`

2. :math:`f(x) = e^{\lambda x}P_n(x)`

特解形式：:math:`y_p = e^{\lambda x}Q_n(x)`

3. :math:`f(x) = e^{\lambda x}[P_m(x)\cos(\omega x) + Q_n(x)\sin(\omega x)]`

特解形式：:math:`y_p = e^{\lambda x}[R_k(x)\cos(\omega x) + S_k(x)\sin(\omega x)]` ， :math:`k = \max(m, n)`

注意：如果猜测的形式与齐次解重复，需要乘以x。

.. container:: example-box

    **例题**

    求解y'' - 3y' + 2y = e^(3x)

    齐次解：y_h = C₁e^x + C₂e^(2x)

    f(x) = e^(3x)，猜测y_p = Ae^(3x)

    代入：9Ae^(3x) - 9Ae^(3x) + 2Ae^(3x) = e^(3x)

    2Ae^(3x) = e^(3x)

    A = 1/2

    特解：y_p = (1/2)e^(3x)

    通解：y = C₁e^x + C₂e^(2x) + (1/2)e^(3x)

**变参数法**

如果齐次解为 :math:`y_h = C_1 y_1(x) + C_2 y_2(x)`

设特解为 :math:`y_p = C_1(x)y_1(x) + C_2(x)y_2(x)`

其中 :math:`C_1'(x)y_1(x) + C_2'(x)y_2(x) = 0`

:math:`C_1'(x)y_1'(x) + C_2'(x)y_2'(x) = f(x)`

求解这个方程组得到 :math:`C_1'(x)` 和 :math:`C_2'(x)` ，再积分得到 :math:`C_1(x)` 和 :math:`C_2(x)` 。

3.3 高阶方程
---------------------

**n阶常系数齐次线性方程**

:math:`y^{(n)} + a_1 y^{(n-1)} + \cdots + a_{n-1} y' + a_n y = 0`

特征方程：:math:`r^n + a_1 r^{n-1} + \cdots + a_{n-1} r + a_n = 0`

根据特征根的情况写出通解。

**欧拉方程**

形如 :math:`x^n y^{(n)} + a_1 x^{(n-1)} y^{(n-1)} + \cdots + a_n y = f(x)` 的方程。

令 :math:`x = e^t` （或 :math:`t = \ln|x|` ），将欧拉方程转化为常系数线性方程。


4. 微分方程组
===================================

4.1 一阶线性方程组
---------------------

**矩阵形式**

:math:`\frac{dy}{dt} = Ay + f(t)`

其中 :math:`y = (y_1, y_2, \ldots, y_n)^T` ，A是n :math:`\times` n矩阵， :math:`f(t) = (f_1(t), f_2(t), \ldots, f_n(t))^T`

**齐次方程组的解**

假设 :math:`y = e^{\lambda t}v` ，代入得：

:math:`\lambda e^{\lambda t}v = A e^{\lambda t}v`

:math:`Av = \lambda v`

这是矩阵A的特征值问题。

**实特征根**

如果A有n个线性无关的特征向量 :math:`v_1, v_2, \ldots, v_n` ，对应的特征值为 :math:`\lambda_1, \lambda_2, \ldots, \lambda_n` ，则通解为：

:math:`y(t) = C_1 e^{\lambda_1 t}v_1 + C_2 e^{\lambda_2 t}v_2 + \cdots + C_n e^{\lambda_n t}v_n`

**复特征根**

如果特征根为共轭复数 :math:`\alpha \pm i\beta` ，对应的解为：

:math:`y(t) = e^{\alpha t}[C_1 \cos(\beta t) + C_2 \sin(\beta t)]`


4.2 物理应用
---------------------

**耦合弹簧**

两个质量 :math:`m_1` 和 :math:`m_2` 分别连接在弹簧上，通过另一个弹簧相互连接。

运动方程：

:math:`m_1 x_1'' = -k_1 x_1 + k_2(x_2 - x_1)`
:math:`m_2 x_2'' = -k_2(x_2 - x_1) - k_3 x_2`

写成矩阵形式：:math:`M x'' = -Kx`

**生态系统模型**

Lotka-Volterra方程（捕食者-猎物模型）：

:math:`\frac{dx}{dt} = ax - bxy`（猎物）
:math:`\frac{dy}{dt} = -cy + dxy`（捕食者）

其中x是猎物数量，y是捕食者数量。



5. 稳定性理论
===================================

5.1 平衡点及其分类
---------------------

**平衡点的定义**

对于自治系统 :math:`\frac{dy}{dt} = f(y)` ，满足 :math:`f(y_0) = 0` 的点 :math:`y_0` 称为平衡点。

**线性系统的平衡点**

考虑 :math:`\frac{dy}{dt} = Ay` ，平衡点在 :math:`y = 0` 处。

根据特征值 :math:`\lambda_1, \lambda_2` 的情况分类：

1. **节点（Node）**：两个实特征值同号
   - 稳定节点：:math:`\lambda_1 < 0` ，:math:`\lambda_2 < 0`
   - 不稳定节点：:math:`\lambda_1 > 0` ，:math:`\lambda_2 > 0`

2. **鞍点（Saddle）**：两个实特征值异号

3. **焦点（Focus）**：共轭复根 :math:`\alpha \pm i\beta`
   - 稳定焦点：:math:`\alpha < 0`
   - 不稳定焦点：:math:`\alpha > 0`

4. **中心（Center）**：纯虚根 :math:`\pm i\beta`

**相图**

在相平面上描绘解的几何行为，展示平衡点附近的轨迹。


5.2 李雅普诺夫稳定性
---------------------

**稳定性定义**

 - **稳定**：对于任意 :math:`\varepsilon > 0` ，存在 :math:`\delta > 0` ，使得当 :math:`||y(0)|| < \delta` 时，对所有 :math:`t \geq 0` 有 :math:`||y(t)|| < \varepsilon`
 - **渐近稳定**：稳定且 :math:`\lim_{t\to\infty} y(t) = y_0`
 - **不稳定**：不稳定的平衡点

**李雅普诺夫函数**

如果存在连续可微函数V(y)满足：

1. :math:`V(y_0) = 0` ，且当 :math:`y \neq y_0` 时 :math:`V(y) > 0`
2. 在平衡点附近，:math:`\frac{dV}{dt} \leq 0`

则平衡点是稳定的。如果 :math:`\frac{dV}{dt} < 0` （ :math:`y \neq y_0` ），则平衡点是渐近稳定的。

**应用实例**

考虑系统：

:math:`\frac{dx}{dt} = -x^3`
:math:`\frac{dy}{dt} = -x^2 y`

构造李雅普诺夫函数：:math:`V(x,y) = x^2 + y^2`

:math:`\frac{dV}{dt} = 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 2x(-x^3) + 2y(-x^2 y) = -2x^4 - 2x^2 y^2 \leq 0`

因此，平衡点(0,0)是稳定的。

5.3 线性化方法
---------------------

**雅可比矩阵**

对于非线性系统 :math:`\frac{dy}{dt} = f(y)` ，在平衡点 :math:`y_0` 处线性化：

J = Df(y_0)（雅可比矩阵）

**线性化定理**

如果线性化系统的所有特征值都有负实部，则非线性系统的平衡点是渐近稳定的。如果至少有一个特征值有正实部，则平衡点是不稳定的。

.. container:: example-box

    **例题**

    考虑系统：

    dx/dt = -x + xy
    dy/dt = -y + x²

    平衡点：解 -x + xy = 0和 -y + x² = 0

    得平衡点(0,0)和(1,1)

    在(0,0)处：

    f₁(x,y) = -x + xy，∂f₁/∂x = -1 + y，∂f₁/∂y = x
    f₂(x,y) = -y + x²，∂f₂/∂x = 2x，∂f₂/∂y = -1

    雅可比矩阵：J = [[-1, 0], [0, -1]]

    特征值：λ₁ = -1，λ₂ = -1

    都是负实部，因此(0,0)是渐近稳定的。


6. 拉普拉斯变换方法
===================================

6.1 拉普拉斯变换的定义
----------------------------------------------

**拉普拉斯变换**

对于函数f(t)，其拉普拉斯变换定义为：

.. math::

    L{f(t)} = F(s) = \int_0^{\infty} e^{-st}f(t)dt

其中s是复数。

**常用变换**

.. math::

    L\{1\} = \frac{1}{s}

.. math::

    L\{t\} = \frac{1}{s^2}

.. math::

    L\{t^n\} = \frac{n!}{s^{n+1}}

.. math::

    L\{e^{at}\} = \frac{1}{s-a}

.. math::

    L\{\sin(at)\} = \frac{a}{s^2 + a^2}

.. math::

    L\{\cos(at)\} = \frac{s}{s^2 + a^2}

**导数的变换**

.. math::

    L\{f'(t)\} = sF(s) - f(0)

.. math::

    L\{f''(t)\} = s^2F(s) - sf(0) - f'(0)

.. math::

    L\{f^{(n)}(t)\} = s^nF(s) - s^{n-1}f(0) - \cdots - f^{(n-1)}(0)

6.2 求解微分方程
---------------------

**求解步骤**

1. 对微分方程两边进行拉普拉斯变换
2. 利用初始条件和变换性质，得到关于F(s)的代数方程
3. 解出F(s)
4. 进行拉普拉斯逆变换得到f(t)

.. container:: example-box

    **例题**

    求解y'' + 3y' + 2y = 0，y(0) = 1，y'(0) = 0

    拉普拉斯变换：

    s²Y(s) - sy(0) - y'(0) + 3[sY(s) - y(0)] + 2Y(s) = 0

    (s² + 3s + 2)Y(s) - s - 3 = 0

    Y(s) = (s + 3)/(s² + 3s + 2) = (s + 3)/[(s + 1)(s + 2)]

    部分分式分解：

    (s + 3)/[(s + 1)(s + 2)] = A/(s + 1) + B/(s + 2)

    s + 3 = A(s + 2) + B(s + 1) = (A + B)s + (2A + B)

    比较系数：A + B = 1，2A + B = 3

    解得：A = 2，B = -1

    Y(s) = 2/(s + 1) - 1/(s + 2)

    拉普拉斯逆变换：

    y(t) = 2e^(-t) - e^(-2t)

6.3 卷积定理
---------------------

**卷积的定义**

两个函数f(t)和g(t)的卷积定义为：

.. math::

    (f * g)(t) = \int_0^{t} f(\tau)g(t - \tau)d\tau

**卷积定理**

:math:`\mathcal{L}\{f * g\} = F(s)G(s)`

因此：:math:`\mathcal{L}^{-1}\{F(s)G(s)\} = f * g`

**应用**

用于求解有激励项的微分方程。

例如：求解 :math:`y'' + y = f(t)` ， :math:`y(0) = y'(0) = 0`

拉普拉斯变换：:math:`(s^2 + 1)Y(s) = F(s)`

:math:`Y(s) = \frac{F(s)}{s^2 + 1} = F(s) \cdot \mathcal{L}\{\sin(t)\}`

由卷积定理：:math:`y(t) = f * \sin(t) = \int_0^{t} f(\tau)\sin(t - \tau)d\tau`


7. 幂级数解法
===================================

7.1 幂级数解的基本理论
----------------------------------------------

**适用情况**

当微分方程的系数不是常数，或者不能用初等方法求解时，可以使用幂级数解法。

**幂级数的形式**

假设解的形式为：

.. math::

    y(x) = \sum_{n=0}^{\infty} a_nx^n = a_0 + a_1x + a_2x^2 + \cdots

**求解步骤**

1. 将y, y', y''等用幂级数表示
2. 代入微分方程
3. 比较同次幂的系数，得到递推关系
4. 求出系数 :math:`a_n`

.. container:: example-box

    **例题**

    求解y'' - xy = 0（Airy方程）

    设y = Σaₙxⁿ

    y' = Σ(n+1)a_(n+1)xⁿ

    y'' = Σ(n+2)(n+1)a_(n+2)xⁿ

    代入得：Σ(n+2)(n+1)a_(n+2)xⁿ - xΣaₙxⁿ = 0

    Σ(n+2)(n+1)a_(n+2)xⁿ - Σaₙx^(n+1) = 0

    调整指标：Σ(n+2)(n+1)a_(n+2)xⁿ - Σa_(n-1)xⁿ = 0（n ≥ 1）

    比较系数：(n+2)(n+1)a_(n+2) - a_(n-1) = 0

    递推关系：a_(n+2) = a_(n-1)/[(n+2)(n+1)]

    由a₀和a₁确定所有系数。


8. 常微分方程的应用
===================================

8.1 物理学中的应用
---------------------

**力学**

 - 自由落体：:math:`m\frac{d^2 x}{dt^2} = mg`
 - 阻尼振动：:math:`m\frac{d^2 x}{dt^2} + c\frac{dx}{dt} + kx = 0`
 - 受迫振动：:math:`m\frac{d^2 x}{dt^2} + c\frac{dx}{dt} + kx = F_0 \cos(\omega t)`

**电磁学**

 - RC电路：:math:`RC\frac{dV}{dt} + V = E`
 - RLC电路：:math:`L\frac{d^2 I}{dt^2} + R\frac{dI}{dt} + \frac{I}{C} = \frac{dE}{dt}`

**热传导**

一维热传导方程：:math:`\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}`

8.2 工程学中的应用
---------------------

**控制系统**

控制系统的传递函数就是微分方程的拉普拉斯变换。

**化学反应动力学**

反应速率方程：d[A]/dt = -k[A]

**生物学**

种群增长：:math:`\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right)`

传染病模型：SIR模型


8.3 经济学中的应用
---------------------

**经济增长模型**

Solow模型：:math:`\frac{dk}{dt} = s f(k) - (n + g + \delta)k`

**期权定价**

Black-Scholes方程：:math:`\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS\frac{\partial V}{\partial S} - rV = 0`


9. 数值解法
===================================

9.1 欧拉方法
---------------------

**基本思想**

用差商近似导数：

:math:`\frac{dy}{dx} \approx \frac{y(x + h) - y(x)}{h}`

因此：:math:`y(x + h) \approx y(x) + h f(x, y(x))`

**迭代公式**

:math:`y_{n+1} = y_n + h f(x_n, y_n)`

**误差**

局部截断误差为 :math:`O(h^2)` ，全局截断误差为 :math:`O(h)` 。


9.2 龙格-库塔方法
---------------------

**二阶龙格-库塔方法**

:math:`k_1 = h f(x_n, y_n)`

:math:`k_2 = h f(x_n + h, y_n + k_1)`

:math:`y_{n+1} = y_n + \frac{k_1 + k_2}{2}`

**四阶龙格-库塔方法**

:math:`k_1 = h f(x_n, y_n)`

:math:`k_2 = h f(x_n + h/2, y_n + k_1/2)`

:math:`k_3 = h f(x_n + h/2, y_n + k_2/2)`

:math:`k_4 = h f(x_n + h, y_n + k_3)`

:math:`y_{n+1} = y_n + \frac{k_1 + 2k_2 + 2k_3 + k_4}{6}`

四阶龙格-库塔方法的局部截断误差为 :math:`O(h^5)` ，全局截断误差为 :math:`O(h^4)` 。

9.3 多步方法
---------------------

**Adams-Bashforth方法**

利用前几步的信息来计算下一步的值。

二阶Adams-Bashforth：

:math:`y_{n+1} = y_n + \frac{3}{2}h f(x_n, y_n) - \frac{1}{2}h f(x_{n-1}, y_{n-1})`

**Adams-Moulton方法**

隐式方法，精度更高。

二阶Adams-Moulton：

:math:`y_{n+1} = y_n + \frac{1}{2}h f(x_{n+1}, y_{n+1}) + \frac{1}{2}h f(x_n, y_n)`

需要用迭代方法求解。


10. 总结与展望
===================================

常微分方程是连接数学理论与工程实践的桥梁，为物理、工程、生物、经济等领域提供了强有力的建模和分析工具。

**核心价值**

 - 提供了描述变化规律的数学语言
 - 建立了从实际问题到数学模型的转化方法
 - 发展了多种解析和数值求解技术
 - 形成了完整的稳定性理论

**学习建议**

 - 熟练掌握基本解法：分离变量、积分因子、特征方程法
 - 理解解的结构：齐次解 + 特解
 - 重视物理意义的理解
 - 掌握数值方法的应用

**进阶方向**

 - 偏微分方程
 - 动力系统理论
 - 分岔与混沌
 - 随机微分方程
 - 延迟微分方程

常微分方程不仅是数学的一个分支，更是科学和工程领域的基础工具，掌握它将为你的学习和研究提供强大的支持。