# range

我们学过list后，可以创建给一个list[1,2,3,4,5],表示1到5这个范围，如果我们想要创建一个列表表示`1->1000`，难道我们也手动人输入 `1,2,3,4....`直到1000吗？这显然不可能。

有两种方法，1.利用list的append功能和for循环(当然我们还没有学)

```py
a = [] # 创建一个空的列表
for i in range(1,1001):
    a.append(a)
```

2. 直接用 range

```py
a = list(range(1,1001))
```

无论用那种我们都要用到 `range`

## range的使用

参考 [Python3 range() 函数用法 | 菜鸟教程](https://www.runoob.com/python3/python3-func-range.html)

Python3 range() 函数返回的是一个可迭代对象（类型是对象），而不是列表类型， 所以打印的时候不会打印列表。
Python3 list() 函数是对象迭代器，可以把range()返回的可迭代对象转为一个列表，返回的变量类型为列表。

```python3
range(stop)
range(start, stop[, step])
```
- start: 计数从 start 开始。默认是从 0 开始。例如range（5）等价于range（0， 5）;
- stop: 计数到 stop 结束，但不包括 stop。例如：range（0， 5） 是[0, 1, 2, 3, 4]没有5
- step：步长，默认为1。例如：range（0， 5） 等价于 range(0, 5, 1)


```
for i in range(5): 
    print(i) # 输出 0 1 2 3 4

for i in range(1,5): 
    print(i) # 输出 1 2 3 4

for i in range(5,10): 
    print(i) # 输出 5 6 7 8 9

for i in range(5,10,2): # 步长为2
    print(i) # 输出 5 7 9

a = list(range(1,5)) # 把range转成list
# a = [1,2,3,4]

a = list(range(2,11,3)) # 把range转成list
# a = [2,5,8]
```