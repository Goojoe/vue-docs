import{aP as e,V as s,W as a,aQ as n}from"./framework-2a18b220.js";const i={},d=n(`<h1 id="debian安装mysql" tabindex="-1"><a class="header-anchor" href="#debian安装mysql" aria-hidden="true">#</a> debian安装mysql</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 更新
apt update &amp;&amp; apt install -y gnupg
wget https://dev.mysql.com/get/mysql-apt-config_0.8.24-1_all.deb
# 选择mysql 5.7
sudo dpkg -i mysql-apt-config_0.8.24-1_all.deb
sudo apt update
# 自启动
sudo systemctl restart mysql
sudo systemctl enable mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function t(c,r){return s(),a("div",null,l)}const u=e(i,[["render",t],["__file","debian.html.vue"]]);export{u as default};
