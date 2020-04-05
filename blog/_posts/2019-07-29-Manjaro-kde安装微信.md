---
date: 2019-07-29
tags: 
  - linux
  - manjaro
  - wechat
author: dev2019zheng
location: HangZhou
lang: zh-CN
---

# Manjaro-kde 安装微信

> **吐槽:**
> 最近刚装的manjaro，结果kubuntu上的`deepin-wine-ubuntu`一套用不了了，上网上百度，都是一些抄来抄去的答案，基本都是 `deepin-wechat`的错误包名， 以及`electronic-wechat`，虽然能用，但不是我要的啊，最后不死心试了一下kubuntu上的安装包名：**`deepin-wine-wechat`**， 结果神奇的能用了！

## 重点写在前面，安装命令

```bash
yaourt -S deepin-wine-wechat
```

随手附tim安装

```bash
yaourt -S deepin-wine-tim
```

## 截图

![菜单界面搜索](https://upload-images.jianshu.io/upload_images/4651401-c4c4ba5f5e0b164b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![安装完成](https://upload-images.jianshu.io/upload_images/4651401-3eaa39c24c84973c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![截图粘贴、中文输入都支持](https://upload-images.jianshu.io/upload_images/4651401-332df18b1faeefaf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

安装日志：

```bash
==> 从 AUR 下载 deepin-wine-wechat 的 PKGBUILD 文件
x .SRCINFO
x .gitignore
x .travis.yml
x PKGBUILD
x README.md
x deepin-wine-wechat.install
x gen.sh
x reg.patch
x run.sh
dracula commented on <a href="#comment-690947" class="date">2019-04-22 11:06</a>                         

cmdhirni commented on <a href="#comment-693328" class="date">2019-05-12 12:57</a>                        

scybhe commented on <a href="#comment-697339" class="date">2019-06-17 08:06</a>                  

464270342 commented on <a href="#comment-697743" class="date">2019-06-20 09:51</a>                       

zw963 commented on <a href="#comment-698390" class="date">2019-06-26 02:46</a>                   

deepin-wine-wechat 2.6.8.65-1  (2019-07-26 09:34)
（Unsupported 中的包：潜在危险）
==> 编辑 PKGBUILD ？ [Y/n] ("A" 忽略)
==> ----------------------------
==> y


==> deepin-wine-wechat 依赖关系：
 - p7zip （已安装）
 - wqy-microhei （已安装）
 - lib32-alsa-lib （已安装）
 - lib32-alsa-plugins （已安装）
 - lib32-libpulse （已安装）
 - lib32-libldap （已安装）
 - wine （软件包已找到）
 - wine-mono （软件包已找到）
 - wine_gecko （软件包已找到）
 - xorg-xwininfo （软件包已找到）
 - lib32-openal （软件包已找到）
 - lib32-mpg123 （软件包已找到）


==> 编辑 deepin-wine-wechat.install ？ [Y/n] ("A" 忽略)
==> ----------------------------------------------
==> y

==> 继续构建 deepin-wine-wechat ？[Y/n]
==> ------------------------------
==> y

==> 构建和安装软件包
==> 为 deepin-wine-wechat 安装或者是构建缺失的依赖关系：
正在解析依赖关系...
正在查找软件包冲突...

软件包 (12) faudio-19.07-1  lib32-faudio-19.07-1  lib32-libnl-3.4.0-1  lib32-libpcap-1.9.0-1  lib32-libusb-1.0.22-1
            lib32-sdl2-2.0.9-1  lib32-mpg123-1.25.10-1  lib32-openal-1.19.1-1  wine-4.12.1-1  wine-mono-4.9.0-1
            wine_gecko-2.47-2  xorg-xwininfo-1.1.5-1

下载大小:   234.82 MiB
全部安装大小：  679.62 MiB

:: 进行安装吗？ [Y/n] y
:: 正在获取软件包......
 xorg-xwininfo-1.1.5-1-x86_64                 22.7 KiB  1333K/s 00:00 [#######################################] 100%
 faudio-19.07-1-x86_64                       114.2 KiB  1704K/s 00:00 [#######################################] 100%
 wine-mono-4.9.0-1-any                        89.1 MiB  1541K/s 00:59 [#######################################] 100%
 lib32-libnl-3.4.0-1-x86_64                  269.3 KiB   408K/s 00:01 [#######################################] 100%
 lib32-libusb-1.0.22-1-x86_64                 43.2 KiB  1200K/s 00:00 [#######################################] 100%
 lib32-libpcap-1.9.0-1-x86_64                105.3 KiB   671K/s 00:00 [#######################################] 100%
 lib32-sdl2-2.0.9-1-x86_64                   409.8 KiB   878K/s 00:00 [#######################################] 100%
 lib32-faudio-19.07-1-x86_64                  99.9 KiB  1314K/s 00:00 [#######################################] 100%
 wine-4.12.1-1-x86_64                         49.1 MiB  1385K/s 00:36 [#######################################] 100%
 lib32-mpg123-1.25.10-1-x86_64               144.5 KiB  2.35M/s 00:00 [#######################################] 100%
 lib32-openal-1.19.1-1-x86_64                507.1 KiB   356K/s 00:01 [#######################################] 100%
 wine_gecko-2.47-2-x86_64                     95.0 MiB  1559K/s 01:02 [#######################################] 100%
(12/12) 正在检查密钥环里的密钥                                        [#######################################] 100%
(12/12) 正在检查软件包完整性                                          [#######################################] 100%
(12/12) 正在加载软件包文件                                            [#######################################] 100%
(12/12) 正在检查文件冲突                                              [#######################################] 100%
(12/12) 正在检查可用存储空间                                          [#######################################] 100%
:: 正在处理软件包的变化...
( 1/12) 正在安装 xorg-xwininfo                                        [#######################################] 100%
( 2/12) 正在安装 lib32-libnl                                          [#######################################] 100%
( 3/12) 正在安装 lib32-libusb                                         [#######################################] 100%
( 4/12) 正在安装 lib32-libpcap                                        [#######################################] 100%
( 5/12) 正在安装 faudio                                               [#######################################] 100%
( 6/12) 正在安装 lib32-sdl2                                           [#######################################] 100%
lib32-sdl2 的可选依赖
    lib32-alsa-lib: ALSA audio driver [已安装]
    lib32-libpulse: PulseAudio audio driver [已安装]
    lib32-jack: JACK audio driver
( 7/12) 正在安装 lib32-faudio                                         [#######################################] 100%
( 8/12) 正在安装 wine                                                 [#######################################] 100%
Run 'systemctl restart systemd-binfmt' in order to make the wine binfmt available on your system.
wine 的可选依赖
    giflib [已安装]
    lib32-giflib
    libpng [已安装]
    lib32-libpng [已安装]
    libldap [已安装]
    lib32-libldap [已安装]
    gnutls [已安装]
    lib32-gnutls
    mpg123 [已安装]
    lib32-mpg123 [等待中]
    openal [已安装]
    lib32-openal [等待中]
    v4l-utils [已安装]
    lib32-v4l-utils
    libpulse [已安装]
    lib32-libpulse [已安装]
    alsa-plugins [已安装]
    lib32-alsa-plugins [已安装]
    alsa-lib [已安装]
    lib32-alsa-lib [已安装]
    libjpeg-turbo [已安装]
    lib32-libjpeg-turbo [已安装]
    libxcomposite [已安装]
    lib32-libxcomposite
    libxinerama [已安装]
    lib32-libxinerama
    ncurses [已安装]
    lib32-ncurses [已安装]
    opencl-icd-loader
    lib32-opencl-icd-loader
    libxslt [已安装]
    lib32-libxslt
    gst-plugins-base-libs [已安装]
    lib32-gst-plugins-base-libs
    vkd3d
    lib32-vkd3d
    sdl2 [已安装]
    lib32-sdl2 [已安装]
    libgphoto2 [已安装]
    sane [已安装]
    gsm [已安装]
    cups [已安装]
    samba [已安装]
    dosbox
( 9/12) 正在安装 wine-mono                                            [#######################################] 100%
(10/12) 正在安装 lib32-mpg123                                         [#######################################] 100%
lib32-mpg123 的可选依赖
    lib32-sdl: for additional audio support
(11/12) 正在安装 lib32-openal                                         [#######################################] 100%
lib32-openal 的可选依赖
    lib32-fluidsynth: MIDI rendering
(12/12) 正在安装 wine_gecko                                           [#######################################] 100%
:: 正在运行事务后钩子函数...
(1/3) Registering binary formats...
(2/3) Arming ConditionNeedsUpdate...
(3/3) Updating the desktop file MIME type cache...
==> 正在创建软件包：deepin-wine-wechat 2.6.8.65-1 (2019年07月29日 星期一 10时38分32秒)
==> 正在检查运行时依赖关系...
==> 正在检查编译时依赖关系
==> 获取源代码...
  -> 正在下载 deepin.com.wechat_2.6.2.31deepin0_i386.deb...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 34.4M  100 34.4M    0     0  1106k      0  0:00:31  0:00:31 --:--:--  853k
  -> 正在下载 WeChatSetup.exe...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 42.6M  100 42.6M    0     0  1471k      0  0:00:29  0:00:29 --:--:-- 1566k
  -> 找到 run.sh
  -> 找到 reg.patch
==> 正在验证 source 文件，使用md5sums...
    deepin.com.wechat_2.6.2.31deepin0_i386.deb ... 通过
    WeChatSetup.exe ... 通过
    run.sh ... 通过
    reg.patch ... 通过
==> 正在释放源码...
  -> 正在解压缩 deepin.com.wechat_2.6.2.31deepin0_i386.deb，使用 bsdtar
==> 正在开始 build()...
==> Extracting DPKG package ...
./
./opt/
./opt/deepinwine/
./opt/deepinwine/apps/
./opt/deepinwine/apps/Deepin-WeChat/
./opt/deepinwine/apps/Deepin-WeChat/deepin.com.wechat.desktop
./opt/deepinwine/apps/Deepin-WeChat/files.7z
./opt/deepinwine/apps/Deepin-WeChat/run.sh
./usr/
./usr/share/
./usr/share/applications/
./usr/share/applications/deepin.com.wechat.desktop
./usr/share/icons/
./usr/share/icons/hicolor/
./usr/share/icons/hicolor/16x16/
./usr/share/icons/hicolor/16x16/apps/
./usr/share/icons/hicolor/16x16/apps/deepin.com.wechat.svg
./usr/share/icons/hicolor/24x24/
./usr/share/icons/hicolor/24x24/apps/
./usr/share/icons/hicolor/24x24/apps/deepin.com.wechat.svg
./usr/share/icons/hicolor/32x32/
./usr/share/icons/hicolor/32x32/apps/
./usr/share/icons/hicolor/32x32/apps/deepin.com.wechat.svg
./usr/share/icons/hicolor/48x48/
./usr/share/icons/hicolor/48x48/apps/
./usr/share/icons/hicolor/48x48/apps/deepin.com.wechat.svg
./usr/share/icons/hicolor/64x64/
./usr/share/icons/hicolor/64x64/apps/
./usr/share/icons/hicolor/64x64/apps/deepin.com.wechat.svg
==> Extracting Deepin Wine WeChat archive ...

7-Zip [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=zh_CN.UTF-8,Utf16=on,HugeFiles=on,64 bits,4 CPUs Intel(R) Core(TM) i7-7500U CPU @ 2.70GHz (806E9),ASM,AES-NI)

Scanning the drive for archives:
1 file, 41896858 bytes (40 MiB)

Extracting archive: /tmp/yaourt-tmp-zhengyh/aur-deepin-wine-wechat/src/dpkgdir/opt/deepinwine/apps/Deepin-WeChat/files.7z
--
Path = /tmp/yaourt-tmp-zhengyh/aur-deepin-wine-wechat/src/dpkgdir/opt/deepinwine/apps/Deepin-WeChat/files.7z
Type = 7z
Physical Size = 41896858
Headers Size = 9116
Method = LZMA2:26 BCJ2
Solid = +
Blocks = 1

Everything is Ok

Folders: 112
Files: 952
Size:       129813370
Compressed: 41896858
==> Removing original outdated WeChat directory ...
==> Patching reg files ...
patching file system.reg
patching file update.policy
patching file user.reg
==> Creating font file link ...
==> Repackaging app archive ...

7-Zip [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=zh_CN.UTF-8,Utf16=on,HugeFiles=on,64 bits,4 CPUs Intel(R) Core(TM) i7-7500U CPU @ 2.70GHz (806E9),ASM,AES-NI)

Scanning the drive:
111 folders, 919 files, 27643420 bytes (27 MiB)

Creating archive: /tmp/yaourt-tmp-zhengyh/aur-deepin-wine-wechat/src/files.7z

Items to compress: 1030

Files read from disk: 918
Archive size: 3827860 bytes (3739 KiB)
Everything is Ok
==> 正在进入 fakeroot 环境...
==> 正在开始 package()...
==> Preparing icons ...
==> Copying WeChat to /opt/deepinwine/apps/Deepin-WeChat ...
==> 正在清理安装...
  -> 正在删除 libtool 文件...
  -> 正在清除不打算要的文件...
  -> 正在移除静态库文件...
  -> 正在从二进制文件和库中清除不需要的系统符号...
  -> 正在压缩 man 及 info 文档...
==> 正在检查打包问题...
==> 正在创建软件包"deepin-wine-wechat"...
  -> 正在生成 .PKGINFO 文件...
  -> 正在生成 .BUILDINFO 文件...
  -> 正在添加 install 文件...
  -> 正在生成 .MTREE 文件...
  -> 正在压缩软件包...
==> 正在离开 fakeroot 环境。
==> 完成创建：deepin-wine-wechat 2.6.8.65-1 (2019年07月29日 星期一 10时40分03秒)
==> 清理中...

==> 继续安装 deepin-wine-wechat ？ [Y/n]
==> [v]查看包的内容 [c]用 namcap 检查
==> ------------------------
==> v

deepin-wine-wechat /opt/
deepin-wine-wechat /opt/deepinwine/
deepin-wine-wechat /opt/deepinwine/apps/
deepin-wine-wechat /opt/deepinwine/apps/Deepin-WeChat/
deepin-wine-wechat /opt/deepinwine/apps/Deepin-WeChat/WeChatSetup.exe
deepin-wine-wechat /opt/deepinwine/apps/Deepin-WeChat/files.7z
deepin-wine-wechat /opt/deepinwine/apps/Deepin-WeChat/run.sh
deepin-wine-wechat /usr/
deepin-wine-wechat /usr/share/
deepin-wine-wechat /usr/share/applications/
deepin-wine-wechat /usr/share/applications/deepin.com.wechat.desktop
deepin-wine-wechat /usr/share/icons/
deepin-wine-wechat /usr/share/icons/hicolor/
deepin-wine-wechat /usr/share/icons/hicolor/16x16/
deepin-wine-wechat /usr/share/icons/hicolor/16x16/apps/
deepin-wine-wechat /usr/share/icons/hicolor/16x16/apps/deepin.com.wechat.svg
deepin-wine-wechat /usr/share/icons/hicolor/24x24/
deepin-wine-wechat /usr/share/icons/hicolor/24x24/apps/
deepin-wine-wechat /usr/share/icons/hicolor/24x24/apps/deepin.com.wechat.svg
deepin-wine-wechat /usr/share/icons/hicolor/32x32/
deepin-wine-wechat /usr/share/icons/hicolor/32x32/apps/
deepin-wine-wechat /usr/share/icons/hicolor/32x32/apps/deepin.com.wechat.svg
deepin-wine-wechat /usr/share/icons/hicolor/48x48/
deepin-wine-wechat /usr/share/icons/hicolor/48x48/apps/
deepin-wine-wechat /usr/share/icons/hicolor/48x48/apps/deepin.com.wechat.svg
deepin-wine-wechat /usr/share/icons/hicolor/64x64/
deepin-wine-wechat /usr/share/icons/hicolor/64x64/apps/
deepin-wine-wechat /usr/share/icons/hicolor/64x64/apps/deepin.com.wechat.svg

==> 继续安装 deepin-wine-wechat ？ [Y/n]
==> [v]查看包的内容 [c]用 namcap 检查
==> ------------------------
==> v

deepin-wine-wechat /opt/
deepin-wine-wechat /opt/deepinwine/
deepin-wine-wechat /opt/deepinwine/apps/
deepin-wine-wechat /opt/deepinwine/apps/Deepin-WeChat/
deepin-wine-wechat /opt/deepinwine/apps/Deepin-WeChat/WeChatSetup.exe
deepin-wine-wechat /opt/deepinwine/apps/Deepin-WeChat/files.7z
deepin-wine-wechat /opt/deepinwine/apps/Deepin-WeChat/run.sh
deepin-wine-wechat /usr/
deepin-wine-wechat /usr/share/
deepin-wine-wechat /usr/share/applications/
deepin-wine-wechat /usr/share/applications/deepin.com.wechat.desktop
deepin-wine-wechat /usr/share/icons/
deepin-wine-wechat /usr/share/icons/hicolor/
deepin-wine-wechat /usr/share/icons/hicolor/16x16/
deepin-wine-wechat /usr/share/icons/hicolor/16x16/apps/
deepin-wine-wechat /usr/share/icons/hicolor/16x16/apps/deepin.com.wechat.svg
deepin-wine-wechat /usr/share/icons/hicolor/24x24/
deepin-wine-wechat /usr/share/icons/hicolor/24x24/apps/
deepin-wine-wechat /usr/share/icons/hicolor/24x24/apps/deepin.com.wechat.svg
deepin-wine-wechat /usr/share/icons/hicolor/32x32/
deepin-wine-wechat /usr/share/icons/hicolor/32x32/apps/
deepin-wine-wechat /usr/share/icons/hicolor/32x32/apps/deepin.com.wechat.svg
deepin-wine-wechat /usr/share/icons/hicolor/48x48/
deepin-wine-wechat /usr/share/icons/hicolor/48x48/apps/
deepin-wine-wechat /usr/share/icons/hicolor/48x48/apps/deepin.com.wechat.svg
deepin-wine-wechat /usr/share/icons/hicolor/64x64/
deepin-wine-wechat /usr/share/icons/hicolor/64x64/apps/
deepin-wine-wechat /usr/share/icons/hicolor/64x64/apps/deepin.com.wechat.svg

==> 继续安装 deepin-wine-wechat ？ [Y/n]
==> [v]查看包的内容 [c]用 namcap 检查
==> ------------------------
==> y

正在加载软件包...
正在解析依赖关系...
正在查找软件包冲突...

软件包 (1) deepin-wine-wechat-2.6.8.65-1

全部安装大小：  46.36 MiB

:: 进行安装吗？ [Y/n] y
(1/1) 正在检查密钥环里的密钥                                          [#######################################] 100%
(1/1) 正在检查软件包完整性                                            [#######################################] 100%
(1/1) 正在加载软件包文件                                              [#######################################] 100%
(1/1) 正在检查文件冲突                                                [#######################################] 100%
(1/1) 正在检查可用存储空间                                            [#######################################] 100%
:: 正在处理软件包的变化...
(1/1) 正在安装 deepin-wine-wechat                                     [#######################################] 100%
:: 正在运行事务后钩子函数...
(1/3) Updating icon theme caches...
(2/3) Arming ConditionNeedsUpdate...
(3/3) Updating the desktop file MIME type cache...
数据库正常！
```
