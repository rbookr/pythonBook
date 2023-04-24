## 变量的概念

Python 中的变量不需要**声明**。

- **每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。**
- 在 Python 中，变量就是变量，它没有类型，我们所说的"类型"是变量所指的内存中对象的类型。

## 简单使用

等号（=）用来给变量赋值。
等号（=）运算符左边是一个变量名,等号（=）运算符右边是存储在变量中的值。例如：

```python3
counter = 100          # 整型变量
miles   = 1000.0       # 浮点型变量
name    = "runoob"     # 字符串

print (counter)
print (miles)
print (name)
```

```plaintext
# 多个变量赋值
a = b = c = 1
# 以上实例，创建一个整型对象，值为 1，从后向前赋值，三个变量被赋予相同的数值。


a, b, c = 1, 2, "runoob"
```
## 标准数据类型

- Number（数字）
- String（字符串）
- List（列表）
- Tuple（元组）
- Set（集合）
- Dictionary（字典）

-   **不可变数据（3 个）：**Number（数字）、String（字符串）、Tuple（元组）；
-   **可变数据（3 个）：**List（列表）、Dictionary（字典）、Set（集合）。

## Number（数字）

Python3 支持 **int、float、bool、complex（复数）**。

在Python 3里，只有一种整数类型 int，表示为长整型，没有 python2 中的 Long。

像大多数语言一样，数值类型的赋值和计算都是很直观的。

内置的 type() 函数可以用来查询变量所指的对象类型。

### 数值运算

```plaintext
>>> 5 + 4  # 加法  
9  
>>> 4.3 - 2 # 减法  
2.3  
>>> 3 * 7  # 乘法  
21  
>>> 2 / 4  # 除法，得到一个浮点数  
0.5  
>>> 2 // 4 # 除法，得到一个整数  
0  
>>> 17 % 3 # 取余  
2  
>>> 2 ** 5 # 乘方  
32
```
## 资料

[Python3 基本数据类型 | 菜鸟教程](https://www.runoob.com/python3/python3-data-type.html)
