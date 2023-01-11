import{aP as e,V as n,W as s,aQ as i}from"./framework-2a18b220.js";const l={},a=i(`<h1 id="debian安装mysql" tabindex="-1"><a class="header-anchor" href="#debian安装mysql" aria-hidden="true">#</a> debian安装mysql</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 更新
apt update &amp;&amp; apt install -y gnupg
# 下载仓库配置
wget https://dev.mysql.com/get/mysql-apt-config_0.8.24-1_all.deb

# 选择mysql 5.7
sudo dpkg -i mysql-apt-config_0.8.24-1_all.deb
# 更新仓库
sudo apt update
# 安装 mysql 服务器
sudo apt install -y mysql-community-server

# 自启动
sudo systemctl restart mysql
sudo systemctl enable mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function t(c,m){return n(),s("div",null,d)}const v=e(l,[["render",t],["__file","debian.html.vue"]]);export{v as default};
