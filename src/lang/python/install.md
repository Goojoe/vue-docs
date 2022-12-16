---
title: 安装
---

# Python镜像

[淘宝](https://registry.npmmirror.com/binary.html?path=python)

- python 3.9.13

```
set dl="https://suo.yt/SXOCilf"
set name="python3.9.13.exe"
curl -L -o python3.9.13.exe %dl% && python3.9.13.exe /quiet InstallAllUsers=1 PrependPath=1 && echo "正在安装" && reg add HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f && exit

```

- python 3.10.8

```
set dl="https://registry.npmmirror.com/-/binary/python/3.10.8/python-3.10.8-amd64.exe"
set name="python3.10.8.exe"
curl -L -o %name% %dl% && %name% /quiet InstallAllUsers=1 PrependPath=1 && echo "正在安装%name%" && reg add HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f && exit

```

