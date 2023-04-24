## 条件语句
条件语句就是if,有三种使用形式

 - if 或者 if else
 - elif
 - if 嵌套


 ## if 或者 if else

语法

```plaintext
if 判断条件 :
    执行语句1
    执行语句2
    执行语句3
    ...
else:   # else可以不要
    执行语句1
    执行语句2
    执行语句3
    ...
```

单个的if

```python3
a = 1
if a >= 1 :
    print ("1 - if expr is true")
    print (a)
 
b = 0
if b >=1 :
    print ("2 - if expr is true")
    print (b)

print("Good bye!")
```

if 与else,判断奇偶

```python3
a = 100
if a % 2 !=0 :
    print(a," is odd");
else:
    print(a," is even");
```

**? 如何接收用户的输入的数字呢**

```python3
a = int(input()) # int 与 input的使用
if a % 2 !=0 :
    print(a," is odd");
else:
    print(a," is even");
```

## elif 的使用

直接看代码

```python3
age = int(input("input dog age: "))
if age <= 0:
    print("Are you kiding me!")
elif age == 1:
    print("Be equal to 14 years old human")
elif age == 2:
    print("Be equal to 22 years old human")
elif age > 2:
    human = 22 + (age -2)*5
    print("Be equal to years human old of ", human)
print("Bye bye!")
```

- elif 就是否则如果的意思，不能单独用，前面要有一个if和它配对

## if 嵌套

```python3
num=int(input("input a number : "))
if num%2==0:
    if num%3==0:
        print ("div 2 3 ok")
    else:
        print ("div 2 ok , div 3 fail")
else:
    if num%3==0:
        print("div 3 ok ,div 2 fail")
    else:
        print("div 2 and 3 fail")
```

- if 嵌套其实很容易，只要能理解**区域块被谁控制**
