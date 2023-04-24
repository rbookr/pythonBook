## 循环的补充

- break 打断,跳出当前层循环
- continue 继续,跳过这一步,continue后面语句不执行,执行下一次循环


```python3
i = 1
while i <=7:
    if i == 5 :
        break;
    print(i)
```

输出
```
1 2 3 4
```

```python3
i = 1
while i <=7:
    if i == 5 :
        continue
    print(i)
```

没有输出5
```
1 2 3 4 6 7
```

for循环一样

```python3
for i in range(1,8):
    if i == 5:
        break
    print(i)

for i in range(1,8):
    if i == 5:
        continue
    print(i)
```
