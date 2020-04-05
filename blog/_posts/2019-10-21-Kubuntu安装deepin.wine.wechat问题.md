---
date: 2019-10-21
tags: 
  - linux
  - kubuntu
  - wechat
author: dev2019zheng
location: HangZhou
lang: zh-CN
---

# Kubuntu安装deepin.wine.wechat问题

>
> 参考地址: [https://forum.ubuntu.org.cn/viewtopic.php?f=73&p=3217021&sid=6194a64cefc1f4c5ac43dcd8729ca3c8](https://forum.ubuntu.org.cn/viewtopic.php?f=73&p=3217021&sid=6194a64cefc1f4c5ac43dcd8729ca3c8)

kubuntu 安装`deepin.com.wechat_2.6.8.65deepin0_i386.deb`  ([https://github.com/wszqkzqk/deepin-wine-ubuntu](https://github.com/wszqkzqk/deepin-wine-ubuntu))时遇到报错:

```bash
$ sudo dpkg -i deepin.com.wechat_2.6.8.65deepin0_i386.deb 
(正在读取数据库 ... 系统当前共安装有 281328 个文件和目录。)
正准备解包 deepin.com.wechat_2.6.8.65deepin0_i386.deb  ...
正在将 deepin.com.wechat:i386 (2.6.8.65deepin0) 解包到 (2.6.2.31deepin0) 上 ...
dpkg: 依赖关系问题使得 deepin.com.wechat:i386 的配置工作不能继续：
 deepin.com.wechat:i386 依赖于 deepin-wine (>= 2.18-19)；然而：
系统中 deepin-wine 的版本为 2.18-12。
 deepin.com.wechat:i386 依赖于 deepin-wine-helper (>= 1.2deepin8)；然而：
系统中 deepin-wine-helper:i386 的版本为 1.2deepin0。

dpkg: 处理软件包 deepin.com.wechat:i386 (--install)时出错：
 依赖关系问题 - 仍未被配置
正在处理用于 desktop-file-utils (0.23-1ubuntu3.18.04.2) 的触发器 ...
正在处理用于 mime-support (3.60ubuntu1) 的触发器 ...
正在处理用于 hicolor-icon-theme (0.17-2) 的触发器 ...
在处理时有错误发生：
 deepin.com.wechat:i386
```

百度教程一天未果。
搜索更新`deepin-wine`环境时, 翻到[这里]([https://forum.ubuntu.org.cn/viewtopic.php?f=73&p=3217021#p3217021](https://forum.ubuntu.org.cn/viewtopic.php?f=73&p=3217021#p3217021)
),觉得有戏, 按步骤来，成功。

- 1.新建脚本`update-wine-2.18-19.sh`
- 2.粘贴以下内容：

```bash
#!/bin/bash
mkdir /tmp/deepintemp
cd /tmp/deepintemp
wget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-wine_2.18-19_all.deb
wget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-wine32_2.18-19_i386.deb
wget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-wine32-preloader_2.18-19_i386.deb
wget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine-helper/deepin-wine-helper_1.2deepin8_i386.deb
wget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine-plugin/deepin-wine-plugin_1.0deepin2_amd64.deb
wget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine-plugin-virtual/deepin-wine-plugin-virtual_1.0deepin3_all.deb
wget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine-uninstaller/deepin-wine-uninstaller_0.1deepin2_i386.deb
wget http://mirrors.aliyun.com/deepin/pool/non-free/u/udis86/udis86_1.72-2_i386.deb
wget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-fonts-wine_2.18-19_all.deb
wget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-libwine_2.18-19_i386.deb
wget https://mirrors.aliyun.com/deepin/pool/main/libj/libjpeg-turbo/libjpeg62-turbo_1.5.1-2_amd64.deb
wget https://mirrors.aliyun.com/deepin/pool/main/libj/libjpeg-turbo/libjpeg62-turbo_1.5.1-2_i386.deb

echo '准备添加32位支持'
sudo dpkg --add-architecture i386
echo '添加成功，准备刷新apt缓存信息...'
sudo apt update
echo '即将开始安装...'
sudo dpkg -i *.deb
echo '安装完成，正在自动安装依赖...'
sudo apt install -fy

rm -vfr /tmp/deepintemp
```

- 3. `sudo chmod a+x ./update-wine-2.18-19.sh`
- 4. `sudo ./update-wine-2.18-19.sh`, 运行脚本，等待执行完

![image.png](https://upload-images.jianshu.io/upload_images/4651401-582d2d0593b0a8d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 5. 下载[deepin.com.wechat_2.6.8.65deepin0_i386.deb](https://mirrors.aliyun.com/deepin/pool/non-free/d/deepin.com.wechat/deepin.com.wechat_2.6.8.65deepin0_i386.deb)
- 6. `sudo dpkg -i ./deepin.com.wechat_2.6.8.65deepin0_i386.deb`, 等待安装完毕， main菜单就可以搜索到了，点击运行（`注意：不安装中文字体会导致微信中文乱码`）
![image.png](https://upload-images.jianshu.io/upload_images/4651401-5173d15557e82cb4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 7. 测试：
中文输入，剪切板图片粘贴，表情包都可以用，感谢大佬们
![image.png](https://upload-images.jianshu.io/upload_images/4651401-58ed5be228c7d7dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
