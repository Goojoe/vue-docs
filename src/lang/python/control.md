---
title: 程序控制
order: 3
---

## if (判断)

冒号":"写在最后

```
name = "Mary"
name2 = "jack"
name3 = "john"

# 单控制
if name == 'Mary':
	print('Hello Mary')
else:
	print('Wrong password.')

# 多条件控制
if name2 =="jcak":
	print("hellow")
elif name3 == "john":
	print("john")
else:
	print("Wrong password")
```

## while(循环判断)

利用 while 语句， 可以让一个代码块一遍又一遍的执行。只要 while 语句的条
件为 True， while 子句中的代码就会执行。

语法:

```
# 只有为真才会执行
while 条件表达式:
	执行code
```

在代码中， while 语句总是包含下面几部分：

```
spam = 0
while spam < 5:
    print('Hello, world.')
    spam = spam + 1
```

## for循环(遍历)

for 为遍历循环，可以遍历任何序列，如 list，tuple，迭代器等。

### for 语法：

```text
for <变量> in <循环(列表,元组))>:
       [循环体]
```

释：通过 for 循环依次将 <循环序列> 中的数据取出赋值给 <变量>，再通过【循环体】进行处理。

### for 循环访问列表

```python3
# for 循环访问列表
list = ['woodman', 'Alan', 'Bobo']
for name in list:
    print(name)
"""
结果:
woodman
Alan
Bobo
"""
```

**注意:**  name 这个变量是在 for 循环中定义的，意思是:

1. 依次取出 list 中的每一个元素
2. 把元素赋值给 name
3. 执行for循环体

### for 循环访问字典

```text
dict = {'woodman': 98, 'Alan': 89, 'Bobo': 56}
for key, value in dict.items():
    print(key, value)
```

输出结果：

> Alan 89 
> woodman 98 
> Bobo 56

示例3: for 循环访问字符串

```python3
# for 循环访问字符串，可以依次读取每个字符
for char in 'woodman木头人':
    print(char)
```

> 输出结果：
> w
> o
> ......
> 头
> 人

**注意:**中文字符占2~3个字节(由编码决定，utf-8占3字节)，每个中文字符是一个值

### for ... else ...  (比较少用到)

for ... else ... 格式：

```text
for  <变量>   in   <循环序列>:
        【循环体】
else:
         【else的语句块】
```

释：for 遍历序列，无 break 结束当前循环，循环结束后执行 else 语句块

示例1：

```python3
list = ['woodman', 'Alan', 'Bobo']
for name in list:
    print(name)
else:
    print('循环完整结束后执行')
```

> 输出结果：
> woodman
> Alan
> Bobo
> 循环完整结束后执行

示例2：

```python3
list = ['woodman', 'Alan', 'Bobo']
for name in list:
    print(name)
    if name == 'Alan':
        break  # break 结束循环，for 下的 else 也不会执行
else:
    print('循环完整结束后执行')
```

> 输出结果：
> woodman
> Alan

示例3：

```python3
list = ['woodman', 'Alan', 'Bobo']
for name in list:
    if name == 'Alan':
        continue  # continue 跳过本次循环，进入下一次循环
    print(name)  # 如果被 continue 本条语句不会执行
else:
    print('循环完整结束后执行')
```

输出结果：

```text
woodman
Bobo
循环完整结束后执行
```

**注意**：continue  只是跳过本次循环，循环结束后 else 语句块最后被执行

### for 循环嵌套

循环嵌套为循环中嵌套另外一层循环。

```python3
for <外层循环变量> in <外层循环序列>:
     for <内层循环变量> in <内层循环序列>:
         【内层循环体】
     【外层循环体】 
```

这个只是一个for 与 for 的循环嵌套，你可以使用 for 与 while 嵌套。

循环嵌套经典示例1：倒三角的九九乘法表

```python3
# 九九乘法表 倒三角，你可以试试输出正三角
for i in range(1, 10): # range()请看本章第五部分
    for j in range(i, 10):
        print('%d * %d = %d' % (i, j, i * j), end='\t')
    print('')  # 控制换行
```

循环嵌套经典示例2：冒泡排序

```python3
# 冒泡排序
list = [9, 2, 7, 4, 5, 6, 3, 8, 1, 10]
length = len(list)
for i in range(length):
    for j in range(length - i):
        if list[length - j - 1] < list[length - j - 2]:
            list[length - j - 1], list[length - j - 2] = list[length - j - 2], list[length - j - 1]
print(list)
```

### for循环访问迭代对象

**1、迭代器简介**

Python 的 for 循环不仅可以用在 list 或 tuple 上，还可以作用在其他任何可迭代对象上。

迭代操作就是对于一个集合操作，无论该集合是有序还是无序，我们用 for 循环总是能依次取出集合中的每一个元素。

> 释义: 集合是指包含一组元素的数据结构，它包括：
>         有序集合：list，tuple，str和unicode；
>         无序集合：set
>         无序集合并且具有 key-value 对：dict（Python3.6后字典为有序）

迭代器有两个基本的方法：**iter()** 和 **next()**

**iter()** 创建一个迭代器

**next()** 访问迭代元素，访问后指针向下移一行

示例：

```python3
>>>list=[0,1,2,3,4]
>>> it = iter(list)  # 创建迭代对象
>>> print (next(it))  # 访问当前指针元素，结束后指针向下移一步
0
>>> print (next(it)) # 
1
>>>
```



**2、for循环访问迭代器**

示例：

```python3
list = ['woodman', 'Alan', 'Bobo']
it = iter(list)  # 创建迭代器对象
for name in it:  # 循环访问迭代器
    print(name)
```

注意：迭代器访问数据比通过索引循环访问速度更快，数据量大时一般会使用迭代器

### range () 类控制循环访问(1-x_number)

range ( ) 为 Python 的自有类，range() 带有内置的迭代方法__iter__() 和 __next()__ ，它是一个可迭代对象，我们可以通过 for 访问 range() 创建的迭代器。

range 类初始化参数说明：

**range(stop)**  从0开始到stop结束（不包含 stop）返回一个产生整数序列的迭代对象

**range(start, stop[, step])**  从 start 开始到 stop 结束（不包含 stop）返回一个整数序列的迭代对象, step 为他的步长

示例1:

```python3
for i in range(5):
    print(i, end='-')
```

> 输出:0-1-2-3-4-

示例2 :

```python3
for i in range(1,5):
    print(i, end='-')
```

> 输出:1-2-3-4-

示例3:

```python3
for i in range(1,5,2):
    print(i, end='-')
```

> 输出:1-3-

示例4：

```python3
for i in range(-1,-5,-2):
    print(i)
```

> 输出结果
> -1
> -3

注意：start, stop, step 三个参数可以为负数

示例5：

```python3
# 结合range()和len()函数以遍历一个序列的索引,如下所示.
list = ['woodman', 'Alan', 'Bobo']
for i in range(len(list)):
    print(i,list[i])
```

> 输出结果：
> 0 woodman
> 1 Alan
> 2 Bobo

注意：for 循环可作用的迭代对象远不止 list，tuple，str，unicode，dict 等，任何可迭代对象都可以作用于 for 循环，而内部如何迭代我们通常并不用关心。

通常可迭代对象一般具备 iter() 和 next() 方法或者 __iter__() 和 __next()__ 方法。

![img](https://pic2.zhimg.com/v2-3e34cdc5b063c76b08e7fd4a8e95d241_r.jpg)

Python for 循环思维导图
