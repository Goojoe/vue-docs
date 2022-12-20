import{aP as e,V as n,W as i,aQ as a}from"./framework-2a18b220.js";const d={},l=a(`<h2 id="if-判断" tabindex="-1"><a class="header-anchor" href="#if-判断" aria-hidden="true">#</a> if (判断)</h2><p>冒号&quot;:&quot;写在最后</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name = &quot;Mary&quot;
name2 = &quot;jack&quot;
name3 = &quot;john&quot;

# 单控制
if name == &#39;Mary&#39;:
	print(&#39;Hello Mary&#39;)
else:
	print(&#39;Wrong password.&#39;)

# 多条件控制
if name2 ==&quot;jcak&quot;:
	print(&quot;hellow&quot;)
elif name3 == &quot;john&quot;:
	print(&quot;john&quot;)
else:
	print(&quot;Wrong password&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while-循环判断" tabindex="-1"><a class="header-anchor" href="#while-循环判断" aria-hidden="true">#</a> while(循环判断)</h2><p>利用 while 语句， 可以让一个代码块一遍又一遍的执行。只要 while 语句的条 件为 True， while 子句中的代码就会执行。</p><p>语法:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 只有为真才会执行
while 条件表达式:
	执行code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在代码中， while 语句总是包含下面几部分：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spam = 0
while spam &lt; 5:
    print(&#39;Hello, world.&#39;)
    spam = spam + 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for循环-遍历" tabindex="-1"><a class="header-anchor" href="#for循环-遍历" aria-hidden="true">#</a> for循环(遍历)</h2><p>for 为遍历循环，可以遍历任何序列，如 list，tuple，迭代器等。</p><h3 id="for-语法" tabindex="-1"><a class="header-anchor" href="#for-语法" aria-hidden="true">#</a> for 语法：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for &lt;变量&gt; in &lt;循环(列表,元组))&gt;:
       [循环体]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>释：通过 for 循环依次将 &lt;循环序列&gt; 中的数据取出赋值给 &lt;变量&gt;，再通过【循环体】进行处理。</p><h3 id="for-循环访问列表" tabindex="-1"><a class="header-anchor" href="#for-循环访问列表" aria-hidden="true">#</a> for 循环访问列表</h3><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code># for 循环访问列表
list = [&#39;woodman&#39;, &#39;Alan&#39;, &#39;Bobo&#39;]
for name in list:
    print(name)
&quot;&quot;&quot;
结果:
woodman
Alan
Bobo
&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:</strong> name 这个变量是在 for 循环中定义的，意思是:</p><ol><li>依次取出 list 中的每一个元素</li><li>把元素赋值给 name</li><li>执行for循环体</li></ol><h3 id="for-循环访问字典" tabindex="-1"><a class="header-anchor" href="#for-循环访问字典" aria-hidden="true">#</a> for 循环访问字典</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dict = {&#39;woodman&#39;: 98, &#39;Alan&#39;: 89, &#39;Bobo&#39;: 56}
for key, value in dict.items():
    print(key, value)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><blockquote><p>Alan 89 woodman 98 Bobo 56</p></blockquote><p>示例3: for 循环访问字符串</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code># for 循环访问字符串，可以依次读取每个字符
for char in &#39;woodman木头人&#39;:
    print(char)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果： w o ...... 头 人</p></blockquote><p>**注意:**中文字符占2~3个字节(由编码决定，utf-8占3字节)，每个中文字符是一个值</p><h3 id="for-else-比较少用到" tabindex="-1"><a class="header-anchor" href="#for-else-比较少用到" aria-hidden="true">#</a> for ... else ... (比较少用到)</h3><p>for ... else ... 格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for  &lt;变量&gt;   in   &lt;循环序列&gt;:
        【循环体】
else:
         【else的语句块】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>释：for 遍历序列，无 break 结束当前循环，循环结束后执行 else 语句块</p><p>示例1：</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>list = [&#39;woodman&#39;, &#39;Alan&#39;, &#39;Bobo&#39;]
for name in list:
    print(name)
else:
    print(&#39;循环完整结束后执行&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果： woodman Alan Bobo 循环完整结束后执行</p></blockquote><p>示例2：</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>list = [&#39;woodman&#39;, &#39;Alan&#39;, &#39;Bobo&#39;]
for name in list:
    print(name)
    if name == &#39;Alan&#39;:
        break  # break 结束循环，for 下的 else 也不会执行
else:
    print(&#39;循环完整结束后执行&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果： woodman Alan</p></blockquote><p>示例3：</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>list = [&#39;woodman&#39;, &#39;Alan&#39;, &#39;Bobo&#39;]
for name in list:
    if name == &#39;Alan&#39;:
        continue  # continue 跳过本次循环，进入下一次循环
    print(name)  # 如果被 continue 本条语句不会执行
else:
    print(&#39;循环完整结束后执行&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>woodman
Bobo
循环完整结束后执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：continue 只是跳过本次循环，循环结束后 else 语句块最后被执行</p><h3 id="for-循环嵌套" tabindex="-1"><a class="header-anchor" href="#for-循环嵌套" aria-hidden="true">#</a> for 循环嵌套</h3><p>循环嵌套为循环中嵌套另外一层循环。</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>for &lt;外层循环变量&gt; in &lt;外层循环序列&gt;:
     for &lt;内层循环变量&gt; in &lt;内层循环序列&gt;:
         【内层循环体】
     【外层循环体】 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个只是一个for 与 for 的循环嵌套，你可以使用 for 与 while 嵌套。</p><p>循环嵌套经典示例1：倒三角的九九乘法表</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code># 九九乘法表 倒三角，你可以试试输出正三角
for i in range(1, 10): # range()请看本章第五部分
    for j in range(i, 10):
        print(&#39;%d * %d = %d&#39; % (i, j, i * j), end=&#39;\\t&#39;)
    print(&#39;&#39;)  # 控制换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>循环嵌套经典示例2：冒泡排序</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code># 冒泡排序
list = [9, 2, 7, 4, 5, 6, 3, 8, 1, 10]
length = len(list)
for i in range(length):
    for j in range(length - i):
        if list[length - j - 1] &lt; list[length - j - 2]:
            list[length - j - 1], list[length - j - 2] = list[length - j - 2], list[length - j - 1]
print(list)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环访问迭代对象" tabindex="-1"><a class="header-anchor" href="#for循环访问迭代对象" aria-hidden="true">#</a> for循环访问迭代对象</h3><p><strong>1、迭代器简介</strong></p><p>Python 的 for 循环不仅可以用在 list 或 tuple 上，还可以作用在其他任何可迭代对象上。</p><p>迭代操作就是对于一个集合操作，无论该集合是有序还是无序，我们用 for 循环总是能依次取出集合中的每一个元素。</p><blockquote><p>释义: 集合是指包含一组元素的数据结构，它包括： 有序集合：list，tuple，str和unicode； 无序集合：set 无序集合并且具有 key-value 对：dict（Python3.6后字典为有序）</p></blockquote><p>迭代器有两个基本的方法：<strong>iter()</strong> 和 <strong>next()</strong></p><p><strong>iter()</strong> 创建一个迭代器</p><p><strong>next()</strong> 访问迭代元素，访问后指针向下移一行</p><p>示例：</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>&gt;&gt;&gt;list=[0,1,2,3,4]
&gt;&gt;&gt; it = iter(list)  # 创建迭代对象
&gt;&gt;&gt; print (next(it))  # 访问当前指针元素，结束后指针向下移一步
0
&gt;&gt;&gt; print (next(it)) # 
1
&gt;&gt;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、for循环访问迭代器</strong></p><p>示例：</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>list = [&#39;woodman&#39;, &#39;Alan&#39;, &#39;Bobo&#39;]
it = iter(list)  # 创建迭代器对象
for name in it:  # 循环访问迭代器
    print(name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：迭代器访问数据比通过索引循环访问速度更快，数据量大时一般会使用迭代器</p><h3 id="range-类控制循环访问-1-x-number" tabindex="-1"><a class="header-anchor" href="#range-类控制循环访问-1-x-number" aria-hidden="true">#</a> range () 类控制循环访问(1-x_number)</h3><p>range ( ) 为 Python 的自有类，range() 带有内置的迭代方法__iter__() 和 <strong>next()</strong> ，它是一个可迭代对象，我们可以通过 for 访问 range() 创建的迭代器。</p><p>range 类初始化参数说明：</p><p><strong>range(stop)</strong> 从0开始到stop结束（不包含 stop）返回一个产生整数序列的迭代对象</p><p><strong>range(start, stop[, step])</strong> 从 start 开始到 stop 结束（不包含 stop）返回一个整数序列的迭代对象, step 为他的步长</p><p>示例1:</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>for i in range(5):
    print(i, end=&#39;-&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出:0-1-2-3-4-</p></blockquote><p>示例2 :</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>for i in range(1,5):
    print(i, end=&#39;-&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出:1-2-3-4-</p></blockquote><p>示例3:</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>for i in range(1,5,2):
    print(i, end=&#39;-&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出:1-3-</p></blockquote><p>示例4：</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>for i in range(-1,-5,-2):
    print(i)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果 -1 -3</p></blockquote><p>注意：start, stop, step 三个参数可以为负数</p><p>示例5：</p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code># 结合range()和len()函数以遍历一个序列的索引,如下所示.
list = [&#39;woodman&#39;, &#39;Alan&#39;, &#39;Bobo&#39;]
for i in range(len(list)):
    print(i,list[i])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果： 0 woodman 1 Alan 2 Bobo</p></blockquote><p>注意：for 循环可作用的迭代对象远不止 list，tuple，str，unicode，dict 等，任何可迭代对象都可以作用于 for 循环，而内部如何迭代我们通常并不用关心。</p><p>通常可迭代对象一般具备 iter() 和 next() 方法或者 <strong>iter</strong>() 和 <strong>next()</strong> 方法。</p><figure><img src="https://pic2.zhimg.com/v2-3e34cdc5b063c76b08e7fd4a8e95d241_r.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Python for 循环思维导图</p>`,88),s=[l];function r(t,o){return n(),i("div",null,s)}const c=e(d,[["render",r],["__file","control.html.vue"]]);export{c as default};
