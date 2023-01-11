# debian安装mysql

```
# 更新
apt update && apt install -y gnupg
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
```

