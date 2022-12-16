import{aP as n,Q as a,S as s,aQ as l,U as t}from"./framework-339c481e.js";const e={},d=l(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 赋值</span>
num <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment"># number</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;1ioguhria&quot;</span>

<span class="token comment"># 字符串使用变量</span>
first_name <span class="token operator">=</span> <span class="token string">&quot;ada&quot;</span>
last_name <span class="token operator">=</span> <span class="token string">&quot;lovelace&quot;</span>
full_name <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>first_name<span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>last_name<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
<span class="token keyword">print</span><span class="token punctuation">(</span>full_name<span class="token punctuation">)</span>

<span class="token comment"># 字符拼接&quot;+&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;you name is&quot;</span> <span class="token operator">+</span> full_name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h2><table><thead><tr><th>转义字符</th><th>描述</th></tr></thead><tbody><tr><td>(在行尾时)</td><td>续行符</td></tr><tr><td>\\</td><td>反斜杠符号</td></tr><tr><td>&#39;</td><td>单引号</td></tr><tr><td>&quot;</td><td>双引号</td></tr><tr><td>\\a</td><td>响铃</td></tr><tr><td>\\b</td><td>退格(Backspace)</td></tr><tr><td>\\e</td><td>转义</td></tr><tr><td>\\000</td><td>空</td></tr><tr><td>\\n</td><td>换行</td></tr><tr><td>\\v</td><td>纵向制表符</td></tr><tr><td>\\t</td><td>横向制表符</td></tr><tr><td>\\r</td><td>回车</td></tr><tr><td>\\f</td><td>换页</td></tr><tr><td>\\oyy</td><td>八进制数，y 代表 0~7 的字符，例如：\\012 代表换行。</td></tr><tr><td>\\xyy</td><td>十六进制数，以 \\x 开头，yy代表的字符，例如：\\x0a代表换行</td></tr><tr><td>\\other</td><td>其它的字符以普通格式输出</td></tr></tbody></table><h2 id="字符串运算符" tabindex="-1"><a class="header-anchor" href="#字符串运算符" aria-hidden="true">#</a> 字符串运算符</h2><p>下表实例变量 a 值为字符串 &quot;Hello&quot;，b 变量值为 &quot;Python&quot;：</p>`,5),r=t("table",{var:""},[t("thead",null,[t("tr",null,[t("th",null,"操作符"),t("th",null,"描述"),t("th",null,"实例")])]),t("tbody",null,[t("tr",null,[t("td",null,"+"),t("td",null,"字符串连接"),t("td",null,">>>a + b 'HelloPython'")]),t("tr",null,[t("td",null,"*"),t("td",null,"重复输出字符串"),t("td",null,">>>a * 2 'HelloHello'")]),t("tr",null,[t("td",null,"[]"),t("td",null,"通过索引获取字符串中字符"),t("td",null,">>>a[1] 'e'")]),t("tr",null,[t("td",null,"[ : ]"),t("td",null,"截取字符串中的一部分"),t("td",null,">>>a[1:4] 'ell'")]),t("tr",null,[t("td",null,"in"),t("td",null,"成员运算符 - 如果字符串中包含给定的字符返回 True"),t("td",null,'>>>"H" in a True')]),t("tr",null,[t("td",null,"not in"),t("td",null,"成员运算符 - 如果字符串中不包含给定的字符返回 True"),t("td",null,'>>>"M" not in a True')]),t("tr",null,[t("td",null,"r/R"),t("td",null,'原始字符串 - 原始字符串：所有的字符串都是直接按照字面的意思来使用，没有转义特殊或不能打印的字符。 原始字符串除在字符串的第一个引号前加上字母"r"（可以大小写）以外，与普通字符串有着几乎完全相同的语法。'),t("td",null,">>>print r'\\n' \\n >>> print R'\\n' \\n")]),t("tr",null,[t("td",null,"%"),t("td",null,"格式字符串"),t("td",null,"f")])])],-1),o=[d,r];function u(i,p){return a(),s("div",null,o)}const m=n(e,[["render",u],["__file","var.html.vue"]]);export{m as default};
