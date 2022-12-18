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

