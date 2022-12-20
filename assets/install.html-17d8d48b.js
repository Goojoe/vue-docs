import{aP as s,V as i,W as o,X as e,ad as n,af as t,aQ as r,G as d}from"./framework-2a18b220.js";const l={},c=e("h1",{id:"python镜像",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#python镜像","aria-hidden":"true"},"#"),n(" Python镜像")],-1),u={href:"https://registry.npmmirror.com/binary.html?path=python",target:"_blank",rel:"noopener noreferrer"},m=r(`<ul><li>python 3.9.13</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set dl=&quot;https://suo.yt/SXOCilf&quot;
set name=&quot;python3.9.13.exe&quot;
curl -L -o python3.9.13.exe %dl% &amp;&amp; python3.9.13.exe /quiet InstallAllUsers=1 PrependPath=1 &amp;&amp; echo &quot;正在安装&quot; &amp;&amp; reg add HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f &amp;&amp; exit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>python 3.10.8</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set dl=&quot;https://registry.npmmirror.com/-/binary/python/3.10.8/python-3.10.8-amd64.exe&quot;
set name=&quot;python3.10.8.exe&quot;
curl -L -o %name% %dl% &amp;&amp; %name% /quiet InstallAllUsers=1 PrependPath=1 &amp;&amp; echo &quot;正在安装%name%&quot; &amp;&amp; reg add HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f &amp;&amp; exit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="miniconda" tabindex="-1"><a class="header-anchor" href="#miniconda" aria-hidden="true">#</a> MiniConda</h2>`,5),p={href:"https://docs.conda.io/en/latest/miniconda.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://mirrors.bfsu.edu.cn/anaconda/miniconda/Miniconda3-latest-Windows-x86_64.exe",target:"_blank",rel:"noopener noreferrer"},v={href:"https://s3.jcloud.sjtu.edu.cn/899a892efef34b1b944a19981040f55b-oss01/anaconda/miniconda/Miniconda3-latest-Windows-x86_64.exe",target:"_blank",rel:"noopener noreferrer"},_=r(`<div class="language-~/.condarc line-numbers-mode" data-ext="~/.condarc"><pre class="language-~/.condarc"><code>default_channels:
  - https://mirror.sjtu.edu.cn/anaconda/pkgs/r
  - https://mirror.sjtu.edu.cn/anaconda/pkgs/main
custom_channels:
  conda-forge: https://mirror.sjtu.edu.cn/anaconda/cloud/
  pytorch: https://mirror.sjtu.edu.cn/anaconda/cloud/
channels:
  - defaults
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(f,x){const a=d("ExternalLinkIcon");return i(),o("div",null,[c,e("p",null,[e("a",u,[n("淘宝"),t(a)])]),m,e("p",null,[e("a",p,[n("官方"),t(a)])]),e("p",null,[e("a",h,[n("清华"),t(a)])]),e("p",null,[e("a",v,[n("上海交通大学"),t(a)])]),_])}const y=s(l,[["render",b],["__file","install.html.vue"]]);export{y as default};
