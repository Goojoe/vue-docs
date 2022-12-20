import{aP as e,V as d,W as a,aQ as i}from"./framework-2a18b220.js";const c={},n=i(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="echo命令-echo" tabindex="-1"><a class="header-anchor" href="#echo命令-echo" aria-hidden="true">#</a> echo命令(echo)</h3><p>echo其实是一个开关命令，执行 <code>echo off</code> 将关闭回显，它后面所有命令都不显示命令本身，只显示执行后的结果。如果在某一行执行 <code>echo on</code> 命令将重新打开回显。</p><p>echo常见的用法是在屏幕上显示信息，例如 <code>echo hello world</code> 命令将在屏幕上显示 <code>hello world</code>。</p><h3 id="重定向符号" tabindex="-1"><a class="header-anchor" href="#重定向符号" aria-hidden="true">#</a> 重定向符号(&gt; &gt;&gt;)</h3><p>常见的重定向符号有 <code>&gt;</code> 和 <code>&gt;&gt;</code>。默认情况下，命令执行结果是输出到DOS窗口，使用重定向后，将改成输出到另一个位置（文件）。<code>&gt;</code> 和 <code>&gt;&gt;</code> 的区别在于 <code>&gt;</code> 会先将文件内容清空然后再将命令执行结果输入，而 <code>&gt;&gt;</code> 会将命令执行结果直接追加到文件末尾:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo 第一行 &gt; newfile.txt
echo 第二行 &gt;&gt; newfile.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="管道符号" tabindex="-1"><a class="header-anchor" href="#管道符号" aria-hidden="true">#</a> 管道符号(|)</h3><p>管道符号 <code>|</code> 会将其左侧命令的输出结果作为输入传递给其右侧语句:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo 5 5 | gmt psxy -R0/10/0/10 -JX10c -Ba -Sa0.5c -Gred &gt; map.ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="定义变量-set" tabindex="-1"><a class="header-anchor" href="#定义变量-set" aria-hidden="true">#</a> 定义变量(set)</h3><p>可以使用 <code>set</code> 命令定义变量，然后用 <code>%变量名称%</code> 来引用变量:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set Year=2018
set Month=12
set PS=%Year%-%Month%.ps
echo 文件名为 %PS%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码运行的结果为： <code>文件名为 2018-12.ps</code>。</p><h3 id="暂停执行-pause" tabindex="-1"><a class="header-anchor" href="#暂停执行-pause" aria-hidden="true">#</a> 暂停执行(pause)</h3><p>pause 用来暂停命令的执行，以便查看终端输出的过程。</p><p>一般情况下双击执行bat脚本cmd窗口会一闪而过，为了查看中间是否出错，在bat文件最后一行（或需要暂停的地方）写一个pause。</p><h3 id="删除文件-del" tabindex="-1"><a class="header-anchor" href="#删除文件-del" aria-hidden="true">#</a> 删除文件(del)</h3><p>del命令用来删除文件。使用GMT命令绘图后通常会在文件夹下产生一些临时文件，这时可以使用del命令进行删除:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo 1 2 &gt; tmp1.txt
echo 3 4 &gt;&gt; tmp1.txt
echo 5 6 &gt; tmp2.txt
gmt psxy tmp1.txt -R0/10/0/10 -JX10c -Ba -Sa1c -Gred -K &gt; map.ps
gmt psxy tmp2.txt -R -J -Sc0.5c -Gyellow -O &gt;&gt; map.ps
del tmp* gmt.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注释语句-rem" tabindex="-1"><a class="header-anchor" href="#注释语句-rem" aria-hidden="true">#</a> 注释语句(rem)</h3><p>rem命令用来添加注释:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rem 绘制地图
echo 2 2 | gmt psxy -R0/5/0/5 -JX5c -B1 -Sc0.5c -Gblack -K &gt; map.ps
echo 3 3 | gmt psxy -R -J -Sc0.5c -Gred -O &gt;&gt; map.ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环语句-for" tabindex="-1"><a class="header-anchor" href="#循环语句-for" aria-hidden="true">#</a> 循环语句(for)</h3><p>bat文件中for命令用法较为复杂，这里只介绍如何利用for命令批量绘图。</p><p>命令格式： <code>for %%i in (command1) do (command2)</code></p><p>表示将 <code>comand1</code> 中的每一个结果赋值给 <code>i</code>，代入到 <code>command2</code> 中执行命令，在 <code>command2</code> 中依然用 <code>%%i</code> 表示这个值:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rem 开启变量延迟
setlocal enabledelayedexpansion
for /f %%i in (&#39;dir /s/b &quot;*.DAT&quot;&#39;) do (
set file=%%i
rem 去除文件后缀名，即去除文件最后4个字符
set file=!file:~0,-4!
gmt surface %%i -R73/135/17/54 -I5m -Gtmp.grd
gmt grdimage tmp.grd -R73/135/17/54 -JM12c -Cmycpt.cpt -Ba !file!.pdf
del gmt.*
     )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上段表示将当前目录下所有DAT文件都进行插值并绘图，生成不同的pdf文件。由于在循环中，又将 <code>i</code> 赋值给新的变量 <code>file</code>，为了感知每次循环中 <code>i</code> 值的变化，需要在bat脚本开头设置 <code>setlocal enabledelayedexpansion</code>，并且 <code>file</code> 变量的引用用 <code>!file!</code> 表示。</p>`,29),t=[n];function s(l,r){return d(),a("div",null,t)}const m=e(c,[["render",s],["__file","cmd.html.vue"]]);export{m as default};
