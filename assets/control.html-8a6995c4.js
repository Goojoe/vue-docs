import{aP as e,Q as i,S as n,aQ as a}from"./framework-339c481e.js";const l={},s=a(`<h2 id="if-判断" tabindex="-1"><a class="header-anchor" href="#if-判断" aria-hidden="true">#</a> if (判断)</h2><p>冒号&quot;:&quot;写在最后</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name = &quot;Mary&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[s];function t(r,u){return i(),n("div",null,d)}const v=e(l,[["render",t],["__file","control.html.vue"]]);export{v as default};
