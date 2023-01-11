# debian安装mysql

```
# 更新
apt update && apt install -y gnupg
wget https://dev.mysql.com/get/mysql-apt-config_0.8.24-1_all.deb
# 选择mysql 5.7
sudo dpkg -i mysql-apt-config_0.8.24-1_all.deb
sudo apt update
# 自启动
sudo systemctl restart mysql
sudo systemctl enable mysql
```

