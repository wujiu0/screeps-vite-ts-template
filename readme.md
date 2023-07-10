## Description

这是一个基于 Vite+TypeScript 搭建的工程化管理 Screeps 代码的模板

## Feature

- 更安全的管理代码
- 支持多目录模块化开发
- 引入庞大的 npm 生态

只需要进行一些简单的配置
借助 `rollup-plugin-copy`来完成在`build`时自动将成果物复制到本地游戏代码目录

## QuickStart

### config

[代码目录配置](screeps.config.js)
修改其中的 targetDir: 游戏所在本地路径的代码目录

eg: "C:/Users/Username/AppData/Local/Screeps/scripts/screeps.com/default"

### use

在终端中打开这个文件夹，运行包管理器来安装所需的包和 TypeScript 声明文件:

```shell
npm install
```

编写代码，完成后运行 build 构建，在`targetDir`检查你的成果

> 支持热更新

```shell
npm run build
```
### Notice
本地代码同步到服务器需要游戏客户端保持运行

## Author

wujiu0

[my blogs](https://wujiu0.github.io)

[my screeps scripts](https://github.com/wujiu0/screeps-vite-ts)
